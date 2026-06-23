export default function Hero() {
  return (
    <section style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      background: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.65)),
                   url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80') center/cover no-repeat`,
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 1,
        height: 80,
        background: 'linear-gradient(to bottom, var(--accent), transparent)',
        opacity: 0.6,
      }} />

      <div>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.72rem',
          letterSpacing: '0.45em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 28,
        }}>
          Est. 1992
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.6rem, 6vw, 5rem)',
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
          fontWeight: 300,
          lineHeight: 1.15,
          color: 'var(--text)',
        }}>
          Stratford<br />Accounting
        </h1>
        <div style={{
          margin: '28px auto 0',
          width: 48,
          height: 1,
          background: 'var(--accent)',
          opacity: 0.7,
        }} />
        <p style={{
          marginTop: 24,
          fontFamily: 'var(--font-body)',
          fontSize: '0.82rem',
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
        }}>
          Expertise · Commitment · Value
        </p>
        <a
          href="#about"
          style={{
            display: 'inline-block',
            marginTop: 44,
            padding: '13px 34px',
            border: '1px solid var(--accent)',
            color: 'var(--accent)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.76rem',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            transition: 'background 0.25s, color 0.25s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent)'
            e.currentTarget.style.color = '#0a0a0a'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--accent)'
          }}
        >
          Discover More
        </a>
      </div>
    </section>
  )
}
