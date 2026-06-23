export default function Footer() {
  return (
    <footer style={{
      padding: '36px clamp(24px, 8vw, 72px)',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 16,
    }}>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.73rem',
        letterSpacing: '0.08em',
        color: 'var(--text-faint)',
      }}>
        © {new Date().getFullYear()} Stratford Accounting. All rights reserved.
      </p>
      <div style={{ display: 'flex', gap: 28 }}>
        {['Terms & Support', 'Privacy Policy'].map(label => (
          <a
            key={label}
            href="#"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.73rem',
              letterSpacing: '0.08em',
              color: 'var(--text-faint)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-faint)')}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  )
}
