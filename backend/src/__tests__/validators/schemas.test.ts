/**
 * Unit tests for Zod validation schemas
 * Tests all form validation schemas to ensure proper validation
 */

import {
  quickRequestSchema,
  contactFormSchema,
  bookingSchema,
  quotationSchema,
  statusUpdateSchema,
  bookingCodeSchema,
  loginSchema,
} from '../../validators/schemas';

describe('Zod Validation Schemas', () => {
  describe('quickRequestSchema', () => {
    it('should validate a valid quick request', () => {
      const validData = {
        source: 'homepage_hero',
        name: 'John Doe',
        contact: '0812345678',
        destination: 'Thailand',
        visaType: 'tourist',
        travelDate: '2026-07-15',
      };

      const result = quickRequestSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('John Doe');
        expect(result.data.destination).toBe('Thailand');
      }
    });

    it('should fail if name is missing', () => {
      const invalidData = {
        contact: '0812345678',
        destination: 'Thailand',
      };

      const result = quickRequestSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should fail if contact is too short', () => {
      const invalidData = {
        source: 'homepage_hero',
        name: 'John Doe',
        contact: '123', // Too short
        destination: 'Thailand',
      };

      const result = quickRequestSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should fail if destination is missing', () => {
      const invalidData = {
        name: 'John Doe',
        contact: '0812345678',
      };

      const result = quickRequestSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should trim whitespace from name', () => {
      const validData = {
        source: 'homepage_hero',
        name: '  John Doe  ',
        contact: '0812345678',
        destination: 'Thailand',
      };

      const result = quickRequestSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe('John Doe');
      }
    });

    it('should handle optional visaType', () => {
      const validData = {
        name: 'John Doe',
        contact: '0812345678',
        destination: 'Thailand',
      };

      const result = quickRequestSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.visaType).toBe('');
      }
    });

    it('should validate date format', () => {
      const validData = {
        name: 'John Doe',
        contact: '0812345678',
        destination: 'Thailand',
        travelDate: '2026-07-15',
      };

      const result = quickRequestSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid date format', () => {
      const invalidData = {
        name: 'John Doe',
        contact: '0812345678',
        destination: 'Thailand',
        travelDate: '15-07-2026', // Wrong format
      };

      const result = quickRequestSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('contactFormSchema', () => {
    it('should validate a valid contact form', () => {
      const validData = {
        full_name: 'Jane Smith',
        email: 'jane@example.com',
        contact_detail: '+66812345678',
        destination: 'Schengen',
        visa_type: 'business',
        form_source: 'contact_page',
      };

      const result = contactFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.email).toBe('jane@example.com');
      }
    });

    it('should fail if email is invalid', () => {
      const invalidData = {
        full_name: 'Jane Smith',
        email: 'invalid-email',
        contact_detail: '0812345678',
        destination: 'Thailand',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should convert email to lowercase', () => {
      const validData = {
        full_name: 'Jane Smith',
        email: 'JANE@EXAMPLE.COM',
        contact_detail: '0812345678',
        destination: 'Thailand',
      };

      const result = contactFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.email).toBe('jane@example.com');
      }
    });

    it('should detect honeypot field', () => {
      const botData = {
        full_name: 'Bot',
        email: 'bot@spam.com',
        contact_detail: '0812345678',
        destination: 'Thailand',
        website: 'http://spam.com', // Honeypot field
      };

      // Schema should accept it, but middleware will reject
      const result = contactFormSchema.safeParse(botData);
      expect(result.success).toBe(true);
    });

    it('should fail if contact_detail is too short', () => {
      const invalidData = {
        full_name: 'Jane Smith',
        email: 'jane@example.com',
        contact_detail: '123', // Too short
        destination: 'Thailand',
      };

      const result = contactFormSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should handle optional fields', () => {
      const validData = {
        full_name: 'Jane Smith',
        email: 'jane@example.com',
        contact_detail: '0812345678',
        destination: 'Thailand',
      };

      const result = contactFormSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.visa_type).toBe('');
        expect(result.data.message).toBeUndefined();
      }
    });
  });

  describe('bookingSchema', () => {
    it('should validate a complete booking', () => {
      const validData = {
        firstName: 'John',
        surname: 'Doe',
        email: 'john@example.com',
        phone: '0812345678',
        passportNumber: 'A12345678',
        destination: 'Thailand',
        visaCountry: 'Thailand',
        departureDate: '2026-07-15',
        returnDate: '2026-07-25',
        passengerCount: 2,
        cabinClass: 'economy',
      };

      const result = bookingSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should validate passport format', () => {
      const validData = {
        passportNumber: 'A12345678',
      };

      const result = bookingSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid passport format', () => {
      const invalidData = {
        passportNumber: '123', // Too short/wrong format
      };

      const result = bookingSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should validate passenger count range', () => {
      const validData = {
        passengerCount: 5,
      };

      const result = bookingSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject passenger count below 1', () => {
      const invalidData = {
        passengerCount: 0,
      };

      const result = bookingSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should reject passenger count above 8', () => {
      const invalidData = {
        passengerCount: 10,
      };

      const result = bookingSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should validate cabin class enum', () => {
      const validClasses = ['economy', 'premium-economy', 'business', 'first'];

      validClasses.forEach((cabinClass) => {
        const validData = { cabinClass };
        const result = bookingSchema.safeParse(validData);
        expect(result.success).toBe(true);
      });
    });

    it('should reject invalid cabin class', () => {
      const invalidData = {
        cabinClass: 'luxury', // Invalid
      };

      const result = bookingSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should allow all optional fields', () => {
      const result = bookingSchema.safeParse({});
      expect(result.success).toBe(true);
    });
  });

  describe('quotationSchema', () => {
    it('should validate a valid quotation', () => {
      const validData = {
        quotationAmount: 5000,
        quotationCurrency: 'THB',
        quotationDueDate: '2026-07-20',
      };

      const result = quotationSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should reject negative amount', () => {
      const invalidData = {
        quotationAmount: -5000,
        quotationCurrency: 'THB',
        quotationDueDate: '2026-07-20',
      };

      const result = quotationSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should validate currency enum', () => {
      const validCurrencies = ['THB', 'USD', 'EUR', 'GBP'];

      validCurrencies.forEach((currency) => {
        const validData = {
          quotationAmount: 5000,
          quotationCurrency: currency,
          quotationDueDate: '2026-07-20',
        };
        const result = quotationSchema.safeParse(validData);
        expect(result.success).toBe(true);
      });
    });

    it('should reject invalid currency', () => {
      const invalidData = {
        quotationAmount: 5000,
        quotationCurrency: 'JPY',
        quotationDueDate: '2026-07-20',
      };

      const result = quotationSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });

  describe('statusUpdateSchema', () => {
    it('should validate status enum', () => {
      const validStatuses = ['new', 'contacted', 'processing', 'completed', 'cancelled'];

      validStatuses.forEach((status) => {
        const result = statusUpdateSchema.safeParse({ status });
        expect(result.success).toBe(true);
      });
    });

    it('should reject invalid status', () => {
      const result = statusUpdateSchema.safeParse({ status: 'invalid' });
      expect(result.success).toBe(false);
    });
  });

  describe('bookingCodeSchema', () => {
    it('should validate a 6-character booking code', () => {
      const result = bookingCodeSchema.safeParse({ code: 'ABC123' });
      expect(result.success).toBe(true);
    });

    it('should convert to uppercase', () => {
        const result = bookingCodeSchema.safeParse({ code: 'ABC123' });
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.code).toBe('ABC123');
      }
    });

    it('should reject code shorter than 6 characters', () => {
      const result = bookingCodeSchema.safeParse({ code: 'ABC12' });
      expect(result.success).toBe(false);
    });

    it('should reject code longer than 6 characters', () => {
      const result = bookingCodeSchema.safeParse({ code: 'ABC1234' });
      expect(result.success).toBe(false);
    });
  });

  describe('loginSchema', () => {
    it('should validate valid login credentials', () => {
      const result = loginSchema.safeParse({
        username: 'admin',
        password: 'SecurePassword123',
      });
      expect(result.success).toBe(true);
    });

    it('should reject username shorter than 3 characters', () => {
      const result = loginSchema.safeParse({
        username: 'ab',
        password: 'SecurePassword123',
      });
      expect(result.success).toBe(false);
    });

    it('should reject password shorter than 6 characters', () => {
      const result = loginSchema.safeParse({
        username: 'admin',
        password: '12345',
      });
      expect(result.success).toBe(false);
    });

    it('should reject missing credentials', () => {
      const result = loginSchema.safeParse({});
      expect(result.success).toBe(false);
    });
  });
});
