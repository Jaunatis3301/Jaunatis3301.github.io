import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="page-shell flex min-h-[70vh] flex-col justify-center py-20">
        <p className="meta text-[10px] uppercase text-[var(--accent)]">404 · Outside the frame</p>
        <h1 className="display mt-5 text-7xl sm:text-9xl">Nothing is printed here.</h1>
        <p className="mt-6 max-w-md text-[var(--muted)]">
          The page may have moved, or perhaps it was only ever an unfinished note.
        </p>
        <Link className="focus-ring mt-8 w-fit border-b border-current pb-2" href="/">
          Return home →
        </Link>
      </main>
    </>
  );
}
