import React, { useState } from 'react'
import axios from 'axios'
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true); setStatus(null)
    try {
      const res = await axios.post('/api/contact', form)
      if (res.data.ok) { setStatus('Message sent!'); setForm({ name: '', email: '', message: '' }) }
      else setStatus(res.data.error || 'Failed')
    } catch (e) {
      setStatus('Server error')
    } finally { setLoading(false) }
  }

  return (
    <div className="container">
      <h2 style={{ fontSize: 28, color: '#fff' }}>Contact Me</h2>
      <div style={{ height: 12 }} />
      <div className="contact-grid">
        <div className="card">
          <form onSubmit={handleSubmit}>
            <input className="input" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            <div style={{ height: 10 }} />
            <input className="input" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
            <div style={{ height: 10 }} />
            <textarea className="input" rows={6} placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
            <div style={{ height: 12 }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <button className="btn-primary" type="submit">{loading ? 'Sending...' : 'Launch Message 🚀'}</button>
              <div style={{ color: '#cbd5e1' }}>{status}</div>
            </div>
          </form>
        </div>

        <div className="card" style={{ minHeight: 220 }}>
          <h4>Alternative Channels</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>You can also reach me via email: <strong>you@domain.com</strong></p>
        </div>
      </div>
    </div>
  )
}
