#!/usr/bin/env sh

echo "deploying Storybook"
npm run build
ls

cd dist
ls
rsync -arv -e "ssh -2" * sshacs@unprotected.upload.akamai.com:/114034/insights/platform/storybook/
