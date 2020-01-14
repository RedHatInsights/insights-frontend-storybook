# Cloud Services Platform Auto Deployments to Stable and Beta

The deployment process for the applications on the Cloud Services Platform uses an Akamai NetStorage instance to store all of the files that are used to render the pages for production and a similar setup for CI and QA. To get the files there we use a travis-ci script to push the build files to a build Github repo whenever master or a deployment branch is pushed. Jenkins watches the build repo and kicks off a job that will then sync the build files with our NetStorage or pre-prod environments.

## Setting up Continuous Integration with Travis-CI:

### Prerequisite:

Your project repo should be public
Travis CLI: `gem install travis` or `brew install travis`
Travis-CI should be enabled for your dev repo

### Steps

1. Copy the [travis.yml](https://github.com/RedHatInsights/insights-frontend-starter-app/blob/master/.travis.yml) file and [.travis directory](https://github.com/RedHatInsights/insights-frontend-starter-app/tree/master/.travis) and place in the root of your project. Remove the deploy_key.
2. Create a build repo on Github. Usually this will be named `[dev-repo-name]-build`
3. Generate a private key for pushing from dev repo to build repo
    * `ssh-keygen -t rsa -b 4096`
    * Save the key without a passphrase
    * Save the key as `deploy_key` in `your-repo/.travis`
4. [team FMS] Copy the public key to the build repo under Settings -> Deploy Keys and check the box for allowing write access.
5. Encrypt the deploy key with Travis CLI
    * Login to Travis CLI with the `--org` flag
    * Make sure you have Travis CI CLI tools and can login to [Travis CLI](https://github.com/travis-ci/travis.rb#installation)
    * Verify that you are inside of your development repo and then encrypt the key with Travis CLI
    * `travis encrypt-file deploy_key`
        * do not add the `openssl` command to the `.travis` file.
6. You should now have a `deploy_key.enc` file. Delete `deploy_key` and `deploy_key.pub`.
7. Commit your `deploy_key.enc` file, `.travis.yml`, and `.travis` directory
8. Verify that the Travis env variables have been added.
9. Confirm the build completed successfully on Travis-CI and verify that the files were pushed to your build repo.

## Custom Releases

Apps can use a [custom release](https://github.com/RedHatInsights/landing-page-frontend/blob/master/.travis/custom_release.sh). This allows your app to release to multiple environments with only one push. These are created independently and will vary from app to app.

## Configuring Your App in cloud-services-config

We've added a [global configuration](https://github.com/RedHatInsights/cloud-services-config/blob/master/main.yml) that acts as the main source of truth.
This file controls the routing for prod (Akamai), the file management and routing for non-prod (fakamai, assets-puller, assets-server), smoke tests, chrome navigation, and more.
To add your app and enable it on all environments, please create a PR with the changes described [here](https://github.com/RedHatInsights/cloud-services-config#adding-config-for-new-apps).
