/** Primary nav item. The brass rule is the hover/current-page indicator throughout the system — no colour change, no background pill. */
export interface NavLinkProps {
  state?: 'default' | 'hover' | 'current';
  onDark?: boolean;
  children?: React.ReactNode;
  href?: string;
}
export function NavLink(props: NavLinkProps): JSX.Element;
