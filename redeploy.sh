#!/bin/bash

# Stop the app
cd /Polar-Playground
npm stop

# Pulling from GitHub
git pull

# Start the app
npm start