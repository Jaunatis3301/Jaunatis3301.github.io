import type { Metadata } from "next";
import TerminalExperience from "@/components/TerminalExperience";

export const metadata: Metadata = {
  title: "Terminal",
  description: "An interactive, fictional terminal hidden inside jaunrcy.",
  robots: { index: false, follow: false },
};

export default function TerminalPage() {
  return <TerminalExperience />;
}
