import type { Metadata } from "next";
import { Cormorant_Garamond, Syne, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-ibm-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Al-Hamed — Software Engineer",
  description:
    "Personal portfolio of Mohammed Abdullah Al-Hamed, Software Engineer based in Riyadh, Saudi Arabia. Full-Stack developer specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Mohammed Al-Hamed",
    "محمد الحامد",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Riyadh",
    "Saudi Arabia",
  ],
  authors: [{ name: "Mohammed Abdullah Al-Hamed" }],
  openGraph: {
    title: "Mohammed Al-Hamed — Software Engineer",
    description:
      "Portfolio & CV of Mohammed Abdullah Al-Hamed, Software Engineer from Riyadh, Saudi Arabia.",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Al-Hamed — Software Engineer",
    description: "Portfolio of Mohammed Abdullah Al-Hamed, Software Engineer, Riyadh.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${cormorant.variable} ${syne.variable} ${ibmArabic.variable}`}
    >
      <body className="min-h-screen antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
