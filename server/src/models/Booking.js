import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    bookingCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true
    },
    customerName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    serviceType: {
      type: String,
      required: true,
      trim: true
    },
    visaCountry: {
      type: String,
      required: true,
      trim: true
    },
    departureDate: {
      type: Date,
      required: true
    },
    returnDate: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ["new", "quoted", "payment_pending", "paid", "processing", "completed", "cancelled"],
      default: "new"
    },
    quotationAmount: Number,
    quotationCurrency: {
      type: String,
      default: "THB"
    },
    quotationDueDate: Date,
    quotationSentAt: Date,
    paymentStatus: {
      type: String,
      enum: ["none", "pending_verification", "approved", "rejected"],
      default: "none"
    },
    paymentSlipUrl: String,
    paymentSlipUploadedAt: Date,
    paymentApprovedAt: Date,
    paymentRejectedAt: Date,
    paymentRejectReason: String,
    documentStatus: {
      type: String,
      enum: ["not_ready", "preparing", "ready", "delivered", "expired"],
      default: "not_ready"
    },
    documentValidUntil: Date,
    staffFollowUpDate: Date,
    assignedStaff: String,
    adminNotes: String
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Booking", bookingSchema);
