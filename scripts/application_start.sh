#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ubuntu/server

#navigate into our working directory where we have all our github files
cd /home/ubuntu/server

#install node modules
npm install

#start our node app in the background
pm2 start index.js