export default function Quote() {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: '60vh',
      background: 'var(--bg)',
    }}>
      <div style={{
        padding: 'clamp(56px, 8vw, 100px) clamp(32px, 6vw, 72px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        borderRight: '1px solid var(--border)',
      }}>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '4.5rem',
          lineHeight: 0.8,
          color: 'var(--accent)',
          opacity: 0.3,
          display: 'block',
          marginBottom: 16,
        }}>
          "
        </span>
        <blockquote style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.2rem, 2.2vw, 1.65rem)',
          fontWeight: 300,
          lineHeight: 1.65,
          fontStyle: 'italic',
          color: 'var(--text)',
        }}>
          Accounting is our expertise. We'll take care of it, so you can focus on yours.
        </blockquote>
        <div style={{
          marginTop: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 16,
        }}>
          <div style={{ width: 32, height: 1, background: 'var(--accent)' }} />
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--text-faint)',
          }}>
            Aaliyah Igwe, CEO
          </p>
        </div>
      </div>

      <div style={{
        background: `url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80') center/cover no-repeat`,
        filter: 'grayscale(100%) brightness(0.7)',
        minHeight: 400,
      }} />

      <style>{`
        @media (max-width: 768px) {
          section[class*="quote-section"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
