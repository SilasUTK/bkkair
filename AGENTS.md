# BKK AIR Agents Guide

BKK AIR is a visa flight and hotel booking support system. It is a lead request -> staff review -> manual fulfillment product, not an instant booking engine.

## Product Direction

The public site captures high-intent visa travel requests, explains trust and process, and routes customers to staff. The admin area supports staff review, status updates, assignment, and notes.

Core flow:

1. Customer submits a Quick Request.
2. Backend stores the request and generates an internal 6-character bookingCode.
3. Staff reviews the request in Admin.
4. Staff contacts the customer by Phone, LINE, or Email.
5. Staff manually prepares flight reservation / PNR and hotel booking documents for visa use.
6. Staff sends documents manually and updates status.

## Critical Rules

- Do not convert BKK AIR into an instant booking engine.
- Do not auto-confirm bookings or auto-generate real tickets.
- Do not show booking code immediately after Quick Request submission.
- Do not expose adminNotes or internal workflow data to customers.
- Always treat form submissions as requests that need staff review.
- Always prioritize lead capture: name, phone, and at least one reply channel.

## Client

Tech stack: React, Vite, Tailwind, lucide-react.

Important paths:

- `client/src/components/layout/Navbar.jsx`
- `client/src/components/layout/Footer.jsx`
- `client/src/components/home/HeroQuickRequest.jsx`
- `client/src/components/home/KeyBenefits.jsx`
- `client/src/components/home/Timeline.jsx`
- `client/src/components/home/ServicePackages.jsx`
- `client/src/components/home/SeoTrustContent.jsx`
- `client/src/components/home/Testimonials.jsx`
- `client/src/components/home/FAQ.jsx`
- `client/src/pages/Home.jsx`
- `client/src/pages/CheckBooking.jsx`
- `client/src/pages/admin/AdminDashboard.jsx`
- `client/src/pages/admin/AdminBookings.jsx`
- `client/src/pages/admin/AdminBookingDetail.jsx`
- `client/src/services/api.js`

Quick Request required fields:

- Contact Name
- Phone
- Email or LINE ID
- Destination
- Departure Date

Validation rules:

- passengerCount must be 1-8.
- departureDate must be tomorrow or later.
- returnDate, if provided, must be after departureDate.
- origin/destination autocomplete should keep working.

## Backend

Tech stack: Node.js, Express, MySQL using `mysql2/promise`.

Keep these routes working:

- `POST /api/bookings`
- `GET /api/bookings/:code`
- `GET /api/admin/bookings`
- `GET /api/admin/bookings/:code`
- `PATCH /api/admin/bookings/:code/status`
- `PATCH /api/admin/bookings/:code/notes`
- `PATCH /api/admin/bookings/:code/assign`

Rules:

- Generate unique 6-character bookingCode on the backend.
- Insert only valid DB columns.
- Never crash when optional fields are absent.
- Do not remove MySQL connection logic.
- Do not hardcode secrets or expose LINE tokens to the frontend.

## SEO

Home must have one H1 only. Use H2 headings for major sections and include Thai/English keywords:

- จองตั๋วเครื่องบินยื่นวีซ่า
- ใบจองโรงแรมขอวีซ่า
- บริการจองตั๋วเพื่อยื่นวีซ่า
- flight reservation for visa
- hotel booking for visa

Keep `client/index.html` metadata and JSON-LD aligned with a service request business, not an instant booking service.
