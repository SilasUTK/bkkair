import bcrypt from "bcryptjs";
import { Response } from "express";
import jwt from "jsonwebtoken";

export const ADMIN_TOKEN_COOKIE = "bkkair_admin_token";
export const TOKEN_MAX_AGE_MS = 8 * 60 * 60 * 1000;

export function requireJwtSecret(): string {
  const secret = process.env.JWT_SECRET || process.env.ADMIN_JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is required for admin authentication");
  }

  return secret;
}

export function publicAdmin(admin: any) {
  if (!admin) return null;

  return {
    id: admin.id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
  };
}

export async function verifyPassword(password: string, passwordHash: string): Promise<boolean> {
  if (!password || !passwordHash) return false;
  return bcrypt.compare(String(password), passwordHash);
}

export function signAdminToken(admin: any): string {
  return jwt.sign(
    {
      sub: String(admin.id),
      email: admin.email,
      role: admin.role,
    },
    requireJwtSecret(),
    { expiresIn: "8h" }
  );
}

export function verifyAdminToken(token: string): any {
  if (!token) return null;
  return jwt.verify(token, requireJwtSecret());
}

export function setAdminAuthCookie(res: Response, token: string): void {
  res.cookie(ADMIN_TOKEN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: TOKEN_MAX_AGE_MS,
    path: "/",
  });
}

export function clearAdminAuthCookie(res: Response): void {
  res.clearCookie(ADMIN_TOKEN_COOKIE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
  });
}
