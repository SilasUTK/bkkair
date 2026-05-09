import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { getAdminMe, loginAdmin, logoutAdmin } from "../../services/api.js";

const AdminAuthContext = createContext(null);

export function AdminAuthProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const refreshAdmin = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getAdminMe();
      setAdmin(data.admin || null);
    } catch (requestError) {
      setAdmin(null);
      if (requestError.status && requestError.status !== 401) {
        setError(requestError.message || "Unable to verify admin session.");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshAdmin();
  }, [refreshAdmin]);

  const signIn = useCallback(async ({ email, password }) => {
    const data = await loginAdmin({ email, password });
    setAdmin(data.admin || null);
    return data.admin;
  }, []);

  const signOut = useCallback(async () => {
    try {
      await logoutAdmin();
    } finally {
      setAdmin(null);
    }
  }, []);

  const value = useMemo(
    () => ({ admin, error, isAuthenticated: Boolean(admin), loading, refreshAdmin, signIn, signOut }),
    [admin, error, loading, refreshAdmin, signIn, signOut]
  );

  return <AdminAuthContext.Provider value={value}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);

  if (!context) {
    throw new Error("useAdminAuth must be used inside AdminAuthProvider");
  }

  return context;
}
