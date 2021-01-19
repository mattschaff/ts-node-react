#!/usr/bin/env bash

# Build front end
cd ./frontend
yarn build

# Build server
cd ../
npx tsc

# Run server
npx ts-node ./backend/index.ts