# Hostinger Cloud Startup: Deploy Frontend + Backend + MySQL

This guide deploys everything on Hostinger:

- Next.js frontend (root-level `app/`, `components/`, etc.)
- Express backend from `api-server/`
- MySQL from Hostinger database service

## 1) Prepare Hostinger MySQL

1. Open hPanel.
2. Go to Databases -> MySQL Databases.
3. Create database, username, and password.
4. Allow remote access if required by your panel layout.
5. Build your connection string:

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/DB_NAME"
```

## 2) Upload/Clone Project on Hostinger

1. Open your server terminal (SSH or Terminal in panel).
2. Clone the repository.
3. Enter project directory.

```bash
git clone <your-repo-url>
cd bkkair-visa-booking
```

## 3) Install Node Dependencies

```bash
npm run install:all
```

## 4) Configure Environment Variables

Create backend environment:

```bash
cp api-server/.env.example api-server/.env
```

Edit `api-server/.env` and set real values:

```env
DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/DB_NAME"
JWT_SECRET="strong-random-secret"
PORT="5001"
CLIENT_ORIGIN="https://your-domain.com"
LINE_CHANNEL_ACCESS_TOKEN=""
LINE_ADMIN_USER_ID=""
```

Create frontend environment (optional - uses relative API URLs by default):

```bash
cp .env.example .env.local
```

Edit `.env.local` if needed:

```env
NEXT_PUBLIC_API_URL="https://your-domain.com"
```

(Leave empty for same-domain routing via reverse proxy)

## 4.1) Align Database Schema

Review and run the production alignment migration before launch:

```bash
mysql -u USER -p -h HOST -D DB_NAME < server/migrations/003_production_alignment.sql
```

## 5) Build Both Apps

```bash
npm run build:all
```

## 6) Start with PM2

Install PM2 globally once:

```bash
npm install -g pm2
```

Start both processes:

```bash
npm run pm2:start
pm2 save
pm2 startup
```

Useful commands:

```bash
npm run pm2:logs
npm run pm2:restart
npm run pm2:stop
```

## 7) Reverse Proxy in Hostinger

Create routing rules in Hostinger (or server Nginx) so:

- `/api/*` -> `http://127.0.0.1:5001`
- `/_next/*` -> `http://127.0.0.1:3000`
- all other paths -> `http://127.0.0.1:3000`

Example Nginx location block:

```nginx
location /api/ {
  proxy_pass http://127.0.0.1:5001;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}

location ^~ /_next/ {
  proxy_pass http://127.0.0.1:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}

location / {
  proxy_pass http://127.0.0.1:3000;
  proxy_set_header Host $host;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  proxy_set_header X-Forwarded-Proto $scheme;
}
```

## 8) Verification Checklist

1. `https://your-domain.com` opens frontend.
2. `https://your-domain.com/api/health` returns `{ "status": "ok" }`.
3. Quick Request form submits successfully.
4. Admin login works.
5. PM2 shows both apps online.

## 9) Update Workflow

When deploying new code:

```bash
git pull
npm run install:all
npm run build:all
npm run pm2:restart
```
