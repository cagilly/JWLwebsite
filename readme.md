# JWL Design System

JWL is an independent chartered property valuation firm operating in the Republic of Ireland (lenders, courts, Revenue, pension trustees, receivers — not a selling/estate agency). This system implements the brand direction recommended in **"JWL — Brand Direction, Options and Recommendation"** (client-review deck, prepared August 2026; source PDF at `uploads/doc-1787155498717-wnsf.pdf`), specifically **Route 04 — The Scale / The Measuring Rule**, the mark the client selected from five routes explored (Datum, Keystone, Plumb Line, Scale, Target).

The strategic idea: an estate agent is paid to get the best price; a valuer is paid to tell the truth about it, independent of anyone's interest in the outcome. Every visual decision below exists to make that difference legible before a client reads a word of a report.

## Index
- `styles.css` — root stylesheet, imports all tokens.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`.
- `components/brand/Mark.jsx` — the JWL identity (default, reversed, contained, favicon).
- `components/core/` — `Button`, `Badge`, `Divider`, `SectorCard`.
- `components/navigation/NavLink.jsx` — nav item with the brass-rule hover/current indicator.
- `components/data/StatCard.jsx` — evidentiary stat (value + label).
- `guidelines/` — colour, type, spacing and tagline specimen cards.
- `ui_kits/website/` — homepage recreation (paper-ground Hero A / ink-ground Hero B, toggle in `index.html`), per doc §6.1.
- `SKILL.md` — portable skill definition for use outside this project.

## The recommended mark
Initials centred on a graduated measuring rule — ticked at both ends, brass through the centre span — in ink navy with a single brass accent. No pictorial symbol: the rule is the only concession to metaphor, and it is reused everywhere (nav hover/current indicator, section dividers, report header rule, mobile-menu third bar) rather than inventing new devices per surface. Route 02 (the house/Keystone) was explicitly tested and ruled out — a house symbol reads "estate agency," which the brand cannot afford.

Lockups: `default` (unboxed, for web headers), `reversed` (paper-on-ink), `contained` (bordered, for covers/stamps/signage), `favicon` (grotesque, no descriptor, 16px-safe). The web lock-up uses 6 rule divisions rather than the print/signage 9, so ticks stay legible at navigation scale.

Colour split within the mark (corrected): "JW" is set in ink navy/paper, the **L in brass** — the doc's "single brass accent". The rule is drawn in the wordmark's own colour (ink navy, or paper when reversed) as a horizontal line with uniform tick marks hanging below it, not a two-tone navy/brass line — that construction belongs to Route 01/Datum, not the recommended Route 04/Scale.

## Tagline
Primary: **"Evidence before opinion."** — states the method and its order (figure follows evidence). Held in reserve: "Know where you stand." (warmer, client-facing) and "Sure ground." (short-form, for signage/social/avatars).

## Content fundamentals
- **Tone**: calm, declarative, unembellished. Short sentences that state a method or a fact, never a hype claim. "No sale to win, no commission to earn — the figure is the product."
- **Voice**: institutional, third-person/"we" — never first-person salesy "I". Reads closer to a chartered body than a shopfront.
- **Structure device**: the "not this / this instead" contrast (agency warmth vs. measurement rigour) is a native rhetorical move for this brand — use it when explaining positioning.
- **Descriptor discipline**: "Chartered Property Valuers" is locked beneath the mark in every lock-up, always typographically subordinate — it is expected by the market and good for search, but never competes with JWL for attention.
- **Numbers matter**: figures (1,400+ valuations, 26 counties, 5 days) are treated as evidence, set in tabular numerals — never rounded away or softened.
- **No emoji, ever.** No exclamation points. Arrows (→) are the one permitted punctuation flourish, used sparingly on action links ("How we work →").

## Visual foundations
- **Colour**: Ink Navy `#12233C`, Brass `#B08A4A`, Paper `#FAF7F1`, Charcoal `#3A3833`. No pure black or white anywhere. Nothing from the agency red/green/magenta field — that palette is deliberately, strategically avoided. Ink navy is rationed (nav lock-up, headline, one CTA, footer band) rather than washed across the page; brass is a single accent, not a secondary palette.
- **Type**: Source Serif 4 (display/headings/wordmark) in a legal-advisory register with tabular figures; Public Sans (a refined grotesque) for nav, labels, body copy and report figures. Only these two families — no third decorative face.
- **Corners & elevation**: near-flat. Radii are 0–4px; no bubble/pill shapes. No drop shadows on cards — separation comes from a 1px hairline border (charcoal at low opacity), not elevation. This is a paper-and-instrument brand, not a glassy tech one: no blur, no glassmorphism, no gradients.
- **The rule motif**: a ticked measuring line, brass through the centre span, is the system's one recurring device — nav hover/current indicator, section divider, report header rule, mobile-menu icon's third bar, stationery divider. Nothing new is invented per surface; the rule generalises.
- **Hover/press**: hover deepens a fill by a few percent (never inverts to a bright colour) or shows the brass underline; ghost buttons underline on hover. Press states are a marginally deeper tint — no scale/shrink bounce.
- **Motion**: minimal — 120–200ms ease transitions on colour/underline only. No bounce, no spring, no decorative animation. This is an institution, not a playful product.
- **Imagery**: none specified in the source doc. If/when photography is introduced, keep it documentary and desaturated (site inspections, instruments, paper) — never warm lifestyle/family/front-door imagery, which the positioning explicitly rules out. Placeholders should be flagged, not invented.

## Iconography
The source doc defines **no pictorial icon system** — this is deliberate, not an omission. Houses, roofs and keys are called out as belonging to agents/brokers and are explicitly avoided. The system substitutes the rule motif for icon-like wayfinding (hover/current state, mobile menu) instead of a glyph set. The only permitted pictorial marks are: the JWL mark itself, and a plain "→" character for action links — never an icon font, emoji, or hand-drawn SVG symbol. If a future surface genuinely needs a pictographic icon (e.g. a document-type icon in a client portal), source it from a neutral, thin-stroke CDN set (e.g. Lucide) rather than inventing one, and document the addition here.

## Sources
- `uploads/doc-1787155498717-wnsf.pdf` — "JWL — Brand Direction, Options and Recommendation" (10pp, prepared for client review, August 2026). Primary and only source; no codebase or Figma file was provided.

## Social assets
`assets/linkedin-logo.html`/`.png` and `assets/linkedin-banner.html`/`.png` — both reuse the exact default lockup from the doc: paper ground, ink-navy "JW" with the brass "L", ink-navy rule with muted-grey ticks hanging below, and the descriptor underneath. Logo is 300×300 (exported 1200×1200); banner is 1584×396 (exported 3168×792), same composition centred. No new colour, type, or motif — only format-specific centring.

## Caveats / open items
- **No real logo asset**: the mark is implemented as a live component (CSS/DOM), not a drawn/vector logo file, since the doc specifies its construction rather than supplying artwork. If JWL commissions final logo artwork, replace `components/brand/Mark.jsx` construction with the real vector and keep the same props API.
- **No photography or iconography was supplied** — hero sections currently run type-only. Flag before shipping a live site.
- Two Google Fonts (`Source Serif 4`, `Public Sans`) are loaded from Google Fonts CDN rather than self-hosted files — ask if brand-licensed font files exist and should replace these.


## Insights — planned articles (removed from the live index, retained here)

One article every four to six weeks, in priority order:

1. Fair Deal and the Family Home: What the Financial Assessment Actually Looks At
2. Blue Book or Red Book: Which Valuation Standard Do You Actually Need?
3. Valuing the Family Home in a Separation: How the Process Works
4. What Comparable Evidence Really Means (And Why Asking Prices Are Not It)
5. A quarterly Dublin and Leinster market note, using the Property Price Register
