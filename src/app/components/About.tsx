'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import profilePic from '../../../public/profile.png'
import Section from './Section'

export default function About() {
    const aboutRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.about-content', {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.15,
            })

            gsap.from('.about-image', {
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
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
            py="20"
        >
            {/* Background Elements */}
            <div className="float absolute top-10 left-10 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl" />
            <div className="float absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />
            <div className="float absolute top-1/3 right-1/3 w-12 h-12 bg-indigo-400/10 rounded-full blur-lg" />

            <div className="relative w-full max-w-6xl mx-auto">

                {/* Main Content */}
                <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">

                    {/* Profile Image */}
                    <div className="about-image relative shrink-0">

                        <div className="absolute inset-0 rounded-full bg-indigo-500/10 blur-2xl scale-110" />

                        <div className="relative size-60 md:size-72 lg:size-80 rounded-full p-1 bg-gradient-to-br from-gray-600 via-gray-800 to-gray-900">

                            <div className="w-full h-full rounded-full overflow-hidden border border-gray-700 bg-gray-900">
                                <Image
                                    src={profilePic}
                                    alt="Mohammed Yunus - Frontend Developer"
                                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                                    priority
                                />
                            </div>

                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-5 z-10">

                        {/* Heading */}
                        <div className="about-content">
                            <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">
                                About Me
                            </p>

                            <h2 className="text-3xl sm:text-4xl font-bold text-white">
                                Frontend Developer
                            </h2>
                        </div>

                        {/* Introduction */}
                        <p className="about-content text-gray-300 leading-7">
                            I’m{' '}
                            <span className="font-medium text-white">
                                Mohammed Yunus
                            </span>
                            , a Frontend Developer based in Dubai with 3+ years
                            of experience building responsive web applications
                            and production e-commerce platforms.
                        </p>

                        {/* Specialization */}
                        <p className="about-content text-gray-400 leading-7">
                            I specialize in{' '}
                            <span className="text-white font-medium">
                                React, Next.js, and TypeScript
                            </span>
                            , with experience building reusable interfaces,
                            integrating REST APIs, and developing responsive
                            frontend solutions with a focus on performance,
                            usability, and SEO.
                        </p>

                        {/* Professional Experience */}
                        <p className="about-content text-gray-400 leading-7">
                            My professional experience includes developing and
                            maintaining e-commerce features such as{' '}
                            <span className="text-gray-300">
                                product catalogs, variants, cart and checkout,
                                coupon systems, payment integrations, and
                                inventory-related workflows
                            </span>
                            . I also work with backend developers, designers,
                            and operations teams to deliver and maintain
                            production features.
                        </p>

                        {/* Additional Experience */}
                        <p className="about-content text-gray-400 leading-7">
                            I also have experience with{' '}
                            <span className="text-gray-300">
                                WordPress, WooCommerce, Shopify, Tailwind CSS,
                                GSAP, and modern deployment tools
                            </span>
                            , giving me flexibility to work across different
                            web development and e-commerce projects.
                        </p>

                        {/* Availability */}
                        <div className="about-content flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 text-sm text-gray-500">
                            <span>📍 Dubai, UAE</span>

                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400" />
                                Open to Opportunities
                            </span>

                            <span>⏳ 30 Days Notice</span>
                        </div>

                        {/* Core Skills */}
                        <div className="about-content flex flex-wrap gap-2 pt-1">
                            {[
                                'React',
                                'Next.js',
                                'TypeScript',
                                'REST APIs',
                                'E-commerce',
                                'Tailwind CSS',
                                'SEO',
                                'Performance',
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="text-xs px-3 py-1.5
                                    bg-gray-900/80
                                    text-gray-300
                                    rounded-lg
                                    border border-gray-800
                                    hover:border-gray-700
                                    hover:text-white
                                    transition-colors duration-200"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </Section>
    )
}