import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Benjamin Jia | Builder, Operator & Storyteller",
  description:
    "Benjamin Jia is a computer science student, entrepreneur, operator, and content creator with hands-on experience in digital marketing, sales, marketplace operations, and cross-cultural communication.",
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