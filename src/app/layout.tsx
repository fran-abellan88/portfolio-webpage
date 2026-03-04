import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fran Abellán",
  jobTitle: "Lead Data Scientist & AI Expert",
  description:
    "Data Science leader with 7+ years driving high-impact ML and AI initiatives across insurance, energy, and telecom. PhD in Astrophysics.",
  url: siteUrl,
  image: `${siteUrl}/photo.jpg`,
  email: "contact@franabellan.com",
  sameAs: [
    "https://www.linkedin.com/in/franabellan/",
    "https://x.com/FranAbellan88",
    "https://github.com/fran-abellan88",
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Valencia",
    },
  ],
  knowsAbout: [
    "Machine Learning",
    "Artificial Intelligence",
    "Large Language Models",
    "Data Science",
    "Python",
    "NLP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen" suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
