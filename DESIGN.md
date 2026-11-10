---
name: Blockchain at Emory
description: Emory's student blockchain organization, presented as an engraved security certificate in Emory navy and gold ink.
colors:
  gold: "#f2a900"
  gold-bright: "#ffc233"
  gold-line: "rgba(242, 169, 0, 0.55)"
  gold-hair: "rgba(242, 169, 0, 0.26)"
  gold-faint: "rgba(242, 169, 0, 0.12)"
  emory-blue: "#012169"
  ground: "#0b1a38"
  panel: "#122a5c"
  ink-deep: "#06112b"
  text: "#eef1f8"
  text-2: "#b4c0dc"
  text-3: "#8d9cc0"
  stock-text: "#c8d2ea"
typography:
  display:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(3.1rem, 8.2vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(2.4rem, 5.2vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(1.6rem, 3vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  entry:
    fontFamily: "Bodoni Moda, Didot, Bodoni 72, Georgia, serif"
    fontSize: "clamp(1.35rem, 2.3vw, 1.75rem)"
    fontWeight: 500
    lineHeight: 1.15
  lede:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.08rem, 1.6vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    letterSpacing: "0.05em"
    fontFeature: "c2sc, smcp"
  button:
    fontFamily: "Hanken Grotesk, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    letterSpacing: "0.01em"
  serial:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.78rem"
    fontWeight: 400
    letterSpacing: "0.04em"
    fontFeature: "tnum"
  column-header:
    fontFamily: "JetBrains Mono, ui-monospace, SF Mono, Menlo, monospace"
    fontSize: "0.72rem"
    fontWeight: 400
    letterSpacing: "0.05em"
rounded:
  hairline: "2px"
  oval: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 2.5rem)"
  page: "1240px"
  header: "72px"
  section: "clamp(4.5rem, 10vw, 8rem)"
  section-head: "clamp(2.5rem, 5vw, 4rem)"
  frame-inset: "clamp(18px, 2.4vw, 28px)"
  row: "1.6rem"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink-deep}"
    typography: "{typography.button}"
    rounded: "{rounded.hairline}"
    padding: "0 1.4rem"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.gold-bright}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.hairline}"
    padding: "0 1.4rem"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.gold-faint}"
  nav-link:
    textColor: "{colors.text-2}"
    padding: "0 0.75rem"
    height: "44px"
  nav-link-active:
    textColor: "{colors.text}"
  input:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.text}"
    typography: "{typography.body}"
    rounded: "{rounded.hairline}"
    padding: "0.75rem 0.9rem"
    height: "48px"
  ledger-row:
    textColor: "{colors.text}"
    padding: "1.6rem 0.75rem"
  ledger-row-hover:
    backgroundColor: "{colors.gold-faint}"
  certificate:
    backgroundColor: "{colors.emory-blue}"
    textColor: "{colors.text}"
  portrait:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.oval}"
---

# Design System: Blockchain at Emory

## Overview

**Creative North Star: "The Engraved Certificate"**

The club presents itself as a security certificate: something issued, numbered and verifiable. The ground is a deep Emory navy; on it, gold behaves like engraving ink, drawn in hairlines, woven guilloché lattices and a turning rosette seal rather than poured into fills. Content sits in ledgers and framed panels the way entries sit on a register, so a visitor reads the club's work as a record rather than as marketing.

Density is moderate and print-like: generous section breathing room (up to 8rem), hairline rules between rows, and a high-contrast Didone display serif that carries the ceremony while a plain grotesk does the reading. Ornament is generated, not imported: every lattice, band and rosette is SVG drawn by script from sine strands, so it stays crisp at any width and redraws on resize.

The world refuses the crypto-club default: no gradient hero, no glass cards, no floating stat tiles, no glow. Depth comes from engraving and tonal navy stock, never from shadow.

**Key Characteristics:**
- Navy field tinted from Emory blue; no neutral greys or black anywhere.
- Gold as ink: linework, the seal mark, link affordances and one filled primary action per panel.
- Generated guilloché: border lattice on framed panels, rosette seal, horizontal lattice band heading each divided section.
- Bodoni Moda display over Hanken Grotesk body; JetBrains Mono only for serials, dates and column headers.
- Ruled lists and ledgers instead of cards; 2px hairline corners; ovals only for portraits and the seal.
- One-time engraving stroke draw on load and a 240s rosette turn, both off under reduced motion.

## Colors

A two-ink palette: Emory navy stock in three tonal steps and a single gold ink at four strengths.

### Primary
- **Engraving Gold** (`gold`): the ink. Guilloché strokes, the seal mark printed through the logo mask, ledger serial numbers, text links and their arrows, the wordmark's "at", focus rings, the input caret, text selection, and the fill of the primary button.
- **Struck Gold** (`gold-bright`): hover state of the gold fill only.
- **Gold Rule** (`gold-line`): structural hairlines: top rule of ledgers and division lists, footer top border, outline-button borders, portrait keylines, signature rules, the mobile nav's bottom edge.
- **Gold Hair** (`gold-hair`): the finer rule: between ledger and list rows, the header's bottom border, partner-grid cells, footer base divider.
- **Gold Wash** (`gold-faint`): the only gold-tinted surface: hover/focus wash on ledger rows, outline buttons and team jump links.

### Secondary
- **Emory Blue Stock** (`emory-blue`): the certificate's paper. Used for the hero certificate panel (overlaid with a 135° hatching of gold at 3.5% opacity, 1px line every 7px) and the students' half of the join panel. Text on it uses **Stock Text** (`stock-text`) where secondary copy needs more contrast than `text-2`.

### Neutral
- **Night Field** (`ground`): page background, header, footer, mobile nav sheet, and input fields.
- **Image Bed** (`panel`): placeholder fill behind photos and portraits while they load.
- **Deep Ink** (`ink-deep`): text on the gold button; also the base of the photo-caption scrim (`rgba(6, 17, 43, 0.92)` to transparent).
- **Paper White** (`text`): headings, body, active nav.
- **Faded Ink** (`text-2`): secondary copy, section intros, descriptions, inactive nav, field labels.
- **Ghost Ink** (`text-3`): tertiary metadata: footer headings, footer base line, class-year labels, ledger column headers, form notes.

### Named Rules
**The Gold Ink Rule.** Gold is drawn, not poured. It appears as strokes, small type and the seal; the only solid gold fill is the primary button (plus the skip link and selection highlight). Never fill a panel, band or heading block with gold.

**The One Fill Rule.** One gold-filled button per panel or region (certificate: Apply; nav: Apply; students column: Apply; company column: Send message). Every other action is the outline button or a gold text link.

**The Tinted Navy Rule.** Every surface derives from Emory blue (`ground`, `emory-blue`, `panel`, `ink-deep`). No pure black, no neutral grey, no off-hue darks.

## Typography

**Display Font:** Bodoni Moda (with Didot, Bodoni 72, Georgia), self-hosted variable woff2
**Body Font:** Hanken Grotesk (with system-ui), self-hosted variable woff2
**Label/Mono Font:** JetBrains Mono (with ui-monospace, SF Mono, Menlo), self-hosted variable woff2

**Character:** A banknote Didone at weight 500 gives every heading the hairline-and-thick contrast of engraved lettering; Hanken Grotesk stays quiet and legible underneath. Mono is the serial-number press, used sparingly.

### Hierarchy
- **Display** (500, clamp 3.1rem to 6rem, 0.98, -0.025em): the certificate's h1 and the Team and 404 page titles (same clamp family, up to 6rem / 5.5rem).
- **Headline** (500, clamp 2.4rem to 4.25rem, 1.05, -0.015em): section h2s in the section head. Team group titles step down to clamp 2.2rem to 3.5rem.
- **Title** (500, clamp 1.6rem to 2.25rem): division names, join panel headings (to 2.5rem).
- **Entry** (500, clamp 1.35rem to 1.75rem, 1.15): ledger entry names, events closing line, signature names (1.35rem), member names (1.3rem).
- **Lede** (400, clamp 1.08rem to 1.25rem, 1.55): the one-line claim under a page title; max 44 to 54ch.
- **Body** (400, 1.0625rem, 1.6): running copy in `text-2`; section intros cap at 52ch, descriptions at 52 to 62ch. `text-wrap: pretty` on paragraphs, `balance` on headings.
- **Label** (600, 1rem, 0.05em, all-small-caps): the certificate issuer line, gallery captions, ledger kind, footer headings and base line, signature roles, class years.
- **Serial** (JetBrains Mono 400, 0.78rem, 0.04em, tabular numerals): ledger numbers (001, 002...) in gold.
- **Column header** (JetBrains Mono 400, 0.72rem, 0.05em, uppercase): ledger table headers only, in `text-3`.

### Named Rules
**The Serial Rule.** Mono is for serials, dates and ledger column headers. Nothing else is set in JetBrains Mono: not labels, not navigation, not captions.

**The Small-Caps Label Rule.** Labels are the body face in all-small-caps, weight 600, 0.05em tracking. They sit beside or below what they label (issuer line at the certificate foot, role under a signature, kind in a ledger row), never as an eyebrow stacked above a heading.

**The Roman Wordmark Rule.** In "Blockchain at Emory" the "at" is roman, weight 400, in gold, both in the header brand and in the certificate h1. It is never italicized.

## Layout

A single centred column, `min(1240px, 100% - 2 * gutter)`, with a fluid gutter (1rem to 2.5rem). The header is sticky at 72px with a gold-hair bottom border; anchor scroll offsets account for it.

Sections pad clamp(4.5rem, 10vw, 8rem) vertically. Each divided section opens with an 18px generated lattice band (clamp 3rem to 5rem below it), then a section head: a two-column grid with the h2 on the left and its intro bottom-aligned on the right (gap 1.5rem by 4rem), collapsing to one column under 760px. Two variants exist: centred (partners) and stacked (about).

Content patterns are tabular rather than tiled: the ledger is a four-column grid (4.5rem serial, entry, 10rem kind, 8.5rem link) that collapses to serial plus stacked text under 760px; divisions are a ruled two-column list (name, description) collapsing under 700px; partners are a 6/4/3-column hairline grid of logo cells at 16:9; the gallery is a 12-column mosaic (7+5 / 5 / 4+4+4) becoming 2 columns on mobile; the team is an auto-fill grid of 170px (board 200px) minimums.

Breakpoints in use: 920px (nav becomes a menu sheet), 860px (certificate and join stack), 760px (section head, ledger, gallery, footer), 700px, 600px, 520px and 480px for local refinements. Touch targets are at least 44px (52px in the mobile menu).

## Elevation & Depth

Flat by construction. There are no drop shadows in the system. Depth comes from three engraving devices: tonal stock (the `emory-blue` certificate panel sitting on the darker `ground`), hairline gold rules at two strengths, and generated guilloché frames that enclose a panel instead of lifting it. Hover states add a `gold-faint` wash, never a shadow or a lift. The only `box-shadow` in the build is the input focus ring (`0 0 0 1px` gold), which is a stroke, not elevation.

### Named Rules
**The Engraved, Not Lifted Rule.** Panels are enclosed by linework, not raised by shadow. If something needs emphasis, frame it in lattice or put it on Emory blue stock.

## Shapes

Rectilinear and print-like. Buttons, inputs, the menu toggle, jump links and the focus ring use a barely-softened 2px corner. Panels and photos are square-cornered. Circles and ovals belong to the engraving vocabulary only: the rosette seal, team portraits (a 4:5 box at 50% radius, so an oval vignette with a 1px gold keyline offset 5px), and the 4px dot separating names in the member roster.

Rules come in pairs: a stronger `gold-line` opens a list or ledger, `gold-hair` divides its rows. The engraved double rule (1px line over 1px hair, 5px apart) is available as a standalone divider.

### Named Rules
**The Hairline Corner Rule.** Rectangles take 2px or nothing. Ovals are reserved for the seal and portraits; no pill buttons, no rounded cards.

## Components

### Buttons
Ink-and-plate: a solid gold impression or a gold-ruled outline, nothing in between.
- **Shape:** hairline corners (2px), 48px minimum height (40px in the header, 52px in the mobile menu), 1px border.
- **Primary:** gold fill, Deep Ink text, Hanken Grotesk 600 at 0.95rem, padding 0 1.4rem. Hover strikes to `gold-bright` (fill and border).
- **Outline:** transparent with a `gold-line` border and Paper White text; hover tightens the border to full gold and adds the `gold-faint` wash.
- **Icons:** an optional 16px inline stroke arrow (stroke 1.6) follows the label and nudges 3px right on hover (or up-right for external links). Transitions are 0.25s on the shared `cubic-bezier(0.16, 1, 0.3, 1)` ease-out.
- **Text link:** gold, weight 600, 44px tall, with the same arrow nudging 4px.

### Navigation
- **Desktop:** brand (36px logo plus Bodoni wordmark at 1.2rem/600) on the left; links in Hanken 500 at 0.93rem, `text-2`, 44px tall; hover and current page go to Paper White, and the current page gets a gold underline offset 0.5em. A compact gold Apply button closes the row.
- **Mobile (under 920px):** an outlined Menu toggle opens a full-width sheet below the header on `ground`, links at 1.05rem/52px separated by `gold-hair` rules, Apply full-width at the bottom; fades and drops 8px in, closes on Escape or link click.

### Ledger (signature)
The register of the club's work. Inside a lattice-framed panel: mono column headers, then rows with a gold mono serial, a Bodoni entry name over a `text-2` description, a small-caps kind, and a gold destination label with an up-right arrow. Whole rows are links; hover or focus washes the row in `gold-faint` and nudges the arrow.

### Division List
A ruled two-column list: Bodoni name on the left, description on the right, `gold-line` above and `gold-hair` between rows. Names link out; on hover the name turns gold and a 1px gold underline draws in from the left over 0.4s. No icons or letter marks.

### Certificate Panel (signature)
The hero: Emory blue stock with 135° gold hatching, enclosed by the generated border lattice (a static 1px `gold-line` outline inset 14px stands in before script runs). Display title and lede on the left, the rosette seal with the logo printed in gold on the right (moving above the copy at 132px on mobile), and a small-caps issuer line along the bottom edge.

### Framed Panel
Any panel can carry the lattice frame: six phase-shifted sine strands woven around the inner edge with an outer 1px keyline and an inner 0.6px keyline, padded clamp(18px, 2.4vw, 28px). Used for the ledger and the join panel. Only the first frame on a page engraves on load.

### Lattice Band
An 18px strip of five woven sine strands between two hairlines, inserted at the head of every divided section and the Team hero. It is the system's section divider.

### Inputs / Fields
- **Style:** `ground` fill inside a panel, 1px border in `text-2` at 35% (60% on hover), 2px corners, 48px minimum (textarea 130px, vertical resize), gold caret.
- **Labels:** Hanken 600 at 0.85rem in `text-2`, above the field.
- **Focus:** border turns gold with a 1px gold ring; no glow.
- **Error:** after user interaction, invalid fields take a coral border (#ff8a7a).

### Team Portrait
An oval vignette (4:5 at 50% radius) on `panel`, with a 1px `gold-line` keyline offset 5px. On linked members, hover brightens the keyline to full gold, scales the photo 3%, and reveals a small gold up-right arrow after the name. Name in Bodoni at 1.3rem, role in `text-2`, class year as a small-caps label in `text-3`.

### Gallery Figure
Square-cornered photo on `panel`, caption as a Paper White small-caps label over a Deep Ink scrim fading upward; image scales 3% on hover over 0.8s.

### Motion
Engraving draws once: guilloché strokes run `stroke-dashoffset` from 1 to 0 over 2.4s (rosette 3s) on the shared ease-out; the rosette then turns once every 240s. Under `prefers-reduced-motion: reduce` the engraving is skipped entirely, the rosette is still, and all transitions collapse.

## Do's and Don'ts

### Do:
- **Do** draw ornament as generated SVG guilloché in gold (stroke widths 0.5 to 1px, non-scaling), never as raster texture or imported clip art.
- **Do** separate content with paired hairlines: `gold-line` to open a list or ledger, `gold-hair` between rows.
- **Do** keep exactly one gold-filled button per panel; every other action is the outline button or a gold text link.
- **Do** set labels in Hanken Grotesk all-small-caps, weight 600, 0.05em, placed beside or below what they label.
- **Do** reserve JetBrains Mono for serials, dates and ledger column headers.
- **Do** use the Emory blue stock or a lattice frame when a panel needs to stand forward.
- **Do** gate every animation behind `prefers-reduced-motion: no-preference` or the global reduced-motion collapse.

### Don't:
- **Don't** use drop shadows, glows, glassmorphism or radial light pools; depth is engraving and stock.
- **Don't** use gradient text or gradient fills as decoration (the hatching and the photo-caption scrim are the only gradients, and both are functional).
- **Don't** put an eyebrow or kicker above a heading; the certificate's identifying line sits at its foot.
- **Don't** italicize the "at" in the wordmark.
- **Don't** set labels, captions or navigation in mono or uppercase-tracked mono.
- **Don't** mark divisions or list items with icon tiles, emoji or letter badges; the ruled list carries them.
- **Don't** introduce neutral greys, pure black, or a second accent hue.
- **Don't** round rectangles beyond 2px or use pill shapes; ovals are for portraits and the seal only.
