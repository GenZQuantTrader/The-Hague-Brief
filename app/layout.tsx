import { Suspense } from "react";
import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["600", "700", "800"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Hague Brief",
  description:
    "Global issues, candid interviews, reported articles and sharp opinions.",
};

<Suspense fallback={null}>
  <Navbar />
</Suspense>
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="editorial-canvas relative min-h-screen overflow-x-hidden font-sans text-neutral-950 antialiased selection:bg-emerald-700 selection:text-white">
        {/* Soft Green & Neutral Depth Orbs */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-neutral-900/10 blur-3xl" />
          <div className="absolute -bottom-32 left-10 h-[24rem] w-[24rem] rounded-full bg-emerald-400/15 blur-3xl" />
        </div>

        <Suspense fallback={null}>
  <Navbar />
</Suspense>
        <main className="mx-auto max-w-6xl px-6 py-12">{children}</main>

        <footer className="mt-20 border-t border-neutral-800 bg-black text-neutral-300">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
            <div>
              <p className="flex items-center gap-2 font-serif text-2xl font-bold tracking-tight text-white">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                The Hague Brief
              </p>
              <p className="mt-1 text-sm text-neutral-400">
                Global conversations on law, policy and geopolitics.
              </p>
            </div>
            <p className="text-xs text-neutral-500">
              © 2026 ILA, NG - YMC. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}