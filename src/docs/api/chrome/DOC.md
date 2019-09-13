# Chrome

Chrome (insights-chrome) provides a header, footer and primary navigation to all Insights Platform applications.

## Javascript API

Chrome comes with a Javacript API that allows applications to control navigation, global filters, etc.

```js

class App extends Component {

    componentDidMount () {
        insights.chrome.init();
        // TODO change this to your appname
        insights.chrome.identifyApp('insights');
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
```

## Navigation

Chrome relays a static navigation from the "Source of Truth"

If you would like to add/remove navigation items, open a PR in [Cloud Services Config](https://github.com/RedHatInsights/cloud-services-config)

### Navigation sub app/page API

Some applications have sub apps or pages (Insights), there is an API that allows certain navigation items to be highlighted:

```js
class App extends Component {
    componentDidMount () {
        insights.chrome.init();
        insights.chrome.identifyApp('insights');
        this.appNav = insights.chrome.on('APP_NAVIGATION', event => {
            if (!matchPath(location.href, { path: `${document.baseURI}insights/${event.navId}` })) {
                this.props.history.push(`/${event.navId}`);
            }
        });
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            if (this.props.location.pathname === '/overview') {
                insights.chrome.appNavClick({ id: 'overview' });
            }

            if (this.props.location.pathname === '/rules') {
                insights.chrome.appNavClick({ id: 'rules' });
            }
        }
    }

    componentWillUnmount () {
        this.appNav();
    }

    render () {
        return (
            <Routes childProps={ this.props }/>
        );
    }
}

App.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object
};

export default routerParams(connect(
    null,
    null
)(App));
```
