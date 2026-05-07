ALTER TABLE bookings
  MODIFY COLUMN status VARCHAR(50) NULL DEFAULT 'new',
  ADD COLUMN IF NOT EXISTS quotationAmount DECIMAL(10,2) NULL,
  ADD COLUMN IF NOT EXISTS quotationCurrency VARCHAR(10) NULL DEFAULT 'THB',
  ADD COLUMN IF NOT EXISTS quotationDueDate DATE NULL,
  ADD COLUMN IF NOT EXISTS quotationSentAt DATETIME NULL,
  ADD COLUMN IF NOT EXISTS paymentStatus VARCHAR(50) NULL DEFAULT 'none',
  ADD COLUMN IF NOT EXISTS paymentSlipUrl VARCHAR(500) NULL,
  ADD COLUMN IF NOT EXISTS paymentSlipUploadedAt DATETIME NULL,
  ADD COLUMN IF NOT EXISTS paymentApprovedAt DATETIME NULL,
  ADD COLUMN IF NOT EXISTS paymentRejectedAt DATETIME NULL,
  ADD COLUMN IF NOT EXISTS paymentRejectReason TEXT NULL,
  ADD COLUMN IF NOT EXISTS documentStatus VARCHAR(50) NULL DEFAULT 'not_ready',
  ADD COLUMN IF NOT EXISTS documentValidUntil DATE NULL,
  ADD COLUMN IF NOT EXISTS staffFollowUpDate DATETIME NULL,
  ADD COLUMN IF NOT EXISTS assignedStaff VARCHAR(100) NULL,
  ADD COLUMN IF NOT EXISTS adminNotes TEXT NULL,
  ADD COLUMN IF NOT EXISTS updatedAt TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

UPDATE bookings
SET status = CASE
  WHEN status = 'Pending Review' THEN 'new'
  WHEN status = 'Processing' THEN 'processing'
  WHEN status = 'Completed' THEN 'completed'
  WHEN status = 'Cancelled' THEN 'cancelled'
  WHEN status IS NULL OR status = '' THEN 'new'
  ELSE status
END;

UPDATE bookings
SET paymentStatus = COALESCE(NULLIF(paymentStatus, ''), 'none'),
    documentStatus = COALESCE(NULLIF(documentStatus, ''), 'not_ready'),
    quotationCurrency = COALESCE(NULLIF(quotationCurrency, ''), 'THB');
