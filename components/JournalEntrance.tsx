"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import DecorativeMotif from "./DecorativeMotif";

const sessionKey = "jaunrcy-entrance-seen";

export default function JournalEntrance() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const exitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const pageContent = document.getElementById("home-content");
    const hasEntered = window.sessionStorage.getItem(sessionKey) === "true";

    if (hasEntered) {
      setVisible(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    pageContent?.setAttribute("inert", "");
    pageContent?.setAttribute("aria-hidden", "true");

    return () => {
      document.body.style.overflow = previousOverflow;
      pageContent?.removeAttribute("inert");
      pageContent?.removeAttribute("aria-hidden");
      if (exitTimer.current) clearTimeout(exitTimer.current);
    };
  }, []);

  const enterJournal = () => {
    if (leaving) return;

    const pageContent = document.getElementById("home-content");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finish = () => {
      window.sessionStorage.setItem(sessionKey, "true");
      document.body.style.overflow = "";
      pageContent?.removeAttribute("inert");
      pageContent?.removeAttribute("aria-hidden");
      setVisible(false);
    };

    if (reduceMotion) {
      finish();
      return;
    }

    setLeaving(true);
    exitTimer.current = setTimeout(finish, 1050);
  };

  if (!visible) return null;

  return (
    <section
      aria-label="Jaunrcy journal entrance"
      aria-modal="true"
      className={`journal-entrance ${leaving ? "journal-entrance--leaving" : ""}`}
      role="dialog"
    >
      <div className="journal-entrance__ocean" aria-hidden="true" />
      <div className="journal-entrance__veil" aria-hidden="true" />

      <p className="journal-entrance__issue meta">Issue 01 · Summer 2026</p>

      <DecorativeMotif
        motif="moon"
        priority
        sizes="(max-width: 640px) 5rem, 8rem"
        className="journal-entrance__moon w-20 md:w-28 lg:w-32"
      />

      <div className="journal-entrance__composition">
        <div className="journal-entrance__title-block">
          <p className="meta text-[11px] uppercase tracking-[.18em]">A personal journal</p>
          <h1 className="display journal-entrance__title">Jaunrcy</h1>
          <p className="journal-entrance__caption meta">
            Notes on images, work, and the things still unresolved.
          </p>
        </div>

        <div className="journal-entrance__path">
          <span className="journal-entrance__line" aria-hidden="true" />
          <button
            type="button"
            className="journal-entrance__enter focus-ring meta"
            onClick={enterJournal}
          >
            Enter <ArrowRight aria-hidden="true" size={17} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
