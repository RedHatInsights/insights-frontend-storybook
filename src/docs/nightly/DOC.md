# Nightly Environment and Releases

cloud.redhat.com is rebuilt nightly using Travis-CI to allow new dependencies to be installed without affecting other environments.

The dependencies that are installed are:

* `@patternfly/patternfly@latest`
* `@patternfly/react-core@prerelease`
* `@patternfly/react-tokens@prerelease`
* `@patternfly/react-icons@latest`
* `@patternfly/react-charts@prerelease`

## Set up nightly builds

cloud.redhat.com's common builder is already set up to look for certain things across repos. In order to take advantage of the nightly builds you must:

1. Create an `npm or yarn` script called `nightly` and have it build out your UI.
2. Have a `nightly` branch in your repository.
3. Set up a cron job in Travis-CI to build that repository every day.
4. Wait until the build finishes and then access (vpn) https://nightly.cloud.paas.psi.redhat.com/bundle/app to see your application.

## Build Status

| Repo                    | Build Status                                                                                                                                                                          | Packages                                                                                                                                |
|-------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| Chrome                  | [![Build Status](https://travis-ci.org/RedHatInsights/insights-chrome.svg?branch=nightly)](https://travis-ci.org/RedHatInsights/insights-chrome/builds)                               |[patternfly-deps.json](https://github.com/RedHatInsights/insights-chrome-build/blob/nightly-stable/patternfly-deps.json)                 |
| Landing                 | [![Build Status](https://travis-ci.org/RedHatInsights/landing-page-frontend.svg?branch=nightly)](https://travis-ci.org/RedHatInsights/landing-page-frontend/builds)                   |[patternfly-deps.json](https://github.com/RedHatInsights/landing-page-frontend-build/blob/nightly-stable/patternfly-deps.json)           |
| Insights                | [![Build Status](https://travis-ci.org/RedHatInsights/insights-advisor-frontend.svg?branch=nightly)](https://travis-ci.org/RedHatInsights/insights-advisor-frontend/builds)           |[patternfly-deps.json](https://github.com/RedHatInsights/insights-advisor-frontend-build/blob/nightly-stable/patternfly-deps.json)       |
| Inventory               | [![Build Status](https://travis-ci.org/RedHatInsights/insights-inventory-frontend.svg?branch=nightly)](https://travis-ci.org/RedHatInsights/insights-inventory-frontend/builds)       |[patternfly-deps.json](https://github.com/RedHatInsights/insights-inventory-frontend-build/blob/nightly-stable/patternfly-deps.json)     |
| Remediations            | [![Build Status](https://travis-ci.org/RedHatInsights/insights-remediations-frontend.svg?branch=nightly)](https://travis-ci.org/RedHatInsights/insights-remediations-frontend/builds) |[patternfly-deps.json](https://github.com/RedHatInsights/insights-remediations-frontend-build/blob/nightly-stable/patternfly-deps.json)  |
| Dashboard               | [![Build Status](https://travis-ci.org/RedHatInsights/insights-dashboard.svg?branch=nightly)](https://travis-ci.org/RedHatInsights/insights-dashboard/builds)                         |[patternfly-deps.json](https://github.com/RedHatInsights/insights-dashboard-build/blob/nightly-stable/patternfly-deps.json)              |
| Vulnerability           | [![Build Status](https://travis-ci.org/RedHatInsights/vulnerability-ui.svg?branch=nightly)](https://travis-ci.org/RedHatInsights/vulnerability-ui/builds)                             |[patternfly-deps.json](https://github.com/RedHatInsights/vulnerability-ui-build/blob/nightly-stable/patternfly-deps.json)                |
| Compliance              | [![Build Status](https://travis-ci.org/RedHatInsights/compliance-frontend.svg?branch=nightly)](https://travis-ci.org/RedHatInsights/compliance-frontend/builds)                       |[patternfly-deps.json](https://github.com/RedHatInsights/compliance-frontend-build/blob/nightly-stable/patternfly-deps.json)             |
| System Comparison/Drift | [![Build Status](https://travis-ci.org/RedHatInsights/drift-frontend.svg?branch=nightly)](https://travis-ci.org/RedHatInsights/drift-frontend/builds)                                 |[patternfly-deps.json](https://github.com/RedHatInsights/drift-frontend-build/blob/nightly-stable/patternfly-deps.json)                  |
