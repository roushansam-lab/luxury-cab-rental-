import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luxury Cab Rental in Lucknow | Premium Car Hire",
  description:
    "Explore luxury car rental in Lucknow, Uttar Pradesh for weddings, corporate travel, airport transfers and special occasions. Enquire about vehicle availability and rental options.",
  openGraph: {
    title: "Luxury Cab Rental in Lucknow",
    description: "Arrive in extraordinary style. Explore premium car rental options in Lucknow.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
