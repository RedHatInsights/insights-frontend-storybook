# insights-frontend-storybook

[Live Version](https://access.redhat.com/insights/platform/storybook/)

This is documentation for:

- Insights environments
- [Red Hat Insights Frontend Components](https://github.com/RedHatInsights/insights-frontend-components)
- [Insights Chroming](https://github.com/RedHatInsights/insights-chrome)
- Redux examples
- API examples

## Tech Notes
- In prod, pre prod, and on local dev environments (insights-proxy) all of the API is accessible via the same hostname that the frontend is served. You dont need to go to api.access* in prod to hit /r/insights/. You can safely call using the path "/r/insights" on the same hostname. So no need to use CORS in your frontend/api.
- Insights Chrome will handle web frontend authentication challenge, and auth session management for you. If you app is chromed and you are logged in you can expect that a JWT is going back to 3scale automatically and 3scale is handling the validation of that JWT for you. (This is not yet implemented in Chrome, but it is coming soon)

## Dev Installation instructions

1. `git clone git@github.com:RedHatInsights/insights-frontend-storybook.git`
2. `npm install`
3. (optional) set up [insights-proxy](https://github.com/RedHatInsights/insights-proxy)
    - only required for insights-chrome's stories to run
4. Run
    - `npm run start` to develop storybook pages
    - `npm run build` to build the storybook, used for testing
5. Naviage to `localhost:9001`
