#! /bin/bash

set -e

echo '🚀  Deploying to production!'
cd ./deployment
git push origin master
cd ..