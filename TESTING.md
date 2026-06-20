# Testing Guide - BKK AIR

This guide explains how to run tests, write new tests, and understand the testing infrastructure for the BKK AIR project.

## Quick Start

### Run All Tests

```bash
# Backend tests
npm test --prefix backend

# Frontend tests
npm test

# Both (from root)
npm run test:all
```

### Run Tests in Watch Mode

```bash
# Backend
npm run test:watch --prefix backend

# Frontend
npm run test:watch
```

### Generate Coverage Reports

```bash
# Backend
npm run test:coverage --prefix backend

# Frontend
npm run test:coverage
```

## Testing Architecture

### Backend Testing

**Framework**: Jest + ts-jest + Supertest
**Environment**: Node.js
**Location**: `backend/src/__tests__/`

#### Test Suites

1. **Unit Tests**: `backend/src/__tests__/validators/schemas.test.ts`
   - Tests all Zod validation schemas
   - Verifies input validation, sanitization, and error handling
   - 40+ test cases covering 7 schemas

2. **Integration Tests**: `backend/src/__tests__/routes/api.integration.test.ts`
   - Tests API endpoint validation layers
   - Verifies request/response handling
   - Tests error scenarios

#### Mock Utilities

Located in `backend/src/__tests__/mocks/index.ts`:

```typescript
// Mock database
const mockDb = { query: jest.fn() }
mockDb.query.mockResolvedValueOnce([{ id: 1 }, []])

// Mock email service
const emailMock = jest.fn().mockResolvedValueOnce({ id: 'email-123' })

// Helper functions
resetAllMocks()
setupDatabaseMock(data)
setupEmailMockSuccess(emailId)
```

#### Writing Backend Tests

```typescript
import { customRender as render } from '@testing-library/react'

describe('Feature Name', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should do something', () => {
    const result = someFunction()
    expect(result).toBe(expected)
  })
})
```

### Frontend Testing

**Framework**: Jest + React Testing Library
**Environment**: jsdom (DOM simulation)
**Location**: `__tests__/components/`

#### Test Suites

1. **Component Tests**: `__tests__/components/HeroForm.test.tsx`
   - Tests React component rendering
   - Verifies user interactions
   - Tests form validation and submission
   - 70+ test cases

#### Writing Frontend Tests

```typescript
import { render, screen, userEvent } from '@testing-library/react'

describe('Component Name', () => {
  it('should render correctly', () => {
    render(<Component />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })

  it('should handle user input', async () => {
    const user = userEvent.setup()
    render(<Component />)

    await user.type(screen.getByRole('textbox'), 'input')
    expect(screen.getByRole('textbox')).toHaveValue('input')
  })
})
```

## Test Coverage

Current coverage status:

### Backend

- **Validators**: 100% (all schemas tested)
- **API Integration**: Core endpoints validated
- **Total**: 55 tests passing

### Frontend

- **Components**: HeroForm component fully tested
- **Total**: 73 tests passing

## Common Testing Patterns

### Testing Validation Schemas (Backend)

```typescript
describe('Schema Name', () => {
  it('should accept valid data', () => {
    const result = schema.safeParse(validData)
    expect(result.success).toBe(true)
  })

  it('should reject invalid data', () => {
    const result = schema.safeParse(invalidData)
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(result.error.issues).toHaveLength(1)
    }
  })
})
```

### Testing React Components (Frontend)

```typescript
describe('Component', () => {
  it('should render', () => {
    render(<Component />)
    expect(screen.getByTestId('component')).toBeInTheDocument()
  })

  it('should handle form submission', async () => {
    const mockSubmit = jest.fn()
    render(<Form onSubmit={mockSubmit} />)

    const button = screen.getByRole('button', { name: /submit/i })
    await userEvent.click(button)

    expect(mockSubmit).toHaveBeenCalled()
  })
})
```

### Mocking External Services

```typescript
jest.mock('../../services/email.service', () => ({
  sendEmail: jest.fn().mockResolvedValue({ id: 'test' })
}))

import { sendEmail } from '../../services/email.service'

it('should send email', async () => {
  await someFunction()
  expect(sendEmail).toHaveBeenCalledWith(expect.objectContaining({
    to: 'test@example.com'
  }))
})
```

## Configuration Files

### Backend Jest Config

- **File**: `backend/jest.config.js`
- **Environment**: node
- **Transform**: ts-jest for TypeScript support

### Frontend Jest Config

- **File**: `jest.config.js`
- **Environment**: jsdom (DOM simulation)
- **Presets**: next/jest for Next.js support

### TypeScript Config

- **Backend**: `backend/tsconfig.json` (includes jest types)
- **Frontend**: `tsconfig.json`

## Test Helpers

### Backend Mocks (`backend/src/__tests__/mocks/index.ts`)

```typescript
// Reset all mocks
resetAllMocks()

// Database mocking
setupDatabaseMock(data)
setupDatabaseError(error)

// Email service mocking
setupEmailMockSuccess(emailId)
setupEmailMockError(error)

// Get last mock call
getLastMockCall(mockFn)
```

### Frontend Test Utilities (`__tests__/test-utils.tsx`)

```typescript
// Custom render with providers
import { render } from '@testing-library/react'

// Mock API calls
mockFetch(response, status)
mockFetchError(error)
resetFetchMock()

// Test data
mockFormData.validHeroRequest
mockFormData.validContactForm
```

## Adding New Tests

### 1. Create Test File

```bash
# Backend
backend/src/__tests__/features/new-feature.test.ts

# Frontend
__tests__/components/NewComponent.test.tsx
```

### 2. Write Test Cases

Follow the existing test patterns in the codebase.

### 3. Run Tests

```bash
npm test
npm test:watch
```

### 4. Check Coverage

```bash
npm test:coverage
```

Aim for >80% coverage on new code.

## Debugging Tests

### Run Single Test File

```bash
npm test -- schemas.test.ts
```

### Run Single Test Suite

```bash
npm test -- --testNamePattern="should accept valid data"
```

### Debug Mode

```bash
node --inspect-brk node_modules/.bin/jest --runInBand
```

Then open `chrome://inspect` in Chrome DevTools.

### Verbose Output

```bash
npm test -- --verbose
```

## Continuous Integration

Tests run automatically on:

- Pull requests (via GitHub Actions)
- Commits to main branch
- Manual trigger via GitHub workflow

See `.github/workflows/test.yml` for CI configuration.

## Best Practices

1. **Test Names**: Use descriptive names that explain what's being tested

   ```typescript
   it('should reject email without @ symbol', () => {})
   ```

2. **Arrange-Act-Assert**: Structure tests clearly

   ```typescript
   // Arrange
   const input = 'test@example.com'

   // Act
   const result = validateEmail(input)

   // Assert
   expect(result).toBe(true)
   ```

3. **Mock External Dependencies**: Prevent side effects

   ```typescript
   jest.mock('../../services/db')
   jest.mock('../../services/email')
   ```

4. **Test Edge Cases**: Not just happy paths

   ```typescript
   // Valid case
   // Empty case
   // Boundary cases
   // Error cases
   ```

5. **Keep Tests Independent**: No interdependencies between tests

   ```typescript
   beforeEach(() => {
     jest.clearAllMocks()
   })
   ```

## Troubleshooting

### Tests Failing Unexpectedly

1. Check for mock setup issues
2. Verify dependencies are installed
3. Clear Jest cache: `npx jest --clearCache`
4. Check TypeScript errors: `npm run build`

### Slow Tests

1. Check for slow operations in mocks
2. Reduce test timeout if appropriate
3. Use `jest.useFakeTimers()` for time-based tests

### Import Errors

1. Verify path aliases in `tsconfig.json`
2. Check module resolution settings
3. Clear `.next` build cache

## Resources

- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [Zod Documentation](https://zod.dev/)
- [ts-jest](https://kulshekhar.github.io/ts-jest/)
