import { useState } from "react";
import { LockKeyhole, Mail, ShieldCheck } from "lucide-react";
import Logo from "../../../layout/Logo.jsx";
import { useAdminAuth } from "./AdminAuthContext.jsx";

export default function AdminLogin({ navigate }) {
  const { signIn } = useAdminAuth();
  const [email, setEmail] = useState("admin@bkkair.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await signIn({ email, password });
      navigate("/admin/operations");
    } catch (requestError) {
      setError(requestError.message || "Unable to sign in.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-4 py-10 lg:grid-cols-[1fr_440px]">
        <section className="hidden lg:block">
          <Logo variant="footer" />
          <div className="mt-12 max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-widest text-blue-100">
              <ShieldCheck size={16} />
              Manual Fulfillment Workspace
            </div>
            <h1 className="text-5xl font-black tracking-tight">Secure admin access for BKK AIR staff.</h1>
            <p className="mt-5 text-base leading-8 text-slate-300">
              Review customer requests, send quotations, verify payments, and deliver visa documents through the protected staff workspace.
            </p>
          </div>
        </section>

        <main className="rounded-[2rem] border border-white/10 bg-white p-6 text-slate-950 shadow-2xl shadow-black/30 sm:p-8">
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.25em] text-blue-600">Admin Login</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">Welcome back</h2>
            <p className="mt-2 text-sm font-medium text-slate-500">Sign in with your BKK AIR admin account.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-400">Email</span>
              <span className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-blue-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
                <Mail size={18} className="text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full bg-transparent text-sm font-bold outline-none"
                  autoComplete="email"
                  required
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-black uppercase tracking-widest text-slate-400">Password</span>
              <span className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-blue-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100">
                <LockKeyhole size={18} className="text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full bg-transparent text-sm font-bold outline-none"
                  autoComplete="current-password"
                  required
                />
              </span>
            </label>

            {error && (
              <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="flex w-full items-center justify-center rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </main>
      </div>
    </div>
  );
}
