# Insights Proxy

[Github](https://github.com/RedHatInsights/insights-proxy)

Proxy for the insightsfrontend container

This container uses [Spandx](https://github.com/redhataccess/spandx) which provides ESI and some nifty routing tools.

Checkout the `spandx` docs for additional config options.

## Setup

### Setup the initial /etc/hosts entries (do this once)

```sh
sudo bash scripts/patch-etc-hosts.sh
```

### Pull/Update the proxy container

```sh
bash scripts/update.sh
```

## Running the proxy

### Run the container with default options

```sh
bash scripts/run.sh
```

### Options for run.sh

#### Run with the local Legacy Insighs API

```sh
LOCAL_API=true bash scripts/run.sh
```

#### Run with local Insights Chrome

```sh
cd ~/path/to/chrome/directory
LOCAL_CHROME=true bash ~/path/to/insights-proxy/scripts/run.sh
```

### Run the container with a custom spandx config

```sh
mkdir -p ./config && touch ./config/spandx.config.js && $EDITOR ./config/spandx.config.js
docker run -v $PWD/config:/config --rm --net='host' -p1337:1337 -ti docker.io/iphands/insightsproxy
```

Note to macOS and Windows users using [Docker Machine](https://docs.docker.com/machine/): You have to set-up forwarding of the port 1337 through the VirtualBox network interface. The machine has to be stopped for this command to succeed.

```sh
VBoxManage modifyvm "default" --natpf1 "insights,tcp,,1337,,1337"
```