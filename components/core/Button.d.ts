/** Institutional CTA — flat colour, hairline borders, no radius, no shadow. Hover deepens the fill or underlines; never inverts to a bright colour. */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md';
  /** Set true when placed on an ink-navy ground (e.g. Hero B). */
  onDark?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}
export function Button(props: ButtonProps): JSX.Element;
