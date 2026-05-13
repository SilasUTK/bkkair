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

Tech stack: Next.js App Router, React, Tailwind, lucide-react.

Important paths:

- `app/page.tsx`
- `app/[...slug]/page.tsx`
- `components/AppShell.jsx`
- `components/layout/Navbar.jsx`
- `components/layout/Footer.jsx`
- `components/layout/Logo.jsx`
- `components/home/Hero.jsx`
- `components/home/WhyChooseUs.jsx`
- `components/home/WorkflowTimeline.jsx`
- `components/home/ServicePackages.jsx`
- `components/home/SeoTrustSection.jsx`
- `components/home/Testimonials.jsx`
- `components/home/FAQSection.jsx`
- `components/legacy/pages/Home.jsx`
- `components/legacy/pages/CheckBooking.jsx`
- `components/legacy/pages/admin/AdminDashboard.jsx`
- `components/legacy/pages/admin/AdminBookingList.jsx`
- `components/legacy/pages/admin/AdminBookingDetail.jsx`
- `components/legacy/services/api.js`

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

Keep `app/layout.tsx` metadata and JSON-LD aligned with a service request business, not an instant booking service.
