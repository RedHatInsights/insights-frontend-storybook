# Creating a cloud.redhat.com application

## Setup for development

### For new employees

1. Make sure you have node, npm, and git installed on your machine
2. If you haven't yet, set up an ssh key for Github. [Docs](https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

### Docker

This project uses [Docker](https://www.docker.com/get-docker) for development. You will need to [download](https://www.docker.com/get-docker) it in order to run the proxy container.

* You can curl a script to bypass the downloading. You will still have to run each application yourself as noted in the "Running and Developing" section below *

``` bash
sh <(curl https://gist.githubusercontent.com/ryelo/efdf27b0b5a6d9c70f8e63b0abc1deaa/raw/f21dbc04443a61cf21d28a3d47467b4e072321bc/red-hat-insights-env.sh)
```

### Proxy

Container that provides ESI and routing tools

1. Clone the Proxy

    ```sh
    git@github.com:RedHatInsights/insights-proxy.git
    ```

2. Install dependencies

    ```sh
    npm install
    ```

3. Setup the initial /etc/hosts entries (do this once)

    ```sh
    sudo bash scripts/patch-etc-hosts.sh
    ```

4. Pull/Update the proxy container

    ```sh
    bash scripts/update.sh
    ```

### Chrome

Wraps your application and provides header, footer, navigation, styles, and a js library to interact with chrome directly.

1. Clone Chrome

    ```sh
    git@github.com:RedHatInsights/insights-chrome.git
    ```

2. Install dependencies

    ```sh
    npm install
    ```

3. Run the build

    ```sh
    npm run build
    ```

### Starter App

Bootstrapped application with essential tools for rapid development

1. Clone the Starter App

    ```sh
    git@github.com:RedHatInsights/insights-frontend-starter-app.git
    ```

2. Install dependencies

    ```sh
    npm install
    ```

## Running and Developing

**If you used the download script, pick back up here.**

### Proxy

#### Default Configuration

1. Run the container with default options

    ```sh
    SPANDX_CONFIG=path/to/insights-frontend-starter-app/config/spandx.config.js sh path/to/insights-proxy/scripts/run.sh
    ```

##### More options for running

* Run with the local Legacy Insighs API

    ```sh
    SPANDX_CONFIG=path/to/insights-frontend-starter-app/config/spandx.config.js sh path/to/insights-proxy/scripts/run.sh LOCAL_API=true
    ```

* Run with the local insights-chrome

    ```sh
    SPANDX_CONFIG=path/to/insights-frontend-starter-app/config/spandx.config.js sh path/to/insights-proxy/scripts/run.sh LOCAL_CHROME=true
    ```

### Starter App

1. Build from `insights-chrome/build`

    ```sh
    SPANDX_CONFIG=../../insights-frontend-starter-app/config/spandx.config.js sh ../../insights-proxy/scripts/run.sh
    ```

2. In another terminal tab/window inside of the `insights-frontend-starter-app` repo, run `npm run start`

3. Navigate to `https://ci.foo.redhat.com:1337/insights/samplepage`