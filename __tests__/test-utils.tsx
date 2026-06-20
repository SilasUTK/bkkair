/**
 * Frontend test utilities and mock helpers
 */

import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }

// Mock fetch for API calls
export function mockFetch(response: any, status = 200) {
  global.fetch = jest.fn().mockResolvedValueOnce({
    status,
    json: jest.fn().mockResolvedValueOnce(response),
    ok: status >= 200 && status < 300,
  })
}

export function mockFetchError(error: string) {
  global.fetch = jest.fn().mockRejectedValueOnce(new Error(error))
}

// Reset fetch mock
export function resetFetchMock() {
  jest.clearAllMocks()
}

// Mock form data
export const mockFormData = {
  validHeroRequest: {
    name: 'John Doe',
    contact: '0812345678',
    destination: 'Thailand',
    visaType: 'tourist',
    travelDate: '2026-07-15',
  },
  validContactForm: {
    full_name: 'Jane Smith',
    email: 'jane@example.com',
    contact_detail: '0812345678',
    destination: 'Schengen',
    visa_type: 'business',
  },
  invalidEmail: {
    email: 'invalid-email',
  },
  missingName: {
    contact: '0812345678',
    destination: 'Thailand',
  },
}
