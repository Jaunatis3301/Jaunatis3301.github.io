import type { Metadata, Viewport } from "next";
import { DM_Mono, Instrument_Serif, Manrope } from "next/font/google";
import "./globals.css";
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});
const sans = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://jaunatis3301.github.io"),
  title: { default: "jaunrcy — A Personal Journal", template: "%s — jaunrcy" },
  description:
    "A personal journal about cinema, visual culture, color, memory, and the creative process.",
  openGraph: {
    title: "jaunrcy — A Personal Journal",
    description: "Notes on images, work, and the things still unresolved.",
    type: "website",
  },
};
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1f2f3" },
    { media: "(prefers-color-scheme: dark)", color: "#08090a" },
  ],
  colorScheme: "light dark",
};

const themeScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("jaunrcy-theme");
      const theme =
        savedTheme === "light" || savedTheme === "dark"
          ? savedTheme
          : matchMedia("(prefers-color-scheme: light)").matches
            ? "light"
            : "dark";

      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${display.variable} ${sans.variable} ${mono.variable} paper-grain`}>
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
