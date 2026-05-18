"use client";

import Footer from "../layout/Footer.jsx";
import Navbar from "../layout/Navbar.jsx";

export default function MarketingShell({ children }) {
  function navigate(action) {
    const routes = {
      home: "/",
      contactPage: "/contact",
      check: "/check",
      privacy: "/privacy-policy",
      terms: "/terms",
      admin: "/admin",
    };

    window.location.href = routes[action] || "/";
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <Navbar onNavigate={navigate} />
      <main className="pt-24">{children}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

