# Insights Chrome

Insights Chrome provides a header, footer and primary navigation to all Insights Platform applications.

## Javascript API

Insights Chrome comes with a Javacript API that allows applications to control navigation, global filters, etc.

```js

// If you want notifications
import { NotificationsPortal, notifications } from '@red-hat-insights/insights-frontend-components/components/Notifications';
import '@red-hat-insights/insights-frontend-components/components/Notifications.css';

class App extends Component {

    componentDidMount(){

        // If you want notifications
        register({ notifications });

        // initialize chrome
        insights.chrome.init();

        // identify yourself (the application). This tells Chrome which global navigation element should be active
        insights.chrome.identifyApp('advisor');
    }

    // Build the navigation
    componentWillUnmount () {
        this.appNav();
        this.buildNav();
    }

    // Render your app
    render () {
        return (
            <React.Fragment>
                <NotificationsPortal /> //if you want notifications
                <Routes childProps={ this.props } />
            </React.Fragment>
        );
    }
}

```

Insights Chrome relays a static navigation

If you would like to add/remove sub navigation items that are present in the global nav, open a PR in [Insights Chrome](https://github.com/RedHatInsights/insights-chrome)
