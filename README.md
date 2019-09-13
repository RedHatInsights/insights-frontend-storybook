# insights-frontend-storybook

[Live Version](https://cloud.redhat.com/docs/storybook)

This is documentation for:

- Insights environments
- [Cloud Services Frontend Components](https://github.com/RedHatInsights/frontend-components)
- [Insights Chroming](https://github.com/RedHatInsights/insights-chrome)
- Redux examples
- API examples

## Tech Notes

- In prod, pre prod, and on local dev environments (insights-proxy) all of the API is accessible via the same hostname that the frontend is served. You dont need to go to api.access* in prod to hit /r/insights/. You can safely call using the path "/r/insights" on the same hostname. So no need to use CORS in your frontend/api.
- Chrome will handle web frontend authentication challenge, and auth session management for you. If you app is chromed and you are logged in you can expect that a JWT is going back to 3scale automatically and 3scale is handling the validation of that JWT for you. (This is not yet implemented in Chrome, but it is coming soon)

## Dev Installation instructions

1. `git clone git@github.com:RedHatInsights/insights-frontend-storybook.git`
2. `npm install`
3. (optional) set up [insights-proxy](https://github.com/RedHatInsights/insights-proxy)
    - only required for insights-chrome's stories to run
4. Run
    - 'npm run lint' to check linting
    - `npm run start` to develop storybook pages
    - `npm run build` to build the storybook, used for testing
5. Navigate to `localhost:6006`

## Markdown Rules

- This project uses [Markdownlint-cli](https://github.com/igorshubovych/markdownlint-cli) for linting the src/docs/ files
- Rules can be found at: https://github.com/DavidAnson/markdownlint#rules--aliases
- Overrides are in the `.markdownlint.json` file
