'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import profilePic from '../../../public/profile.jpeg'
import Section from './Section'

export default function About() {
    const aboutRef = useRef<HTMLDivElement>(null)
    const frameRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-text', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
                stagger: 0.5,
            })

            gsap.to(frameRef.current, {
                rotation: 360,
                duration: 5,
                repeat: -1,
                ease: 'linear',
            })

            gsap.to('.float', {
                y: '+=20',
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: 0.3,
            })
        }, aboutRef)

        return () => ctx.revert()
    }, [])

    return (
        <Section
            ref={aboutRef}
            id="about"
            py='20'
        >
            <div className="float absolute top-10 left-10 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl"></div>
            <div className="float absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
            <div className="float absolute top-1/3 right-1/3 w-12 h-12 bg-indigo-400/20 rounded-full blur-lg"></div>

            <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
                <div className="relative w-40 h-40 md:w-60 md:h-60 z-10">
                    <div
                        ref={frameRef}
                        className="absolute inset-0 rounded-full border-4 
             border-transparent 
             border-t-black border-r-red-500 border-b-white border-l-green-300
             opacity-80
             shadow-[0_0_15px_rgba(0,0,0,0.7),0_0_20px_rgba(239,68,68,0.7),0_0_25px_rgba(255,255,255,0.7),0_0_20px_rgba(34,197,94,0.7)]"></div>

                    <div className="absolute inset-2 rounded-full overflow-hidden">
                        <Image src={profilePic} alt="Mohammed Yunus" className="object-cover w-full h-full rounded-full" />
                    </div>
                </div>

                <div className="flex-1 space-y-4 z-10">
                    <h2 className="about-text text-3xl font-bold text-white">
                        About Me
                    </h2>
                    <p className="about-text text-gray-400">
                        I’m <span className="text-white font-semibold">Mohammed Yunus Mulla</span>, a Front-End Developer based in Dubai with 2+ years of experience building modern, responsive, and high-performance web applications.
                    </p>

                    <p className="about-text text-gray-400">
                        I specialize in <span className="text-indigo-400">Next.js</span>, <span className="text-amber-400">React</span>, and <span className="text-fuchsia-400">Tailwind CSS</span>, along with experience in <span className="text-green-400 font-medium">WordPress (Custom Themes, Elementor)</span> and <span className="text-green-400 font-medium">Shopify Customization</span>, focusing on building scalable UI components and high-performance websites.
                    </p>

                    <p className="about-text text-gray-400">
                        I have worked on real-world projects including service websites and e-commerce platforms, improving UI performance, responsiveness, and overall user engagement. I also enjoy adding micro-interactions using <span className="text-pink-400">GSAP</span>.
                    </p>

                    <p className="about-text text-gray-400">
                        Currently, I’m expanding my skills into full-stack development with <span className="text-emerald-400">Node.js</span> and <span className="text-emerald-400">MongoDB</span>.
                    </p>

                    <p className="about-text text-gray-500 text-sm">
                        📍 Dubai, UAE • 🟢 Open to Opportunities • ⏳ Notice Period: 30 Days
                    </p>
                    <div className="about-text flex flex-wrap gap-2 mt-2 cursor-none">
                    {[
                        'Next.js',
                        'React',
                        'Tailwind CSS',
                        'WordPress',
                        'Shopify',
                        'GSAP',
                    ].map((tech) => (
                        <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>

                </div>
            </div>
        </Section>
    )
}
