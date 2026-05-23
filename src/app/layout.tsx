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
  title: "civisense.ai — Making Sense of Citizen Governance",
  description:
    "AI-powered governance intelligence platform. Real-time grievance resolution, citizen sentiment analysis, and decision support for local government bodies across India.",
  keywords: ["GovTech", "AI governance", "citizen grievances", "India", "Kerala", "civisense"],
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
