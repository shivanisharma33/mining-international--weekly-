import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "International Mining Week — June 1–5, 2026 · Québec City",
  description: "The global mining industry comes together in Québec City for a week of events, connections and opportunities.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-white text-[#4a5364]">
        {children}
      </body>
    </html>
  );
}

