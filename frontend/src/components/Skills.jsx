import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
    const technicalSkills = [
        { name: 'React', icon: '⚛️', level: 90 },
        { name: 'Next.js', icon: 'N', level: 85 },
        { name: 'TypeScript', icon: 'TS', level: 80 },
        { name: 'Node.js', icon: '🟢', level: 85 },
        { name: 'Python', icon: '🐍', level: 75 },
        { name: 'MongoDB', icon: '🍃', level: 80 },
        { name: 'PostgreSQL', icon: '🐘', level: 75 },
        { name: 'AWS', icon: '☁️', level: 70 },
    ]

    const tools = [
        { name: 'VS Code', icon: '💻' },
        { name: 'Git', icon: '🔀' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Figma', icon: '🎨' },
        { name: 'Postman', icon: '📮' },
        { name: 'Webpack', icon: '📦' },
    ]

    return (
        <div className="container" id="skills">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Technical Skills */}
                <div style={{ marginBottom: 60 }}>
                    <h2 style={{ fontSize: 28, color: '#fff', marginBottom: 32 }}>
                        Technical <span style={{
                            background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Skills</span>
                    </h2>

                    <div className="skills-grid">
                        {technicalSkills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                className="skill-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                <div className="skill-icon">
                                    {skill.icon}
                                </div>
                                <div className="skill-name">{skill.name}</div>
                                <div className="skill-bar-container">
                                    <motion.div
                                        className="skill-bar"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${skill.level}%` }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div>
                    <h2 style={{ fontSize: 28, color: '#fff', marginBottom: 32 }}>
                        <span style={{
                            background: 'linear-gradient(90deg, #8b5cf6, #3b82f6)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>Tools</span>
                    </h2>

                    <div className="tools-grid">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                className="tool-badge"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.1, rotateZ: 2 }}
                            >
                                <span className="tool-icon">{tool.icon}</span>
                                <span className="tool-name">{tool.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
