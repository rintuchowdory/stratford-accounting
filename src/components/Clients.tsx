const clients = [
  { name: 'Belden Bank LTD', initial: 'B' },
  { name: 'Michaelson Digital', initial: 'M' },
  { name: 'Perlanton Securities', initial: 'P' },
]

export default function Clients() {
  return (
    <section
      id="clients"
      style={{
        padding: 'clamp(64px, 10vw, 112px) clamp(24px, 8vw, 72px)',
        background: 'var(--bg-mid)',
      }}
    >
      <div style={{ maxWidth: 560, marginBottom: 64 }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.7rem',
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          display: 'block',
          marginBottom: 20,
        }}>
          Our Clients
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
          fontWeight: 300,
          letterSpacing: '0.06em',
          marginBottom: 20,
        }}>
          Our Client Roster
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.9rem',
          lineHeight: 1.8,
          color: 'var(--text-muted)',
        }}>
          From our early days, we have provided reliable service to our clientele.
          We've had the honour of being the firm of choice for the following corporations.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1,
        background: 'var(--border)',
      }}>
        {clients.map((c) => (
          <div
            key={c.name}
            style={{
              background: 'var(--bg-mid)',
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#161616')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-mid)')}
          >
            <div style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              color: 'var(--accent)',
              flexShrink: 0,
            }}>
              {c.initial}
            </div>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.88rem',
              letterSpacing: '0.04em',
              color: 'var(--text-muted)',
            }}>
              {c.name}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #clients .clients-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
