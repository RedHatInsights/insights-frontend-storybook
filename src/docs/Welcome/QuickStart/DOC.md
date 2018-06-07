# Creating a Red Hat Insights Application

## Setup for development

### Docker
This project uses [Docker](https://www.docker.com/get-docker) for development. You will need to [download](https://www.docker.com/get-docker) it in order to run the proxy container.

### Proxy
Container that provides ESI and routing tools

1. Clone the Proxy
    ```bash
    git@github.com:RedHatInsights/insights-proxy.git
    ```

2. Install dependencies

    ```bash
    $ npm install
    ```

3. Setup the initial /etc/hosts entries (do this once)
    ```
    $ sudo bash scripts/patch-etc-hosts.sh
    ```

4. Pull/Update the proxy container
    ```
    $ bash scripts/update.sh
    ```

### Chrome
Wraps your application and provides header, footer, navigation, styles, and a js library to interact with chrome directly.

1. Clone Chrome
    ```bash
    $ git@github.com:RedHatInsights/insights-chrome.git
    ```

2. Install dependencies

    ```bash
    $ npm install
    ```

3. Run the build
    ```bash
    $ npm run build
    ```

### Starter App
Bootstrapped application with essential tools for rapid development

1. Clone the Starter App

    ```bash
    $ git@github.com:RedHatInsights/insights-frontend-starter-app.git
    ```

2. Install dependencies

    ```bash
    $ npm install
    ```

## Running and Developing

### Proxy

1. Using it with Chrome
    ```bash
    $ cd ~/path/to/chrome/directory
    $ LOCAL_CHROME=true bash ~/path/to/insights-proxy/scripts/run.sh
    ```

#### Default Configuration without Chrome
1.  Run the container with default options
    ```bash
    $ bash scripts/run.sh
    ```

#### More options for running
* Run with the local Legacy Insighs API
    ```bash
    $ LOCAL_API=true bash scripts/run.sh
    ```

### Chrome
1. Build Chrome and watch it for changes
    ```bash
    $ npm run start
    ```

### Starter App
1. Build
    ```bash
    npm run start
    ```

2. Navigate to `https://prod.foo.redhat.com:1337/insights/samplepage`