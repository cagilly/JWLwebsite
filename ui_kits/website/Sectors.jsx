function Sectors() {
  const { SectorCard, Divider } = window.JWL;
  const SECTORS = [
    { title: 'Secured lending', description: 'Red Book valuations for mortgage and refinance decisions, delivered to panel standard.' },
    { title: 'Probate & litigation', description: 'Defensible figures for estates, family law and dispute, with expert witness attendance.' },
    { title: 'Commercial & land', description: 'Retail, industrial and development sites assessed on evidence, not on sentiment.' },
  ];
  return (
    <section style={{ padding: 'var(--space-8) var(--space-7)', background: 'var(--surface-page)' }}>
      <div style={{ display: 'flex', gap: 'var(--space-8)', font: 'var(--text-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 'var(--space-5)' }}>
        <span>Lender Panels</span><span>The Courts Service</span><span>Revenue</span><span>Pension Trustees</span><span>Receivers</span>
      </div>
      <Divider />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-5)', marginTop: 'var(--space-6)' }}>
        {SECTORS.map((s) => <SectorCard key={s.title} {...s} />)}
      </div>
    </section>
  );
}
