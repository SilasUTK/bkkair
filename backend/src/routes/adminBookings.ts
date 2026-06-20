import { Router } from "express";
import multer from "multer";
import {
  assignAdminBooking,
  deleteAdminBookingDocument,
  downloadAdminBookingDocument,
  getAdminBooking,
  listAdminBookings,
  listAdminBookingDocuments,
  updateAdminBookingDocument,
  updateAdminBookingFollowUp,
  updateAdminBookingNotes,
  updateAdminBookingPayment,
  updateAdminBookingQuotation,
  updateAdminBookingStatus,
  uploadAdminBookingDocument,
} from "../controllers/adminBookingController.js";

const router = Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    // Only allow PDF and image files
    const allowedMimes = ["application/pdf", "image/png", "image/jpeg", "image/jpg", "image/webp"];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type. Only PDF and images are allowed."));
    }
  },
});

router.get("/bookings", listAdminBookings);
router.get("/bookings/:id", getAdminBooking);
router.patch("/bookings/:id/status", updateAdminBookingStatus);
router.patch("/bookings/:id/notes", updateAdminBookingNotes);
router.patch("/bookings/:id/assign", assignAdminBooking);
router.patch("/bookings/:id/quotation", updateAdminBookingQuotation);
router.patch("/bookings/:id/payment", updateAdminBookingPayment);
router.patch("/bookings/:id/document", updateAdminBookingDocument);
router.patch("/bookings/:id/follow-up", updateAdminBookingFollowUp);
router.post("/bookings/:id/documents/upload", upload.single("file"), uploadAdminBookingDocument);
router.get("/bookings/:id/documents", listAdminBookingDocuments);
router.get("/bookings/:id/documents/download", downloadAdminBookingDocument);
router.delete("/bookings/:id/documents/delete", deleteAdminBookingDocument);

export default router;
