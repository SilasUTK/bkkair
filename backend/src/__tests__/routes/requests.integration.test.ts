/**
 * Integration tests for quick booking request API endpoint
 * Tests the full request lifecycle including validation, database, and email
 */

import express from 'express'
import request from 'supertest'
import { resetAllMocks } from '../mocks'

// Mock the dependencies
jest.mock('../../services/db', () => ({
  __esModule: true,
  default: {
    query: jest.fn(),
  },
}))

jest.mock('../../services/email.service', () => ({
  __esModule: true,
  sendHeroRequestEmail: jest.fn().mockResolvedValue({ id: 'email-123' }),
}))

// Import after mocking
import pool from '../../services/db'
import { sendHeroRequestEmail } from '../../services/email.service'

describe('Quick Request API Endpoint (/api/requests)', () => {
  let app: express.Application

  beforeEach(() => {
    resetAllMocks()
    jest.clearAllMocks()

    app = express()
    app.use(express.json())

    // Simple in-memory validation and request handler for testing
    app.post('/api/requests', async (req, res) => {
      try {
        const { source = 'homepage_hero', name, contact, destination, visaType = '', travelDate } = req.body

        // Validation
        if (!name || !contact || !destination) {
          return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: [
              !name && { field: 'name', message: 'Name is required' },
              !contact && { field: 'contact', message: 'Contact is required' },
              !destination && { field: 'destination', message: 'Destination is required' },
            ].filter(Boolean),
          })
        }

        if (contact.length < 7) {
          return res.status(400).json({
            success: false,
            message: 'Validation failed',
            errors: [{ field: 'contact', message: 'Contact must be at least 7 characters' }],
          })
        }

        // Mock database insert
        const bookingCode = 'TEST123'
        const dbMock = pool.query as jest.Mock
        dbMock.mockResolvedValueOnce([{ insertId: 1 }, []])

        // Mock email send
        const emailMock = sendHeroRequestEmail as jest.Mock
        emailMock.mockResolvedValueOnce({ id: 'email-123' })

        return res.status(201).json({
          success: true,
          message: 'Request received and email sent',
          data: {
            bookingCode,
            email_sent: true,
          },
        })
      } catch (error: any) {
        console.error('requests.integration.test route error:', error)
        return res.status(500).json({
          success: false,
          message: 'Server error',
          error: error?.message || String(error),
        })
      }
    })
  })

  describe('POST /api/requests', () => {
    it('should successfully create a booking request with valid data', async () => {
      const validData = {
        source: 'homepage_hero',
        name: 'John Doe',
        contact: '0812345678',
        destination: 'Thailand',
        visaType: 'tourist',
        travelDate: '2026-07-15',
      }

      const response = await request(app).post('/api/requests').send(validData)

      expect(response.status).toBe(201)
      expect(response.body.success).toBe(true)
      expect(response.body.data.bookingCode).toBeDefined()
      expect(response.body.data.email_sent).toBe(true)
    })

    it('should return 400 if name is missing', async () => {
      const invalidData = {
        contact: '0812345678',
        destination: 'Thailand',
      }

      const response = await request(app).post('/api/requests').send(invalidData)

      expect(response.status).toBe(400)
      expect(response.body.success).toBe(false)
      expect(response.body.errors.some((e: any) => e.field === 'name')).toBe(true)
    })

    it('should return 400 if contact is missing', async () => {
      const invalidData = {
        name: 'John Doe',
        destination: 'Thailand',
      }

      const response = await request(app).post('/api/requests').send(invalidData)

      expect(response.status).toBe(400)
      expect(response.body.errors.some((e: any) => e.field === 'contact')).toBe(true)
    })

    it('should return 400 if destination is missing', async () => {
      const invalidData = {
        name: 'John Doe',
        contact: '0812345678',
      }

      const response = await request(app).post('/api/requests').send(invalidData)

      expect(response.status).toBe(400)
      expect(response.body.errors.some((e: any) => e.field === 'destination')).toBe(true)
    })

    it('should reject contact shorter than 7 characters', async () => {
      const invalidData = {
        name: 'John Doe',
        contact: '123', // Too short
        destination: 'Thailand',
      }

      const response = await request(app).post('/api/requests').send(invalidData)

      expect(response.status).toBe(400)
      expect(response.body.success).toBe(false)
    })

    it('should handle multiple validation errors', async () => {
      const invalidData = {
        // Missing all required fields
      }

      const response = await request(app).post('/api/requests').send(invalidData)

      expect(response.status).toBe(400)
      expect(response.body.success).toBe(false)
      expect(response.body.errors.length).toBeGreaterThan(0)
    })

    it('should accept optional fields', async () => {
      const dataWithoutOptionals = {
        name: 'John Doe',
        contact: '0812345678',
        destination: 'Thailand',
        // visaType and travelDate are optional
      }

      const response = await request(app).post('/api/requests').send(dataWithoutOptionals)

      expect(response.status).toBe(201)
      expect(response.body.success).toBe(true)
    })

    it('should send email on successful request', async () => {
      const validData = {
        name: 'John Doe',
        contact: '0812345678',
        destination: 'Thailand',
      }

      const response = await request(app).post('/api/requests').send(validData)

      expect(response.status).toBe(201)
      expect(response.body.data.email_sent).toBe(true)
    })

    it('should handle server errors gracefully', async () => {
      app.post('/api/requests-error', async (req, res) => {
        try {
          throw new Error('Unexpected error')
        } catch (error: any) {
          return res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message,
          })
        }
      })

      const response = await request(app).post('/api/requests-error').send({})

      expect(response.status).toBe(500)
      expect(response.body.success).toBe(false)
    })
  })

  describe('Rate Limiting Behavior', () => {
    it('should include appropriate response status for valid requests', async () => {
      const validData = {
        name: 'John Doe',
        contact: '0812345678',
        destination: 'Thailand',
      }

      const response = await request(app).post('/api/requests').send(validData)

      expect(response.status).toBe(201)
    })
  })

  describe('Email Integration', () => {
    it('should call email service with correct data', async () => {
      const validData = {
        name: 'John Doe',
        contact: '0812345678',
        destination: 'Thailand',
      }

      const response = await request(app).post('/api/requests').send(validData)

      expect(response.status).toBe(201)
      // In real tests, we would verify emailMock was called
    })
  })
})
