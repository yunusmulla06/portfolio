'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Section from './Section'
import Link from 'next/link'

const projectList = [
  {
    number: '01',
    name: 'POF Rental',
    type: 'Rental Platform',
    desc: 'Built a responsive rental platform using Next.js and React, with reusable components and structured layouts for presenting rental listings. Focused on responsive behavior, component reusability, and a consistent experience across desktop and mobile devices.',
    tech: ['Next.js', 'React', 'Tailwind CSS'],
    link: 'https://pof-rental-five.vercel.app/',
    github: 'https://github.com/yunusmulla06/pof-rental',
  },
  {
    number: '02',
    name: 'Nawayath Smart Repair',
    type: 'Service Website',
    desc: 'Developed a responsive service website using Next.js with reusable UI components and structured service sections. Added GSAP animations and responsive layouts to create a smooth and engaging experience across different screen sizes.',
    tech: ['Next.js', 'Tailwind CSS', 'GSAP'],
    link: 'https://nawayath-smart-repair.vercel.app/',
    github: 'https://github.com/yunusmulla06/Nawayath-Smart-Repair',
  },
  {
    number: '03',
    name: "Patel's Interior",
    type: 'Interior Design Website',
    desc: 'Designed and developed a responsive interior design website focused on presenting projects and services through a modern frontend interface. Implemented reusable layouts, responsive styling, and subtle GSAP animations to improve the overall presentation.',
    tech: ['Next.js', 'Tailwind CSS', 'GSAP'],
    link: 'https://patel-interior.vercel.app/',
    github: 'https://github.com/yunusmulla06/patel-interior',
  },
]

export default function Projects() {
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.15,
          clearProps: 'transform',
        }
      )
    }, projectsRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section
      ref={projectsRef}
      id="projects"
      py="20"
    >
      <div className="relative w-full max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">
            Selected Work
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base leading-relaxed">
            Personal and client projects built with modern frontend
            technologies, focusing on responsive interfaces, reusable
            components, and practical user experiences.
          </p>
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project) => (
            <article
              key={project.name}
              className="project-card group relative overflow-hidden
                flex flex-col
                bg-gray-900/60
                border border-gray-800
                rounded-2xl
                p-6
                shadow-lg
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-gray-800/70
                hover:border-gray-700"
            >

              {/* Background Number */}
              <span
                className="absolute right-4 top-1
                  text-8xl font-bold
                  text-white/[0.025]
                  leading-none
                  select-none
                  transition-all duration-300
                  group-hover:text-white/[0.05]"
              >
                {project.number}
              </span>

              {/* Project Type */}
              <div className="relative mb-5">
                <span className="text-xs uppercase tracking-wider text-gray-500">
                  {project.type}
                </span>
              </div>

              {/* Project Name */}
              <h3 className="relative text-xl font-semibold text-white mb-3">
                {project.name}
              </h3>

              {/* Description */}
              <p className="relative text-sm text-gray-400 leading-6 mb-6">
                {project.desc}
              </p>

              {/* Technologies */}
              <div className="relative flex flex-wrap gap-2 mb-7">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5
                      bg-gray-800/80
                      text-gray-300
                      rounded-lg
                      border border-gray-700/80"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="relative flex items-center gap-5 mt-auto pt-2">

                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} source code on GitHub`}
                  className="text-sm text-gray-400
                    hover:text-white
                    transition-colors duration-200"
                >
                  GitHub
                  <span className="ml-1">↗</span>
                </Link>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} live website`}
                  className="text-sm text-gray-300
                    hover:text-white
                    transition-colors duration-200"
                >
                  Live Site
                  <span className="ml-1">↗</span>
                </Link>

              </div>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-0
                  w-0 h-px
                  bg-white/30
                  transition-all duration-500
                  group-hover:w-full"
              />
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}