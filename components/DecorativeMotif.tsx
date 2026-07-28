import Image from "next/image";

type Motif = "moon" | "bunny" | "rose";

const motifs = {
  moon: {
    src: "/images/motifs/new-moon-graffiti.png",
    width: 1254,
    height: 1254,
  },
  bunny: {
    src: "/images/motifs/jaunrcy-bunny-graffiti.png",
    width: 1024,
    height: 1536,
  },
  rose: {
    src: "/images/motifs/thorn-rose-graffiti.png",
    width: 1024,
    height: 1536,
  },
} as const;

export default function DecorativeMotif({
  motif,
  className = "",
  priority = false,
  sizes,
}: {
  motif: Motif;
  className?: string;
  priority?: boolean;
  sizes: string;
}) {
  const asset = motifs[motif];

  return (
    <span aria-hidden="true" className={`decorative-motif block ${className}`}>
      <Image
        src={asset.src}
        alt=""
        width={asset.width}
        height={asset.height}
        priority={priority}
        sizes={sizes}
        className="h-auto w-full"
        draggable={false}
      />
    </span>
  );
}
