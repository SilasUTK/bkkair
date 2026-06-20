import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import adminAuthRoutes from "./routes/adminAuth.js";
import adminBookingRoutes from "./routes/adminBookings.js";
import bookingRoutes from "./routes/bookings.js";
import contactRoutes from "./routes/contact.routes.js";
import requestRoutes from "./routes/request.routes.js";
import { requireAdminAuth } from "./middleware/requireAdminAuth.js";
import { getEmailConfigurationWarnings } from "./services/email.service.js";
import {
  sanitizeInputs,
  honeypotProtection,
} from "./middleware/validateRequest.js";
import {
  generalApiLimiter,
  formSubmissionLimiter,
  loginLimiter,
  adminApiLimiter,
} from "./middleware/rateLimiters.js";

dotenv.config();

const app = express();

const port = Number(process.env.PORT || 5001);
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:3000";
const allowedOrigins = [clientOrigin, "http://localhost:3000", "http://localhost:5173", "http://localhost:5174"];

// CORS Configuration
app.use(cors({ origin: allowedOrigins, credentials: true }));

// Body parser with size limits
app.use(express.json({ limit: "10kb" })); // Limit JSON payload to 10KB
app.use(express.urlencoded({ limit: "10kb", extended: true }));
app.use(cookieParser());

// Global middleware
app.use(sanitizeInputs); // Sanitize all inputs to prevent injection
app.use(generalApiLimiter); // Apply general rate limiting to all routes

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

// Public routes with form submission rate limiting
app.use("/api/bookings", formSubmissionLimiter, bookingRoutes);
app.use("/api/requests", formSubmissionLimiter, bookingRoutes);
app.use("/api/contact", formSubmissionLimiter, contactRoutes);

// Authentication routes with stricter rate limiting
app.use("/api/admin/auth/login", loginLimiter, adminAuthRoutes);

// Admin routes with authentication + rate limiting
app.use("/api/admin", requireAdminAuth, adminApiLimiter, adminAuthRoutes);
app.use("/api/admin", requireAdminAuth, adminApiLimiter, adminBookingRoutes);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);

  const emailWarnings = getEmailConfigurationWarnings();
  if (emailWarnings.length > 0) {
    for (const warning of emailWarnings) {
      console.warn(`[Email Config] ${warning}`);
    }
  }
});
