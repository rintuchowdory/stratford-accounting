import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['About', 'Services', 'Clients', 'Contact']

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      padding: '22px 60px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background 0.35s, border-color 0.35s, backdrop-filter 0.35s',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.05rem',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        fontWeight: 400,
      }}>
        Stratford Accounting
      </span>

      {/* Desktop links */}
      <ul style={{ listStyle: 'none', display: 'flex', gap: 40 }} className="nav-links">
        {links.map(l => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.78rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(o => !o)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 4,
          color: 'var(--text)',
        }}
        className="hamburger"
        aria-label="Toggle menu"
      >
        <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
          <rect width="22" height="1.5" fill="currentColor"/>
          <rect y="7" width="22" height="1.5" fill="currentColor"/>
          <rect y="14" width="22" height="1.5" fill="currentColor"/>
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          background: 'rgba(10,10,10,0.98)',
          borderBottom: '1px solid var(--border)',
          padding: '24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}
            >
              {l}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: block !important; }
        }
        nav { padding: 22px 60px; }
        @media (max-width: 768px) { nav { padding: 20px 24px !important; } }
      `}</style>
    </nav>
  )
}
