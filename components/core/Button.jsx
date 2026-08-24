import React, { useState } from 'react';

export function Button({ variant = 'primary', size = 'md', onDark = false, children, ...rest }) {
  const [hover, setHover] = useState(false);
  const pad = size === 'sm' ? '10px 18px' : '13px 26px';
  const font = size === 'sm' ? 'var(--text-body-sm)' : 'var(--text-body)';

  const styles = {
    primary: {
      background: hover ? 'var(--ink-navy-90)' : (onDark ? 'var(--paper)' : 'var(--ink-navy)'),
      color: onDark ? 'var(--ink-navy)' : 'var(--paper)',
      border: '1px solid transparent',
    },
    secondary: {
      background: hover ? (onDark ? 'rgba(250,247,241,0.08)' : 'var(--ink-navy-06)') : 'transparent',
      color: onDark ? 'var(--paper)' : 'var(--ink-navy)',
      border: `1px solid ${onDark ? 'var(--border-on-ink)' : 'var(--border-strong)'}`,
    },
    ghost: {
      background: 'transparent',
      color: onDark ? 'var(--paper)' : 'var(--ink-navy)',
      border: '1px solid transparent',
      textDecoration: hover ? 'underline' : 'none',
    },
  }[variant];

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        font, fontWeight: 600, padding: pad, letterSpacing: '0.01em',
        borderRadius: 'var(--radius-none)', cursor: 'pointer',
        transition: 'background var(--duration-standard) var(--ease-standard), color var(--duration-standard) var(--ease-standard)',
        ...styles,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
