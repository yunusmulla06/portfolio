'use client'

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-900 bg-gray-950 text-gray-400">

      {/* Background Elements */}
      <div className="absolute top-0 left-10 w-24 h-24 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 py-12">

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Intro */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              Mohammed Yunus
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Frontend Developer · React · Next.js · TypeScript
            </p>

            <p className="text-xs text-gray-600 mt-2">
              Dubai, UAE
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://www.linkedin.com/in/mohammed-yunus-017a53194/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="
                flex items-center justify-center
                w-10 h-10
                rounded-full
                bg-gray-900
                border border-gray-800
                text-gray-400
                hover:text-white
                hover:border-gray-700
                hover:bg-gray-800
                transition-all duration-200
              "
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="https://github.com/yunusmulla06"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="
                flex items-center justify-center
                w-10 h-10
                rounded-full
                bg-gray-900
                border border-gray-800
                text-gray-400
                hover:text-white
                hover:border-gray-700
                hover:bg-gray-800
                transition-all duration-200
              "
            >
              <FaGithub size={17} />
            </a>

            <a
              href="mailto:mullayunus449@gmail.com"
              aria-label="Email"
              className="
                flex items-center justify-center
                w-10 h-10
                rounded-full
                bg-gray-900
                border border-gray-800
                text-gray-400
                hover:text-white
                hover:border-gray-700
                hover:bg-gray-800
                transition-all duration-200
              "
            >
              <FaEnvelope size={17} />
            </a>

          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gray-900 my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">

          <p>
            © {new Date().getFullYear()} Mohammed Yunus. All rights reserved.
          </p>

          <p>
            Built with Next.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  )
}