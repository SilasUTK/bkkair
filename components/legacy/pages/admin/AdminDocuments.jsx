import React, { useEffect, useMemo, useState } from "react";
import { CalendarClock, Download, Eye, FileArchive, FileText, FileUp, Search } from "lucide-react";
import { getAdminBookings } from "../../services/api.js";
import { formatDate, getCustomerName, getDestination, workflowStatusLabel } from "./adminUtils.js";

const filters = ["All", "not_ready", "preparing", "ready", "delivered", "expired"];

export default function AdminDocuments({ navigate }) {
  const [bookings, setBookings] = useState([]);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
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
        setError(requestError.message || "Unable to load documents.");
      } finally {
        setLoading(false);
      }
    }

    fetchBookings();
  }, []);

  const filteredBookings = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return bookings.filter((booking) => {
      const documentStatus = booking.documentStatus || "not_ready";
      const matchesFilter = filter === "All" || documentStatus === filter;
      const haystack = [booking.bookingCode, getCustomerName(booking), getDestination(booking), documentStatus].join(" ").toLowerCase();
      return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [bookings, filter, query]);

  return (
    <div className="grid gap-5">
      <section className="rounded-[2rem] border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
          <div className="relative w-full xl:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search booking, customer, destination..."
              className="min-h-11 w-full rounded-2xl border border-slate-200 bg-white px-11 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full border px-4 py-2 text-xs font-black capitalize transition ${
                  filter === item ? "border-blue-600 bg-blue-600 text-white" : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
                }`}
              >
                {item.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {error && <p className="rounded-2xl border border-red-200 bg-red-50 p-3 text-sm font-bold text-red-700">{error}</p>}
      {loading ? (
        <p className="rounded-2xl bg-white p-8 text-center text-sm font-bold text-slate-400">Loading documents...</p>
      ) : (
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {filteredBookings.map((booking) => (
            <DocumentCard key={booking.bookingCode || booking.id} booking={booking} navigate={navigate} />
          ))}
        </section>
      )}
    </div>
  );
}

function DocumentCard({ booking, navigate }) {
  const bookingIdentifier = booking.bookingCode || booking.id;
  const detailPath = `/admin/bookings/${encodeURIComponent(bookingIdentifier)}`;
  const documentUrl = getDocumentUrl(booking);

  function openBookingDetail() {
    navigate(detailPath);
  }

  function openDocumentWorkspace() {
    if (bookingIdentifier) {
      window.sessionStorage.setItem(`bkkair-admin-focus-document-${bookingIdentifier}`, "1");
    }

    navigate(detailPath);
  }

  return (
    <article className="group rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
          <FileArchive size={24} />
        </div>
        <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-slate-500">
          {booking.documentStatus || "not_ready"}
        </span>
      </div>
      <div className="mt-5">
        <h3 className="line-clamp-2 text-sm font-black text-slate-900 group-hover:text-blue-600">{booking.bookingCode} Visa Documents</h3>
        <p className="mt-2 text-sm font-medium text-slate-500">{getCustomerName(booking)}</p>
        <p className="mt-1 text-xs text-slate-400">{getDestination(booking)} · {workflowStatusLabel(booking.status)}</p>
      </div>
      <div className="mt-4 grid gap-2 text-xs text-slate-500">
        <p className="flex items-center gap-2"><CalendarClock size={14} /> Valid until {formatDate(booking.documentValidUntil)}</p>
        <p className="flex items-center gap-2"><FileText size={14} /> Status managed from booking detail</p>
      </div>
      <div className="mt-5 grid grid-cols-[1fr_1fr_auto] gap-2">
        <button
          type="button"
          onClick={openBookingDetail}
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-3 text-xs font-black text-white hover:bg-slate-800"
        >
          <Eye size={15} /> View
        </button>
        <button
          type="button"
          onClick={openDocumentWorkspace}
          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-blue-50 px-3 text-xs font-black text-blue-700 hover:bg-blue-100"
        >
          <FileUp size={15} /> Upload
        </button>
        {documentUrl ? (
          <a
            href={documentUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 text-slate-500 hover:bg-slate-50 hover:text-blue-600"
            aria-label={`Download documents for ${booking.bookingCode || "booking"}`}
            title="Open document file"
          >
            <Download size={15} />
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex min-h-10 cursor-not-allowed items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-3 text-slate-300"
            aria-label="No file available"
            title="No file available"
          >
            <Download size={15} />
          </button>
        )}
      </div>
    </article>
  );
}

function getDocumentUrl(booking) {
  if (booking.documentUrl) return booking.documentUrl;
  if (booking.documentFileUrl) return booking.documentFileUrl;
  if (booking.documentDownloadUrl) return booking.documentDownloadUrl;
  if (booking.fileUrl) return booking.fileUrl;
  if (Array.isArray(booking.documents)) {
    return booking.documents.find((document) => document?.url || document?.fileUrl)?.url
      || booking.documents.find((document) => document?.url || document?.fileUrl)?.fileUrl
      || "";
  }

  return "";
}
