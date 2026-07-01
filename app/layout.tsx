import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/Header";
import ThemeProvider from "@/components/ui/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexis Kimtoloum - Développeur web & Data Scientist",
  description:
    "Développeur web et Data Scientist basé à Lomé, Togo. Développement web, analyse de données, SEO, marketing digital et formation pour PME et ONG en Afrique de l'Ouest.",
  metadataBase: new URL("https://alexis-porfolio.vercel.app"),
  openGraph: {
    title: "Alexis Kimtoloum - Développeur web & Data Scientist",
    description:
      "Développement web, Data Science, SEO et marketing digital pour PME et ONG en Afrique de l'Ouest.",
    url: "https://alexis-porfolio.vercel.app",
    siteName: "Alexis Kimtoloum",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexis Kimtoloum - Développeur web & Data Scientist",
    description:
      "Développement web, Data Science, SEO et marketing digital pour PME et ONG en Afrique de l'Ouest.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}