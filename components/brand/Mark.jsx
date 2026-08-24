import React from 'react';

function Rule({ ticks = 9, tone = 'ink', width = '100%' }) {
  // Route 04: initials on a graduated rule. Line in the wordmark's own colour
  // (ink navy, or paper when reversed); ticks a muted grey, hanging below the
  // line. The single brass accent is the "L", not the rule.
  const lineColor = tone === 'paper' ? 'var(--paper)' : 'var(--ink-navy)';
  const tickColor = tone === 'paper' ? 'var(--text-inverse-muted)' : 'var(--charcoal-60)';
  const positions = Array.from({ length: ticks }, (_, i) => (i / (ticks - 1)) * 100);
  return (
    <div style={{ position: 'relative', width, height: 11 }}>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 2.5, background: lineColor }} />
      {positions.map((p, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${p}%`, top: 2.5,
          width: 1.5, height: 8,
          background: tickColor, transform: 'translateX(-50%)',
        }} />
      ))}
    </div>
  );
}

export function Mark({ variant = 'default', showDescriptor = true, ticks = 9, width = 220 }) {
  const onDark = variant === 'reversed';
  const wordColor = onDark ? 'var(--paper)' : 'var(--ink-navy)';
  const descColor = onDark ? 'var(--text-inverse-muted)' : 'var(--text-muted)';

  if (variant === 'favicon') {
    return (
      <div style={{
        width: 40, height: 40, background: 'var(--ink-navy)', display: 'flex',
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3,
      }}>
        <span style={{ font: '700 15px/1 var(--font-grotesque)', letterSpacing: '0.01em' }}>
          <span style={{ color: 'var(--paper)' }}>JW</span><span style={{ color: 'var(--brass)' }}>L</span>
        </span>
        <div style={{ width: 20, height: 1.5, background: 'var(--brass)' }} />
      </div>
    );
  }

  const lockup = (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6, width }}>
      <span style={{ font: `600 ${Math.round(width / 5.2)}px/1 var(--font-serif)`, letterSpacing: 'var(--tracking-wordmark)' }}>
        <span style={{ color: wordColor }}>JW</span><span style={{ color: 'var(--brass)' }}>L</span>
      </span>
      <Rule ticks={ticks} tone={onDark ? 'paper' : 'ink'} width="100%" />
      {showDescriptor && (
        <span style={{ font: 'var(--text-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', color: descColor, textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          Independent Property Valuers
        </span>
      )}
    </div>
  );

  if (variant === 'contained') {
    return (
      <div style={{ display: 'inline-flex', padding: '20px 28px', border: '1px solid var(--ink-navy)' }}>
        {lockup}
      </div>
    );
  }

  return (
    <div style={{ display: 'inline-flex', background: onDark ? 'var(--surface-ink)' : 'transparent', padding: onDark ? 20 : 0 }}>
      {lockup}
    </div>
  );
}

export { Rule };
