import { Router } from "express";
import { createContactMessage, handleContactUpload } from "../controllers/contact.controller.js";
import { validateRequest, honeypotProtection } from "../middleware/validateRequest.js";
import { contactFormSchema } from "../validators/schemas.js";

const router = Router();

// POST /api/contact - Submit contact form with validation
router.post(
  "/",
  handleContactUpload,
  honeypotProtection, // Check honeypot field
  validateRequest(contactFormSchema), // Validate against schema
  createContactMessage
);

export default router;
