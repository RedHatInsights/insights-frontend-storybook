# Insights Platform Deployments

Insights front-end apps can be deployed very simply by pushing the build files of your React app to the environment branch of your choosing in your app’s build repo. For example, to deploy the stable version of your app to production, build your app so that the basepath is `/insights/platform/[app-name]/` and then push your files to the prod-stable branch on your build repo.

If you wish to deploy the beta version of your app to prod, build your app so that the basepath routes to `/insightsbeta/platform/[app-name]/` and push those files to prod-beta.
Stable versus Beta
Insights Platform provides a beta and stable version in CI, QA, and Prod environments so that users can try out the latest features as soon as possible. When releasing to stable, the basepath of the app should point to `/insights/platform/[app-name]/` whereas when releasing to beta, the basepath should point to `/insights/platform/[app-name]/`. The insights-frontend-starter-app is setup to release this way for all of the available environments.

## Starter App Updates

If you cloned/used the starter-app before the new build branches were created, [this commit](https://github.com/RedHatInsights/insights-frontend-starter-app/commit/9eb79919a334f7974cbcfdf0d8c5cac79f9791b6)
 updates the starter app to support the 6 different deployment branches in the build repo. You will also want to use [this commit](https://github.com/RedHatInsights/insights-frontend-starter-app/commit/ec39d89702e5d26eae146b3cf07577135ae921bb) for fixing beta deployments and [this commit](https://github.com/RedHatInsights/insights-frontend-starter-app/commit/daafec7f9d818ccf5722a6fb7b32ac3b4d3cf320) for adding dev commit messages to your build messages for easier debugging.

## Build Branches and Deployment Environments

The app build repo has 6 different branches that each deploy to a different environment. For prod-stable and prod-beta, each time a push event occurs on a branch, a Jenkins job is triggered that will rsync all of the contents of that branch to its respective environment within seconds.

For the CI and QA environments each environment will pull from it’s respective branch every 60 seconds which means that if you push new files to a pre-prod branch, you can expect to see those files updated within a minute.

Below is a list of the branches on each app build repo and the environments that they point to.

* prod-stable: https://access.redhat.com/insights/platform/
* prod-beta: https://access.redhat.com/insightsbeta/platform/
* qa-stable: https://access.qa.itop.redhat.com/insights/platform/
* qa-beta: https://access.qa.itop.redhat.com/insightsbeta/platform/
* ci-stable: https://access.ci.itop.redhat.com/insights/platform/
* ci-beta: https://access.ci.itop.redhat.com/insightsbeta/platform/
