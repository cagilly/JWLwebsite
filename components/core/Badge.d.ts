/** A certification/detail tag — for SCSI registration, panel status, report labels. Sharp corners, hairline border; never a filled bubble. */
export interface BadgeProps {
  tone?: 'default' | 'brass';
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
