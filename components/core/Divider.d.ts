/** The measuring-rule motif reused as a section divider — ticked, brass through the centre span. No plain <hr> in this system. */
export interface DividerProps {
  ticks?: number;
  tone?: 'ink' | 'paper';
  margin?: string;
}
export function Divider(props: DividerProps): JSX.Element;
