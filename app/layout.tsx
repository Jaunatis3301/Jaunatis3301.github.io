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
  title: { default: "jaunrcy - A Personal Note", template: "%s - jaunrcy" },
  description: "Learning notes, essays, Blender videos, and independent projects by jaunrcy.",
  openGraph: {
    title: "jaunrcy - A Personal Note",
    description: "Learning notes, essays, Blender videos, and independent projects by jaunrcy.",
    type: "website",
  },
};
export const viewport: Viewport = {
  themeColor: "#08090a",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${departure.variable} ${sans.variable} paper-grain`}>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('jaunrcy-theme');document.documentElement.dataset.theme=t==='light'||t==='dark'?t:(matchMedia('(prefers-color-scheme: light)').matches?'light':'dark')}catch(e){document.documentElement.dataset.theme='dark'}})()` }} />
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
