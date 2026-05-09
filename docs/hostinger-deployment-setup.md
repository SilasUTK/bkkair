# Hostinger Cloud Startup: Complete Deployment Guide

This guide covers deploying BKK AIR on Hostinger's Cloud Startup plan with Node.js + MySQL.

## Overview

- **Frontend**: Next.js 14 (port 3000)
- **Backend**: Express API (port 5001)
- **Process Manager**: PM2 (handles both)
- **Database**: Hostinger-hosted MySQL
- **Reverse Proxy**: Nginx (routes `/api/*` → 5001, `/` → 3000)

---

## Option A: SSH Deployment (Recommended)

### 1. Prepare Local Build

Before uploading anything, compile everything locally:

```bash
npm run build:all
```

This creates:
- `.next/` (Next.js compiled output)
- `api-server/dist/` (Express compiled TypeScript)

### 2. SSH into Hostinger Server

1. Go to **hPanel** → **Hosting** → **Manage**
2. Click **SSH Access** (or Terminal if available)
3. Connect via SSH (check hPanel for credentials)

### 3. Clone or Upload Repository

**Option A1: Clone from GitHub**

```bash
git clone https://github.com/SilasUTK/bkkair-visa-booking.git
cd bkkair-visa-booking
```

**Option A2: Upload via SCP/FTP**

Upload the entire project folder (including `.next/`, `api-server/dist/`, `node_modules/`)

### 4. Set Up MySQL Database

In **hPanel**:

1. Go to **Databases** → **MySQL Databases**
2. Create a new database, username, and password
3. Note the connection string: `mysql://user:pass@host:3306/dbname`

### 5. Install and Configure

```bash
# Install only production dependencies
npm install --omit=dev

# Install api-server dependencies
npm --prefix api-server install --omit=dev
```

Create `api-server/.env`:

```bash
cat > api-server/.env << 'EOF'
DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/DB_NAME"
JWT_SECRET="your-super-secret-key-here-min-32-chars"
PORT="5001"
CLIENT_ORIGIN="https://yourdomain.com"
LINE_CHANNEL_ACCESS_TOKEN=""
LINE_ADMIN_USER_ID=""
EOF
```

Create `.env.production.local` (optional, for Next.js):

```bash
cat > .env.production.local << 'EOF'
NEXT_PUBLIC_API_URL="https://yourdomain.com"
EOF
```

### 6. Install PM2 Globally

```bash
npm install -g pm2
```

### 7. Start Both Processes

```bash
pm2 start ecosystem.config.cjs --env production
pm2 save
pm2 startup
pm2 status
```

Should show:
```
┌─────┬────────────────┬──────────┬──────┬───────────┬──────────┐
│ id  │ name           │ mode     │ ↺    │ status    │ cpu      │
├─────┼────────────────┼──────────┼──────┼───────────┼──────────┤
│ 0   │ bkkair-api     │ cluster  │ 0    │ online    │ 0%       │
│ 1   │ bkkair-web     │ cluster  │ 0    │ online    │ 0%       │
└─────┴────────────────┴──────────┴──────┴───────────┴──────────┘
```

### 8. Configure Nginx Reverse Proxy

Edit your Hostinger Nginx config. In **hPanel** → **Hosting** → **Nginx** (or via SSH):

Find or create the server block for your domain and add:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name yourdomain.com www.yourdomain.com;

    # Redirect HTTP to HTTPS (if SSL is enabled)
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name yourdomain.com www.yourdomain.com;

    # SSL certificates (Hostinger auto-generated)
    ssl_certificate /etc/ssl/certs/yourdomain.com.crt;
    ssl_certificate_key /etc/ssl/private/yourdomain.com.key;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;

    # Route /api/* to Express backend (port 5001)
    location /api/ {
        proxy_pass http://127.0.0.1:5001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection "";
        proxy_http_version 1.1;
    }

    # Route everything else to Next.js frontend (port 3000)
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Connection "";
        proxy_http_version 1.1;

        # Handle WebSocket (if needed for live updates)
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Nginx cache control
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Disable access to sensitive files
    location ~ /\. {
        deny all;
    }

    location ~ /\.(env|env.local|env.production.local)$ {
        deny all;
    }
}
```

Test Nginx syntax:

```bash
sudo nginx -t
```

Reload Nginx:

```bash
sudo systemctl reload nginx
```

### 9. Verify Deployment

Test endpoints:

```bash
# Frontend
curl https://yourdomain.com/

# API health
curl https://yourdomain.com/api/health

# Check processes
pm2 status
pm2 logs
```

---

## Option B: Hostinger Auto-Import (Panel UI)

If you prefer Hostinger's panel:

1. Go to **Hosting** → **Node.js Applications**
2. Click **Create New Application**
3. Select **GitHub repository** → choose `bkkair-visa-booking`
4. Set **Entry Point**: `npm run pm2:start` (or just leave it to auto-detect)
5. Set **Node.js Version**: `20.x`
6. Set **Environment Variables** (below)
7. Click **Deploy**

Hostinger will:
- Clone your repo
- Run `npm install:all`
- Run `npm run build:all`
- Listen on port 3000

Then you still need to configure Nginx (from Step 8 above) to proxy `/api` to 5001.

### Environment Variables for Hostinger Panel

In the Node.js app settings, add:

```
DATABASE_URL=mysql://user:pass@host:3306/dbname
JWT_SECRET=your-super-secret-key-here-min-32-chars
PORT=3000
CLIENT_ORIGIN=https://yourdomain.com
LINE_CHANNEL_ACCESS_TOKEN=
LINE_ADMIN_USER_ID=
NEXT_PUBLIC_API_URL=https://yourdomain.com
NODE_ENV=production
```

---

## Ongoing Maintenance

### View Logs

```bash
pm2 logs
pm2 logs bkkair-api
pm2 logs bkkair-web
```

### Restart After Code Changes

```bash
git pull
npm run build:all
pm2 restart ecosystem.config.cjs --env production
```

### Stop All Processes

```bash
pm2 stop all
```

### Update Nginx Config

```bash
sudo nano /etc/nginx/sites-available/yourdomain.com  # or your config path
sudo nginx -t
sudo systemctl reload nginx
```

---

## Troubleshooting

### "Cannot find module" errors

Check that all dependencies are installed:

```bash
npm run install:all
npm run build:all
```

### API returns 502 Bad Gateway

- Check if Express is running: `pm2 status` (should show `bkkair-api` online)
- Check logs: `pm2 logs bkkair-api`
- Verify Nginx proxy target: `curl http://127.0.0.1:5001/api/health`

### Database connection fails

- Verify `DATABASE_URL` in `api-server/.env`
- Test connection from Hostinger terminal:
  ```bash
  mysql -u user -p -h host -D dbname
  ```

### SSL certificate issues

- Hostinger usually auto-generates; check in **hPanel** → **SSL Certificates**
- Restart Nginx: `sudo systemctl reload nginx`

---

## Database Schema

On first deployment, run the SQL setup:

```bash
mysql -u user -p -h host -D dbname << 'EOF'
CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bookingCode VARCHAR(6) UNIQUE NOT NULL,
  customerName VARCHAR(100) NOT NULL,
  customerEmail VARCHAR(100),
  customerPhone VARCHAR(20),
  customerLineId VARCHAR(100),
  destination VARCHAR(100),
  departureDate DATE,
  returnDate DATE,
  passengerCount INT DEFAULT 1,
  status ENUM('new', 'quoted', 'payment_pending', 'paid', 'processing', 'completed', 'cancelled') DEFAULT 'new',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS admin_users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'supervisor', 'staff') DEFAULT 'staff',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
EOF
```

---

## Performance Tips

- Use PM2 cluster mode for multi-core servers
- Enable Nginx caching for static assets (already in config above)
- Set up database backups in Hostinger panel
- Monitor PM2: `pm2 monit`

---

**Deployment complete!** Your app should be live at `https://yourdomain.com` with API accessible at `https://yourdomain.com/api/*`.
