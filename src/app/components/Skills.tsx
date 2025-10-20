'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Section from './Section'
import { 
  Code2, 
  Palette, 
  Server, 
  Workflow, 
  Settings, 
  Rocket 
} from 'lucide-react'

const skills = [
  {
    title: 'Frontend',
    icon: <Code2 size={28} className="text-indigo-400" />,
    items: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'UI & Animation',
    icon: <Palette size={28} className="text-pink-400" />,
    items: ['GSAP', 'Framer Motion', 'Responsive Design', 'Figma']
  },
  {
    title: 'Backend (Learning)',
    icon: <Server size={28} className="text-emerald-400" />,
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs']
  },
  {
    title: 'Tools & Platforms',
    icon: <Settings size={28} className="text-amber-400" />,
    items: ['Git & GitHub', 'Docker', 'WordPress (ACF, Elementor)', 'Shopify']
  },
  {
    title: 'Soft Skills',
    icon: <Workflow size={28} className="text-fuchsia-400" />,
    items: ['Teamwork', 'Leadership', 'Problem Solving', 'Creativity']
  },
]

export default function Skills() {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-card',
        { y: 140, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power3.out',
          stagger: 0.5,
          clearProps: 'transform',
        }
      )
    }, skillsRef)

    return () => ctx.revert()
  }, [])

  return (
    <Section ref={skillsRef} id="skills" py="20">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto items-stretch">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card bg-gray-900/60 border border-gray-800 rounded-xl p-6 flex flex-col justify-between h-full hover:bg-gray-800/70 transition-all duration-300 shadow-lg backdrop-blur-md cursor-default"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white">{skill.title}</h3>
              </div>
              <ul className="space-y-1 text-gray-400 text-sm">
                {skill.items.map((item, i) => (
                  <li key={`${skill.title}-${i}`} className="flex items-center gap-2">
                    <Rocket size={12} className="text-indigo-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
