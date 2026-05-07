import express from "express";
import pool from "../config/db.js";
import { requireAdminAuth } from "../middleware/requireAdminAuth.js";
import {
  clearAdminAuthCookie,
  publicAdmin,
  setAdminAuthCookie,
  signAdminToken,
  verifyPassword,
} from "../services/adminAuth.js";

const router = express.Router();

router.post("/auth/login", async (req, res) => {
  try {
    const email = String(req.body?.email || "").trim().toLowerCase();
    const password = String(req.body?.password || "");

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const [rows] = await pool.query(
      "SELECT id, name, email, passwordHash, role FROM admins WHERE email = ? LIMIT 1",
      [email]
    );
    const admin = rows[0];
    const isValidPassword = admin ? await verifyPassword(password, admin.passwordHash) : false;

    if (!admin || !isValidPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = signAdminToken(admin);
    setAdminAuthCookie(res, token);

    res.json({ admin: publicAdmin(admin) });
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({ error: "Unable to sign in" });
  }
});

router.post("/auth/logout", (_req, res) => {
  clearAdminAuthCookie(res);
  res.json({ message: "Signed out" });
});

router.get("/auth/me", requireAdminAuth, (req, res) => {
  res.json({ admin: req.admin });
});

export default router;
