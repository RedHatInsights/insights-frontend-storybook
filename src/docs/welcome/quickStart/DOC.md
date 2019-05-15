# Creating a cloud.redhat.com application

## Setup for development

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
    bash scripts/run.sh
    ```

#### More options for running

* Run with the local Legacy Insighs API

    ```sh
    LOCAL_API=true bash scripts/run.sh
    ```

### Chrome

1. Build Chrome and watch it for changes

    ```sh
    npm run build
    ```

### Starter App

1. Build

    ```sh
    SPANDX_CONFIG=./config/spandx.config.js && npm run start
    ```

2. Navigate to `https://prod.foo.redhat.com:1337/insights/samplepage`