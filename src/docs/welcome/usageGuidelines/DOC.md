# Usage Guidelines

## API Calls

Users are authenticated on every page load. If you are making an API call on a page, you need to use [chrome's getUser function](https://github.com/RedHatInsights/insights-chrome/blob/master/src/js/entry.js#L96) before the call to verify the user is ready. If you don't do this, you could experience 401s on your calls.

Example:

```js
async componentDidMount() {
    await window.insights.chrome.auth.getUser();
}
```

## App Names

Applications need to use a consistent app name across the platform. These should be defined in the [source of truth](https://github.com/RedHatInsights/cloud-services-config/blob/ci-beta/main.yml). Once defined here, applications need to be sure to use that name across their application.

* `package.json`
  * `insights.appname` <- this should match your appName from cloud-services-config
* `.travis.yml`
  * `env.global`
    * `REPO`
    * `REPO_DIR`
* `local-frontend.js` & `local-frontend-and-api.js`
  * `SECTION` <- this should match your bundle
  * `APP_ID` <- this should match your appName from cloud-services-config
* `App.js`
  * `insights.chrome.identifyApp('yourAppName')` <- this should match your appName from cloud-services-config
