# Insights Chrome

Insights Chrome provides a header, footer and primary navigation to all Insights Platform applications.

## Javascript API

Insights Chrome comes with a Javacript API that allows applications to control navigation, global filters, etc.

```js
    // initialize chrome
    insights.chrome.init();

    // identify yourself (the application). This tells Chrome which global navigation element should be active
    insights.chrome.identifyApp('advisor');

    // define application navigation (navigation submenu)
    // at most one of the elements should be declared active
    // the operation is idempotent
    insights.chrome.navigation([{
        id: 'stability',
        title: 'Stability'
    }, {
        id: 'performance',
        title: 'Performance',
        active: true
    }]);

    // register a listener for application navigation events
    const unregister = insights.chrome.on('APP_NAVIGATION', event => {
        // change application route in response to navigation event from Chrome
        history.push(`/${event.navId}`);
    });

    // the listener can be unregistered if needed
    unregister();
```

The following events can be observed:
* `APP_NAVIGATION` - fired when the application navigation option is selected. `event.navId` can be used to access the id of the navigation option
