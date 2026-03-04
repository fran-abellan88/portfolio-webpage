import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://franabellan.com";

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.svg",
  },
  metadataBase: new URL(siteUrl),
  title: "Fran Abellán | Lead Data Scientist & AI Expert",
  description:
    "Portfolio of Fran Abellán — Lead Data Scientist & AI Expert with 7+ years driving ML and AI initiatives. PhD in Astrophysics.",
  keywords: [
    "Data Scientist",
    "AI Expert",
    "Machine Learning",
    "LLM",
    "Portfolio",
    "Fran Abellán",
  ],
  authors: [{ name: "Fran Abellán" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Fran Abellán | Lead Data Scientist & AI Expert",
    description:
      "Portfolio of Fran Abellán — Lead Data Scientist & AI Expert with 7+ years driving ML and AI initiatives.",
    type: "website",
    locale: "en_US",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Fran Abellán | Lead Data Scientist & AI Expert",
    description:
      "Portfolio of Fran Abellán — Lead Data Scientist & AI Expert with 7+ years driving ML and AI initiatives.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen" suppressHydrationWarning>{children}</body>
    </html>
  );
}
