import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iron Bones",
  description: "Votre plateforme de B2B et B2C pour le marché de BTP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100">{children}</body>
    </html>
  );
}
