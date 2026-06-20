import { useState } from 'react'

const methods = [
  { icon: 'bx-envelope', label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com' },
  { icon: 'bx-phone', label: 'Phone', value: '+94 XX XXX XXXX', href: 'tel:+94XXXXXXXXX' },
  { icon: 'bx-map', label: 'Location', value: 'Sri Lanka 🇱🇰', href: '#' },
]

const socials = [
  { icon: 'bxl-github',    label: 'GitHub',    href: 'https://github.com/',    cls: 'hover:bg-[#333] hover:border-[#333]' },
  { icon: 'bxl-linkedin',  label: 'LinkedIn',  href: 'https://linkedin.com/',  cls: 'hover:bg-[#0077b5] hover:border-[#0077b5]' },
  { icon: 'bxl-twitter',   label: 'Twitter',   href: 'https://twitter.com/',   cls: 'hover:bg-[#1da1f2] hover:border-[#1da1f2]' },
  { icon: 'bxl-instagram', label: 'Instagram', href: 'https://instagram.com/', cls: 'hover:bg-[#e1306c] hover:border-[#e1306c]' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', subject: '', message: '' }) }, 3500)
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6c63ff]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block font-mono text-xs text-[#00d4ff] bg-[#00d4ff]/8 border border-[#00d4ff]/20 px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Contact
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gradient mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-[#6b6b85] text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to exciting new opportunities!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div className="reveal-left space-y-8">
            <div>
              <h3 className="text-2xl font-black mb-3">
                Let's build something{' '}
                <span className="text-gradient">amazing</span> together.
              </h3>
              <p className="text-[#6b6b85] leading-relaxed">
                I'm currently open to freelance work and full-time opportunities. Whether you have
                a question, a project proposal, or just want to say hello — don't hesitate!
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-3">
              {methods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  className="flex items-center gap-4 px-5 py-4 glass border border-white/8 rounded-2xl group hover:border-[#6c63ff]/30 hover:translate-x-2 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#6c63ff]/12 flex items-center justify-center text-[#6c63ff] text-xl flex-shrink-0 group-hover:bg-[#6c63ff]/20 transition-colors">
                    <i className={`bx ${m.icon}`} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#6b6b85] uppercase tracking-wider">{m.label}</div>
                    <div className="font-semibold text-white text-sm">{m.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Socials */}
            <div>
              <div className="text-xs text-[#6b6b85] uppercase tracking-widest mb-3">Connect with me</div>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className={`w-11 h-11 flex items-center justify-center rounded-xl glass border border-white/8 text-[#6b6b85] hover:text-white hover:-translate-y-1 transition-all duration-300 text-xl ${s.cls}`}
                  >
                    <i className={`bx ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal-right">
            <form
              onSubmit={handleSubmit}
              className="glass border border-white/8 rounded-3xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#e8e8f4] mb-2 uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-[#6b6b85] text-sm outline-none focus:border-[#6c63ff]/50 focus:ring-2 focus:ring-[#6c63ff]/10 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#e8e8f4] mb-2 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-[#6b6b85] text-sm outline-none focus:border-[#6c63ff]/50 focus:ring-2 focus:ring-[#6c63ff]/10 transition-all"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#e8e8f4] mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-[#6b6b85] text-sm outline-none focus:border-[#6c63ff]/50 focus:ring-2 focus:ring-[#6c63ff]/10 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#e8e8f4] mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/8 text-white placeholder-[#6b6b85] text-sm outline-none focus:border-[#6c63ff]/50 focus:ring-2 focus:ring-[#6c63ff]/10 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className={`w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                  sent
                    ? 'bg-gradient-to-r from-[#00e88f] to-[#00d4ff] shadow-lg shadow-[#00e88f]/20'
                    : 'bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] glow-primary hover:-translate-y-0.5 hover:shadow-xl'
                }`}
              >
                {sent ? (
                  <><i className="bx bx-check-circle text-xl" /> Message Sent!</>
                ) : (
                  <><i className="bx bx-send text-xl" /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
