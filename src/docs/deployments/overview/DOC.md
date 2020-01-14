# Cloud Services Deployments

Cloud Services front-end apps can be deployed very simply by pushing the build files of your React app to the environment branch of your choosing in your app’s build repo. For example, to deploy the stable version of your app to production, build your app so that the basepath is `/[bundle]/[app-name]/` and then push your files to the prod-stable branch on your build repo.

## Stable versus Beta

Cloud Services Platform provides a beta and stable version in CI, QA, and Prod environments so that users can try out the latest features as soon as possible. When releasing to stable, the basepath of the app should point to `/[bundle]/[app-name]/` whereas when releasing to beta, the basepath should point to `beta/[bundle]/[app-name]/`.

The insights-frontend-starter-app is setup to release this way for all of the available environments.

## Build Branches and Deployment Environments

The app build repo has 6 different branches that each deploy to a different environment. For prod-stable and prod-beta, each time a push event occurs on a branch, a Jenkins job is triggered that will rsync all of the contents of that branch to its respective environment within seconds.

For the CI and QA environments each environment will pull from it’s respective branch every 60 seconds which means that if you push new files to a pre-prod branch, you can expect to see those files updated within a minute.

Below is a list of the branches on each app build repo and the environments that they point to.

* prod-stable: https://cloud.redhat.com/
* prod-beta: https://cloud.redhat.com/beta/
* qa-stable: https://qa.cloud.redhat.com/
* qa-beta: https://qa.cloud.redhat.com/beta
* ci-stable: https://ci.cloud.redhat.com/
* ci-beta: https://ci.cloud.redhat.com/beta

## Nightly Environment

Applications are also built daily with a cron job to a separate environment. These environments should not be pushed manually.

* nightly-stable: https://nightly.cloud.redhat.com/
* nightly-beta: https://nightly.cloud.redhat.com/beta
