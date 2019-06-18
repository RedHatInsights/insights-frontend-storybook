# Insights Platform Auto Deployments to Stable and Beta

The deployment process for the applications on the Insights Platform uses an Akamai NetStorage instance to store all of the files that are used to render the pages for production and a similar setup for CI and QA. To get the files there we use a travis-ci script to push the build files to a build Github repo whenever master or a deployment branch is pushed. Jenkins watches the build repo and kicks off a job that will then sync the build files with our NetStorage or pre-prod environments.

## Setting up Continuous Integration with Travis-CI:

### Prerequisite:

Your project repo should be public
Travis CLI: `gem install travis` or `brew install travis`
Travis-CI should be enabled for your dev repo

### Steps

1. Copy the travis.yml file, the .travis directory, and the config directory from the Insights Frontend Starter App and place in the root of your project
    * Make sure the files inside the .travis folder are executables (chmod +x foo.sh)

2. _Insights Platform Team_ - Create a build repo on Github. Usually this will be named `[dev-repo-name]-build`
    * Create release branches
        * prod-stable
            * Add Jenkinsfile
        * prod-beta
            * Add Jenkinsfile
        * ci-stable
        * ci-beta
        * qa-stable
        * qa-beta

3. Change the REPO and REPO_DIR global variables in `.travis.yml` to equal the new build repo created

4. **IMPORTANT**: verify that the dist/build folder name in .travis/release.sh match the build/dist folder in the repo. If not, travis will push the entire repo, including the encrypted private key (and possibly unencrypted private key) to the build repo.

5. change the `publicPath` in `webpack.common.js` and `dev.webpack.config.js` to match your app name/path

6. Assuming you are using the `src/index.html` from the `insights-frontend-starter-app`, update any path reference to insights to now by `@@insights` so that webpack can switch between beta and stable. See [insights-frontend-starter-app src/index.html](https://github.com/RedHatInsights/insights-frontend-starter-app/blob/master/src/index.html#L6) for an example.

7. Generate a private key for pushing from dev repo to build repo
    * `ssh-keygen -t rsa -b 4096`
    * Save the key without a passphrase

8. _Insights Platform Team_ - Copy the public key to the build repo under Settings -> Deploy Keys and check the box for allowing write access.

9. Encrypt the deploy key with Travis CLI
    * Login to Travis CLI
        * Make sure you have Travis CI CLI tools and can [login to Travis CLI](https://github.com/travis-ci/travis.rb#installation)
        * `travis login --org`

    * Verify that you are inside of your development repo and then encrypt the key with Travis CLI
        * `travis encrypt-file path/to/deploy_key --org`

    * You should now have a `deploy_key.enc` file. Delete `deploy_key` and `deploy_key.pub`.

10. Replace the `deploy_key` decryption statement in `.travis/after_success.sh` with your newly generated one from the encryption step 5.b but replace `~\/.ssh/deploy_key` with just `deploy_key`

11. Commit your `deploy_key.enc` file, `.travis.yml`, `config`, `src/index.html`, and `.travis` directory

12. Verify that the Travis env variables have been added.

13. Confirm the build completed successfully on Travis-CI and verify that the files were pushed to your build repo’s ci-beta branch.

14. For a description of which branches route to which environments, please see the [insights-frontend-starter-app README.md](https://github.com/RedHatInsights/insights-frontend-starter-app/)

## Configuring Your App in cloud-services-config

We've added a new [global configuration](https://github.com/RedHatInsights/cloud-services-config/blob/master/main.yml) that acts as the main source of truth.
This file controls the routing for prod (Akamai), the file management and routing for non-prod (fakamai, assets-puller, assets-server), smoke tests, chrome navigation, and more.
To add your app and enable it on all environments, please create a PR with the changes described [here](https://github.com/RedHatInsights/cloud-services-config#adding-config-for-new-apps).
