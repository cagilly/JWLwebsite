import React from 'react';

export function StatCard({ value, label, onDark = false }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <span style={{ font: 'var(--text-h1)', color: onDark ? 'var(--paper)' : 'var(--ink-navy)' }}>{value}</span>
      <span style={{
        font: 'var(--text-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase',
        color: onDark ? 'var(--brass)' : 'var(--text-muted)',
      }}>{label}</span>
    </div>
  );
}
