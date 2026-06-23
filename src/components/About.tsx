export default function About() {
  return (
    <section
      id="about"
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: '70vh',
      }}
    >
      <div style={{
        background: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80') center/cover no-repeat`,
        filter: 'grayscale(100%) brightness(0.75)',
        minHeight: 400,
      }} />

      <div style={{
        padding: 'clamp(48px, 8vw, 96px) clamp(32px, 6vw, 72px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'var(--bg-mid)',
        borderLeft: '1px solid var(--border)',
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.7rem',
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: 20,
        }}>
          Company Profile
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          fontWeight: 300,
          letterSpacing: '0.06em',
          marginBottom: 24,
          lineHeight: 1.2,
        }}>
          Who We Are
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.92rem',
          lineHeight: 1.85,
          color: 'var(--text-muted)',
          maxWidth: 460,
          marginBottom: 36,
        }}>
          Established in 1992, Stratford Accounting is a full-service firm
          offering affordable accounting solutions to individuals and local
          and international businesses. Our commitment to precision and
          discretion has earned us lasting partnerships with clients worldwide.
        </p>
        <a
          href="#contact"
          style={{
            display: 'inline-block',
            padding: '13px 32px',
            border: '1px solid var(--text)',
            color: 'var(--text)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.76rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            width: 'fit-content',
            transition: 'background 0.22s, color 0.22s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--text)'
            e.currentTarget.style.color = 'var(--bg)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--text)'
          }}
        >
          Get in Touch
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about { grid-template-columns: 1fr !important; }
          #about > div:first-child { min-height: 280px !important; }
        }
      `}</style>
    </section>
  )
}
