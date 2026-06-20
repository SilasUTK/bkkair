import { z } from "zod";

/**
 * Zod schemas for form validation and API request validation
 * Ensures data integrity and prevents injection attacks
 */

// Common field schemas
const emailSchema = z.string().email("Invalid email format").trim().toLowerCase();
const phoneSchema = z.string().regex(/^\+?[\d\s\-()]{7,20}$/, "Invalid phone format").trim();
const nameSchema = z.string().min(2, "Name must be at least 2 characters").max(191, "Name too long").trim();
const dateSchema = z.string().datetime().or(z.string().regex(/^\d{4}-\d{2}-\d{2}$/));
const passengerCountSchema = z.number().int().min(1, "At least 1 passenger required").max(8, "Maximum 8 passengers allowed");

// Quick Request / Hero Form Schema (Frontend submission)
export const quickRequestSchema = z.object({
  source: z.string().default("homepage_hero").refine((val) => ["homepage_hero", "package_form", "faq_link"].includes(val)),
  name: nameSchema,
  contact: z.string().min(7, "Contact must be at least 7 characters").max(191),
  destination: z.string().min(2, "Destination is required").max(191),
  visaType: z.string().optional().default(""),
  travelDate: dateSchema.optional(),
});

export type QuickRequestInput = z.infer<typeof quickRequestSchema>;

// Contact Form Schema (Homepage contact form)
export const contactFormSchema = z.object({
  full_name: nameSchema,
  email: emailSchema,
  contact_detail: z.string().min(7, "Contact detail required").max(191),
  destination: z.string().min(2, "Destination required").max(191),
  visa_type: z.string().optional().default(""),
  travel_date: dateSchema.optional(),
  form_source: z.string().default("contact_page").refine((val) => ["contact_page", "homepage_hero"].includes(val)),
  website: z.string().optional().default(""), // Honeypot field
  message: z.string().max(2000, "Message too long").optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

// Full Booking Schema (Admin/Customer Portal)
export const bookingSchema = z.object({
  title: z.string().optional(),
  firstName: z.string().optional(),
  surname: z.string().optional(),
  customerName: nameSchema.optional(),
  email: emailSchema.optional(),
  phone: phoneSchema.optional(),
  lineId: z.string().max(191).optional(),
  passportNumber: z.string().regex(/^[A-Z0-9]{6,20}$/, "Invalid passport format").optional(),
  dateOfBirth: dateSchema.optional(),
  passportExpiryDate: dateSchema.optional(),
  origin: z.string().max(191).optional(),
  destination: z.string().max(191).optional(),
  visaCountry: z.string().max(191).optional(),
  departureDate: dateSchema.optional(),
  returnDate: dateSchema.optional(),
  serviceType: z.string().max(191).optional(),
  airline: z.string().max(191).optional(),
  preferredAirlines: z.string().max(191).optional(),
  cabinClass: z.enum(["economy", "premium-economy", "business", "first"]).optional(),
  passengerCount: passengerCountSchema.optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;

// Admin Notes Schema
export const adminNotesSchema = z.object({
  adminNotes: z.string().max(5000, "Notes too long").trim(),
});

export type AdminNotesInput = z.infer<typeof adminNotesSchema>;

// Quotation Schema
export const quotationSchema = z.object({
  quotationAmount: z.number().positive("Amount must be positive"),
  quotationCurrency: z.enum(["THB", "USD", "EUR", "GBP"]).default("THB"),
  quotationDueDate: dateSchema,
});

export type QuotationInput = z.infer<typeof quotationSchema>;

// Payment Info Schema
export const paymentSchema = z.object({
  paymentStatus: z.enum(["none", "pending_verification", "approved", "rejected"]),
  paymentRejectReason: z.string().max(500).optional(),
});

export type PaymentInput = z.infer<typeof paymentSchema>;

// Status Update Schema
export const statusUpdateSchema = z.object({
  status: z.enum(["new", "quoted", "payment_pending", "paid", "processing", "completed", "cancelled"]),
});

export type StatusUpdateInput = z.infer<typeof statusUpdateSchema>;

// Booking Code Query Schema
export const bookingCodeSchema = z.object({
  code: z.string().length(6, "Booking code must be 6 characters").uppercase(),
});

export type BookingCodeInput = z.infer<typeof bookingCodeSchema>;

// Login Schema
export const loginSchema = z.object({
  username: z.string().min(3, "Username required").max(100),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type LoginInput = z.infer<typeof loginSchema>;
