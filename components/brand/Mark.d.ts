/**
 * The JWL identity: initials centred on a graduated measuring rule, in ink
 * navy with a single brass accent. Route 04 — "The Scale" — recommended.
 * @startingPoint section="Brand" subtitle="JWL wordmark on the measuring rule, all lockups" viewport="320x180"
 */
export interface MarkProps {
  /** default: unboxed, for web headers. reversed: paper-on-ink for dark grounds.
   *  contained: bordered box for covers/stamps/signage. favicon: grotesque, no descriptor, 40px chip. */
  variant?: 'default' | 'reversed' | 'contained' | 'favicon';
  /** "Independent Property Valuers" descriptor line. Ignored for favicon. */
  showDescriptor?: boolean;
  /** Rule divisions — 6 for web/navigation scale, 9 for print/signage. */
  ticks?: number;
  /** Wordmark lockup width in px; ignored for favicon. */
  width?: number;
}

export function Mark(props: MarkProps): JSX.Element;
export function Rule(props: { ticks?: number; tone?: 'ink' | 'paper'; width?: string }): JSX.Element;
