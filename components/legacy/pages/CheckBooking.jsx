import { Search } from "lucide-react";
import { useState } from "react";
import { checkBookingByCode } from "../services/api.js";

export default function CheckBooking() {
  const [code, setCode] = useState("");
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const cleanCode = code.trim().toUpperCase();

    if (!cleanCode) {
      setError("Please enter your booking code.");
      return;
    }

    if (cleanCode.length !== 6) {
      setError("Booking code must be 6 characters.");
      return;
    }

    setLoading(true);
    setError("");
    setBooking(null);

    try {
      const data = await checkBookingByCode(cleanCode);
      setBooking(data.booking || data);
    } catch (requestError) {
      setError(
        requestError.status === 404
          ? "Booking not found. Please check the booking code and try again."
          : requestError.message || "Unable to check booking."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative mx-auto max-w-2xl">
      <div aria-hidden="true" className="absolute -left-16 top-10 h-36 w-36 rounded-[45%_55%_60%_40%] bg-sky-100" />
      <div className="relative rounded-[2rem] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100">
        <div className="mb-6">
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F97316]">Status Tracking</p>
          <h1 className="mt-2 text-3xl font-black text-[#0F172A]">
            Check Booking Status
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Enter your 6-digit BKK AIR booking code to view request details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
          <input
            value={code}
            onChange={(event) => setCode(event.target.value.toUpperCase())}
            placeholder="A7K9X2"
            required
            maxLength={6}
            className="min-h-12 flex-1 rounded-2xl border border-blue-100 bg-slate-50 px-4 font-mono uppercase text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-100"
          />

          <button
            type="submit"
            disabled={loading}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2563EB] px-5 text-sm font-extrabold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Search size={17} aria-hidden="true" />
            {loading ? "Checking..." : "Check Status"}
          </button>
        </form>

        {error && (
          <p className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
            {error}
          </p>
        )}

        {booking && (
          <div className="mt-6 rounded-[1.5rem] border border-blue-100 bg-[#F8FAFC] p-5">
            <div className="mb-4 flex flex-col gap-1 border-b border-blue-100 pb-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Booking Code
              </p>
              <p className="font-mono text-2xl font-semibold text-slate-950">
                {booking.bookingCode}
              </p>
              <p className="text-sm font-bold text-[#2563EB]">
                Status: {booking.status || "Pending Review"}
              </p>
            </div>

            <dl className="grid gap-4 sm:grid-cols-2">
              <Info label="Origin" value={booking.route?.origin} />
              <Info label="Destination" value={booking.route?.destination} />
              <Info
                label="Departure Date"
                value={formatDate(booking.departureDate)}
              />
              <Info label="Return Date" value={formatDate(booking.returnDate)} />
              <Info label="Passengers" value={booking.passengers} />
              <Info label="Cabin Class" value={booking.cabinClass} />
              <Info label="Payment Status" value={booking.paymentStatus} />
              <Info label="Document Status" value={booking.documentStatus} />
              <Info label="Document Valid Until" value={formatDate(booking.documentValidUntil)} />
              {booking.quotationAmount && (
                <Info
                  label="Quotation"
                  value={`${Number(booking.quotationAmount).toLocaleString()} ${booking.quotationCurrency || "THB"}`}
                />
              )}
            </dl>
          </div>
        )}
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-slate-950">{value || "-"}</dd>
    </div>
  );
}

function formatDate(value) {
  if (!value) return "-";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}
