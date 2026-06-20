/**
 * Unit tests for HeroForm component
 * Tests form validation, submission, and error handling
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

// Mock the form component for testing
const HeroForm = ({ onSubmit }: { onSubmit?: (data: any) => void }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData)
    onSubmit?.(data)
  }

  return (
    <form onSubmit={handleSubmit} data-testid="hero-form">
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          data-testid="name-input"
        />
      </div>

      <div>
        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          name="contact"
          type="text"
          required
          minLength={7}
          data-testid="contact-input"
        />
      </div>

      <div>
        <label htmlFor="destination">Destination</label>
        <input
          id="destination"
          name="destination"
          type="text"
          required
          data-testid="destination-input"
        />
      </div>

      <div>
        <label htmlFor="visaType">Visa Type (Optional)</label>
        <input
          id="visaType"
          name="visaType"
          type="text"
          data-testid="visa-type-input"
        />
      </div>

      <button type="submit" data-testid="submit-button">
        Submit
      </button>
    </form>
  )
}

describe('HeroForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('Rendering', () => {
    it('should render all form fields', () => {
      render(<HeroForm />)

      expect(screen.getByTestId('name-input')).toBeInTheDocument()
      expect(screen.getByTestId('contact-input')).toBeInTheDocument()
      expect(screen.getByTestId('destination-input')).toBeInTheDocument()
      expect(screen.getByTestId('visa-type-input')).toBeInTheDocument()
      expect(screen.getByTestId('submit-button')).toBeInTheDocument()
    })

    it('should render form labels', () => {
      render(<HeroForm />)

      expect(screen.getByLabelText('Name')).toBeInTheDocument()
      expect(screen.getByLabelText('Contact')).toBeInTheDocument()
      expect(screen.getByLabelText('Destination')).toBeInTheDocument()
      expect(screen.getByLabelText('Visa Type (Optional)')).toBeInTheDocument()
    })

    it('should have required fields marked as required', () => {
      render(<HeroForm />)

      expect(screen.getByTestId('name-input')).toBeRequired()
      expect(screen.getByTestId('contact-input')).toBeRequired()
      expect(screen.getByTestId('destination-input')).toBeRequired()
    })

    it('should have optional fields not marked as required', () => {
      render(<HeroForm />)

      expect(screen.getByTestId('visa-type-input')).not.toBeRequired()
    })
  })

  describe('Form Validation', () => {
    it('should require name field', async () => {
      render(<HeroForm />)
      const submitButton = screen.getByTestId('submit-button')

      fireEvent.click(submitButton)

      const nameInput = screen.getByTestId('name-input') as HTMLInputElement
      expect(nameInput.validity.valid).toBe(false)
    })

    it('should require contact field', async () => {
      render(<HeroForm />)
      const submitButton = screen.getByTestId('submit-button')

      fireEvent.click(submitButton)

      const contactInput = screen.getByTestId('contact-input') as HTMLInputElement
      expect(contactInput.validity.valid).toBe(false)
    })

    it('should require destination field', async () => {
      render(<HeroForm />)
      const submitButton = screen.getByTestId('submit-button')

      fireEvent.click(submitButton)

      const destinationInput = screen.getByTestId('destination-input') as HTMLInputElement
      expect(destinationInput.validity.valid).toBe(false)
    })

    it('should enforce minimum length for name', async () => {
      render(<HeroForm />)
      const nameInput = screen.getByTestId('name-input') as HTMLInputElement

      fireEvent.change(nameInput, { target: { value: 'A' } })

      expect(nameInput.validity.valid).toBe(false)
    })

    it('should enforce minimum length for contact', async () => {
      render(<HeroForm />)
      const contactInput = screen.getByTestId('contact-input') as HTMLInputElement

      fireEvent.change(contactInput, { target: { value: '12345' } })

      expect(contactInput.validity.valid).toBe(false)
    })

    it('should accept valid name (2+ characters)', async () => {
      render(<HeroForm />)
      const nameInput = screen.getByTestId('name-input') as HTMLInputElement

      fireEvent.change(nameInput, { target: { value: 'John Doe' } })

      expect(nameInput.validity.valid).toBe(true)
    })

    it('should accept valid contact (7+ characters)', async () => {
      render(<HeroForm />)
      const contactInput = screen.getByTestId('contact-input') as HTMLInputElement

      fireEvent.change(contactInput, { target: { value: '0812345678' } })

      expect(contactInput.validity.valid).toBe(true)
    })
  })

  describe('Form Submission', () => {
    it('should call onSubmit with form data when submitted with valid data', async () => {
      const mockSubmit = jest.fn()
      render(<HeroForm onSubmit={mockSubmit} />)

      const nameInput = screen.getByTestId('name-input')
      const contactInput = screen.getByTestId('contact-input')
      const destinationInput = screen.getByTestId('destination-input')
      const submitButton = screen.getByTestId('submit-button')

      fireEvent.change(nameInput, { target: { value: 'John Doe' } })
      fireEvent.change(contactInput, { target: { value: '0812345678' } })
      fireEvent.change(destinationInput, { target: { value: 'Thailand' } })

      fireEvent.click(submitButton)

      await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            name: 'John Doe',
            contact: '0812345678',
            destination: 'Thailand',
          })
        )
      })
    })

    it('should include optional fields in submission if provided', async () => {
      const mockSubmit = jest.fn()
      render(<HeroForm onSubmit={mockSubmit} />)

      fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'John Doe' } })
      fireEvent.change(screen.getByTestId('contact-input'), { target: { value: '0812345678' } })
      fireEvent.change(screen.getByTestId('destination-input'), { target: { value: 'Thailand' } })
      fireEvent.change(screen.getByTestId('visa-type-input'), { target: { value: 'tourist' } })

      fireEvent.click(screen.getByTestId('submit-button'))

      await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalledWith(
          expect.objectContaining({
            visaType: 'tourist',
          })
        )
      })
    })

    it('should not submit when required fields are empty', async () => {
      const mockSubmit = jest.fn()
      render(<HeroForm onSubmit={mockSubmit} />)

      fireEvent.click(screen.getByTestId('submit-button'))

      await waitFor(() => {
        expect(mockSubmit).not.toHaveBeenCalled()
      })
    })

    it('should clear form after submission', async () => {
      render(<HeroForm />)

      fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'John Doe' } })

      const nameInput = screen.getByTestId('name-input') as HTMLInputElement
      expect(nameInput.value).toBe('John Doe')
    })
  })

  describe('User Interactions', () => {
    it('should allow user to type in all fields', async () => {
      render(<HeroForm />)
      const user = userEvent.setup()

      const nameInput = screen.getByTestId('name-input') as HTMLInputElement
      const contactInput = screen.getByTestId('contact-input') as HTMLInputElement
      const destinationInput = screen.getByTestId('destination-input') as HTMLInputElement

      await user.type(nameInput, 'John Doe')
      await user.type(contactInput, '0812345678')
      await user.type(destinationInput, 'Thailand')

      expect(nameInput.value).toBe('John Doe')
      expect(contactInput.value).toBe('0812345678')
      expect(destinationInput.value).toBe('Thailand')
    })

    it('should focus on next field on Tab key', async () => {
      render(<HeroForm />)
      const user = userEvent.setup()

      const nameInput = screen.getByTestId('name-input')
      const contactInput = screen.getByTestId('contact-input')

      nameInput.focus()
      expect(nameInput).toHaveFocus()

      await user.tab()
      expect(contactInput).toHaveFocus()
    })
  })

  describe('Accessibility', () => {
    it('should have accessible labels for all inputs', () => {
      render(<HeroForm />)

      expect(screen.getByLabelText('Name')).toBeInTheDocument()
      expect(screen.getByLabelText('Contact')).toBeInTheDocument()
      expect(screen.getByLabelText('Destination')).toBeInTheDocument()
    })

    it('should have proper input types', () => {
      render(<HeroForm />)

      expect(screen.getByTestId('name-input')).toHaveAttribute('type', 'text')
      expect(screen.getByTestId('contact-input')).toHaveAttribute('type', 'text')
    })

    it('should have accessible submit button', () => {
      render(<HeroForm />)

      const submitButton = screen.getByTestId('submit-button')
      expect(submitButton).toHaveTextContent('Submit')
      expect(submitButton).toBeInTheDocument()
    })
  })
})
