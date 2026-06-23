const services = [
  {
    title: 'Tax Preparation',
    desc: 'We prepare everything you need for your tax return — accurately and on time, every year.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="2" width="16" height="20" rx="1" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M18 18l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Start-up Package',
    desc: 'We build financial models you can pitch to investors, helping you launch on solid ground.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 22l6-6 4 4 10-12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="6" r="3" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: 'Wealth Management',
    desc: 'We deliver thoughtful investment advisory services tailored to your long-term goals.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M14 8v6l4 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: 'clamp(64px, 10vw, 112px) clamp(24px, 8vw, 72px)',
        background: 'var(--bg)',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        marginBottom: 64,
      }}>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.7rem',
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
        }}>
          Our Services
        </span>
        <div style={{ flex: 1, height: 1, background: 'var(--border-light)' }} />
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 1,
        background: 'var(--border)',
      }}>
        {services.map((s, i) => (
          <ServiceCard key={i} {...s} />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #services .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

function ServiceCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'var(--bg)',
        padding: 'clamp(36px, 5vw, 60px) clamp(24px, 4vw, 44px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        transition: 'background 0.22s',
        cursor: 'default',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = '#0e0e0e')}
      onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}
    >
      <div style={{ color: 'var(--accent)', opacity: 0.85 }}>{icon}</div>
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.3rem',
        fontWeight: 300,
        letterSpacing: '0.04em',
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.85rem',
        lineHeight: 1.85,
        color: 'var(--text-muted)',
      }}>
        {desc}
      </p>
    </div>
  )
}
