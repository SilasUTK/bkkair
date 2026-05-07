# Production Checklist (Hostinger All-in-One)

Use this checklist before go-live. Fill every value.

## A) Domain and DNS

- [ ] Production domain: `____________________`
- [ ] WWW redirect configured (if needed): `Yes / No`
- [ ] SSL certificate active: `Yes / No`

## B) Backend Environment (`backend/.env`)

- [ ] `DATABASE_URL="mysql://USER:PASSWORD@HOST:3306/DB_NAME"`
  - USER: `____________________`
  - PASSWORD: `____________________`
  - HOST: `____________________`
  - DB_NAME: `____________________`
- [ ] `JWT_SECRET="____________________"` (strong random secret)
- [ ] `PORT="5001"`
- [ ] `CLIENT_ORIGIN="https://____________________"`
- [ ] `LINE_CHANNEL_ACCESS_TOKEN="____________________"` (optional)
- [ ] `LINE_ADMIN_USER_ID="____________________"` (optional)

## C) Frontend Environment (`frontend/.env.local`)

- [ ] `NEXT_PUBLIC_API_URL="https://____________________"`

Recommended for same-domain setup:
- Use your exact production domain, e.g. `https://yourdomain.com`

## D) Build and Process

- [ ] `npm run install:all`
- [ ] `npm run build:all`
- [ ] `npm run pm2:start`
- [ ] `pm2 save`
- [ ] `pm2 startup`
- [ ] `pm2 status` shows both `bkkair-frontend` and `bkkair-backend` online

## E) Reverse Proxy

- [ ] `/api/*` -> `http://127.0.0.1:5001`
- [ ] `/` and all other paths -> `http://127.0.0.1:3000`

## F) Smoke Tests

- [ ] Home page loads: `https://____________________`
- [ ] Health endpoint returns ok: `https://____________________/api/health`
- [ ] Quick Request form submits successfully
- [ ] Check Booking works with valid booking code
- [ ] Admin login works
- [ ] Admin status/notes/assign actions work

## G) Security and Ops

- [ ] No real secrets committed in git
- [ ] Database backup policy enabled
- [ ] PM2 restart policy verified after reboot
- [ ] Error logs location known (`pm2 logs`)
- [ ] Rollback plan prepared (previous commit hash): `____________________`

## H) Final Sign-off

- [ ] Business owner sign-off: `____________________`
- [ ] Deployment date/time: `____________________`
- [ ] Operator: `____________________`
