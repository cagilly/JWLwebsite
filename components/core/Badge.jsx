import React from 'react';

export function Badge({ tone = 'default', children }) {
  const border = tone === 'brass' ? 'var(--brass)' : 'var(--border-strong)';
  const color = tone === 'brass' ? 'var(--brass-dim)' : 'var(--text-heading)';
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 10px', border: `1px solid ${border}`, borderRadius: 'var(--radius-sm)',
      font: 'var(--text-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
      color,
    }}>
      {children}
    </span>
  );
}
