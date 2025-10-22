'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Section from './Section'
import Link from 'next/link'

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 25,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        stagger: 0.3,
        clearProps: 'transform',
      })

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
        name: 'Nawayath Repair',
        desc: 'Service website for a local repair business, showcasing available services, contact info, and customer testimonials for easy client engagement.',
        tech: ['React', 'Tailwind', 'GSAP'],
        link: 'https://nawayath-smart-repair.vercel.app/',
      },
      {
        name: 'Patel Interior',
        desc: 'Interior design company website featuring portfolio galleries, service details, and smooth animations to highlight design projects.',
        tech: ['React', 'Tailwind', 'GSAP'],
        link: 'https://patel-interior.vercel.app/',
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
        <Link key={project.name || index} href={project.link} target='blank' className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="p-4">
            <h3 className="font-bold text-white text-xl mb-4">{project.name}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {project.desc}
            </p>
            <ul className='flex gap-4'>
              {project.tech.map((item, i) => (
                <li key={`${project.tech}-${i}`} className="flex items-center italic underline text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Link>
        ))}
      </div>
    </Section>
  )
}
