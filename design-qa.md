# Graffiti Title Integration — Design QA

## Comparison target

- Source visual truth: `/Users/jaunatis/Github/about the skill/experiment-02/` and the three user-provided graffiti references from 2026-09-18.
- Implementation: `/`, `/note/`, `/about/`, and `/note/distance-between-looking-and-seeing/` in the isolated preview at `http://127.0.0.1:4173/`.
- State: dark theme; resting and completed-hover hold states.
- Browser evidence: current Codex in-app Browser captures for swarm, crossout, ambush, story-tease, and the resting article state. The capture API returned inline evidence rather than filesystem-backed screenshots.
- Browser viewport: approximately 771 × 837 CSS pixels at device density 1.

## Full-view comparison evidence

The implementation preserves the Blog's monochrome ocean background, typography, spacing, navigation, article imagery, and reading structure at rest. Pink and cyan are introduced only while a title effect is active.

The first pass on the article title stretched the graffiti horizontally because the SVG used non-proportional scaling. The implementation was changed to `preserveAspectRatio="xMidYMid meet"`, and every subsequent capture showed round faces, stars, crosses, arrows, and lettering with stable proportions.

## Focused interaction evidence

- Home masthead: the `Jaunrcy` title uses the stronger swarm preset while the title remains readable.
- Note and About: crossout marks remain confined to the title region; the short and long title layouts were both captured.
- Article detail: ambush marks sit behind the title, preserve its original line wrapping, remain visible for about two seconds, and then disappear.
- Story list: the low-intensity preset adds only rough underline strokes and a small arrow/cross treatment.
- Only one pointer-enter event starts each title animation; leaving early does not cancel the two-second hold, and repeated entry is locked until the current sequence finishes.

## Required fidelity surfaces

- Fonts and typography: all original title font classes, sizes, weights, letter spacing, line heights, wrapping, and alignment remain in place.
- Spacing and layout rhythm: decorative SVGs are absolutely positioned and do not alter document flow or title dimensions. No desktop horizontal overflow was visible.
- Colors and visual tokens: the resting Blog remains monochrome. Active marks use the selected saturated pink and cyan palette.
- Image quality and asset fidelity: existing Blog images are unchanged. The user explicitly required a code-only effect, so the title marks are generated as proportional SVG paths rather than raster assets.
- Copy and content: visible page and article titles are unchanged. Decorative annotations are `aria-hidden`.

## Findings

No actionable P0, P1, or P2 findings remain.

## Validation

- Modified-file Prettier check: passed.
- TypeScript check: passed.
- Next.js production build and static route generation: passed in an isolated copy.
- Browser runtime: all inspected routes returned 200 with no render error overlay. Existing LCP advisory messages for the bunny and rose images are unrelated to this title effect.
- Real checkout contains no `node_modules`, `.next`, `out`, or `tsconfig.tsbuildinfo` from validation.

## Follow-up polish

- P3: test additional physical mobile devices if touch-specific animation is added later. Current touch behavior deliberately avoids intercepting navigation.

final result: passed
