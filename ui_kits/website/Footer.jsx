function Footer() {
  const { Mark } = window.JWL;
  return (
    <footer style={{
      background: 'var(--surface-ink)', color: 'var(--text-inverse-muted)',
      padding: 'var(--space-6) var(--space-7)', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <Mark variant="reversed" width={80} showDescriptor={false} ticks={6} />
        <span style={{ font: 'var(--text-body-sm)', fontStyle: 'italic', color: 'var(--paper)' }}>Evidence before opinion.</span>
      </div>
      <span style={{ font: 'var(--text-body-sm)' }}>Dublin · +353 1 000 0000</span>
    </footer>
  );
}
