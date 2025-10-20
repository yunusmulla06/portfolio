'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import Section from './Section'
import { describe } from 'node:test'
import Link from 'next/link'
// import project1 from '../../public/project1.png' // replace with your project images
// import project2 from '../../public/project2.png'

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up animation for each project card
      gsap.from('.project-card', {
        y: 25,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.3,
        clearProps: 'transform',
      })

      // Floating shapes
      gsap.to('.float', {
        y: '+=20',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3,
      })
    }, projectsRef)

    return () => ctx.revert()
  }, [])

  const projectList = [
      { 
        name: 'Project One',
        desc: 'Description of project one. Technologies used: Next.js, Tailwind, GSAP.',
        link: '#'
      },
    ]

  return (
    <Section
    ref={projectsRef}
    id="projects"
    py='20'
    >
      <div className="float absolute top-10 left-10 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl"></div>
      <div className="float absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>

      <h2 className="text-3xl font-bold text-white mb-10">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projectList.map((project, index) => (
        <Link key={project.name || index} href={project.link} className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="p-4">
          <h3 className="font-bold text-white text-xl mb-2">{project.name}</h3>
            <p className="text-gray-400 text-sm">
              {project.desc}
            </p>
          </div>
        </Link>
        ))}
      </div>
    </Section>
  )
}
