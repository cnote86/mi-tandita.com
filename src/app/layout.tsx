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
  verification: {
    google: "NCJGQvEYpggI7utqdJBZcU6uF4GvNg5q0LyufR5e0tE",
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
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Mi Tandita",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "iOS, Android",
        "description": "Plataforma para organizar y coordinar tandas de ahorro entre amigos y familia",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "MXN"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Que es una tanda?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Una tanda es un sistema de ahorro colectivo donde un grupo de personas aporta una cantidad fija de dinero periodicamente. Cada periodo, un participante diferente recibe el total acumulado. Es una tradicion popular en Mexico tambien conocida como cundina o vaquita."
            }
          },
          {
            "@type": "Question",
            "name": "Mi Tandita maneja mi dinero?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. Mi Tandita es unicamente una herramienta de organizacion y coordinacion. No recibimos, retenemos ni transferimos dinero. Todas las aportaciones se realizan directamente entre los participantes usando los medios de pago que ellos elijan."
            }
          },
          {
            "@type": "Question",
            "name": "Como funciona Mi Tandita?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mi Tandita te permite crear grupos de ahorro, definir reglas y calendarios de aportacion, registrar pagos realizados entre participantes, y enviar notificaciones automaticas de recordatorio y seguimiento."
            }
          },
          {
            "@type": "Question",
            "name": "Es seguro usar Mi Tandita?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Si. Como no manejamos dinero, no hay riesgo financiero asociado con la plataforma. Tu informacion personal esta protegida y nunca recopilamos datos financieros como numeros de cuenta o tarjetas."
            }
          },
          {
            "@type": "Question",
            "name": "Cuanto cuesta Mi Tandita?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "La plataforma puede cobrar una cuota por el uso del software de organizacion. Esta cuota corresponde unicamente al acceso y mantenimiento de la plataforma tecnologica, no a las aportaciones de las tandas."
            }
          },
          {
            "@type": "Question",
            "name": "En que paises esta disponible Mi Tandita?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mi Tandita esta disenada principalmente para usuarios en Mexico, donde las tandas son una tradicion popular de ahorro colectivo."
            }
          },
          {
            "@type": "Question",
            "name": "Cuando estara disponible la app?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Mi Tandita estara disponible proximamente en Apple App Store y Google Play. Registrate para recibir notificaciones cuando lancemos."
            }
          }
        ]
      },
      {
        "@type": "Organization",
        "name": "Mi Tandita",
        "url": "https://mi-tandita.com",
        "logo": "https://mi-tandita.com/Mi -Tandita-logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "contacto@mi-tandita.com",
          "contactType": "customer service"
        }
      }
    ]
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
