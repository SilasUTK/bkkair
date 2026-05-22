import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import adminAuthRoutes from "./routes/adminAuth.js";
import adminBookingRoutes from "./routes/adminBookings.js";
import bookingRoutes from "./routes/bookings.js";
import contactRoutes from "./routes/contact.routes.js";
import requestRoutes from "./routes/request.routes.js";
import { requireAdminAuth } from "./middleware/requireAdminAuth.js";

dotenv.config();

const app = express();

const port = Number(process.env.PORT || 5001);
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:3000";
const allowedOrigins = [clientOrigin, "http://localhost:3000", "http://localhost:5173", "http://localhost:5174"];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(cookieParser());

const loginRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many login attempts. Please try again in 15 minutes." },
});

const bookingRateLimit = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again shortly." },
});

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.use("/api/bookings", bookingRateLimit, bookingRoutes);
app.use("/api/requests", bookingRateLimit, requestRoutes);
app.use("/api/contact", bookingRateLimit, contactRoutes);
app.use("/api/admin/auth/login", loginRateLimit);
app.use("/api/admin", adminAuthRoutes);
app.use("/api/admin", requireAdminAuth, adminBookingRoutes);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
