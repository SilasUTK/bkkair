import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BKK AIR - Visa Flight & Hotel Booking Support",
  description: "Service request platform for visa flight reservation and hotel booking support."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
