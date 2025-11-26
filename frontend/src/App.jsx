import React from 'react'
import Starfield from './components/Starfield'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './styles.css'

export default function App() {
  return (
    <div className="app-root">
      <Starfield />
      <header className="site-header container">
        <div className="brand">JK</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} J KISHOR · Crafted with passion</footer>
    </div>
  )
}
