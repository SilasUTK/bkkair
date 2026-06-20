import { Request, Response, NextFunction } from "express";
import { ZodSchema, ZodError } from "zod";

/**
 * Validation middleware factory
 * Validates request body against a Zod schema
 * Returns 400 with detailed error messages on validation failure
 */
export function validateRequest(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.parseAsync(req.body);
      req.body = validated;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
          code: err.code,
        }));

        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: formattedErrors,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Validation error",
      });
    }
  };
}

/**
 * Validate query parameters
 */
export function validateQuery(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.parseAsync(req.query);
      req.query = validated as any;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const formattedErrors = error.issues.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }));

        return res.status(400).json({
          success: false,
          message: "Query validation failed",
          errors: formattedErrors,
        });
      }

      return res.status(500).json({
        success: false,
        message: "Query validation error",
      });
    }
  };
}

/**
 * Validate path parameters
 */
export function validateParams(schema: ZodSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await schema.parseAsync(req.params);
      req.params = validated as any;
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid parameters",
          errors: error.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        });
      }

      return res.status(500).json({
        success: false,
        message: "Parameter validation error",
      });
    }
  };
}

/**
 * Honeypot protection - flag suspicious form submissions
 * Used for quick request and contact forms
 */
export function honeypotProtection(req: Request, res: Response, next: NextFunction) {
  // If 'website' field has value, it's likely a bot (honeypot field)
  if (req.body?.website && req.body.website !== "") {
    // Return success to fool bots, but don't process the request
    return res.status(200).json({
      success: true,
      message: "Request received",
    });
  }

  next();
}

/**
 * Sanitize HTML and dangerous characters
 */
export function sanitizeInputs(req: Request, res: Response, next: NextFunction) {
  const sanitizeString = (str: string): string => {
    if (typeof str !== "string") return str;
    // Remove HTML tags
    return str
      .replace(/<[^>]*>/g, "")
      .trim()
      .slice(0, 1000);
  };

  const sanitizeObject = (obj: any): any => {
    if (Array.isArray(obj)) {
      return obj.map(sanitizeObject);
    }

    if (obj !== null && typeof obj === "object") {
      const sanitized: any = {};
      for (const [key, value] of Object.entries(obj)) {
        sanitized[key] = sanitizeObject(value);
      }
      return sanitized;
    }

    if (typeof obj === "string") {
      return sanitizeString(obj);
    }

    return obj;
  };

  req.body = sanitizeObject(req.body);
  next();
}

/**
 * CSRF Token validation middleware
 * Can be implemented with a CSRF token library
 */
export function csrfTokenValidation(req: Request, res: Response, next: NextFunction) {
  // For POST/PUT/DELETE/PATCH requests
  if (["POST", "PUT", "DELETE", "PATCH"].includes(req.method)) {
    const csrfToken = req.headers["x-csrf-token"] as string;

    // Validate CSRF token (implement with your chosen CSRF library)
    // For now, just logging - implement with csrf package
    if (!csrfToken) {
      console.warn("Missing CSRF token for", req.method, req.path);
      // Optionally reject: return res.status(403).json({ error: "Missing CSRF token" });
    }
  }

  next();
}
