# BKK AIR Visa Booking Support

BKK AIR is a visa flight and hotel booking support system. It's a **lead request → staff review → manual fulfillment** product, not an instant booking engine.

## Project Structure

```
bkkair-visa-booking/
├── frontend/
│   ├── app/                    # Next.js 14 App Router
│   ├── components/             # React components
│   │   ├── home/              # Premium homepage sections
│   │   ├── legacy/            # Legacy SPA pages & services
│   │   ├── layout/            # Navbar, Footer, Logo
│   │   └── marketing/         # Marketing shell
│   ├── public/                # Static assets (images, manifest)
│   ├── package.json
│   ├── next.config.js         # API proxy to backend
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── backend/                    # Express.js REST API
│   ├── src/
│   │   ├── server.ts          # Express app
│   │   ├── controllers/       # Route handlers
│   │   ├── routes/            # API routes
│   │   ├── services/          # Business logic
│   │   └── middleware/        # Auth, validation
│   ├── prisma/
│   │   └── schema.prisma      # Database schema (MySQL)
│   ├── scripts/               # Seed scripts
│   ├── dist/                  # Compiled TypeScript
│   ├── package.json
│   └── tsconfig.json
│
├── shared/                    # Shared constants/types (reserved)
│
├── docs/                      # Documentation
│   ├── hostinger-all-in-one-deploy.md
│   ├── hostinger-deployment-setup.md
│   └── production-checklist-template.md
│
├── AGENTS.md                  # Product & implementation rules
├── ADMIN_AGENTS.md            # Admin workflow
├── SALES_FLOW.md              # Thai sales process
├── ecosystem.config.cjs       # PM2 production config
├── .env.example               # Environment variables template
└── .env.local                 # Local environment (git-ignored)
```

## Technology Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS, TypeScript
- **Backend**: Express.js, TypeScript, Prisma ORM, MySQL
- **Deployment**: PM2, Hostinger VPS, nginx
- **Authentication**: JWT (admin)
- **Database**: MySQL 5.7+

## Key Features

- **Customer Portal**: Quick booking request, status tracking
- **Admin Portal**: Booking management, document preparation, staff assignment
- **API**: REST endpoints for booking lifecycle
- **Database**: Persistent booking state with Prisma migrations

## Local Development

### Prerequisites
- Node.js 20.x
- npm 10+
- MySQL 5.7+ (for backend)

### Install Dependencies

```bash
npm run install:all
```

This installs:
- Root dependencies (Next.js frontend)
- `backend/` dependencies (Express API)

### Run Development Servers

Frontend (Next.js on port 3000):
```bash
npm run dev
```

Backend (Express on port 5001):
```bash
npm run dev:api
```

Run both with PM2 (production-like):
```bash
npm run pm2:start
npm run pm2:logs
npm run pm2:stop
```

### Build

Frontend:
```bash
npm run build
```

Backend:
```bash
npm run build:api
```

Both:
```bash
npm run build:all
```

### Start Production

```bash
npm start              # Start frontend
npm run start:api      # Start backend
```

Or with PM2:
```bash
npm run pm2:start
```

## API Endpoints

The frontend proxies `/api/*` to backend via `next.config.js`:

```
POST   /api/bookings                           # Create booking
GET    /api/bookings/:code                     # Check booking status

GET    /api/admin/bookings                     # List bookings (auth required)
GET    /api/admin/bookings/:code              # Get booking detail (auth required)
PATCH  /api/admin/bookings/:code/status       # Update status (auth required)
PATCH  /api/admin/bookings/:code/notes        # Update notes (auth required)
PATCH  /api/admin/bookings/:code/assign       # Assign staff (auth required)
```

See `backend/src/routes/` for full routing details.

## Environment Variables

Create `.env.local` from `.env.example`:

```env
# Frontend
API_PROXY_TARGET=http://localhost:5001

# Backend
DATABASE_URL=mysql://user:password@localhost:3306/bkkair_db
JWT_SECRET=your_secret_key_here
JWT_EXPIRY=7d
NODE_ENV=development
```

## Deployment

### Hostinger VPS

See `docs/hostinger-all-in-one-deploy.md` and `docs/hostinger-deployment-setup.md`.

**Quick Start**:
```bash
npm run build:all
npm run pm2:start
```

### Manual Deployment

1. Build frontend and backend
2. Copy to production server
3. Install dependencies: `npm run install:all`
4. Configure `.env` for production
5. Run migrations: `npm --prefix backend run prisma:migrate`
6. Start with PM2: `npm run pm2:start`

## File Organization Changes (Cleanup)

This project was recently reorganized for better maintainability:

**Removed**:
- `client/` - Empty folder
- `frontend/` - Old build artifacts
- `server/` - Abandoned source
- `styles/` - Empty folder
- `.next_hostinger/` - Old Hostinger build
- `components/legacy/assets/` - Old assets
- `components/legacy/main.jsx` - Old Vite entry
- Dev log files

**Reorganized**:
- `api-server/` → `backend/`
- Root config files updated to reference new paths
- All imports and API paths remain compatible

## Admin Rules

See `ADMIN_AGENTS.md` for:
- Admin workflow
- Booking lifecycle
- Document management
- Staff assignment

See `AGENTS.md` for:
- Product design rules
- Form validation rules
- Business logic rules
- Data protection rules

See `SALES_FLOW.md` for:
- Thai customer outreach
- Follow-up timing
- Messaging templates

## Troubleshooting

**Frontend won't connect to backend?**
- Check `API_PROXY_TARGET` in `.env.local`
- Ensure backend is running on port 5001
- Check `next.config.js` rewrites

**Backend won't start?**
- Check `DATABASE_URL` env variable
- Ensure MySQL is running
- Run `npm --prefix backend run prisma:migrate`

**Build errors?**
- Clear `.next/` and `backend/dist/`
- Reinstall: `npm run install:all`
- Check Node.js version: `node -v` (must be 20.x)

## Contributing

Follow the patterns in `AGENTS.md` and `ADMIN_AGENTS.md`.

All business logic changes should be coordinated with the admin workflow.

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
