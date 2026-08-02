# Journal Entrance Design QA

## Comparison Target

- Source visual truth: `/Users/jaunatis/.codex/generated_images/019f9e5e-daab-7012-8054-0de1b3ade055/exec-b790d6ed-25d6-47c1-82ac-6236a2b6e11f.png`
- Source pixels: `1487 × 1058`.
- Implementation route: `/` in the isolated static preview at `http://127.0.0.1:4173/`.
- State: dark theme, first visit before Enter; post-entry state captured separately.

## Viewports And Density Normalization

- Desktop browser viewport: `1280 × 720` CSS px; implementation capture: `1280 × 720` px.
- Mobile browser viewport: `390 × 844` CSS px; entrance capture: `390 × 844` px.
- The source mock has a taller aspect ratio than the available desktop browser viewport. For full-view comparison it was proportionally contained inside a `1280 × 720` panel without stretching. A separate lower-region comparison was used for the title, caption, rule, and Enter alignment.

## Evidence

- Desktop entrance: `/private/tmp/jaunrcy-entry-desktop-final.png`
- Mobile entrance: `/private/tmp/jaunrcy-entry-mobile-final.png`
- Desktop after Enter: `/private/tmp/jaunrcy-after-enter-desktop.png`
- Mobile after Enter: `/private/tmp/jaunrcy-after-enter-mobile-final.png`
- Full-view comparison: `/private/tmp/jaunrcy-entry-design-comparison.jpg`
- Focused comparison: `/private/tmp/jaunrcy-entry-focused-comparison.jpg`

## Required Fidelity Surfaces

- Fonts and typography: the existing Instrument Serif, DM Mono, and Manrope hierarchy is preserved. The title remains fully visible with intact `J` and `y` descenders; caption text no longer collides with the display glyphs.
- Spacing and layout rhythm: the lower-left title block, vertical issue rail, long horizontal rule, right-aligned Enter control, top-right moon, and broad negative space follow the selected mock. Mobile reflows the title and action into a single lower composition without overflow.
- Colors and visual tokens: the entrance stays within black, charcoal, pearl white, and pale gray. The ocean remains visible while retaining the dark editorial atmosphere.
- Image quality and asset fidelity: the existing ocean photograph and selected moon PNG are used directly. There are no CSS-drawn substitute illustrations, stretched assets, or placeholder imagery.
- Copy and content: `Jaunrcy`, `A personal journal`, `Issue 01 · Summer 2026`, the journal caption, and `Enter` match the selected direction.

## Interaction And Accessibility Checks

- Enter is a real keyboard-focusable button and activates the upward cover transition.
- After the transition, the smaller homepage masthead and featured article become visible.
- The entrance is recorded in `sessionStorage`; reloading the same tab produced zero entrance dialogs.
- Background content is inert and hidden from assistive technology while the entrance is open.
- `prefers-reduced-motion` uses the immediate-entry path and the existing global reduced-motion rules.
- Mobile and desktop captures have no horizontal overflow.
- Browser console after Enter: no warnings or errors.

## Comparison History

- Pass 0: implementation completed, but rendering was blocked because the source checkout intentionally had no dependencies. Validation moved to `/private/tmp/jaunrcy-entry-validation` after user approval.
- Pass 1 findings: initial auto-focus produced a visible focus box not present in the mock; the `J` descender crowded the caption. Auto-focus was removed and caption spacing was corrected.
- Pass 2 finding: the ocean was darker and more blurred than the source direction. Blur was reduced and brightness raised while retaining text contrast.
- Pass 3: desktop, mobile, post-entry state, one-per-session behavior, console output, and combined visual comparisons were rechecked. No actionable P0, P1, or P2 findings remain.

## Validation

- Prettier check: passed.
- TypeScript with `--noEmit --incremental false`: passed.
- Next.js static build: passed; all expected routes exported.
- All dependencies and build output remain isolated under `/private/tmp/jaunrcy-entry-validation`.
- Validation created none of `node_modules`, `.next`, `out`, `.DS_Store`, or `tsconfig.tsbuildinfo` in the source repository. One ignored root `.DS_Store` predates this work (`2026-07-24 16:43:39 +0800`) and was left untouched.

## Follow-up Polish

- P3 only: a future capture environment that supports the mock's exact taller desktop aspect ratio could provide a stricter pixel-level full-frame comparison. The focused comparison already confirms the primary entrance composition.

final result: passed
