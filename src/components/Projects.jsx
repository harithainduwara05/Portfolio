import { useState } from 'react'

const projects = [
  {
    id: 1,
    icon: 'bxs-book-reader',
    iconBg: '#6c63ff',
    type: 'Personal Project',
    title: 'LMS Project',
    desc: 'A comprehensive Learning Management System enabling educators to create, manage, and deliver courses online. Features user authentication, course enrollment, progress tracking, and intuitive dashboards for both students and instructors.',
    tech: ['React', 'Python', 'FastAPI', 'MongoDB'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    icon: 'bx-shield-quarter',
    iconBg: '#00d4ff',
    type: 'Group Project',
    title: 'Resilience Lanka',
    desc: 'A disaster resilience platform helping Sri Lankan communities prepare for and respond to natural disasters. Includes real-time alerts, resource mapping, community coordination tools, and emergency response workflows.',
    tech: ['React', 'JavaScript', 'FastAPI', 'MongoDB'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    icon: 'bx-globe',
    iconBg: '#00e88f',
    type: 'Personal Project',
    title: 'Simple Web Server',
    desc: 'A lightweight HTTP web server built from scratch to understand the fundamentals of networking, socket programming, and the HTTP protocol. Handles GET/POST requests, static files, and concurrent connections.',
    tech: ['C', 'C++', 'Networking', 'Sockets'],
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    icon: 'bx-chip',
    iconBg: '#ff6b9d',
    type: 'Group Project',
    title: 'Hardware Tracker',
    desc: 'An inventory management system for tracking hardware assets across an organization. Features asset registration, location tracking, maintenance scheduling, check-in/check-out workflows, and automated reporting dashboards.',
    tech: ['Java', 'JavaScript', 'MongoDB', 'React'],
    github: '#',
    live: '#',
    featured: false,
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="projects" className="relative py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00d4ff]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block font-mono text-xs text-[#00d4ff] bg-[#00d4ff]/8 border border-[#00d4ff]/20 px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            My Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gradient mb-4 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-[#6b6b85] text-lg max-w-2xl mx-auto">
            From learning management to disaster resilience — here are projects that showcase my skills across the full stack.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={`reveal group relative glass border border-white/8 rounded-3xl overflow-hidden transition-all duration-500 cursor-default
                ${hovered === p.id ? 'border-[#6c63ff]/40 -translate-y-2 shadow-2xl' : 'hover:border-[#6c63ff]/20'}`}
              style={{ animationDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Gradient top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(90deg, transparent, ${p.iconBg}, transparent)`,
                  opacity: hovered === p.id ? 1 : 0,
                }}
              />

              {/* Card glow */}
              {hovered === p.id && (
                <div
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${p.iconBg}, transparent 70%)` }}
                />
              )}

              <div className="p-8">
                {/* Header row */}
                <div className="flex items-start justify-between mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]"
                    style={{ background: `${p.iconBg}18`, color: p.iconBg }}
                  >
                    <i className={`bx ${p.icon}`} />
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={p.github}
                      aria-label="GitHub"
                      className="w-9 h-9 flex items-center justify-center rounded-xl glass border border-white/8 text-[#6b6b85] hover:text-white hover:border-white/20 transition-all text-base"
                    >
                      <i className="bx bxl-github" />
                    </a>
                    <a
                      href={p.live}
                      aria-label="Live Demo"
                      className="w-9 h-9 flex items-center justify-center rounded-xl glass border border-white/8 text-[#6b6b85] hover:text-white hover:border-white/20 transition-all text-base"
                    >
                      <i className="bx bx-link-external" />
                    </a>
                  </div>
                </div>

                {/* Meta */}
                <div className="font-mono text-[10px] uppercase tracking-widest text-[#00d4ff] mb-2">
                  {p.type}
                </div>
                <h3 className="text-xl font-black text-white mb-3">{p.title}</h3>
                <p className="text-sm text-[#6b6b85] leading-relaxed mb-6">{p.desc}</p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-lg border border-white/8 text-[#6c63ff]"
                      style={{ background: '#6c63ff12' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
