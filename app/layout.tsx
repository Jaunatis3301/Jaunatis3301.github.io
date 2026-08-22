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
