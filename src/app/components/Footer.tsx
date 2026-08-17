'use client'

import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center px-6 py-12 bg-gray-950 text-gray-400 font-sans overflow-hidden">

      {/* Floating shapes */}
      <div className="absolute top-5 left-5 w-12 h-12 bg-indigo-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-5 right-5 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>

      {/* Social Links */}
      <div className="flex items-center gap-6 mb-6">

        <a
          href="https://www.linkedin.com/in/mohammed-yunus-017a53194/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition-all duration-300 hover:scale-110"
        >
          <FaLinkedin size={22} />
        </a>

        <a
          href="https://github.com/yunusmulla06"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition-all duration-300 hover:scale-110"
        >
          <FaGithub size={22} />
        </a>

        <a
          href="mailto:mullayunus449@gmail.com"
          aria-label="Email"
          className="hover:text-white transition-all duration-300 hover:scale-110"
        >
          <FaEnvelope size={22} />
        </a>

      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Mohammed Yunus. All rights reserved.
      </p>

    </footer>
  )
}