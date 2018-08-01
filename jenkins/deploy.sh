#!/usr/bin/env sh

npm run-script build

cd dist
rsync -arv -e "ssh -2" * sshacs@unprotected.upload.akamai.com:/114034/insights/platform/storybook/
