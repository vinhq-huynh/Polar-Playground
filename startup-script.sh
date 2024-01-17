#!/bin/bash

# Install Ops Agent. The monitor will automatically pick up logs sent to
# syslog.
curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh
sudo bash add-google-cloud-ops-agent-repo.sh --also-install

# Install dependencies from apt
apt-get update
apt-get install -yq ca-certificates git build-essential nodejs npm

# Get the application source code from the Google Cloud Storage bucket.
gsutil -m cp -r gs://polar-playground-src-bucket/Polar-Playground /

# Install app dependencies.
cd /Polar-Playground
npm install

# Run the app
npm start