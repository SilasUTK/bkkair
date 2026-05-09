import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import adminAuthRoutes from "./routes/adminAuth.js";
import adminBookingRoutes from "./routes/adminBookings.js";
import bookingRoutes from "./routes/bookings.js";
import { requireAdminAuth } from "./middleware/requireAdminAuth.js";

dotenv.config();

const app = express();

const port = Number(process.env.PORT || 5001);
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:3000";
const allowedOrigins = [clientOrigin, "http://localhost:3000", "http://localhost:5173", "http://localhost:5174"];

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.use("/api/bookings", bookingRoutes);
app.use("/api/admin", adminAuthRoutes);
app.use("/api/admin", requireAdminAuth, adminBookingRoutes);

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
