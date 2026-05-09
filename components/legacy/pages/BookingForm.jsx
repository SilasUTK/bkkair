import { CheckCircle2, HelpCircle, Send, ShieldCheck, Headphones } from "lucide-react";
import { useState } from "react";
import { createBooking } from "../services/api.js";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  lineId: "",
  origin: "",
  destination: "",
  departureDate: "",
  returnDate: "",
  passengerCount: "1",
  specifyAirline: false,
  airline: "",
  cabinClass: "Economy",
};

const airlines = [
  "AirAsia",
  "All Nippon Airways",
  "Bangkok Airways",
  "Cathay Pacific",
  "China Airlines",
  "Emirates",
  "Etihad Airways",
  "EVA Air",
  "Japan Airlines",
  "Korean Air",
  "Qatar Airways",
  "Singapore Airlines",
  "Thai Airways",
  "Turkish Airlines",
  "Vietnam Airlines",
].sort();

export default function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState("");
  const [validationError, setValidationError] = useState("");
  const [loading, setLoading] = useState(false);

  const dynamicMessage =
    form.origin && form.destination ? (
      <>
        Travel from <strong className="font-semibold text-blue-600">{form.origin}</strong> to{" "}
        <strong className="font-semibold text-blue-600">{form.destination}</strong> for {form.passengerCount} passenger(s).
        We&apos;ll handle your visa support.
      </>
    ) : (
      "Hi, tell us where you want to go, your travel dates, and number of passengers."
    );

  function updateField(event) {
    const { checked, name, type, value } = event.target;

    setValidationError("");
    setError("");

    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
      ...(name === "specifyAirline" && !checked ? { airline: "" } : {}),
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const message = validateForm(form);

    if (message) {
      setValidationError(message);
      return;
    }

    setLoading(true);
    setError("");
    setValidationError("");
    setBooking(null);

    try {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        lineId: form.lineId.trim(),
        origin: form.origin.trim(),
        destination: form.destination.trim(),
        departureDate: form.departureDate,
        returnDate: form.returnDate,
        passengerCount: Number(form.passengerCount),
        cabinClass: form.cabinClass,
        airline: form.specifyAirline ? form.airline : "",
        serviceType: "Quick Visa Request",
      };

      const data = await createBooking(payload);

      setBooking(data.booking || data);
      setForm(initialForm);
    } catch (requestError) {
      setError(requestError.message || "Unable to send request.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="relative mx-auto grid max-w-3xl gap-5">
      <div aria-hidden="true" className="absolute -right-20 top-10 h-40 w-40 rounded-[55%_45%_60%_40%] bg-orange-100" />
      <div className="relative rounded-[2rem] border border-blue-100 bg-white p-5 shadow-lg shadow-blue-100">
        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-[#2563EB]">
            <HelpCircle size={20} aria-hidden="true" />
          </span>

          <div>
            <h1 className="text-xl font-black text-[#0F172A]">
              Visa Request Assistant
            </h1>
            <p className="mt-1 text-base leading-7 text-slate-700">
              {dynamicMessage}
            </p>
          </div>
        </div>
      </div>

      <div className="relative rounded-[2rem] border border-blue-100 bg-white p-6 shadow-xl shadow-blue-100">
        <div className="mb-6">
          <p className="text-sm font-extrabold uppercase tracking-wide text-[#F97316]">Manual Staff Review</p>
          <h1 className="mt-2 text-3xl font-black text-[#0F172A]">
            Quick Request Form
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Send the basics first. We will contact you for passport or document
            details later.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <SectionTitle>Contact</SectionTitle>

          <Field
            label="Contact Name"
            name="name"
            value={form.name}
            onChange={updateField}
            required
          />

          <Field
            label="Phone (required)"
            name="phone"
            value={form.phone}
            onChange={updateField}
            required
          />

          <p className="-mt-3 text-xs text-slate-500">
            We will contact you via phone or LINE to confirm your request.
          </p>

          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Email (optional)"
              name="email"
              type="email"
              value={form.email}
              onChange={updateField}
            />

            <Field
              label="LINE ID"
              name="lineId"
              value={form.lineId}
              onChange={updateField}
            />
          </div>

          <SectionTitle>Travel</SectionTitle>

          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Origin"
              name="origin"
              value={form.origin}
              onChange={updateField}
              placeholder="Bangkok / BKK"
            />

            <Field
              label="Destination"
              name="destination"
              value={form.destination}
              onChange={updateField}
              placeholder="Tokyo / Japan / NRT"
              required
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Departure Date"
              name="departureDate"
              type="date"
              value={form.departureDate}
              onChange={updateField}
              required
            />

            <Field
              label="Return Date"
              name="returnDate"
              type="date"
              value={form.returnDate}
              onChange={updateField}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Passenger Count"
              name="passengerCount"
              type="number"
              min="1"
              max="8"
              value={form.passengerCount}
              onChange={updateField}
              required
            />
            <p className="-mt-3 text-xs text-slate-500 md:col-span-2">
              Up to 8 passengers per request.
            </p>

            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Cabin Class
              <select
                name="cabinClass"
                value={form.cabinClass}
                onChange={updateField}
                className={fieldClass}
              >
                <option>Economy</option>
                <option>Business</option>
              </select>
            </label>
          </div>

          <SectionTitle>Flight Preference</SectionTitle>

          <label className="flex items-center gap-3 text-sm font-medium text-slate-700">
            <input
              type="checkbox"
              name="specifyAirline"
              checked={form.specifyAirline}
              onChange={updateField}
              className="h-4 w-4 rounded border-cyan-200 text-blue-600 focus:ring-blue-100"
            />
            Specify airline
          </label>

          {form.specifyAirline && (
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Preferred Airline
              <select
                name="airline"
                value={form.airline}
                onChange={updateField}
                className={fieldClass}
              >
                <option value="">Select airline</option>
                {airlines.map((airline) => (
                  <option key={airline} value={airline}>
                    {airline}
                  </option>
                ))}
              </select>
            </label>
          )}

          {validationError && (
            <p className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
              {validationError}
            </p>
          )}

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#2563EB] px-4 text-sm font-extrabold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Send size={17} aria-hidden="true" />
            {loading ? "Sending..." : "Send Request"}
          </button>

          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-slate-700">
              <ShieldCheck size={16} aria-hidden="true" />
              Secure SSL Encryption
            </div>
            <div className="flex items-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-slate-700">
              <Headphones size={16} aria-hidden="true" />
              Staff follow-up
            </div>
          </div>
        </form>

        {booking && (
          <div className="mt-5 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-center gap-2 text-green-800">
              <CheckCircle2 size={20} aria-hidden="true" />
              <p className="text-base font-semibold">Request received</p>
            </div>

            <p className="mt-4 text-sm leading-6 text-green-800">
              We will contact you shortly via LINE / Email / Phone after staff review.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const fieldClass =
  "min-h-12 rounded-2xl border border-blue-100 bg-slate-50 px-4 text-slate-950 placeholder:text-slate-400 outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-100";

function SectionTitle({ children }) {
  return (
    <h2 className="border-t border-blue-100 pt-5 text-base font-black text-[#0F172A] first:border-t-0 first:pt-0">
      {children}
    </h2>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  min,
  max,
  placeholder,
}) {
  return (
    <label className="grid gap-2 text-sm font-medium text-slate-700">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        min={min}
        max={max}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={fieldClass}
      />
    </label>
  );
}

function validateForm(form) {
  const passengerCount = Number(form.passengerCount);

  if (!form.name.trim()) {
    return "Contact name is required.";
  }

  if (!form.phone.trim()) {
    return "Phone number is required (for contact).";
  }

  if (!form.email.trim() && !form.lineId.trim()) {
    return "Please enter at least Email or LINE ID.";
  }

  if (!form.destination.trim()) {
    return "Destination is required.";
  }

  if (!form.departureDate) {
    return "Departure date is required.";
  }

  if (form.departureDate < getTomorrowInputDate()) {
    return "Departure date must be tomorrow or later.";
  }

  if (
    form.returnDate &&
    form.departureDate &&
    form.returnDate <= form.departureDate
  ) {
    return "Return date must be after departure date.";
  }

  if (!passengerCount || passengerCount < 1) {
    return "Passenger count must be at least 1.";
  }

  if (passengerCount > 8) {
    return "Maximum passenger count is 8.";
  }

  if (form.specifyAirline && !form.airline) {
    return "Please select preferred airline.";
  }

  return "";
}

function getTomorrowInputDate() {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
