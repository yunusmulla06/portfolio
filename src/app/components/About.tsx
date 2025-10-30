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
                        <Image src={profilePic} alt="Moahmmed Yunus" className="object-cover w-full h-full rounded-full" />
                    </div>
                </div>

                <div className="flex-1 space-y-4 z-10">
                    <h2 className="about-text text-3xl font-bold text-white">
                        About Me
                    </h2>
                    {/* <p className="about-text text-gray-400">
                        I’m Moahmmed Yunus, a Front-End Developer with a focus on building modern, responsive, and animated web applications. I specialize in Next.js, React, and Tailwind CSS, and I enjoy turning designs into smooth, interactive user experiences. I have experience in WordPress development and UI animations, and I’m constantly exploring new tools and technologies to create polished, user-friendly websites.
                    </p>
                    <p className="about-text text-gray-400">
                        Beyond coding, I love experimenting with micro-interactions, GSAP animations, and design concepts that elevate the overall experience. I thrive in collaborative environments and enjoy contributing to projects that push creative and technical boundaries.
                    </p> */}
                    <p className="about-text text-gray-400">
                        I’m <span className="text-white font-semibold">Mohammed Yunus Mulla</span>, a passionate <span className="text-indigo-400 font-medium">Front-End Developer</span> who loves crafting interactive, high-performance websites that combine aesthetics with smooth functionality. I specialize in <span className="text-emerald-400">Next.js</span>, <span className="text-amber-400">React</span>, and <span className="text-fuchsia-400">Tailwind CSS</span>.
                    </p>

                    <p className="about-text text-gray-400">
                        After completing my graduation, I began my journey as a front-end developer — starting with <span className="text-indigo-400">HTML</span>, <span className="text-indigo-400">CSS</span>, and <span className="text-indigo-400">JavaScript</span>. Over time, I moved into <span className="text-fuchsia-400">WordPress custom theme development</span>, then transitioned to modern frameworks like <span className="text-emerald-400">React</span> and <span className="text-emerald-400">Next.js</span>, focusing mainly on building performant and scalable front-end experiences.
                    </p>

                    <p className="about-text text-gray-400">
                        As I grew, I developed a strong interest in <span className="text-pink-400">Micro Animations</span> using <span className="text-indigo-400">GSAP</span> and Vanilla JavaScript — adding subtle, engaging interactions to elevate user experience. I later expanded into <span className="text-emerald-400">Full-Stack Development</span>, building a MERN project completely through self-learning and exploration.
                    </p>

                    <p className="about-text text-gray-400">
                        I’ve also designed <span className="text-fuchsia-400">Mobile App screens</span> using React Native, customized <span className="text-amber-400">Shopify</span> stores, and optimized websites for <span className="text-emerald-400">SEO performance</span>. Along the way, I completed two freelance projects — <span className="text-white font-medium">Nawayath Repair</span> and <span className="text-white font-medium">Patel Interiors</span> — focusing on creating clean, elegant, and user-friendly web solutions.
                    </p>

                    <p className="about-text text-gray-400">
                        Beyond coding, I enjoy exploring UI animations, experimenting with design systems, and continuously learning to stay at the edge of modern web development.
                    </p>

                </div>
            </div>
        </Section>
    )
}
