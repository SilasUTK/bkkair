# BKK AIR Visa Booking Support

BKK AIR structure:

- **Root-level Next.js 14 App Router** (`app/`, `components/`, etc. at root)
- **`api-server/`**: Express + TypeScript + Prisma + MySQL REST API

Customers submit a request, staff review it, and fulfillment happens manually.

This is not an instant booking engine.

## Project Structure

- `app/`: Next.js 14 App Router routes
- `components/`: React components (including legacy wrapped components)
- `public/`: Static assets
- `styles/`: Global styles
- `api-server/`: Express REST API with TypeScript and Prisma
- `legacy/`: archived original Vite client and JavaScript server (no longer active)
- `AGENTS.md`: product and implementation rules
- `ADMIN_AGENTS.md`: admin workflow
- `SALES_FLOW.md`: Thai sales and follow-up process
- `docs/hostinger-all-in-one-deploy.md`: Hostinger deployment guide

## Run Locally

Install all dependencies:

```bash
npm run install:all
```

Run frontend (Next.js, default):

```bash
npm run dev
```

Or run backend separately (Express TS):

```bash
npm run dev:api
```

Build frontend:

```bash
npm run build
```

Build backend:

```bash
npm run build:api
```

Build both:

```bash
npm run build:all
```

Default URLs:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5001`
- Health check: `http://localhost:5001/api/health`

## Environment Variables

Create `.env.local` at root (optional for dev - uses relative API URLs by default):

```env
NEXT_PUBLIC_API_URL=http://localhost:5001
```

Create `api-server/.env`:

```env
DATABASE_URL=mysql://user:password@localhost:3306/bkkair
JWT_SECRET=change-me
PORT=5001
CLIENT_ORIGIN=http://localhost:3000
LINE_CHANNEL_ACCESS_TOKEN=
LINE_ADMIN_USER_ID=
```

Use `.env.example` files as templates.

Do not commit real credentials or LINE tokens.

## Deployment

Hostinger Cloud Startup runs the full stack in one place:
  - Next.js frontend (root-level app)
  - Express backend (`api-server/`)
  - Hostinger MySQL
  - PM2 process manager

### Quick Start (SSH)

```bash
# 1. Build locally first
npm run build:all

# 2. SSH into Hostinger and clone
git clone https://github.com/SilasUTK/bkkair-visa-booking.git
cd bkkair-visa-booking

# 3. Install dependencies
npm install --omit=dev
npm --prefix api-server install --omit=dev

# 4. Set environment variables
cp api-server/.env.example api-server/.env
# Edit api-server/.env with real MySQL credentials

# 5. Start with PM2
npm install -g pm2
npm run pm2:start
pm2 save
pm2 startup

# 6. Configure Nginx reverse proxy (see nginx-proxy-config.md)
```

### Deployment Guides

- **[hostinger-deployment-setup.md](docs/hostinger-deployment-setup.md)** — Complete step-by-step (Option A: SSH, Option B: Auto-Import via panel)
- **[nginx-proxy-config.md](docs/nginx-proxy-config.md)** — Nginx reverse proxy configuration (routes `/api/*` → port 5001, `/` → port 3000)
- **[production-checklist-template.md](docs/production-checklist-template.md)** — Pre-launch verification checklist

### Why Two Processes?

- **Next.js frontend** (port 3000): Renders the public site + admin dashboard
- **Express backend** (port 5001): REST API for bookings, admin auth, and database operations
- **PM2**: Manages both processes as a single unit, automatically restarts if one fails
- **Nginx**: Routes incoming traffic to the correct port

### Troubleshooting Deployment

**"Cannot find module" errors**: Ensure TypeScript is compiled before uploading:
```bash
npm run build:all
```

**502 Bad Gateway**: Express backend isn't running:
```bash
ssh user@hostinger && pm2 status && pm2 logs bkkair-api
```

**Database connection fails**: Verify `DATABASE_URL` in `api-server/.env` and test manually:
```bash
mysql -u user -p -h host -D dbname
```

## MySQL Setup

Backend expects a `bookings` table with at least these fields:

```sql
CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bookingCode VARCHAR(6) NOT NULL UNIQUE,
  status VARCHAR(50) DEFAULT 'Pending Review',
  customerName VARCHAR(255),
  name VARCHAR(255),
  phone VARCHAR(50),
  email VARCHAR(255),
  lineId VARCHAR(100),
  origin VARCHAR(255),
  destination VARCHAR(255),
  visaCountry VARCHAR(255),
  departureDate DATE,
  returnDate DATE,
  passengerCount INT DEFAULT 1,
  cabinClass VARCHAR(100),
  airline VARCHAR(255),
  preferredAirlines VARCHAR(255),
  serviceType VARCHAR(255),
  passportNumber VARCHAR(100),
  dateOfBirth DATE,
  passportExpiryDate DATE,
  attachmentName VARCHAR(255),
  adminNotes TEXT,
  assignedStaff VARCHAR(100),
  paymentStatus VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

The API dynamically inserts only columns that exist, so optional future fields can be added without breaking quick requests.

For existing databases, review and apply the production alignment SQL migration from:

```sql
server/migrations/003_production_alignment.sql
```

## API

Public:

- `POST /api/bookings`: create a request
- `GET /api/bookings/:code`: customer-safe booking status lookup

Admin:

- `GET /api/admin/bookings`
- `GET /api/admin/bookings/:code`
- `PATCH /api/admin/bookings/:code/status`
- `PATCH /api/admin/bookings/:code/notes`
- `PATCH /api/admin/bookings/:code/assign`

## LINE Notification

If `LINE_CHANNEL_ACCESS_TOKEN` and `LINE_ADMIN_USER_ID` are configured, the server can notify staff when a new request is created or assigned. Keep LINE credentials server-side only.

## Business Rules

- Quick Request is lead capture, not booking confirmation.
- Booking code is generated by the backend.
- Quick Request success must not show the booking code.
- Staff manually contact, fulfill, and update status.
- Admin notes are internal and are not returned by the public booking lookup.
