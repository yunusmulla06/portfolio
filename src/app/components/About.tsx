'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import profilePic from '../../../public/profile.png'
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
                        <Image src={profilePic} alt="Moahmmed Yunus" className="object-cover w-full h-full rounded-full" />
                    </div>
                </div>

                <div className="flex-1 space-y-4 z-10">
                    <h2 className="about-text text-3xl font-bold text-white">
                        About Me
                    </h2>
                    <p className="about-text text-gray-400">
                        I’m Moahmmed Yunus, a Front-End Developer with a focus on building modern, responsive, and animated web applications. I specialize in Next.js, React, and Tailwind CSS, and I enjoy turning designs into smooth, interactive user experiences. I have experience in WordPress development and UI animations, and I’m constantly exploring new tools and technologies to create polished, user-friendly websites.
                    </p>
                    <p className="about-text text-gray-400">
                        Beyond coding, I love experimenting with micro-interactions, GSAP animations, and design concepts that elevate the overall experience. I thrive in collaborative environments and enjoy contributing to projects that push creative and technical boundaries.
                    </p>
                </div>
            </div>
        </Section>
    )
}
