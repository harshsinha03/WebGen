#!/bin/bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
nvm install node
npm install pm2 -g
cd /home/ubuntu/WebGen
sudo rm -rf node_modules package-lock.json
