# insights-deployments-test

Master: [![Master](https://img.shields.io/travis/RedHatInsights/insights-deployment-test.svg)](https://travis-ci.org/RedHatInsights/insights-deployment-test)

Stable: ![GitHub last commit (branch)](https://img.shields.io/github/last-commit/RedHatInsights/insights-deployment-test-build/stable.svg)

Testing repo for travis deployments

The deployment process for the applications on the Insights Platform uses an Akamai NetStorage instance to store all of the files that are used to render the pages. To get the files there we use a travis-ci script to push the build files to a build Github repo whenever master or a stable branch is pushed. Jenkins watches the build repo and kicks off a job that will then sync the build files with our NetStorage.

## Build

Should build to the [build repo](https://github.com/RedHatInsights/insights-deployment-test-build)

### Prerequisites

1. Travis CLI: `gem install travis` or `brew install travis`

2. Travis-CI should be enabled for your dev repo

### Steps

1. Copy the [travis.yml](https://github.com/RedHatInsights/insights-deployment-test/blob/master/.travis.yml) file and [.travis directory](https://github.com/RedHatInsights/insights-deployment-test/tree/master/.travis) and place in the root of your project
2. Create a build repo on Github. Usually this will be named `[dev-repo-name]-build`
3. Generate a private key for pushing from dev repo to build repo
    * `ssh-keygen -t rsa -b 4096 -C`
    * Save the key without a passphrase
4. Copy the public key to the build repo under Settings -> Deploy Keys and check the box for allowing write access.
5. Encrypt the deploy key with Travis CLI
    * Login to Travis CLI
    * Make sure you have Travis CI CLI tools and can login to [Travis CLI](https://github.com/travis-ci/travis.rb#installation)
    * Verify that you are inside of your development repo and then encrypt the key with Travis CLI
6. You should now have a deploy_key.enc file. Delete deploy_key and deploy_key.pub.
7. Replace the deploy_key decryption statement in .travis.yml with your newly generated one from the encryption step 5.b but replace ~\/.ssh/deploy_key with just deploy_key
8. Commit your deploy_key.enc file, .travis.yml, and .travis directory
9. Verify that the Travis env variables have been added.
10. Confirm the build completed successfully on Travis-CI and verify that the files were pushed to your build repo.

## How to Use

### Pushing to beta/master

Anytime a build of the master branch happens, Travis builds and pushes a new commit to the master branch in your build repo. Pull requests on master will not be deployed until they are merged, but they will be built to assure linting, snapshots, etc. are working as expected.

### Pushing to stable

If you want to push to stable, make a branch `stable/foo`, `stable/bar`, etc. Any build of a stable branch in the repo will deploy to `stable` branch in the build repo.