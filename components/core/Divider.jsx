import React from 'react';
import { Rule } from '../brand/Mark.jsx';

export function Divider({ ticks = 6, tone = 'ink', margin = 'var(--space-6) 0' }) {
  return <div style={{ margin }}><Rule ticks={ticks} tone={tone} width="100%" /></div>;
}
