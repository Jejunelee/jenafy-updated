import type { Metadata, Viewport } from "next";
import "./globals.css";
import { dmSans, spaceGrotesk } from "@/fonts/fonts";
import { SITE } from "@/lib/site";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Jenafy — Digital platforms that work",
    template: "%s · Jenafy",
  },
  description:
    "Jenafy designs and ships digital platforms that make sense — clear for the people using them, solid enough to grow on.",
  keywords: [
    "Jenafy",
    "digital platforms",
    "web development",
    "UI/UX design",
    "product design",
    "client workspace",
  ],
  openGraph: {
    title: "Jenafy — Digital platforms that work",
    description:
      "We build digital products people can actually use. New visitors enter the studio. Existing clients sign in.",
    type: "website",
    locale: "en_PH",
    siteName: "Jenafy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jenafy — Digital platforms that work",
    description:
      "Clear products. Real operations. A home for the clients who already build with us.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  email: SITE.email,
  url: SITE.url,
  description:
    "Digital platforms that make sense — designed and built for the people who have to use them.",
  areaServed: "PH",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className={dmSans.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
