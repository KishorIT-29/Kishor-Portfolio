import React from 'react'
import { motion } from 'framer-motion'
export default function About() {
  return (
    <div className="container" id="about">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="about-grid">
          <div>
            <h2 style={{ fontSize: 28, color: '#fff' }}>About <span style={{ background: 'linear-gradient(90deg,#8b5cf6,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Me</span></h2>
            <div className="card" style={{ marginTop: 12 }}>
              <p>I’m <strong>J KISHOR</strong>, a Full Stack Developer navigating the world of code. I transform complex problems into elegant, scalable solutions with modern tech.</p>
              <div className="tech-grid" style={{ marginTop: 12 }}>
                <div className="tech-chip">React</div>
                <div className="tech-chip">Next.js</div>
                <div className="tech-chip">Tailwind</div>
                <div className="tech-chip">Node.js</div>
                <div className="tech-chip">MongoDB</div>
                <div className="tech-chip">Figma</div>
              </div>
            </div>
          </div>

          <div>
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ width: 110, height: 110, borderRadius: 14, background: 'linear-gradient(135deg,#6d28d9,#3b82f6)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>👨‍💻</div>
              <h4 style={{ marginTop: 12 }}>Mission: Build</h4>
              <p style={{ color: '#cbd5e1', fontSize: 13 }}>Building elegant solutions across the digital landscape.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
