import React from 'react';

export function SectorCard({ title, description }) {
  return (
    <div style={{
      border: '1px solid var(--border-default)', padding: 'var(--space-6)',
      background: 'var(--surface-page)', display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      <h3 style={{ font: 'var(--text-h3)', color: 'var(--text-heading)', margin: 0 }}>{title}</h3>
      <p style={{ font: 'var(--text-body-sm)', color: 'var(--text-muted)', margin: 0 }}>{description}</p>
    </div>
  );
}
