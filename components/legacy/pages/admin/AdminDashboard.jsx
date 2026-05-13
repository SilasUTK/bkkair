import React, { useMemo, useState } from "react";
import { AlertCircle, CalendarDays, ChevronLeft, ChevronRight, ClipboardCheck, Clock3, CreditCard, Filter } from "lucide-react";
import { 
  normalizeWorkflowStatus, getCustomerName, getDestination, 
  formatDateTime, workflowStatusBadgeClass, workflowStatusLabel, 
  manualWorkflowStatuses, timeAgo 
} from "./adminUtils.js";

export default function AdminDashboard({ bookings, navigate }) {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [calendarMonth, setCalendarMonth] = useState(() => new Date());

  // Dynamic filter buttons based on our exact workflow definitions
  const filterOptions = ["All", ...manualWorkflowStatuses.map(s => s.label)];

  const stats = useMemo(() => {
    const counts = { new: [], payment_pending: [], paid: [], processing: [] };
    bookings.forEach(b => {
      const s = normalizeWorkflowStatus(b.status);
      if (counts[s] !== undefined) counts[s].push(b);
    });
    return counts;
  }, [bookings]);

  const filteredBookings = useMemo(() => {
    const query = search.trim().toLowerCase();

    return bookings.filter((booking) => {
      const currentLabel = workflowStatusLabel(booking.status);
      const matchesStatus = statusFilter === "All" || currentLabel === statusFilter;
      
      const haystack = [
        booking.bookingCode,
        getCustomerName(booking),
        booking.phone,
        booking.origin,
        getDestination(booking),
      ].filter(Boolean).join(" ").toLowerCase();

      return matchesStatus && (!query || haystack.includes(query));
    });
  }, [bookings, search, statusFilter]);

  const followUpBookings = useMemo(() => {
    return bookings.filter((booking) => {
      const createdAt = booking.createdAt ? new Date(booking.createdAt).getTime() : Date.now();
      const isOlderThan24Hours = Date.now() - createdAt > 24 * 60 * 60 * 1000;
      const isNewTask = normalizeWorkflowStatus(booking.status) === "new";

      return !booking.assignedStaff || (isNewTask && isOlderThan24Hours);
    });
  }, [bookings]);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Top Controls */}
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex w-full overflow-hidden rounded-xl border border-slate-200 bg-white/85 shadow-sm backdrop-blur lg:max-w-md">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search code, name, phone, destination..."
            className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm focus:outline-none"
          />
          <button
            type="button"
            className="flex min-h-10 w-11 items-center justify-center border-l border-slate-200 text-slate-500 transition-colors hover:bg-slate-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-label="Advanced filters"
          >
            <Filter size={18} />
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {filterOptions.map((status) => (
            <button
              key={status}
              type="button"
              onClick={() => setStatusFilter(status)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${
                statusFilter === status 
                  ? "border-blue-600 bg-blue-600 text-white shadow-sm" 
                  : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <FulfillmentCalendar
        bookings={filteredBookings}
        month={calendarMonth}
        onMonthChange={setCalendarMonth}
        navigate={navigate}
      />

      {/* Stat Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard label="New Requests" value={stats.new.length} icon={ClipboardCheck} color="blue" />
        <StatCard label="Pending Payments" value={stats.payment_pending.length} icon={CreditCard} color="sky" />
        <StatCard label="In Processing" value={stats.processing.length} icon={Clock3} color="blue" />
      </div>

      {/* Urgent Columns */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <UrgentColumn 
          title="Needs Quotation" 
          bookings={stats.new} 
          icon={AlertCircle} 
          color="red" 
          navigate={navigate} 
        />
        <UrgentColumn
          title="Verify Payment"
          bookings={stats.payment_pending}
          icon={CreditCard}
          color="sky"
          navigate={navigate}
        />
      </div>

      <FollowUpPanel bookings={followUpBookings} navigate={navigate} />

      <RecentRequestsTable bookings={filteredBookings} navigate={navigate} />
    </div>
  );
}

// ---------------- Helper Components ----------------

function StatCard({ label, value, icon: Icon, color }) {
  const colors = {
    red: "bg-red-50 text-red-600",
    sky: "bg-sky-50 text-sky-600",
    blue: "bg-blue-50 text-blue-600"
  };
  return (
    <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div>
        <p className="text-xs font-black uppercase tracking-widest text-slate-500">{label}</p>
        <p className="mt-2 text-3xl font-bold text-slate-900">{value}</p>
      </div>
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${colors[color]}`}>
        <Icon size={28} />
      </div>
    </div>
  );
}

function UrgentColumn({ title, bookings, icon: Icon, color, navigate }) {
  const headerColors = { red: "text-red-500", sky: "text-sky-500" };
  return (
    <div className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden flex flex-col shadow-sm">
      <div className="border-b border-slate-100 p-5 flex items-center gap-3">
        <Icon className={headerColors[color] || "text-slate-500"} size={22} />
        <h2 className="text-lg font-black text-slate-900">{title}</h2>
        <span className="ml-auto bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">
          {bookings.length} cases
        </span>
      </div>
      <div className="p-4 space-y-3">
        {bookings.length === 0 ? (
          <div className="py-12 text-center text-slate-400 font-bold italic">No urgent tasks in this queue</div>
        ) : (
          bookings.slice(0, 5).map(b => (
            <div key={b.bookingCode || b.id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-blue-200 hover:bg-white hover:shadow-sm group">
              <div className="min-w-0">
                <p className="text-sm font-black text-slate-900 group-hover:text-blue-600">{getCustomerName(b)}</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                  {b.bookingCode} · {getDestination(b)}
                </p>
                <div className="mt-2"><AssigneeBadge booking={b} /></div>
              </div>
              <div className="ml-4 flex shrink-0 flex-col items-end gap-2">
                <span className="text-xs font-medium text-slate-400">{timeAgo(b.createdAt)}</span>
                <button 
                  onClick={() => navigate(`/admin/bookings/${b.bookingCode}`)}
                  className="text-xs font-bold text-blue-600 hover:underline"
                >
                  View
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function FollowUpPanel({ bookings, navigate }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-3 border-b border-slate-100 p-5">
        <AlertCircle className="text-amber-500" size={22} />
        <h2 className="text-lg font-black text-slate-900">Follow-up Required</h2>
        <span className="ml-auto rounded-full bg-slate-100 text-slate-600 px-3 py-1 text-xs font-bold">
          {bookings.length} cases
        </span>
      </div>
      <div className="space-y-3 p-4">
        {bookings.length === 0 ? (
          <div className="py-12 text-center font-bold italic text-slate-400">No follow-up required</div>
        ) : (
          bookings.slice(0, 5).map((booking) => (
            <div key={booking.bookingCode || booking.id} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50/50 p-4 transition-all hover:border-amber-200 hover:bg-white hover:shadow-sm group">
              <div className="min-w-0">
                <p className="text-sm font-black text-slate-900 group-hover:text-amber-600">{getCustomerName(booking)}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {booking.assignedStaff ? "Pending > 24h" : "Unassigned"} · {booking.bookingCode}
                </p>
              </div>
              <div className="ml-4 flex shrink-0 flex-col items-end gap-2">
                <span className="text-xs font-medium text-slate-400">{timeAgo(booking.createdAt)}</span>
                <button
                  type="button"
                  onClick={() => navigate(`/admin/bookings/${booking.bookingCode}`)}
                  className="text-xs font-bold text-amber-600 hover:underline"
                >
                  View
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function AssigneeBadge({ booking }) {
  if (!booking.assignedStaff) {
    return (
      <span className="inline-flex rounded-full border border-slate-200 bg-white px-2 py-1 text-[10px] font-black uppercase tracking-wider text-slate-500">
        Unassigned
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 py-1 pl-1 pr-2 text-[10px] font-black uppercase tracking-wider text-blue-700">
      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[9px] text-white">
        {booking.assignedStaff.charAt(0).toUpperCase()}
      </span>
      {booking.assignedStaff}
    </span>
  );
}

function FulfillmentCalendar({ bookings, month, onMonthChange, navigate }) {
  const calendarYear = month.getFullYear();
  const calendarMonthIndex = month.getMonth();
  const monthStart = useMemo(() => new Date(calendarYear, calendarMonthIndex, 1), [calendarMonthIndex, calendarYear]);
  const monthLabel = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(monthStart);
  const calendarDays = useMemo(() => buildCalendarDays(monthStart), [monthStart]);
  const bookingsByDate = useMemo(() => groupBookingsByDate(bookings), [bookings]);

  function changeMonth(offset) {
    onMonthChange(new Date(calendarYear, calendarMonthIndex + offset, 1));
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <CalendarDays size={22} />
          </div>
          <div>
            <h2 className="text-lg font-black text-slate-900">Fulfillment Calendar</h2>
            <p className="text-sm text-slate-500">Upcoming departures and request activity</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
            aria-label="Previous month"
          >
            <ChevronLeft size={17} />
          </button>
          <span className="min-w-[150px] text-center text-sm font-black text-slate-900">{monthLabel}</span>
          <button
            type="button"
            onClick={() => changeMonth(1)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 hover:bg-slate-50"
            aria-label="Next month"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-black uppercase tracking-widest text-slate-400">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="py-1">{day}</div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-7 gap-2">
        {calendarDays.map((day) => {
          const key = toDateKey(day.date);
          const dayBookings = bookingsByDate[key] || [];
          const isCurrentMonth = day.date.getMonth() === calendarMonthIndex;
          const isToday = key === toDateKey(new Date());

          return (
            <div
              key={key}
              className={`min-h-[112px] rounded-2xl border p-2 text-left transition ${
                isCurrentMonth ? "border-slate-200 bg-slate-50/70 hover:bg-white" : "border-slate-100 bg-slate-50/40 opacity-50"
              } ${isToday ? "ring-2 ring-blue-500/20" : ""}`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-black ${isToday ? "text-blue-600" : "text-slate-500"}`}>{day.date.getDate()}</span>
                {dayBookings.length > 0 && (
                  <span className="rounded-full bg-blue-600 px-1.5 py-0.5 text-[10px] font-black text-white">{dayBookings.length}</span>
                )}
              </div>

              <div className="mt-2 space-y-1">
                {dayBookings.slice(0, 2).map((booking) => (
                  <button
                    key={booking.bookingCode || booking.id}
                    type="button"
                    onClick={() => navigate(`/admin/bookings/${booking.bookingCode}`)}
                    className="block w-full truncate rounded-lg bg-white px-2 py-1 text-left text-[10px] font-bold text-slate-600 shadow-sm hover:text-blue-600"
                  >
                    {booking.bookingCode} · {getDestination(booking)}
                  </button>
                ))}
                {dayBookings.length > 2 && (
                  <p className="px-2 text-[10px] font-bold text-slate-400">+{dayBookings.length - 2} more</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function buildCalendarDays(monthStart) {
  const start = new Date(monthStart);
  start.setDate(1 - start.getDay());

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return { date };
  });
}

function groupBookingsByDate(bookings) {
  return bookings.reduce((groups, booking) => {
    const rawDate = booking.departureDate || booking.createdAt;
    if (!rawDate) return groups;

    const date = new Date(rawDate);
    if (Number.isNaN(date.getTime())) return groups;

    const key = toDateKey(date);
    return { ...groups, [key]: [...(groups[key] || []), booking] };
  }, {});
}

function toDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function RecentRequestsTable({ bookings, navigate }) {
  if (bookings.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center text-slate-500 shadow-sm">
        <ClipboardCheck size={48} className="mx-auto mb-4 text-slate-300" />
        <p className="font-medium">No requests match the current filters.</p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-500">Recent Requests</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wider text-slate-400">
              <th className="pb-3 font-semibold">Code</th>
              <th className="pb-3 font-semibold">Name</th>
              <th className="pb-3 font-semibold">Route</th>
              <th className="pb-3 font-semibold">Status</th>
              <th className="pb-3 font-semibold">Staff</th>
              <th className="pb-3 font-semibold">Created</th>
              <th className="pb-3 text-right font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {bookings.map((booking) => (
              <tr key={booking.id || booking.bookingCode} className="transition-colors hover:bg-slate-50/50">
                <td className="py-3 font-bold text-slate-900">{booking.bookingCode}</td>
                <td className="py-3 text-slate-700">{getCustomerName(booking)}</td>
                <td className="py-3 text-slate-600">{booking.origin || "-"} → {getDestination(booking)}</td>
                <td className="py-3">
                  <span className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${workflowStatusBadgeClass(booking.status)}`}>
                    {workflowStatusLabel(booking.status)}
                  </span>
                </td>
                <td className="py-3 text-slate-600">{booking.assignedStaff || "-"}</td>
                <td className="py-3 text-slate-500 text-xs">{formatDateTime(booking.createdAt)}</td>
                <td className="py-3 text-right">
                  <button
                    type="button"
                    onClick={() => navigate(`/admin/bookings/${booking.bookingCode}`)}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
