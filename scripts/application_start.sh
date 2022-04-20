#!/bin/bash
source /home/ec2-user/.bash_profile

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/Mongodb

#navigate into our working directory where we have all our github files
cd /home/ec2-user/Mongodb

#install node modules
npm start
pm2 start app.js

#start our node app in the background 
node app.js > app.out.log 2> app.err.log < /dev/null & 