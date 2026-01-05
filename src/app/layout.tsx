import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#1a2e1a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mi-tandita.com"),
  title: {
    default: "Mi Tandita - Organiza tus Tandas | App de Ahorro Colectivo",
    template: "%s | Mi Tandita",
  },
  description: "Organiza y coordina tandas de ahorro con amigos y familia. La app mas facil para grupos de ahorro rotativo en Mexico. Proximamente en App Store y Google Play.",
  keywords: [
    "tandas",
    "tandas mexico",
    "ahorro colectivo",
    "grupos de ahorro",
    "ahorro rotativo",
    "cundina",
    "vaquita",
    "organizar tandas",
    "app tandas",
    "ahorro entre amigos",
    "finanzas personales mexico",
  ],
  authors: [{ name: "Mi Tandita" }],
  creator: "Mi Tandita",
  publisher: "Mi Tandita",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://mi-tandita.com",
    siteName: "Mi Tandita",
    title: "Mi Tandita - Organiza tus Tandas Sin Complicaciones",
    description: "La plataforma mas facil para organizar tandas de ahorro con amigos y familia. No manejamos dinero. Proximamente en App Store y Google Play.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mi Tandita - App de Tandas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Tandita - Organiza tus Tandas",
    description: "La plataforma mas facil para organizar tandas de ahorro. Proximamente en App Store y Google Play.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://mi-tandita.com",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Mi Tandita",
  },
  category: "finance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Mi Tandita",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "iOS, Android",
    "description": "Plataforma para organizar y coordinar tandas de ahorro entre amigos y familia",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "MXN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "1"
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
