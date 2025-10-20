'use client'

import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center px-6 py-12 bg-gray-950 text-gray-400 font-sans">
      {/* Optional floating shapes */}
      <div className="absolute top-5 left-5 w-12 h-12 bg-indigo-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-5 right-5 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>

      <p className="mb-4">© {new Date().getFullYear()} Moahmmed Yunus. All rights reserved.</p>

      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/mohammed-yunus-017a53194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/yunusmulla06" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <FaGithub size={24} />
        </a>
        {/* <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <FaTwitter size={24} />
        </a> */}
      </div>
    </footer>
  )
}
