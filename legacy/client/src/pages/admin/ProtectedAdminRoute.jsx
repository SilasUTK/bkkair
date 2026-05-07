import { ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import { useAdminAuth } from "./AdminAuthContext.jsx";

export default function ProtectedAdminRoute({ children, navigate }) {
  const { isAuthenticated, loading } = useAdminAuth();

  useEffect(() => {
    if (!loading && !isAuthenticated && window.location.pathname !== "/admin/login") {
      navigate("/admin/login");
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/20">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
            <ShieldCheck size={24} />
          </div>
          <p className="text-sm font-black uppercase tracking-[0.25em] text-white/50">Checking Session</p>
          <p className="mt-2 text-lg font-black">Securing Admin Workspace</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return children;
}
