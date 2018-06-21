import React from 'react';

// Libraries
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import chaptersAddon from 'react-storybook-addon-chapters';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';
import { doc }  from 'storybook-readme';
import { fetchHTML, parseHTML, appendChildren, injectToDom, replaceRef, waitForScript } from './utils';

// Styling
import '../../stories.scss';

// README
import ChromeAPIDoc from '../../docs/api/chrome/DOC.md';

const GLOBAL_NAV_OPTIONS = ['dashboard', 'advisor', 'security', 'compliance', 'cmaas', 'inventory', 'reports', 'settings'];

const header = fetchHTML(`/insights/static/chrome/snippets/header.html`)
injectToDom(`/insights/static/chrome/snippets/head.html`, document.head)

class Chrome extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            loading: true
        };
        this.chromeInitialized = false;
    }

    render() {
        if (this.state.failed) {
            return (<p>Failed to fetch insights-chrome resources. If this is a local environment make sure&nbsp;
                <a target="_blank" href="https://github.com/redhatinsights/insights-proxy">insights-proxy</a> is running.</p>);
        }

        if (this.state.loading) {
            return <p>Loading…</p>;
        }

        return <div ref={e => (this.instance = e)}/>;
    }

    componentDidMount() {
        header
        .then(parseHTML)
        .then(html => this.setState({loading: false, html}))
        .catch(() => this.setState({loading: false, failed: true}));
    }

    componentDidUpdate (props) {
        if (this.state.failed || !this.state.html) {
            return;
        }

        if (!this.chromeInitialized) {
            const script = this.state.html.find(e => e.tagName === 'SCRIPT');
            appendChildren(this.instance, this.state.html);
            return waitForScript(script)
            .then(() => {
                this.chromeInitialized = true;
                insights.chrome.init();
                insights.chrome.identifyApp(this.props.active);
                this.appNavHandle = insights.chrome.on('APP_NAVIGATION', event => this.props.onAppNav(event));
            })
            .then(this.props.onChromeReady);
        }

        insights.chrome.identifyApp(this.props.active);
    }

    static defaultProps = {
        onChromeReady: f => f,
        onAppNav: f => f
    }
}

storiesOf('Chrome')
.addDecorator(withKnobs)
.add('Documentation', doc(ChromeAPIDoc))
.add('Global Navigation', () => {
    const value = select('Navigation', GLOBAL_NAV_OPTIONS, 'dashboard');
    return <Chrome active={value} />;
})
.add('App Navigation', () => {
    const appNav = [{
        id: 'stability',
        title: 'Stability',
        active: true
    }, {
        id: 'performance',
        title: 'Performance'
    }];

    return <Chrome active='advisor'
        onChromeReady={() => insights.chrome.navigation(appNav)}
        onAppNav={event => action('APP_NAVIGATION')}
        />;
});
