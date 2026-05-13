import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();

const ADMIN_EMAIL = "admin@bkkair.local";
const ADMIN_PASSWORD = "Admin123!";
const ADMIN_NAME = "BKK AIR Admin";

async function main() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required to seed the development admin account.");
  }

  const connection = await mysql.createConnection(databaseUrl);

  try {
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 12);

    await connection.execute(
      `
        INSERT INTO admins (name, email, passwordHash, role)
        VALUES (?, ?, ?, 'admin')
        ON DUPLICATE KEY UPDATE
          name = VALUES(name),
          passwordHash = VALUES(passwordHash),
          role = VALUES(role),
          updatedAt = CURRENT_TIMESTAMP
      `,
      [ADMIN_NAME, ADMIN_EMAIL, passwordHash]
    );

    console.log(`Development admin account is ready: ${ADMIN_EMAIL}`);
  } finally {
    await connection.end();
  }
}

main().catch((error) => {
  console.error("Seed admin failed:", error.message);
  process.exit(1);
});
