"use client";
import { useEffect, useState } from "react";
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? Math.min(1, root.scrollTop / max) : 0);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    addEventListener("resize", update);
    return () => {
      removeEventListener("scroll", update);
      removeEventListener("resize", update);
    };
  }, []);
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[70] h-0.5 w-full bg-[var(--rule)] md:hidden"
      >
        <span
          className="block h-full origin-left bg-[var(--accent)]"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
      <div
        aria-hidden="true"
        className="fixed bottom-8 right-5 z-[70] hidden h-28 w-px bg-[var(--rule)] md:block"
      >
        <span
          className="block h-full origin-top bg-[var(--accent)]"
          style={{ transform: `scaleY(${progress})` }}
        />
      </div>
    </>
  );
}
