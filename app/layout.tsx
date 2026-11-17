
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SANJA. — Backend Software Engineer",
  description:
    "The personal portfolio of Sanja, a backend software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
