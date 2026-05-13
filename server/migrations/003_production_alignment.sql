-- BKK AIR production alignment migration
-- Purpose: align production MySQL tables with active backend/admin fields.
-- Safe to review before running. Do not run automatically from the app.

CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  bookingCode VARCHAR(6) NOT NULL UNIQUE,
  name VARCHAR(255) NULL,
  title VARCHAR(50) NULL,
  firstName VARCHAR(255) NULL,
  surname VARCHAR(255) NULL,
  customerName VARCHAR(255) NULL,
  phone VARCHAR(50) NULL,
  email VARCHAR(255) NULL,
  lineId VARCHAR(100) NULL,
  origin VARCHAR(255) NULL,
  destination VARCHAR(255) NULL,
  visaCountry VARCHAR(255) NULL,
  departureDate DATE NULL,
  returnDate DATE NULL,
  passengerCount INT DEFAULT 1,
  cabinClass VARCHAR(100) NULL,
  airline VARCHAR(255) NULL,
  preferredAirlines VARCHAR(255) NULL,
  serviceType VARCHAR(255) NULL,
  passportNumber VARCHAR(100) NULL,
  dateOfBirth DATE NULL,
  passportExpiryDate DATE NULL,
  attachmentName VARCHAR(255) NULL,
  status VARCHAR(64) DEFAULT 'new',
  assignedStaff VARCHAR(100) NULL,
  adminNotes TEXT NULL,
  quotationAmount DECIMAL(10,2) NULL,
  quotationCurrency VARCHAR(16) DEFAULT 'THB',
  quotationDueDate DATETIME NULL,
  quotationSentAt DATETIME NULL,
  paymentStatus VARCHAR(64) DEFAULT 'none',
  paymentSlipUrl TEXT NULL,
  paymentSlipUploadedAt DATETIME NULL,
  paymentApprovedAt DATETIME NULL,
  paymentRejectedAt DATETIME NULL,
  paymentRejectReason TEXT NULL,
  documentStatus VARCHAR(64) DEFAULT 'not_ready',
  documentValidUntil DATETIME NULL,
  staffFollowUpDate DATETIME NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

DELIMITER //

DROP PROCEDURE IF EXISTS add_booking_column_if_missing//
CREATE PROCEDURE add_booking_column_if_missing(IN p_column_name VARCHAR(64), IN p_column_definition TEXT)
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM INFORMATION_SCHEMA.COLUMNS
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME = 'bookings'
      AND COLUMN_NAME = p_column_name
  ) THEN
    SET @ddl = CONCAT('ALTER TABLE bookings ADD COLUMN ', p_column_name, ' ', p_column_definition);
    PREPARE stmt FROM @ddl;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
  END IF;
END//

DROP PROCEDURE IF EXISTS add_booking_index_if_missing//
CREATE PROCEDURE add_booking_index_if_missing(IN p_index_name VARCHAR(64), IN p_index_definition TEXT)
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM INFORMATION_SCHEMA.STATISTICS
    WHERE TABLE_SCHEMA = DATABASE()
      AND TABLE_NAME = 'bookings'
      AND INDEX_NAME = p_index_name
  ) THEN
    SET @ddl = CONCAT('ALTER TABLE bookings ADD INDEX ', p_index_name, ' ', p_index_definition);
    PREPARE stmt FROM @ddl;
    EXECUTE stmt;
    DEALLOCATE PREPARE stmt;
  END IF;
END//

DELIMITER ;

CALL add_booking_column_if_missing('name', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('title', 'VARCHAR(50) NULL');
CALL add_booking_column_if_missing('firstName', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('surname', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('customerName', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('phone', 'VARCHAR(50) NULL');
CALL add_booking_column_if_missing('email', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('lineId', 'VARCHAR(100) NULL');
CALL add_booking_column_if_missing('origin', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('destination', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('visaCountry', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('departureDate', 'DATE NULL');
CALL add_booking_column_if_missing('returnDate', 'DATE NULL');
CALL add_booking_column_if_missing('passengerCount', 'INT DEFAULT 1');
CALL add_booking_column_if_missing('cabinClass', 'VARCHAR(100) NULL');
CALL add_booking_column_if_missing('airline', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('preferredAirlines', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('serviceType', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('passportNumber', 'VARCHAR(100) NULL');
CALL add_booking_column_if_missing('dateOfBirth', 'DATE NULL');
CALL add_booking_column_if_missing('passportExpiryDate', 'DATE NULL');
CALL add_booking_column_if_missing('attachmentName', 'VARCHAR(255) NULL');
CALL add_booking_column_if_missing('status', 'VARCHAR(64) DEFAULT ''new''');
CALL add_booking_column_if_missing('assignedStaff', 'VARCHAR(100) NULL');
CALL add_booking_column_if_missing('adminNotes', 'TEXT NULL');
CALL add_booking_column_if_missing('quotationAmount', 'DECIMAL(10,2) NULL');
CALL add_booking_column_if_missing('quotationCurrency', 'VARCHAR(16) DEFAULT ''THB''');
CALL add_booking_column_if_missing('quotationDueDate', 'DATETIME NULL');
CALL add_booking_column_if_missing('quotationSentAt', 'DATETIME NULL');
CALL add_booking_column_if_missing('paymentStatus', 'VARCHAR(64) DEFAULT ''none''');
CALL add_booking_column_if_missing('paymentSlipUrl', 'TEXT NULL');
CALL add_booking_column_if_missing('paymentSlipUploadedAt', 'DATETIME NULL');
CALL add_booking_column_if_missing('paymentApprovedAt', 'DATETIME NULL');
CALL add_booking_column_if_missing('paymentRejectedAt', 'DATETIME NULL');
CALL add_booking_column_if_missing('paymentRejectReason', 'TEXT NULL');
CALL add_booking_column_if_missing('documentStatus', 'VARCHAR(64) DEFAULT ''not_ready''');
CALL add_booking_column_if_missing('documentValidUntil', 'DATETIME NULL');
CALL add_booking_column_if_missing('staffFollowUpDate', 'DATETIME NULL');
CALL add_booking_column_if_missing('createdAt', 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP');
CALL add_booking_column_if_missing('updatedAt', 'TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP');

CREATE TABLE IF NOT EXISTS admins (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(191) NOT NULL,
  email VARCHAR(191) NOT NULL UNIQUE,
  passwordHash VARCHAR(255) NOT NULL,
  role VARCHAR(64) DEFAULT 'admin',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CALL add_booking_index_if_missing('idx_bookings_status', '(status)');
CALL add_booking_index_if_missing('idx_bookings_assigned_staff', '(assignedStaff)');
CALL add_booking_index_if_missing('idx_bookings_created_at', '(createdAt)');

DROP PROCEDURE IF EXISTS add_booking_index_if_missing;
DROP PROCEDURE IF EXISTS add_booking_column_if_missing;
