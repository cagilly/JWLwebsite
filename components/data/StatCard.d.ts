/** A single evidentiary stat (count + label) for the ink-ground hero and reports — serif numeral, brass or muted eyebrow label. */
export interface StatCardProps {
  value: string;
  label: string;
  onDark?: boolean;
}
export function StatCard(props: StatCardProps): JSX.Element;
