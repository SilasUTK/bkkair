import rateLimit from "express-rate-limit";
// import RedisStore from "rate-limit-redis";
// import redis from "redis";

/**
 * Rate limiting configurations for BKK AIR API
 * Protects against brute force attacks, DoS, and abuse
 */

// Optional Redis store for distributed rate limiting (production)
// const redisClient = redis.createClient({
//   host: process.env.REDIS_HOST || "localhost",
//   port: Number(process.env.REDIS_PORT || 6379),
// });

/**
 * General API rate limit (10 requests per 60 seconds)
 * Applies to most public endpoints
 */
export const generalApiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10,
  message: {
    success: false,
    error: "Too many requests from this IP, please try again later.",
  },
  statusCode: 429,
  standardHeaders: true, // Return rate limit info in `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
  skip: (req) => {
    // Skip rate limiting for health check
    return req.path === "/api/health";
  },
});

/**
 * Form submission rate limit (5 requests per 30 seconds)
 * Stricter limit for form submissions to prevent spam
 */
export const formSubmissionLimiter = rateLimit({
  windowMs: 30 * 1000, // 30 seconds
  max: 5,
  message: {
    success: false,
    error: "Too many form submissions. Please wait before submitting again.",
  },
  statusCode: 429,
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    // Use combination of IP + email (if available) to prevent spam from same email
    return `${req.ip || "unknown"}-${req.body?.email || req.body?.contact || "unknown"}`;
  },
});

/**
 * Login rate limit (5 attempts per 15 minutes)
 * Protects admin login from brute force attacks
 */
export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: {
    success: false,
    error: "Too many login attempts. Please try again in 15 minutes.",
  },
  statusCode: 429,
  standardHeaders: true,
  legacyHeaders: false,
  skip: (req) => {
    // Skip for GET requests
    return req.method !== "POST";
  },
});

/**
 * API endpoint-specific limiter (20 requests per 60 seconds)
 * Used for endpoints that need higher throughput
 */
export const apiEndpointLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  message: {
    success: false,
    error: "Too many requests to this endpoint.",
  },
  statusCode: 429,
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * File upload rate limit (3 files per 5 minutes)
 * Protects against upload abuse
 */
export const uploadLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 3,
  message: {
    success: false,
    error: "Too many file uploads. Please wait before uploading again.",
  },
  statusCode: 429,
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Admin API rate limit (100 requests per 60 seconds)
 * Higher limit for authenticated admin users
 */
export const adminApiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: {
    success: false,
    error: "Too many admin API requests.",
  },
  statusCode: 429,
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Email verification rate limit (3 attempts per hour)
 * Prevents email enumeration attacks
 */
export const emailVerificationLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  message: {
    success: false,
    error: "Too many email verification attempts. Please try again later.",
  },
  statusCode: 429,
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Password reset rate limit (3 attempts per hour)
 * Prevents password reset abuse
 */
export const passwordResetLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 3,
  message: {
    success: false,
    error: "Too many password reset attempts. Please try again later.",
  },
  statusCode: 429,
  standardHeaders: true,
  legacyHeaders: false,
});

/**
 * Redis-backed rate limiter (production)
 * For distributed systems with multiple servers
 * Uncomment and configure when using Redis
 */
// export const redisLimiter = rateLimit({
//   store: new RedisStore({
//     client: redisClient,
//     prefix: "rate-limit:",
//   }),
//   windowMs: 60 * 1000,
//   max: 10,
//   message: "Too many requests from this IP",
//   standardHeaders: true,
//   legacyHeaders: false,
// });
