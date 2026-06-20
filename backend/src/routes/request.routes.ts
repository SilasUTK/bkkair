import { Router } from "express";
import { createRequest } from "../controllers/request.controller.js";
import { validateRequest, honeypotProtection } from "../middleware/validateRequest.js";
import { quickRequestSchema } from "../validators/schemas.js";

const router = Router();

// POST /api/requests - Create quick booking request with validation
router.post(
  "/",
  honeypotProtection, // Check honeypot field
  validateRequest(quickRequestSchema), // Validate against schema
  createRequest
);

export default router;
