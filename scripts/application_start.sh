#!/bin/bash
#디렉토리권한
sudo chmod -R 777 /home/ubuntu/server

#깃허브에서 받은 파일로 이동
cd /home/ubuntu/server

#install node modules
npm install
npm install pm2 -g
sudo apt-get update
sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo chown ubuntu /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80
authbind --deep pm2 update


#start our node app in the background(pm2)
authbind --deep pm2 start index.js