/**
 * Test utilities for mocking database and external services
 */

// Mock database connection
export const mockDb = {
  query: jest.fn(),
  execute: jest.fn(),
  release: jest.fn(),
};

export const mockPool = {
  query: jest.fn(),
  execute: jest.fn(),
  end: jest.fn(),
};

// Mock Resend email service
export const mockResend = {
  emails: {
    send: jest.fn().mockResolvedValue({
      id: 'test-email-id-12345',
      from: 'noreply@bkkair.com',
      to: 'test@example.com',
      created_at: new Date().toISOString(),
    }),
  },
};

// Mock request object
export function createMockRequest(overrides = {}) {
  return {
    body: {},
    params: {},
    query: {},
    headers: {
      'content-type': 'application/json',
    },
    method: 'GET',
    url: '/',
    ip: '127.0.0.1',
    ...overrides,
  };
}

// Mock response object
export function createMockResponse() {
  const res: any = {
    statusCode: 200,
    status: jest.fn(function (code: number) {
      this.statusCode = code;
      return this;
    }),
    json: jest.fn(function (data: any) {
      this.jsonData = data;
      return this;
    }),
    send: jest.fn(function (data: any) {
      this.sendData = data;
      return this;
    }),
    setHeader: jest.fn(),
    end: jest.fn(),
  };
  return res;
}

// Mock next function
export const mockNext = jest.fn();

// Helper to reset all mocks
export function resetAllMocks() {
  jest.clearAllMocks();
  mockPool.query.mockClear();
  mockResend.emails.send.mockClear();
  mockNext.mockClear();
}

// Helper to setup successful database response
export function setupDatabaseMock(data: any[] = []) {
  mockPool.query.mockResolvedValue([data, []]);
}

// Helper to setup failed database response
export function setupDatabaseError(error: Error) {
  mockPool.query.mockRejectedValue(error);
}

// Helper to setup email service success
export function setupEmailMockSuccess(emailId = 'test-email-12345') {
  mockResend.emails.send.mockResolvedValue({
    id: emailId,
    from: 'noreply@bkkair.com',
    to: 'test@example.com',
    created_at: new Date().toISOString(),
  });
}

// Helper to setup email service failure
export function setupEmailMockError(error: Error) {
  mockResend.emails.send.mockRejectedValue(error);
}

// Helper to get the last call arguments
export function getLastMockCall(mockFn: jest.Mock) {
  const calls = mockFn.mock.calls;
  return calls.length > 0 ? calls[calls.length - 1] : null;
}
