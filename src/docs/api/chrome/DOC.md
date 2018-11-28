# Insights Chrome

Insights Chrome provides a header, footer and primary navigation to all Insights Platform applications.

## Javascript API

Insights Chrome comes with a Javacript API that allows applications to control navigation, global filters, etc.

```js
    // initialize chrome
    insights.chrome.init();

    // identify yourself (the application). This tells Chrome which global navigation element should be active
    insights.chrome.identifyApp('advisor');

    // Build the navigation
    insights.chrome.navigation(buildNavigation());

    // Lets chrome know what page the user is viewing
    this.appNav = insights.chrome.on('APP_NAVIGATION', event => this.props.history.push(`/${event.navId}`));

    // Listen for navigation changes and build appropriately
    this.buildNav = this.props.history.listen(() => insights.chrome.navigation(buildNavigation()));
```

Insights Chrome relays a static navigation

If you would like to add/remove sub navigation items that are present in the global nav, open a PR in [Insights Chrome](https://github.com/RedHatInsights/insights-chrome)
