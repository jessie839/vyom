"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Start Your Mission</h2>
            <p className="text-lg text-muted-foreground">
              Contact our team to discuss your UAV requirements and capabilities
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-card p-8 rounded-xl border border-border transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
          >
            {submitted && (
              <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary font-semibold text-center animate-in fade-in slide-in-from-top-2 duration-300">
                Thank you! We'll be in touch soon.
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none"
                placeholder="Tell us about your requirements..."
              />
            </div>

            <button
              type="submit"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-primary/30"
            >
              Send Message
            </button>
          </form>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            <div className="space-y-2 p-4 rounded-lg hover:bg-card/50 transition-colors">
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-muted-foreground">contact@vyomgarud.com</p>
            </div>
            <div className="space-y-2 p-4 rounded-lg hover:bg-card/50 transition-colors">
              <h3 className="font-semibold text-foreground">Phone</h3>
              <p className="text-muted-foreground">+91 8881444693</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
