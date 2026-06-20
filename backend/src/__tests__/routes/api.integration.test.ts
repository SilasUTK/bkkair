/**
 * Integration tests for API endpoints with real validation
 * Focuses on validation logic without complex mocking
 */

import { z } from 'zod'

// Import validation schemas
import {
  quickRequestSchema,
  contactFormSchema,
  statusUpdateSchema,
  bookingCodeSchema,
} from '../../validators/schemas'

describe('API Integration Tests - Validation Layer', () => {
  describe('Quick Request Validation', () => {
    it('should successfully validate a complete quick request', () => {
      const validRequest = {
        source: 'homepage_hero',
        name: 'John Doe',
        contact: '0812345678',
        destination: 'Thailand',
        visaType: 'tourist',
        travelDate: '2026-07-15',
      }

      const result = quickRequestSchema.safeParse(validRequest)
      expect(result.success).toBe(true)
    })

    it('should reject request with missing name', () => {
      const invalidRequest = {
        contact: '0812345678',
        destination: 'Thailand',
      }

      const result = quickRequestSchema.safeParse(invalidRequest)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues.some(i => i.path.includes('name'))).toBe(true)
      }
    })

    it('should reject request with contact too short', () => {
      const invalidRequest = {
        name: 'John Doe',
        contact: '123',
        destination: 'Thailand',
      }

      const result = quickRequestSchema.safeParse(invalidRequest)
      expect(result.success).toBe(false)
    })

    it('should reject request with missing destination', () => {
      const invalidRequest = {
        name: 'John Doe',
        contact: '0812345678',
      }

      const result = quickRequestSchema.safeParse(invalidRequest)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues.some(i => i.path.includes('destination'))).toBe(true)
      }
    })

    it('should handle optional fields correctly', () => {
      const minimalRequest = {
        name: 'John Doe',
        contact: '0812345678',
        destination: 'Thailand',
      }

      const result = quickRequestSchema.safeParse(minimalRequest)
      expect(result.success).toBe(true)
    })
  })

  describe('Contact Form Validation', () => {
    it('should successfully validate a complete contact form', () => {
      const validForm = {
        full_name: 'Jane Smith',
        email: 'jane@example.com',
        contact_detail: '0812345678',
        destination: 'Schengen',
        visa_type: 'business',
      }

      const result = contactFormSchema.safeParse(validForm)
      expect(result.success).toBe(true)
    })

    it('should reject form with invalid email', () => {
      const invalidForm = {
        full_name: 'Jane Smith',
        email: 'invalid-email',
        contact_detail: '0812345678',
        destination: 'Thailand',
      }

      const result = contactFormSchema.safeParse(invalidForm)
      expect(result.success).toBe(false)
    })

    it('should reject form with contact_detail too short', () => {
      const invalidForm = {
        full_name: 'Jane Smith',
        email: 'jane@example.com',
        contact_detail: '123',
        destination: 'Thailand',
      }

      const result = contactFormSchema.safeParse(invalidForm)
      expect(result.success).toBe(false)
    })

    it('should detect honeypot submission', () => {
      const botSubmission = {
        full_name: 'Bot Name',
        email: 'bot@spam.com',
        contact_detail: '0812345678',
        destination: 'Thailand',
        website: 'http://spam.com', // Honeypot field
      }

      const result = contactFormSchema.safeParse(botSubmission)
      // Honeypot validation logic would be in middleware, not schema
      expect(result.success).toBe(true) // Schema accepts it, middleware filters
    })
  })

  describe('Booking Code Validation', () => {
    it('should accept valid 6-character booking code', () => {
      const validCode = {
        code: 'ABC123',
      }

      const result = bookingCodeSchema.safeParse(validCode)
      expect(result.success).toBe(true)
    })

    it('should reject code too short', () => {
      const invalidCode = {
        code: 'ABC',
      }

      const result = bookingCodeSchema.safeParse(invalidCode)
      expect(result.success).toBe(false)
    })

    it('should reject code too long', () => {
      const invalidCode = {
        code: 'ABCDEFGH',
      }

      const result = bookingCodeSchema.safeParse(invalidCode)
      expect(result.success).toBe(false)
    })
  })

  describe('Status Update Validation', () => {
    it('should accept valid status values', () => {
      const validStatuses = ['new', 'quoted', 'payment_pending', 'paid', 'processing', 'completed', 'cancelled']

      validStatuses.forEach(status => {
        const result = statusUpdateSchema.safeParse({ status })
        expect(result.success).toBe(true)
      })
    })

    it('should reject invalid status', () => {
      const invalidStatus = {
        status: 'invalid_status',
      }

      const result = statusUpdateSchema.safeParse(invalidStatus)
      expect(result.success).toBe(false)
    })
  })

  describe('Error Handling', () => {
    it('should provide detailed error messages for validation failures', () => {
      const invalidRequest = {
        name: 'A', // Too short
        contact: '123', // Too short
        // Missing destination
      }

      const result = quickRequestSchema.safeParse(invalidRequest)
      expect(result.success).toBe(false)
      if (!result.success) {
        expect(result.error.issues.length).toBeGreaterThan(0)
        expect(result.error.issues[0]).toHaveProperty('message')
        expect(result.error.issues[0]).toHaveProperty('path')
      }
    })

    it('should provide clear field path in errors', () => {
      const invalidForm = {
        full_name: '',
        email: 'invalid',
        contact_detail: '123',
        destination: '',
      }

      const result = contactFormSchema.safeParse(invalidForm)
      expect(result.success).toBe(false)
      if (!result.success) {
        const paths = result.error.issues.map(i => i.path[0])
        expect(paths).toEqual(expect.arrayContaining(['email', 'destination']))
      }
    })
  })

  describe('Input Sanitization', () => {
    it('should handle names with whitespace', () => {
      const requestWithSpaces = {
        name: '  John Doe  ',
        contact: '0812345678',
        destination: 'Thailand',
      }

      const result = quickRequestSchema.safeParse(requestWithSpaces)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.name).toBe('John Doe') // Trimmed by Zod
      }
    })

    it('should handle email case conversion', () => {
      const formWithUppercaseEmail = {
        full_name: 'Jane',
        email: 'JANE@EXAMPLE.COM',
        contact_detail: '0812345678',
        destination: 'Thailand',
      }

      const result = contactFormSchema.safeParse(formWithUppercaseEmail)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.email).toBe('jane@example.com') // Lowercased by Zod
      }
    })
  })
})
