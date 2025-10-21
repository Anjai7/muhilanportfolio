import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: '3D Product Configurator',
    description: 'Interactive 3D product visualization with real-time material customization using Three.js and React.',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop',
    tech: ['React', 'Three.js', 'WebGL'],
    color: '#00FFFF',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'WebXR Virtual Gallery',
    description: 'Immersive VR art gallery experience built with WebXR API and A-Frame, featuring spatial audio.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop',
    tech: ['WebXR', 'A-Frame', 'Three.js'],
    color: '#FF00FF',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Particle Physics Simulator',
    description: 'GPU-accelerated particle system with real-time physics simulation and custom shaders.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=600&fit=crop',
    tech: ['GLSL', 'WebGL', 'React'],
    color: '#00FF88',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'AI-Powered Design Tool',
    description: 'Machine learning-powered design assistant with real-time 3D preview and export capabilities.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
    tech: ['TensorFlow.js', 'React', 'Three.js'],
    color: '#0088FF',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Generative Art Platform',
    description: 'Creative coding platform for generating and minting procedural art as NFTs on blockchain.',
    image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop',
    tech: ['p5.js', 'Web3', 'IPFS'],
    color: '#AA00FF',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Real-time Collaboration Tool',
    description: 'Multi-user 3D workspace with real-time synchronization using WebRTC and WebSockets.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    tech: ['WebRTC', 'Socket.io', 'Three.js'],
    color: '#00FFFF',
    link: '#',
    github: '#',
  },
]

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="glass"
      style={{
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative',
      }}
    >
      {/* Project image */}
      <div style={{
        width: '100%',
        height: '240px',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <motion.img
          src={project.image}
          alt={project.title}
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        
        {/* Gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(180deg, transparent 0%, ${project.color}20 100%)`,
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{
          color: project.color,
          fontSize: '1.5rem',
          marginBottom: '0.75rem',
          textShadow: `0 0 10px ${project.color}40`
        }}>
          {project.title}
        </h3>

        <p style={{
          color: '#b0b0b0',
          fontSize: '1rem',
          lineHeight: 1.6,
          marginBottom: '1rem',
          minHeight: '60px'
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1rem'
        }}>
          {project.tech.map(tech => (
            <span
              key={tech}
              style={{
                padding: '0.25rem 0.75rem',
                background: `${project.color}15`,
                border: `1px solid ${project.color}40`,
                borderRadius: '20px',
                fontSize: '0.85rem',
                color: project.color,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
        }}>
          <motion.a
            href={project.link}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              flex: 1,
              padding: '0.75rem',
              textAlign: 'center',
              background: `${project.color}20`,
              border: `1px solid ${project.color}60`,
              borderRadius: '8px',
              color: project.color,
              fontWeight: 600,
              transition: 'all 0.3s ease',
            }}
          >
            View Project
          </motion.a>
          
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: '0.75rem',
              textAlign: 'center',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '8px',
              color: '#fff',
              fontWeight: 600,
              transition: 'all 0.3s ease',
              minWidth: '50px'
            }}
          >
            {'</>'}
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef()
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="projects"
      className="section projects-section"
      ref={ref}
      style={{
        minHeight: '100vh',
        paddingTop: '8vh',
        paddingBottom: '8vh',
      }}
    >
      <div className="section-content">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{
            color: '#00ffff',
            textAlign: 'center',
            marginBottom: '3rem'
          }}
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            textAlign: 'center',
            color: '#b0b0b0',
            fontSize: '1.1rem',
            marginBottom: '4rem',
            maxWidth: '700px',
            margin: '0 auto 4rem'
          }}
        >
          A selection of projects showcasing my expertise in 3D web development,
          interactive experiences, and creative coding.
        </motion.p>

        <div className="grid grid-3" style={{ gap: '2rem' }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '4rem'
          }}
        >
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
