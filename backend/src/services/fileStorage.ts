import fs from "fs";
import path from "path";
import { promisify } from "util";

const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const unlink = promisify(fs.unlink);

const UPLOADS_DIR = path.join(process.cwd(), "backend", "uploads", "documents");

export async function ensureUploadDir() {
  try {
    await mkdir(UPLOADS_DIR, { recursive: true });
  } catch (error) {
    console.error("Error creating upload directory:", error);
    throw error;
  }
}

export async function saveDocumentFile(
  bookingCode: string,
  filename: string,
  buffer: Buffer
): Promise<string> {
  try {
    await ensureUploadDir();
    const bookingDir = path.join(UPLOADS_DIR, bookingCode);
    await mkdir(bookingDir, { recursive: true });

    // Sanitize filename
    const sanitizedFilename = path.basename(filename).replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = path.join(bookingDir, sanitizedFilename);

    await writeFile(filePath, buffer);
    return `documents/${bookingCode}/${sanitizedFilename}`;
  } catch (error) {
    console.error("Error saving document file:", error);
    throw error;
  }
}

export async function getDocumentFile(
  bookingCode: string,
  filename: string
): Promise<Buffer> {
  try {
    const sanitizedFilename = path.basename(filename).replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = path.join(UPLOADS_DIR, bookingCode, sanitizedFilename);

    // Security check: ensure the file path is within the upload directory
    if (!filePath.startsWith(UPLOADS_DIR)) {
      throw new Error("Invalid file path");
    }

    return await readFile(filePath);
  } catch (error) {
    console.error("Error reading document file:", error);
    throw error;
  }
}

export async function deleteDocumentFile(
  bookingCode: string,
  filename: string
): Promise<void> {
  try {
    const sanitizedFilename = path.basename(filename).replace(/[^a-zA-Z0-9._-]/g, "_");
    const filePath = path.join(UPLOADS_DIR, bookingCode, sanitizedFilename);

    // Security check: ensure the file path is within the upload directory
    if (!filePath.startsWith(UPLOADS_DIR)) {
      throw new Error("Invalid file path");
    }

    if (fs.existsSync(filePath)) {
      await unlink(filePath);
    }
  } catch (error) {
    console.error("Error deleting document file:", error);
    throw error;
  }
}

export async function listDocumentFiles(bookingCode: string): Promise<string[]> {
  try {
    const bookingDir = path.join(UPLOADS_DIR, bookingCode);
    if (!fs.existsSync(bookingDir)) {
      return [];
    }

    return await new Promise((resolve, reject) => {
      fs.readdir(bookingDir, (err, files) => {
        if (err) reject(err);
        else resolve(files || []);
      });
    });
  } catch (error) {
    console.error("Error listing document files:", error);
    return [];
  }
}
