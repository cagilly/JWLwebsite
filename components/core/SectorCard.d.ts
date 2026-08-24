/** A flat, bordered service/sector summary card — no shadow, no icon, no rounded corners. Evidence-first: title + one line of description. */
export interface SectorCardProps {
  title: string;
  description: string;
}
export function SectorCard(props: SectorCardProps): JSX.Element;
