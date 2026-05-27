import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://civisense.ai"),
  title: "civisense.ai — Making Sense of Citizen Governance",
  description:
    "AI-powered governance intelligence platform. Real-time grievance resolution, citizen sentiment analysis, and decision support for local government bodies across India.",
  keywords: ["GovTech", "AI governance", "citizen grievances", "India", "Kerala", "civisense"],
  icons: {
    icon: [
      { url: "/favicon-16x16.png",  sizes: "16x16",  type: "image/png" },
      { url: "/favicon-32x32.png",  sizes: "32x32",  type: "image/png" },
      { url: "/favicon-64x64.png",  sizes: "64x64",  type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "256x256", type: "image/png" },
    shortcut: "/favicon-32x32.png",
  },
  openGraph: {
    title: "civisense.ai — Making Sense of Citizen Governance",
    description:
      "India's first AI-native governance intelligence platform. AI-powered grievance resolution and real-time analytics for local government bodies.",
    url: "https://civisense.ai",
    siteName: "civisense.ai",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "civisense.ai — Making Sense of Citizen Governance",
    description: "India's first AI-native governance intelligence platform.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} ${outfit.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
