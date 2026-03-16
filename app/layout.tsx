import type { Metadata } from "next";
import { Ultra, Slabo_13px } from "next/font/google";
import "./globals.css";
import AosInit from "./components/AosInit";

const ultra = Ultra({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-ultra",
  display: "swap",
});

const slabo = Slabo_13px({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-slabo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rush Truck Center — Affordable Truck Sales & Service",
  description:
    "Rush Truck Center — your trusted source for quality used trucks. Browse Freightliner, Volvo, and more. Parts, service, and accessories.",
  keywords: [
    "truck sales",
    "used trucks",
    "Freightliner",
    "Volvo",
    "Cascadia",
    "semi truck",
    "truck service",
    "truck parts",
    "Rush Truck Center",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ultra.variable} ${slabo.variable} antialiased`}
      >
        <AosInit />
        {children}
      </body>
    </html>
  );
}
