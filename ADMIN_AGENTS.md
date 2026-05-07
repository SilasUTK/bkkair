# BKK AIR Admin Agents Guide

The admin dashboard is for staff operations after a customer submits a request. It supports manual fulfillment and must never imply automatic ticketing.

## Admin Flow

1. Open Admin Dashboard.
2. Review new `Pending Review` requests.
3. Assign a staff member.
4. Contact customer by Phone, LINE, or Email.
5. Update request status as work progresses.
6. Save internal admin notes.
7. Manually prepare and deliver flight / hotel visa documents.

## Status Flow

Allowed statuses:

- `Pending Review`: new request waiting for staff review.
- `Processing`: staff has contacted customer or is preparing documents.
- `Completed`: documents delivered or request fulfilled.
- `Cancelled`: customer cancelled, invalid request, or staff closed the case.

Status changes must be deliberate staff actions. Do not auto-complete requests.

## Assignment Flow

Allowed staff options:

- Siam
- Admin
- Sales Team
- Ticketing Team
- Visa Support

Assignment is internal. Customers should not see assignment decisions unless staff tells them manually.

## Notes

`adminNotes` are internal only. They can include contact history, payment notes, document issues, urgency, and fulfillment details. They must never appear on the customer Check Booking page or public APIs.

## Admin UI Requirements

Admin pages must support:

- View all requests.
- Search by code, name, phone, or destination.
- Filter by status.
- Filter by assigned staff.
- View request detail.
- Update status.
- Assign staff.
- Save admin notes.

The UI should be practical, readable, and fast for repeated staff work.
