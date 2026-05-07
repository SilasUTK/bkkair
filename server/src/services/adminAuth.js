import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const ADMIN_TOKEN_COOKIE = "bkkair_admin_token";
const TOKEN_MAX_AGE_MS = 8 * 60 * 60 * 1000;

export { ADMIN_TOKEN_COOKIE, TOKEN_MAX_AGE_MS };

export function requireJwtSecret() {
  const secret = process.env.JWT_SECRET || process.env.ADMIN_JWT_SECRET;

  if (!secret) {
    throw new Error("JWT_SECRET is required for admin authentication");
  }

  return secret;
}

export function publicAdmin(admin) {
  if (!admin) return null;

  return {
    id: admin.id,
    name: admin.name,
    email: admin.email,
    role: admin.role,
  };
}

export async function verifyPassword(password, passwordHash) {
  if (!password || !passwordHash) return false;
  return bcrypt.compare(String(password), passwordHash);
}

export function signAdminToken(admin) {
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

export function verifyAdminToken(token) {
  if (!token) return null;
  return jwt.verify(token, requireJwtSecret());
}

export function setAdminAuthCookie(res, token) {
  res.cookie(ADMIN_TOKEN_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: TOKEN_MAX_AGE_MS,
    path: "/",
  });
}

export function clearAdminAuthCookie(res) {
  res.clearCookie(ADMIN_TOKEN_COOKIE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
  });
}
