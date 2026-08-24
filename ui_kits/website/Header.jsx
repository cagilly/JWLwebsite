function Header({ onDark = false, current = 'Approach' }) {
  const { Mark, NavLink, Button } = window.JWL;
  const NAV = ['Valuations', 'Sectors', 'Approach', 'Insights', 'Contact'];
  return (
    <header style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '18px var(--space-7)', background: onDark ? 'var(--surface-ink)' : 'var(--surface-page)',
      borderBottom: `1px solid ${onDark ? 'var(--border-on-ink)' : 'var(--border-default)'}`,
    }}>
      <Mark variant={onDark ? 'reversed' : 'default'} width={110} showDescriptor={false} ticks={6} />
      <nav style={{ display: 'flex', gap: 'var(--space-6)' }}>
        {NAV.map((n) => (
          <NavLink key={n} onDark={onDark} state={n === current ? 'current' : 'default'}>{n}</NavLink>
        ))}
      </nav>
      <Button variant="primary" size="sm" onDark={onDark}>Request a Valuation</Button>
    </header>
  );
}
