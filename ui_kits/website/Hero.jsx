function Hero({ ground = 'paper' }) {
  const { Badge, Button, StatCard } = window.JWL;
  const onDark = ground === 'ink';
  return (
    <section style={{
      background: onDark ? 'var(--surface-ink)' : 'var(--surface-page)',
      padding: 'var(--space-9) var(--space-7)',
      display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', alignItems: 'flex-start',
    }}>
      <Badge tone={onDark ? 'brass' : 'default'}>
        {onDark ? 'Independent · Registered · Unconflicted' : 'SCSI Registered Valuers · Est. 1998'}
      </Badge>
      <h1 style={{
        font: 'var(--text-display)', margin: 0, maxWidth: 640,
        color: onDark ? 'var(--paper)' : 'var(--text-heading)',
      }}>
        {onDark ? 'An estate agent is paid to get the best price. We are paid to tell the truth.' : 'A number that holds up when it is challenged.'}
      </h1>
      {!onDark && (
        <p style={{ font: 'var(--text-body)', color: 'var(--text-muted)', maxWidth: 560, margin: 0 }}>
          Independent valuations for lenders, courts, revenue and trustees across the Republic of Ireland.
          No sale to win, no commission to earn — the figure is the product.
        </p>
      )}
      {!onDark && (
        <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
          <Button variant="primary">Instruct JWL</Button>
          <Button variant="secondary">How we work →</Button>
        </div>
      )}
      {onDark && (
        <div style={{ display: 'flex', gap: 'var(--space-8)', marginTop: 'var(--space-3)' }}>
          <StatCard value="1,400+" label="Valuations issued" onDark />
          <StatCard value="26" label="Counties covered" onDark />
          <StatCard value="5 days" label="Typical turnaround" onDark />
        </div>
      )}
    </section>
  );
}
