import React from 'react'
export default function ProjectCard({p}){
  return (
    <div className="project-card card-ghost">
      <div className="project-header">
        <div style={{width:48,height:48,borderRadius:10,background:'linear-gradient(135deg,#8b5cf6,#3b82f6)',display:'flex',alignItems:'center',justifyContent:'center'}}>📦</div>
        <div>
          <div className="project-title">{p.title}</div>
          <div style={{color:'rgba(255,255,255,0.65)',fontSize:13,marginTop:6}}>{p.short}</div>
        </div>
      </div>

      <div style={{marginTop:12,fontSize:13,color:'rgba(255,255,255,0.7)'}}>Key Features</div>
      <div style={{height:10}}/>
      <div style={{display:'flex',flexWrap:'wrap',gap:8}}>
        {p.features.map((f,idx)=> <div key={idx} className="tech-chip">{f}</div>)}
      </div>

      <div className="project-actions">
        <a href={p.demo} target="_blank" rel="noreferrer"><button className="btn-primary">Live Demo</button></a>
        <a href={p.github} target="_blank" rel="noreferrer"><button className="btn-ghost">GitHub</button></a>
      </div>
    </div>
  )
}
