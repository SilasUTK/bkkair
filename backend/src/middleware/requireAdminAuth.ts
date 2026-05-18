import { NextFunction, Request, Response } from "express";
import pool from "../services/db.js";
import { ADMIN_TOKEN_COOKIE, publicAdmin, verifyAdminToken } from "../services/adminAuth.js";

export async function requireAdminAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const bearerToken = req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.slice("Bearer ".length)
      : "";
    const token = (req as any).cookies?.[ADMIN_TOKEN_COOKIE] || bearerToken;

    if (!token) {
      return res.status(401).json({ error: "Admin authentication required" });
    }

    const payload = verifyAdminToken(token);
    const adminId = Number(payload?.sub);

    if (!adminId) {
      return res.status(401).json({ error: "Invalid admin session" });
    }

    const [rows] = await pool.query(
      "SELECT id, name, email, role FROM admins WHERE id = ? LIMIT 1",
      [adminId]
    );
    const admin = (rows as any[])[0];

    if (!admin) {
      return res.status(401).json({ error: "Admin account not found" });
    }

    (req as any).admin = publicAdmin(admin);
    next();
  } catch {
    return res.status(401).json({ error: "Invalid or expired admin session" });
  }
}
