'use client'

import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Section from './Section'
import { Mail, MessageCircle, Send } from 'lucide-react'

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const position = String(data.get('position') || '').trim()
    const message = String(data.get('message') || '').trim()

    const newErrors: Record<string, string> = {}

    if (!name) {
      newErrors.name = 'Name is required'
    }

    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!position) {
      newErrors.position = 'Position is required'
    }

    if (!message) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        toast.success('Message sent successfully!')
        form.reset()
        setErrors({})
      } else {
        toast.error('Failed to send message. Please try again.')
      }
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev }
        delete updated[field]
        return updated
      })
    }
  }

  return (
    <Section
      id="contact"
      className="py-20 text-center relative"
    >
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar
        theme="dark"
      />

      <div className="max-w-3xl mx-auto px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.25em] text-gray-500 mb-3">
            Get In Touch
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-7 max-w-xl mx-auto">
            I&apos;m currently open to Frontend Developer opportunities in
            Dubai and across the UAE. If you have an opportunity that matches
            my experience, feel free to get in touch.
          </p>
        </div>

        {/* Availability */}
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-7 text-sm text-gray-500">
          <span>📍 Dubai, UAE</span>

          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-400" />
            Open to Opportunities
          </span>

          <span>⏳ 30 Days Notice</span>
        </div>

        {/* Direct Contact */}
        <div className="flex justify-center flex-wrap gap-3 mb-10">

          <a
            href="mailto:mullayunus449@gmail.com"
            className="flex items-center gap-2
              text-sm
              px-5 py-2.5
              bg-gray-900/70
              border border-gray-800
              rounded-full
              text-gray-300
              hover:text-white
              hover:border-gray-700
              hover:bg-gray-800
              transition-all duration-200"
          >
            <Mail size={15} />
            Email Me
          </a>

          <a
            href="https://wa.me/971502202462"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2
              text-sm
              px-5 py-2.5
              bg-gray-900/70
              border border-gray-800
              rounded-full
              text-gray-300
              hover:text-white
              hover:border-gray-700
              hover:bg-gray-800
              transition-all duration-200"
          >
            <MessageCircle size={15} />
            WhatsApp
          </a>

        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          method="POST"
          action="https://formspree.io/f/xvgdobky"
          className="
            max-w-2xl mx-auto
            text-left
            bg-gray-900/50
            border border-gray-800
            p-6 sm:p-8
            rounded-2xl
            shadow-lg
            backdrop-blur-md
          "
        >

          {/* Form Header */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white">
              Send Me a Message
            </h3>

            <p className="text-sm text-gray-500 mt-1">
              Tell me a little about the opportunity.
            </p>
          </div>

          {/* Name + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm text-gray-300"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="name"
                onChange={() => clearError('name')}
                className={`w-full border ${
                  errors.name
                    ? 'border-red-500/70'
                    : 'border-white/10'
                }
                bg-gray-950/40
                text-white
                placeholder:text-gray-600
                text-sm
                p-3
                rounded-lg
                focus:ring-1
                ${
                  errors.name
                    ? 'focus:ring-red-500'
                    : 'focus:ring-white'
                }
                focus:border-transparent
                outline-none
                transition`}
              />

              {errors.name && (
                <p className="text-red-400 text-xs">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-sm text-gray-300"
              >
                Your Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="you@example.com"
                autoComplete="email"
                onChange={() => clearError('email')}
                className={`w-full border ${
                  errors.email
                    ? 'border-red-500/70'
                    : 'border-white/10'
                }
                bg-gray-950/40
                text-white
                placeholder:text-gray-600
                text-sm
                p-3
                rounded-lg
                focus:ring-1
                ${
                  errors.email
                    ? 'focus:ring-red-500'
                    : 'focus:ring-white'
                }
                focus:border-transparent
                outline-none
                transition`}
              />

              {errors.email && (
                <p className="text-red-400 text-xs">
                  {errors.email}
                </p>
              )}
            </div>

          </div>

          {/* Position */}
          <div className="flex flex-col gap-2 mt-4">
            <label
              htmlFor="position"
              className="text-sm text-gray-300"
            >
              Position / Opportunity
            </label>

            <input
              id="position"
              type="text"
              name="position"
              placeholder="e.g. Frontend Developer"
              onChange={() => clearError('position')}
              className={`w-full border ${
                errors.position
                  ? 'border-red-500/70'
                  : 'border-white/10'
              }
              bg-gray-950/40
              text-white
              placeholder:text-gray-600
              text-sm
              p-3
              rounded-lg
              focus:ring-1
              ${
                errors.position
                  ? 'focus:ring-red-500'
                  : 'focus:ring-white'
              }
              focus:border-transparent
              outline-none
              transition`}
            />

            {errors.position && (
              <p className="text-red-400 text-xs">
                {errors.position}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 mt-4">
            <label
              htmlFor="message"
              className="text-sm text-gray-300"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about the opportunity..."
              onChange={() => clearError('message')}
              className={`w-full border ${
                errors.message
                  ? 'border-red-500/70'
                  : 'border-white/10'
              }
              bg-gray-950/40
              text-white
              placeholder:text-gray-600
              text-sm
              p-3
              rounded-lg
              focus:ring-1
              ${
                errors.message
                  ? 'focus:ring-red-500'
                  : 'focus:ring-white'
              }
              focus:border-transparent
              outline-none
              transition
              resize-none`}
            />

            {errors.message && (
              <p className="text-red-400 text-xs">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full
              mt-5
              flex
              items-center
              justify-center
              gap-2
              bg-white
              text-black
              px-4
              py-3
              rounded-lg
              font-medium
              text-sm
              transition-all
              duration-200
              hover:bg-gray-200
              disabled:opacity-60
              disabled:cursor-not-allowed
            "
          >
            <Send size={15} />

            {isSubmitting
              ? 'Sending...'
              : 'Send Message'}
          </button>

        </form>

      </div>
    </Section>
  )
}