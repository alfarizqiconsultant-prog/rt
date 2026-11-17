import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "RT Arjuna GSP | Portal Warga",
  description: "Portal informasi dan layanan warga RT Arjuna GSP.",
  applicationName: "RT Arjuna GSP",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
