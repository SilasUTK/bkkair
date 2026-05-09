"use client";

import dynamic from "next/dynamic";

const LegacyApp = dynamic(() => import("./legacy/App.jsx"), { ssr: false });

export default function AppShell() {
  return <LegacyApp />;
}
