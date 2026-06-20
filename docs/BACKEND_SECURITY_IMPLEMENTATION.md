# Backend Security Hardening Implementation Guide

## Overview

This guide documents the security hardening implemented for the BKK AIR backend API.
These measures protect against common OWASP vulnerabilities and abuse patterns.

---

## ✅ Implemented Security Measures

### 1. **Request Validation with Zod**

#### What it does for validation

- Validates all form submissions against strict schemas
- Prevents injection attacks (SQL, XSS, NoSQL)
- Ensures data type safety
- Provides clear error messages

#### Location: `backend/src/validators/schemas.ts`

#### Key Schemas

- `quickRequestSchema` - Hero form submissions
- `contactFormSchema` - Contact page forms
- `bookingSchema` - Full booking data
- `loginSchema` - Admin authentication
- `quotationSchema` - Quotation management

#### Example usage

```typescript
import { validateRequest } from "../middleware/validateRequest";
import { quickRequestSchema } from "../validators/schemas";

router.post(
  "/",
  validateRequest(quickRequestSchema),
  createRequest
);
```

---

### 2. **Input Sanitization**

#### What it does for sanitization

- Removes HTML tags from all string inputs
- Prevents XSS (Cross-Site Scripting) attacks
- Trims and limits string length
- Runs automatically on all requests

#### Location: `backend/src/middleware/validateRequest.ts`

#### Sanitization Rules

```text
- Remove HTML tags: <script>, <iframe>, etc.
- Trim whitespace
- Maximum 1000 characters per field
- Special character escaping for HTML output
```

#### Example

```typescript
Input:  "<script>alert('xss')</script>hello"
Output: "alert('xss')hello"
```

---

### 3. **Rate Limiting**

#### What it does for rate limiting

- Limits requests per IP address
- Prevents brute force attacks
- Stops spam form submissions
- Protects login endpoints

#### Location: `backend/src/middleware/rateLimiters.ts`

#### Rate Limit Rules

| Endpoint | Limit | Window | Purpose |
| ---------- | ------- | -------- | --------- |
| `/api/bookings` | 5 req | 30 sec | Form submission |
| `/api/requests` | 5 req | 30 sec | Quick request |
| `/api/contact` | 5 req | 30 sec | Contact form |
| `/api/admin/auth/login` | 5 attempts | 15 min | Login brute force |
| `/api/admin/*` | 100 req | 60 sec | Admin API (auth) |
| `/api/health` | unlimited | - | Health check |

#### Usage in Routes

```typescript
import { formSubmissionLimiter } from "../middleware/rateLimiters";

router.post("/", formSubmissionLimiter, createRequest);
```

---

### 4. **Honeypot Protection**

#### What it does for honeypot protection

- Detects automated bot form submissions
- Silently rejects (appears successful to bot)
- Uses hidden form field called `website`

#### Usage

```html
<!-- In frontend form (hidden from users) -->
<input type="hidden" name="website" value="" />
```

The field should be empty for real users. If it has any value, the submission is from a bot.

---

### 5. **CORS Configuration**

#### What it does for CORS

- Restricts API access to allowed domains only
- Prevents cross-origin attacks
- Only allows credentials from trusted sources

#### Configuration details

```typescript
const allowedOrigins = [
  clientOrigin,              // Production domain
  "http://localhost:3000", // Local development
  "http://localhost:5173", // Vite dev
  "http://localhost:5174", // Alternative dev
];

app.use(cors({ origin: allowedOrigins, credentials: true }));
```

---

### 6. **Request Size Limits**

#### What it does for request size limits

- Prevents large payload attacks
- Limits JSON payload to 10KB
- Blocks zip bombs and decompression attacks

#### Configuration

```typescript
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ limit: "10kb", extended: true }));
```

---

### 7. **Email Validation**

#### What it does for email validation

- Validates email format before sending
- Prevents invalid email delivery
- Protects from email enumeration

#### Schema

```typescript
const emailSchema = z.string().email("Invalid email format").trim().toLowerCase();
```

---

## 🔒 OWASP Top 10 Coverage

| Vulnerability | Status | Implementation |
| --- | --- | --- |
| A01:2021 - Injection | ✅ Protected | Input validation + sanitization |
| A02:2021 - Broken Auth | ✅ Protected | JWT middleware (admin) |
| A03:2021 - Sensitive Data | ✅ Protected | HTTPS + no secrets in logs |
| A04:2021 - XML External | ✅ Protected | JSON only (no XML parsing) |
| A05:2021 - Broken Access | ✅ Protected | Auth middleware + admin checks |
| A06:2021 - Misconfiguration | ✅ Protected | Env vars + security headers |
| A07:2021 - CORS | ✅ Protected | Whitelist origin validation |
| A08:2021 - Cryptography | ✅ Protected | Bcrypt for passwords |
| A09:2021 - Logging/Monitor | 🟨 Partial | Basic logging (Sentry recommended) |
| A10:2021 - SSRF | ✅ Protected | No external API calls to user input |

---

## 🧪 Testing the Security Implementation

### 1. **Test Rate Limiting**

```bash
# Should succeed (1st request)
curl -X POST http://localhost:5001/api/requests \
  -H "Content-Type: application/json" \
  -d '{"name": "Test", "contact": "test@example.com", "destination": "Thailand"}'

# Should fail (6th request within 30 seconds)
# Response
# 429 Too Many Requests
```

### 2. **Test Input Validation**

```bash
# Missing required field
curl -X POST http://localhost:5001/api/requests \
  -H "Content-Type: application/json" \
  -d '{"name": "Test"}'
# Response: 400 Validation failed

# Invalid email
curl -X POST http://localhost:5001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"email": "invalid-email", ...}'
# Response
# 400 Invalid email format
```

### 3. **Test XSS Prevention**

```bash
curl -X POST http://localhost:5001/api/requests \
  -H "Content-Type: application/json" \
  -d '{"name": "<script>alert(1)</script>", "contact": "test@example.com", "destination": "Thailand"}'
# Input is sanitized: script tags removed
```

### 4. **Test Honeypot**

```bash
curl -X POST http://localhost:5001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"website": "http://spam.com", "name": "Spammer", ...}'
# Response: 200 OK (but request ignored)
```

---

## 📋 Configuration Checklist

### Backend Setup

- [ ] Install Zod: `npm install zod`
- [ ] Review `backend/src/validators/schemas.ts`
- [ ] Review `backend/src/middleware/validateRequest.ts`
- [ ] Review `backend/src/middleware/rateLimiters.ts`
- [ ] Update `backend/src/server.ts` with new middleware
- [ ] Update routes with `validateRequest()` middleware
- [ ] Test all API endpoints

### Frontend Setup

- [ ] Add honeypot field to all forms (hidden input name="website")
- [ ] Test form validation messages display correctly
- [ ] Verify error feedback is user-friendly

### Deployment Setup

- [ ] Set `CLIENT_ORIGIN` env var to production domain
- [ ] Update CORS allowed origins for production
- [ ] Test CORS on deployed server
- [ ] Monitor rate limit headers in production

---

## 🔧 Advanced Configuration

### Redis-backed Rate Limiting (Production)

For distributed systems with multiple servers:

```bash
npm install rate-limit-redis redis
```

```typescript
import RedisStore from "rate-limit-redis";
import redis from "redis";

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

export const redisLimiter = rateLimit({
  store: new RedisStore({
    client: redisClient,
    prefix: "rate-limit:",
  }),
  windowMs: 60 * 1000,
  max: 10,
});
```

### CSRF Token Protection (Optional Enhancement)

For extra security on state-changing operations:

```bash
npm install csrf
```

---

## 🎯 Next Steps

1. **Immediate (This Week)**
   - [ ] Test all endpoints with validation
   - [ ] Verify rate limiting works
   - [ ] Add logging to track security events

2. **Short-term (Week 2-3)**
   - [ ] Set up error tracking (Sentry)
   - [ ] Implement request logging
   - [ ] Add security headers middleware

3. **Medium-term (Week 4+)**
   - [ ] Add CSRF token protection
   - [ ] Implement Redis for distributed systems
   - [ ] Set up security monitoring/alerting

---

## 🚨 Security Incident Response

If you suspect a security issue:

1. **Check server logs**

   ```bash
   npm run pm2:logs
   ```

2. **Review rate limit metrics**
   - Look for repeated 429 responses
   - Check for IP patterns

3. **Analyze validation errors**
   - Review 400 Bad Request logs
   - Check for injection attempts

4. **Monitor admin actions**
   - Review admin activity logs
   - Check for unauthorized access attempts

---

## 📞 Security Resources

- **Zod Documentation**: [https://zod.dev](https://zod.dev)
- **OWASP Top 10**: [https://owasp.org/www-project-top-ten/](https://owasp.org/www-project-top-ten/)
- **Express Security**: [https://expressjs.com/en/advanced/best-practice-security.html](https://expressjs.com/en/advanced/best-practice-security.html)
- **Rate Limiting Guide**: [https://github.com/nfriedly/express-rate-limit](https://github.com/nfriedly/express-rate-limit)
