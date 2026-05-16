import type { Metadata } from "next";
import "./globals.css";
import AosInit from "./components/AosInit";

export const metadata: Metadata = {
  title: "Hega Truck Sales — Quality Used Trucks in El Paso",
  description:
    "Hega Truck Sales — your trusted source for quality used trucks in El Paso, TX. Browse Freightliner, Volvo, Kenworth and more. Transparent pricing, inspected inventory.",
  keywords: [
    "truck sales",
    "used trucks",
    "Freightliner",
    "Volvo",
    "Kenworth",
    "semi truck",
    "El Paso trucks",
    "Hega Truck Sales",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AosInit />
        {children}
      </body>
    </html>
  );
}
