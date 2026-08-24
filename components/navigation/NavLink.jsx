import React, { useState } from 'react';

export function NavLink({ state = 'default', onDark = false, children, ...rest }) {
  const [hover, setHover] = useState(false);
  const effective = state === 'default' && hover ? 'hover' : state;
  const color = onDark ? 'var(--paper)' : 'var(--ink-navy)';
  const underline = effective === 'current' || effective === 'hover';

  return (
    <a
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', color, textDecoration: 'none', cursor: 'pointer',
        font: 'var(--text-body-sm)', fontWeight: 500, paddingBottom: 10,
      }}
      {...rest}
    >
      {children}
      <span style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: 'var(--rule-weight-accent)',
        background: 'var(--brass)', transform: underline ? 'scaleX(1)' : 'scaleX(0)',
        transformOrigin: 'left', transition: 'transform var(--duration-standard) var(--ease-standard)',
      }} />
    </a>
  );
}
