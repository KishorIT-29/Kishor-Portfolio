import React from 'react'
import ProjectCard from './ProjectCard'
import projects from '../data/projects.json'
export default function Projects() {
  return (
    <div className="container" id="projects">
      <h2 style={{ fontSize: 28, color: '#fff' }}>Projects</h2>
      <div style={{ height: 8 }} />
      <div className="projects-grid">
        {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
      </div>
      <div style={{ textAlign: 'center', marginTop: 18 }}>
        <a href="#projects"><button className="btn-primary">Explore All Projects →</button></a>
      </div>
    </div>
  )
}
