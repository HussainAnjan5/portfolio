---
title: "Step-by-Step Guide: Deploying a MERN Stack Project on Hostinger VPS"
summary: "A step-by-step guide to building an e-commerce store using Laravel for the backend, React with Tailwind CSS for the frontend, and an admin portal for product management."
date: "September 26, 2025"
draft: false
tags:
- Hostinger VPS
- Web Hosting
- PM2
- Nginx

---

## Deploying MERN Stack Project on Hostinger VPS

- Preparing the VPS Environment
- Setting Up the MongoDB Database
- Deploying the Express and Node.js Backend
- Deploying the React Frontends
- Configuring Nginx as a Reverse Proxy
- Setting Up SSL Certificates
### 1. Preparing the VPS Environment

#### Get you VPS Hosting here : [Hostinger VPS](https://greatstack.dev/go/hostinger-vps)

Log in to Your VPS in Terminal 

```bash
 ssh root@your_vps_ip
```

Update and Upgrade Your System

```bash
  sudo apt update
```
```bash
  sudo apt upgrade -y
```

Install Node.js and npm ( if not pre-installed)

```bash
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
```
```bash
  sudo apt-get install -y nodejs
```
Install Git 
```bash
  sudo apt install -y git
```


###  2. Setting Up the MongoDB Database

If you want to setup MongoDB on VPS Follow this Guide: [click here](https://github.com/GreatStackDev/notes/blob/main/MongoDB_Setup_on_VPS.md)

### 3. Deploying the Express and Node.js Backend

Clone Your Backend Repository

```bash
 mkdir /var/www
```

```bash
 cd /var/www
```
```bash
 git clone https://github.com/yourusername/your-repo.git
```
```bash
 cd your-repo/backend
```

Install Dependencies

```bash
 npm install
```
Create .env file & configure Environment Variables

```bash
 nano .env
```

add environment variables then save and exit (Ctrl + X, then Y and Enter).


Installing pm2 to Start Backend

```bash
 npm install -g pm2
```
```bash
 pm2 start server.js --name project-backend
```
Start Backend on startup
```bash
 pm2 startup
```
```bash
 pm2 save
```
Allowing backend port in firewall 

```bash
 sudo ufw status
```
If firewall is disable then enable it using 
```bash
 sudo ufw enable
```
```bash
 sudo ufw allow 'OpenSSH'
```
```bash
 sudo ufw allow 4000
```

### 4. Deploying the React Frontends

Creating Build of React Applications
```bash
 cd path-to-your-first-react-app
```
```bash
 npm install
```
If you have ".env" file in your project

Create .env file and paste the variables
```bash
 nano .env
```
Create build of project
```bash
 npm run build
```

Repeat for the second or mulitiple React app.

Install Nginx

```bash
 sudo apt install -y nginx
```

adding Nginx in firewall

```bash
 sudo ufw status
```
```bash
 sudo ufw allow 'Nginx Full'
```


Configure Nginx for React Frontends


```bash
 nano /etc/nginx/sites-available/yourdomain1.com.conf
```

```bash
 server {
    listen 80;
    server_name yourdomain1.com www.yourdomain1.com;

    location / {
        root /var/www/your-repo/frontend/dist;
        try_files $uri /index.html;
    }
}
```
Save and exit (Ctrl + X, then Y and Enter).

Create a similar file for the second or multiple React app.

```bash
 nano /etc/nginx/sites-available/yourdomain2.com.conf
```

```bash
server {
    listen 80;
    server_name yourdomain2.com www.yourdomain2.com;

    location / {
        root /var/www/react-app-2/dist;
        try_files $uri /index.html;
    }
}
```

Create symbolic links to enable the sites.

```bash
ln -s /etc/nginx/sites-available/yourdomain1.com.conf /etc/nginx/sites-enabled/
```

```bash
ln -s /etc/nginx/sites-available/yourdomain2.com.conf /etc/nginx/sites-enabled/
```

Test the Nginx configuration for syntax errors.

```bash
nginx -t
```

```bash
systemctl restart nginx
```

### 5. Configuring Nginx as a Reverse Proxy

Update Backend Nginx Configuration

```bash
nano /etc/nginx/sites-available/api.yourdomain.com.conf
```
```bash
server {
    listen 80;
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://localhost:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Create symbolic links to enable the sites.

```bash
ln -s /etc/nginx/sites-available/api.yourdomain.com.conf /etc/nginx/sites-enabled/
```

Restart nginx

```bash
systemctl restart nginx
```

### Connect Domain Name with Website

Point all your domain & sub-domain on VPS IP address by adding DNS records in your domain manager 

Now your website will be live on domain name

### 6. Setting Up SSL Certificates 

Install Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

Obtain SSL Certificates

```bash
certbot --nginx -d yourdomain1.com -d www.yourdomain1.com -d yourdomain2.com -d api.yourdomain.com
```

Verify Auto-Renewal

```bash
certbot renew --dry-run
```


## Setup MongoDB on VPS


Install MongoDB

```bash
  sudo apt-get install gnupg curl
```
```bash
  curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
   --dearmor
```
Create the MongoDB list file.

```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list
```
Update package lists and install MongoDB.

```bash
  sudo apt-get update
```

```bash
  sudo apt-get install -y mongodb-org
```
Start and enable MongoDB service.

```bash
  sudo systemctl daemon-reload
```
```bash
  sudo systemctl start mongod
```
```bash
  sudo systemctl enable mongod
```
Verify that MongoDB has started successfully.
```bash
  sudo systemctl status mongod
```
MongoDB URI to connect with projects.
```bash
  mongodb://127.0.0.1:27017
```

### Configure MongoDB Authentication ( Optional )

#### Allowing MongoDB through firewall

Enable firewall

```bash
sudo ufw enable
```

Check Port is Allowed through Firewall
```bash
  sudo ufw status
```

If Port is not Allowed then Allow it through Firewall
```bash
  sudo ufw allow 27017
```
```bash
   sudo ufw allow 'OpenSSH'
```
Restart MongoDB
```bash
  sudo service mongod restart
```
#### Secure MongoDB by setting up Super User. 

Connect to MongoDB shell
```bash
  mongosh
```
Show database

```bash
  show dbs
```

Change to admin database

```bash
  use admin
```

Create superuser with all privileges

```bash
  db.createUser({user: "username-here" , pwd: passwordPrompt() , roles: ["root"]})
```

Now Exit mongosh shell

```bash
  .exit
```

Enable Authorization removing comment

```bash
  sudo nano /etc/mongod.conf
```

```bash
  security:
    authorization: enabled
```
Restart MongoDB
```bash
  sudo service mongod restart
```

To Access Mongo Shell as Super User use this command:
```bash
  mongosh --port 27017 --authenticationDatabase "admin" -u "username-here" -p "password-here"
```

Create Database & User for project:
```bash
  use database_name
```
```bash
  db.createUser({user:"username_here", pwd:passwordPrompt(), roles:[{role:"readWrite", db:"database_name"}]})
```

Now Exit mongosh shell

```bash
  .exit
```

MongoDB URI to Connect with projects:
```bash
  mongodb://username-here:password-here@127.0.0.1:27017/database_name
```

If you still need help in deployment:

Contact us on email : muhammad.hussain.cs8@gmail.com