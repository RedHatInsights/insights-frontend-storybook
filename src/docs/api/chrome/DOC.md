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

Insights Chrome relays a static navigation from the "Source of Truth"

If you would like to add/remove navigation items, open a PR in [Cloud Services Config](https://github.com/RedHatInsights/cloud-services-config)
