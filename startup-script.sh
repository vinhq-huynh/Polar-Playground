#!/bin/bash

# For GCP Compute Engine startups. Whenever an instance is created by Managed Instance Group's autoscaling, it runs this script.
# Install Ops Agent. The monitor will automatically pick up logs sent to syslog.
curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh
sudo bash add-google-cloud-ops-agent-repo.sh --also-install

# Install dependencies from apt
apt-get update
apt-get install -yq ca-certificates git build-essential nodejs npm

# Get the application source code from GitHub
cd /
git clone https://github.com/vinhq-huynh/Polar-Playground.git

# Install app dependencies.
cd /Polar-Playground
npm install
npm install -g pm2

# Run the app
npm start