# Insights Chrome

Insights Chrome provides a header, footer and primary navigation to all Insights Platform applications.

## Javascript API

Insights Chrome comes with a Javacript API that allows applications to control navigation, global filters, etc.

```js

class App extends Component {

    componentDidMount () {
        insights.chrome.init();
        // TODO change this to your appname
        insights.chrome.identifyApp('insights');
        insights.chrome.navigation(buildNavigation());

        this.appNav = insights.chrome.on('APP_NAVIGATION', event => this.props.history.push(`/${event.navId}`));
        this.buildNav = this.props.history.listen(() => insights.chrome.navigation(buildNavigation()));
    }

    componentWillUnmount () {
        this.appNav();
        this.buildNav();
    }

    render () {
        return (
            <Routes childProps={ this.props } />
        );
    }
}

App.propTypes = {
    history: PropTypes.object
};

/**
 * withRouter: https://reacttraining.com/react-router/web/api/withRouter
 * connect: https://github.com/reactjs/react-redux/blob/master/docs/api.md
 *          https://reactjs.org/docs/higher-order-components.html
 */
export default withRouter (connect()(App));

function buildNavigation () {
    const currentPath = window.location.pathname.split('/').slice(-1)[0];
    return [{
        title: 'Actions',
        id: 'actions'
    }, {
        title: 'Rules',
        id: 'rules'
    }].map(item => ({
        ...item,
        active: item.id === currentPath
    }));
}

```

Insights Chrome relays a static navigation

If you would like to add/remove sub navigation items that are present in the global nav, open a PR in [Insights Chrome](https://github.com/RedHatInsights/insights-chrome)
