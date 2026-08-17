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
      name: 'POF Rental',
      desc: 'Developed a responsive rental platform with reusable components, modern UI, and a user-focused browsing experience.',
      tech: ['Next.js', 'Tailwind CSS'],
      link: 'https://pof-rental-five.vercel.app/',
      github: 'https://github.com/yunusmulla06/pof-rental',
    },
    {
      name: 'Nawayath Smart Repair',
      desc: 'Built a responsive repair-service website with a clean interface, smooth interactions, and optimized layouts across devices.',
      tech: ['Next.js', 'Tailwind CSS', 'GSAP'],
      link: 'https://nawayath-smart-repair.vercel.app/',
      github: 'https://github.com/yunusmulla06/Nawayath-Smart-Repair',
    },
    {
      name: "Patel's Interior",
      desc: 'Designed and developed a responsive interior website with project showcases, subtle animations, and a clean visual presentation.',
      tech: ['Next.js', 'Tailwind CSS', 'GSAP'],
      link: 'https://patel-interior.vercel.app/',
      github: 'https://github.com/yunusmulla06/patel-interior',
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
        <div key={project.name || index} className="project-card bg-gray-800 rounded-xl overflow-hidden shadow-lg">
          <div className="p-5">
            <h3 className="font-bold text-white text-xl mb-3">
              {project.name}
            </h3>

            <p className="text-gray-400 text-sm mb-4">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2 cursor-none">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between gap-4 mt-4">
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} on GitHub`}
                className="flex items-center text-gray-400 hover:text-white group"
              >
                <span className="text-xs">GitHub</span>
                <span className="ml-1 text-xl transition-transform duration-300 group-hover:translate-x-1">
                  ⇒
                </span>
              </Link>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.name} live site`}
                className="flex items-center text-indigo-400 hover:text-indigo-300 group"
              >
                <span className="text-xs">Live Site</span>
                <span className="ml-1 text-xl transition-transform duration-300 group-hover:translate-x-1">
                  ⇒
                </span>
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
    </Section>
  )
}