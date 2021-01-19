#!/usr/bin/env bash

echo 'Remove any existing React build.'
rm -rf ./build/frontend

echo 'Install frontend dependencies'
cd ./frontend
yarn install

echo 'Create new React build'
yarn run heroku-build

echo 'Move React build'
mkdir ../build
mv ./build ../build/frontend