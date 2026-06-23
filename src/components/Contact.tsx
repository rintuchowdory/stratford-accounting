import { useState } from 'react'

const inputStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--border-light)',
  padding: '12px 0',
  color: 'var(--text)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.88rem',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.2s',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(64px, 10vw, 112px) clamp(24px, 8vw, 72px)',
        background: 'var(--bg-mid)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 'clamp(40px, 8vw, 96px)',
      }}
    >
      {/* Left: contact details */}
      <div>
        <span style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.7rem',
          letterSpacing: '0.38em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          display: 'block',
          marginBottom: 20,
        }}>
          Get In Touch
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
          fontWeight: 300,
          letterSpacing: '0.06em',
          lineHeight: 1.2,
          marginBottom: 48,
        }}>
          Let's work<br />together.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {[
            { label: 'Mailing Address', value: '123 Anywhere St. Any City, ST 12345' },
            { label: 'Email Address', value: 'hello@stratfordaccounting.com' },
            { label: 'Phone Number', value: '(123) 456-7890' },
          ].map(item => (
            <div key={item.label}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 6,
              }}>
                {item.label}
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.92rem',
                color: 'var(--text-muted)',
              }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right: form */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        {sent ? (
          <div style={{
            padding: '40px',
            border: '1px solid var(--border-light)',
            textAlign: 'center',
          }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 300, marginBottom: 12 }}>
              Message received.
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              We'll be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--border-light)')}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--border-light)')}
            />
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--border-light)')}
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              rows={4}
              style={{
                ...inputStyle,
                resize: 'none',
              }}
              onFocus={e => (e.currentTarget.style.borderBottomColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderBottomColor = 'var(--border-light)')}
            />
            <button
              type="submit"
              style={{
                padding: '13px 32px',
                border: '1px solid var(--text)',
                background: 'transparent',
                color: 'var(--text)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.76rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
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
              Send Message
            </button>
          </form>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
