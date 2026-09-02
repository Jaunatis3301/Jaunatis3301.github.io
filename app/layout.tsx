import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const departure = localFont({
  src: "../public/fonts/departure-mono/DepartureMono-Regular.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-departure-mono",
  display: "swap",
});
const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL("https://jaunatis3301.github.io"),
  title: { default: "jaunrcy - A Personal Journal", template: "%s - jaunrcy" },
  description:
    "A personal journal about cinema, visual culture, color, memory, and the creative process.",
  openGraph: {
    title: "jaunrcy - A Personal Journal",
    description: "Notes on images, work, and the things still unresolved.",
    type: "website",
  },
};
export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth">
      <body className={`${departure.variable} ${sans.variable} paper-grain`}>
        <a
          href="#main"
          className="focus-ring fixed left-3 top-3 z-[100] -translate-y-20 bg-[var(--ink)] px-4 py-3 text-[var(--bg)] focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
