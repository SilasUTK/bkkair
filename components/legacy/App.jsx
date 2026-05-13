import { useEffect, useState } from "react";
import Footer from "../layout/Footer.jsx";
import Navbar from "../layout/Navbar.jsx";
import { AdminAuthProvider } from "./pages/admin/AdminAuthContext.jsx";
import AdminLogin from "./pages/admin/AdminLogin.jsx";
import AdminPortal from "./pages/admin/AdminPortal.jsx";
import ProtectedAdminRoute from "./pages/admin/ProtectedAdminRoute.jsx";
import BookingForm from "./pages/BookingForm.jsx";
import CheckBooking from "./pages/CheckBooking.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import CustomerPortal from "./pages/CustomerPortal.jsx";
import HomePage from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";

function getPublicTab(pathname) {
  if (pathname === "/check") return "check";
  if (pathname === "/contact") return "contactPage";
  if (pathname === "/login") return "login";
  if (pathname === "/portal") return "portal";
  if (pathname === "/privacy-policy") return "privacy";
  if (pathname === "/register") return "register";
  if (pathname === "/terms-of-service") return "terms";
  return "home";
}

export default function App() {
  const [activeTab, setActiveTab] = useState(getPublicTab(window.location.pathname));
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    function handlePopState() {
      const nextPath = window.location.pathname;
      setPath(nextPath);

      if (!nextPath.startsWith("/admin")) {
        setActiveTab(getPublicTab(nextPath));
      }
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    if (path !== "/admin") return;

    window.history.replaceState({}, "", "/admin/operations");
    setPath("/admin/operations");
  }, [path]);

  function navigate(nextPath) {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);

    if (!nextPath.startsWith("/admin")) {
      setActiveTab(getPublicTab(nextPath));
    }
  }

  function scrollToSection(sectionId) {
    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  }

  function handlePublicNavigation(action) {
    if (action === "admin") {
      navigate("/admin");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (action === "login") {
      navigate("/login");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (action === "portal") {
      navigate("/portal");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (action === "register") {
      navigate("/register");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (action === "privacy") {
      navigate("/privacy-policy");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (action === "terms") {
      navigate("/terms-of-service");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (action === "check") {
      navigate("/check");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (action === "contactPage") {
      navigate("/contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (path !== "/") {
      navigate("/");
    } else {
      setActiveTab("home");
    }

    if (["services", "documents", "flights"].includes(action)) {
      scrollToSection("packages");
      return;
    }

    if (action === "about") {
      scrollToSection("about");
      return;
    }

    if (action === "contact") {
      scrollToSection("contact");
      return;
    }

    if (action === "blog") {
      scrollToSection("faq");
      return;
    }

    if (action === "request") {
      scrollToSection("quick-request");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (path.startsWith("/admin")) {
    return (
      <AdminAuthProvider>
        {path === "/admin/login" ? (
          <AdminLogin navigate={navigate} />
        ) : (
          <ProtectedAdminRoute navigate={navigate}>
            <AdminPortal path={path} navigate={navigate} />
          </ProtectedAdminRoute>
        )}
      </AdminAuthProvider>
    );
  }

  const ActivePage = {
    home: HomePage,
    book: BookingForm,
    check: CheckBooking,
    contactPage: ContactPage,
    login: LoginPage,
    portal: CustomerPortal,
    privacy: PrivacyPolicy,
    register: RegisterPage,
    terms: TermsOfService
  }[activeTab];

  const fullWidthPages = ["home", "contactPage", "login", "portal", "register"];
  const isPortalPage = activeTab === "portal";

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {isPortalPage ? null : <Navbar activeTab={activeTab} onNavigate={handlePublicNavigation} />}
      <main className={fullWidthPages.includes(activeTab) ? "" : "mx-auto max-w-6xl px-4 pb-16 pt-28"}>
        <ActivePage
          goToBooking={() => setActiveTab("book")}
          goToCheck={() => navigate("/check")}
          onNavigate={handlePublicNavigation}
        />
      </main>
      {isPortalPage ? null : <Footer onNavigate={handlePublicNavigation} />}
    </div>
  );
}
