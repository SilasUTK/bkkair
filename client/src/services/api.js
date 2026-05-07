const isLocalHost =
  typeof window !== "undefined" &&
  ["localhost", "127.0.0.1"].includes(window.location.hostname);

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || (isLocalHost ? "http://localhost:5001" : "");

async function request(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  return parseResponse(response);
}

export async function loginAdmin(credentials) {
  return request("/api/admin/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export async function logoutAdmin() {
  return request("/api/admin/auth/logout", {
    method: "POST",
  });
}

export async function getAdminMe() {
  return request("/api/admin/auth/me");
}

export async function createBooking(data) {
  const payload = {
    ...data,
    customerName:
      data.name ||
      [data.title, data.firstName, data.surname].filter(Boolean).join(" ") ||
      "Website Quick Request",

    visaCountry: data.destination || data.visaCountry || "",
    destination: data.destination || data.visaCountry || "",
    serviceType: data.serviceType || "Quick Visa Request",

    preferredAirlines: data.airline || data.preferredAirlines || "",
    airline: data.airline || data.preferredAirlines || "",

    passengerCount: Number(data.passengerCount || 1),
    cabinClass: data.cabinClass || "Economy",

    email: data.email || "",
    phone: data.phone || "",
    lineId: data.lineId || "",
    origin: data.origin || "",
    departureDate: data.departureDate || "",
    returnDate: data.returnDate || "",
  };

  return request("/api/bookings", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getBookingByCode(code) {
  const cleanCode = String(code || "").trim().toUpperCase();

  return request(`/api/bookings/${encodeURIComponent(cleanCode)}`);
}

export async function checkBookingByCode(code) {
  const cleanCode = String(code || "").trim().toUpperCase();

  return request(`/api/bookings/check/${encodeURIComponent(cleanCode)}`);
}

export async function getAdminBookings({ search = "", status = "All", assignedStaff = "All Staff" } = {}) {
  const params = new URLSearchParams();

  if (search) params.set("search", search);
  if (status && status !== "All") params.set("status", status);
  if (assignedStaff && assignedStaff !== "All Staff") params.set("assignedStaff", assignedStaff);

  const query = params.toString();
  return request(`/api/admin/bookings${query ? `?${query}` : ""}`);
}

export async function getAdminBooking(code) {
  const cleanCode = String(code || "").trim().toUpperCase();
  return request(`/api/admin/bookings/${encodeURIComponent(cleanCode)}`);
}

export async function updateAdminBookingStatus(code, status) {
  const cleanCode = String(code || "").trim().toUpperCase();

  return request(`/api/admin/bookings/${encodeURIComponent(cleanCode)}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
}

export async function updateAdminBookingNotes(code, adminNotes) {
  const cleanCode = String(code || "").trim().toUpperCase();

  return request(`/api/admin/bookings/${encodeURIComponent(cleanCode)}/notes`, {
    method: "PATCH",
    body: JSON.stringify({ adminNotes }),
  });
}

export async function assignAdminBooking(code, assignedStaff) {
  const cleanCode = String(code || "").trim().toUpperCase();

  return request(`/api/admin/bookings/${encodeURIComponent(cleanCode)}/assign`, {
    method: "PATCH",
    body: JSON.stringify({ assignedStaff }),
  });
}

export async function updateAdminBookingQuotation(code, quotation) {
  const cleanCode = String(code || "").trim().toUpperCase();

  return request(`/api/admin/bookings/${encodeURIComponent(cleanCode)}/quotation`, {
    method: "PATCH",
    body: JSON.stringify(quotation),
  });
}

export async function updateAdminBookingPayment(code, payment) {
  const cleanCode = String(code || "").trim().toUpperCase();

  return request(`/api/admin/bookings/${encodeURIComponent(cleanCode)}/payment`, {
    method: "PATCH",
    body: JSON.stringify(payment),
  });
}

export async function updateAdminBookingDocument(code, document) {
  const cleanCode = String(code || "").trim().toUpperCase();

  return request(`/api/admin/bookings/${encodeURIComponent(cleanCode)}/document`, {
    method: "PATCH",
    body: JSON.stringify(document),
  });
}

export async function updateAdminBookingFollowUp(code, followUp) {
  const cleanCode = String(code || "").trim().toUpperCase();

  return request(`/api/admin/bookings/${encodeURIComponent(cleanCode)}/follow-up`, {
    method: "PATCH",
    body: JSON.stringify(followUp),
  });
}

async function parseResponse(response) {
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || data.error || "Request failed");
    error.status = response.status;
    throw error;
  }

  return data;
}
