import React, { useEffect, useMemo, useState } from "react";
import { Download, Search } from "lucide-react";
import { getAdminBookings } from "../../services/api.js";
import { getCustomerName } from "./adminUtils.js";

export default function AdminCustomers() {
  const [bookings, setBookings] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchBookings() {
      setLoading(true);
      setError("");
      try {
        const data = await getAdminBookings();
        setBookings(data.bookings || []);
      } catch (requestError) {
        setError(requestError.message || "Unable to load customers.");
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  const customers = useMemo(() => buildCustomers(bookings), [bookings]);
  const filteredCustomers = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return customers.filter((customer) => [customer.name, customer.email, customer.phone].join(" ").toLowerCase().includes(normalizedQuery));
  }, [customers, query]);

  return (
    <div className="grid gap-5">
      <section className="flex flex-col gap-3 rounded-[2rem] border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name, email, phone..."
            className="min-h-11 w-full rounded-2xl border border-slate-200 bg-white px-11 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        <button type="button" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 text-sm font-black text-white hover:bg-slate-800">
          <Download size={16} /> Export CSV
        </button>
      </section>

      {error && <p className="rounded-2xl border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p>}
      {loading ? (
        <p className="rounded-2xl bg-white p-8 text-center text-sm font-bold text-slate-400">Loading customers...</p>
      ) : (
        <CustomerTable customers={filteredCustomers} />
      )}
    </div>
  );
}

function CustomerTable({ customers }) {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200 text-[10px] font-black uppercase tracking-widest text-slate-400">
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Contact Info</th>
              <th className="px-5 py-3">Total Bookings</th>
              <th className="px-5 py-3">Lifetime Value</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.key} className="border-b border-slate-100 transition hover:bg-slate-50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-blue-50 text-sm font-black text-blue-700">
                      {initials(customer.name)}
                    </div>
                    <div>
                      <p className="font-black text-slate-900">{customer.name}</p>
                      <p className="text-xs text-slate-400">{customer.key}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <p className="font-medium text-slate-700">{customer.email || "-"}</p>
                  <p className="text-xs text-slate-400">{customer.phone || "-"}</p>
                </td>
                <td className="px-5 py-4">
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">{customer.bookings}</span>
                </td>
                <td className="px-5 py-4 font-black text-slate-900">{customer.ltv.toLocaleString("th-TH")} THB</td>
                <td className="px-5 py-4 text-right">
                  <button type="button" className="text-xs font-black text-blue-600 hover:underline">View Profile</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function buildCustomers(bookings) {
  const map = new Map();
  bookings.forEach((booking) => {
    const key = booking.email || booking.phone || getCustomerName(booking);
    const existing = map.get(key) || {
      key,
      name: getCustomerName(booking),
      email: booking.email,
      phone: booking.phone,
      bookings: 0,
      ltv: 0,
    };
    existing.bookings += 1;
    existing.ltv += Number(booking.quotationAmount || 0);
    map.set(key, existing);
  });
  return Array.from(map.values());
}

function initials(name) {
  return String(name || "-")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}
