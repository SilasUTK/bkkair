import { Router } from "express";
import {
  assignAdminBooking,
  getAdminBooking,
  listAdminBookings,
  updateAdminBookingDocument,
  updateAdminBookingFollowUp,
  updateAdminBookingNotes,
  updateAdminBookingPayment,
  updateAdminBookingQuotation,
  updateAdminBookingStatus,
} from "../controllers/adminBookingController.js";

const router = Router();

router.get("/bookings", listAdminBookings);
router.get("/bookings/:id", getAdminBooking);
router.patch("/bookings/:id/status", updateAdminBookingStatus);
router.patch("/bookings/:id/notes", updateAdminBookingNotes);
router.patch("/bookings/:id/assign", assignAdminBooking);
router.patch("/bookings/:id/quotation", updateAdminBookingQuotation);
router.patch("/bookings/:id/payment", updateAdminBookingPayment);
router.patch("/bookings/:id/document", updateAdminBookingDocument);
router.patch("/bookings/:id/follow-up", updateAdminBookingFollowUp);

export default router;
