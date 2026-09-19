"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { PointerEvent } from "react";

type GraffitiPreset = "swarm" | "crossout" | "ambush" | "story";
type HeadingTag = "h1" | "h2" | "h3";

const EFFECT_DURATION = 3300;

function GraffitiMarks({ preset, filterId }: { preset: GraffitiPreset; filterId: string }) {
  const filter = `url(#${filterId})`;

  if (preset === "story") {
    return (
      <>
        <g className="graffiti-title__stroke is-pink is-heavy" filter={filter}>
          <path pathLength="1" d="M42 112 C238 86 512 139 829 98" />
          <path pathLength="1" d="M48 128 C282 101 538 148 836 113" />
          <path pathLength="1" d="M877 50 L929 100 M929 49 L878 101" />
        </g>
        <g className="graffiti-title__stroke is-cyan" filter={filter}>
          <path pathLength="1" d="M820 29 C869 19 912 35 944 68" />
          <path pathLength="1" d="M910 65 L944 68 L928 42" />
        </g>
      </>
    );
  }

  if (preset === "crossout") {
    return (
      <>
        <g className="graffiti-title__stroke is-pink is-heavy" filter={filter}>
          <path pathLength="1" d="M89 178 C292 139 553 211 866 151" />
          <path pathLength="1" d="M94 198 C345 157 580 224 872 170" />
          <path pathLength="1" d="M64 58 L129 121 M130 54 L63 124" />
          <path pathLength="1" d="M810 57 L877 119 M878 54 L811 122" />
          <path pathLength="1" d="M690 54 L714 99 L756 72 L735 120 L780 140" />
        </g>
        <g className="graffiti-title__stroke is-cyan" filter={filter}>
          <path pathLength="1" d="M776 224 C835 189 897 201 931 253 C888 238 845 255 810 294" />
          <path pathLength="1" d="M845 266 L810 294 L857 289" />
          <path pathLength="1" d="M142 248 L171 209 L188 251 L220 218 L229 269" />
        </g>
      </>
    );
  }

  if (preset === "swarm") {
    return (
      <>
        <g className="graffiti-title__stroke is-pink is-heavy" filter={filter}>
          <path pathLength="1" d="M79 64 L137 120 M137 62 L80 122" />
          <path
            pathLength="1"
            d="M824 62 L855 108 L902 84 L880 136 L925 160 L873 160 L855 209 L837 160 L789 178 L821 138 L792 101 L839 114 Z"
          />
          <path pathLength="1" d="M654 255 L681 213 L697 260 L731 221 L738 278" />
          <path pathLength="1" d="M277 260 C410 227 559 278 681 242" />
        </g>
        <g className="graffiti-title__stroke is-cyan" filter={filter}>
          <path
            pathLength="1"
            d="M123 173 C154 132 216 130 251 168 C286 207 256 255 207 259 C157 263 109 220 123 173 Z"
          />
          <path
            pathLength="1"
            d="M143 188 L177 219 M178 187 L144 220 M199 186 L235 219 M235 185 L200 220"
          />
          <path pathLength="1" d="M141 235 C171 260 210 261 239 233" />
          <path
            pathLength="1"
            d="M485 59 C520 23 571 27 595 62 C620 98 592 132 557 135 C521 139 498 116 503 91 C507 69 537 61 549 79 C562 99 540 112 523 102"
          />
        </g>
      </>
    );
  }

  return (
    <>
      <g className="graffiti-title__stroke is-pink is-heavy" filter={filter}>
        <path pathLength="1" d="M72 250 C286 226 522 278 815 231" />
        <path pathLength="1" d="M77 266 C324 239 540 290 820 246" />
        <path pathLength="1" d="M61 53 L126 111 M126 49 L62 115" />
        <path pathLength="1" d="M836 47 L901 109 M902 46 L837 111" />
        <path
          pathLength="1"
          d="M746 70 L771 112 L811 86 L791 132 L836 151 L785 153 L768 199 L749 154 L700 170 L735 132 L705 96 L752 111 Z"
        />
      </g>
      <g className="graffiti-title__stroke is-cyan" filter={filter}>
        <path pathLength="1" d="M858 211 C902 186 943 195 960 231 C927 222 903 238 882 270" />
        <path pathLength="1" d="M910 238 L882 270 L925 261" />
        <path
          pathLength="1"
          d="M174 50 C211 15 273 20 295 61 C318 104 280 143 236 139 C190 136 157 92 174 50 Z"
        />
        <path pathLength="1" d="M191 67 L225 96 M225 66 L191 98 M246 65 L280 97 M280 64 L247 98" />
        <path pathLength="1" d="M190 112 C219 139 255 140 283 110" />
        <path pathLength="1" d="M202 119 L215 136 L229 121 L242 139 L256 120 L270 134" />
      </g>
    </>
  );
}

export default function GraffitiTitle({
  as: Heading = "h2",
  className = "",
  id,
  preset,
  text,
  wrapperClassName = "",
}: {
  as?: HeadingTag;
  className?: string;
  id?: string;
  preset: GraffitiPreset;
  text: string;
  wrapperClassName?: string;
}) {
  const [active, setActive] = useState(false);
  const locked = useRef(false);
  const timer = useRef<number | null>(null);
  const root = useRef<HTMLDivElement>(null);
  const filterId = `graffiti-${useId().replaceAll(":", "")}`;

  function start() {
    if (locked.current) return;
    locked.current = true;
    setActive(true);
    timer.current = window.setTimeout(() => {
      setActive(false);
      locked.current = false;
    }, EFFECT_DURATION);
  }

  function handlePointerEnter(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "touch") start();
  }

  useEffect(() => {
    const linkedTitle = root.current?.closest("a");
    linkedTitle?.addEventListener("focus", start);
    return () => {
      linkedTitle?.removeEventListener("focus", start);
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  const viewBox = preset === "story" ? "0 0 1000 170" : "0 0 1000 320";
  const tag = preset === "crossout" ? "NOPE!" : preset === "swarm" ? "HAHA!" : "LOOK CLOSER";

  return (
    <div
      className={`graffiti-title graffiti-title--${preset} ${active ? "is-active" : ""} ${wrapperClassName}`}
      onPointerEnter={handlePointerEnter}
      ref={root}
    >
      <Heading className={`graffiti-title__text ${className}`} id={id}>
        {text}
      </Heading>
      <svg
        aria-hidden="true"
        className="graffiti-title__drawing"
        preserveAspectRatio="xMidYMid meet"
        viewBox={viewBox}
      >
        <defs>
          <filter id={filterId}>
            <feTurbulence
              baseFrequency="0.035 0.16"
              numOctaves="3"
              result="noise"
              seed="29"
              type="fractalNoise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="5"
              xChannelSelector="R"
              yChannelSelector="B"
            />
          </filter>
        </defs>
        <GraffitiMarks filterId={filterId} preset={preset} />
      </svg>
      {preset !== "story" && (
        <>
          <span aria-hidden="true" className="graffiti-title__tag">
            {tag}
          </span>
          <span aria-hidden="true" className="graffiti-title__signature">
            {preset === "crossout" ? "x was here" : "x x x"}
          </span>
        </>
      )}
    </div>
  );
}
