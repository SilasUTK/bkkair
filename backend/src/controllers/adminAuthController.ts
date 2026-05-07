import { Request, Response } from "express";
import pool from "../services/db.js";
import {
  clearAdminAuthCookie,
  publicAdmin,
  setAdminAuthCookie,
  signAdminToken,
  verifyPassword,
} from "../services/adminAuth.js";

export async function loginAdmin(req: Request, res: Response) {
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
    const admin = (rows as any[])[0];
    const isValidPassword = admin ? await verifyPassword(password, admin.passwordHash) : false;

    if (!admin || !isValidPassword) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token = signAdminToken(admin);
    setAdminAuthCookie(res, token);

    return res.json({ admin: publicAdmin(admin) });
  } catch (error) {
    console.error("Admin login error:", error);
    return res.status(500).json({ error: "Unable to sign in" });
  }
}

export function logoutAdmin(_req: Request, res: Response) {
  clearAdminAuthCookie(res);
  return res.json({ message: "Signed out" });
}

export function meAdmin(req: Request, res: Response) {
  return res.json({ admin: (req as any).admin });
}
