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
  title: "Euro Truck Sales — Affordable Truck Sales & Service",
  description:
    "Europe's trusted truck sales platform. Browse quality used trucks from Scania, Volvo, MAN, DAF, and Renault. Parts, service, and accessories.",
  keywords: [
    "truck sales",
    "used trucks",
    "Scania",
    "Volvo",
    "MAN",
    "DAF",
    "Renault",
    "truck service",
    "truck parts",
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
