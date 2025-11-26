import React from 'react'
import { motion } from 'framer-motion'
export default function Hero() {
  return (
    <div className="container" style={{ position: 'relative' }}>
      <div className="hero-grid">
        <div className="hero-left">
          <motion.h1 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            Hi, I'm <span style={{ background: 'linear-gradient(90deg,#8b5cf6,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>J KISHOR</span>
          </motion.h1>
          <div className="subtitle">Full Stack Developer</div>
          <div className="lead">Crafting elegant solutions. Building the future, one line of code at a time.</div>
          <div className="cta-row">
            <a href="#projects"><button className="btn-primary">View Projects</button></a>
            <a href="#contact"><button className="btn-ghost">Get In Touch</button></a>
          </div>
        </div>

        <div className="hero-right">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="floating-planet">
            <div style={{ width: 180, height: 180, borderRadius: 90, background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06), transparent 30%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <div style={{ fontSize: 34 }}>🚀</div>
              <div style={{ color: '#cbd5e1', marginTop: 8 }}>Portfolio</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
