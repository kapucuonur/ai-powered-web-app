import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Web Builder",
  description: "Generate stunning websites with a single prompt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${outfit.className} antialiased min-h-screen bg-black text-white selection:bg-purple-500/30`}>
        {children}
      </body>
    </html>
  );
}
