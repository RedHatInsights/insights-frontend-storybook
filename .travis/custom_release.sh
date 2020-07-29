#!/bin/bash
set -e
set -x

if [ "${TRAVIS_BRANCH}" = "master" ]
then
    for env in ci qa prod
    do
        echo "PUSHING ${env}-beta"
        rm -rf ./dist/.git
        .travis/release.sh "${env}-beta"

        echo "PUSHING ${env}-stable"
        rm -rf ./dist/.git
        .travis/release.sh "${env}-stable"
    done
fi
