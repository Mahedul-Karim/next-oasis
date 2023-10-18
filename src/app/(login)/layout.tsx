import "@/app/globals.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "The wild oasis",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-poppins">{children}</body>
    </html>
  );
}