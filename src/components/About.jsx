function SectionTag({ children }) {
  return (
    <span className="inline-block font-mono text-xs text-[#00d4ff] bg-[#00d4ff]/8 border border-[#00d4ff]/20 px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
      {children}
    </span>
  )
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-4xl lg:text-5xl font-black text-gradient mb-4 tracking-tight">
      {children}
    </h2>
  )
}

function SectionSubtitle({ children }) {
  return (
    <p className="text-[#6b6b85] text-lg leading-relaxed max-w-2xl mx-auto">
      {children}
    </p>
  )
}

export default function About() {
  const stats = [
    { num: '4+', label: 'Projects' },
    { num: '8+', label: 'Technologies' },
    { num: '2+', label: 'Years Coding' },
  ]

  const info = [
    { icon: 'bx-user', label: 'Name', value: 'Haritha Induwara' },
    { icon: 'bxs-graduation', label: 'Education', value: 'BSc (Hons) Information Systems' },
    { icon: 'bx-map', label: 'Location', value: 'Sri Lanka 🇱🇰' },
    { icon: 'bx-briefcase', label: 'Available For', value: 'Freelance & Full-time' },
  ]

  return (
    <section id="about" className="relative py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Photo card */}
          <div className="reveal-left">
            <div className="relative">
              {/* Decorative dots */}
              <div
                className="absolute -top-6 -left-6 w-24 h-24 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, #6c63ff 1px, transparent 1px)',
                  backgroundSize: '10px 10px',
                }}
              />
              <div
                className="absolute -bottom-6 -right-6 w-24 h-24 opacity-20"
                style={{
                  backgroundImage: 'radial-gradient(circle, #00d4ff 1px, transparent 1px)',
                  backgroundSize: '10px 10px',
                }}
              />

              <div className="relative rounded-3xl overflow-hidden border border-white/8"
                style={{ background: 'linear-gradient(160deg, #0d0d24 0%, #111128 40%, #0a0a1e 100%)' }}>
                {/* Background blobs */}
                <div className="absolute inset-0">
                  <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-25"
                    style={{ background: 'radial-gradient(circle, #6c63ff, transparent 70%)' }} />
                  <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-15"
                    style={{ background: 'radial-gradient(circle, #00d4ff, transparent 70%)' }} />
                  <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                    }}
                  />
                </div>

                <div className="relative" style={{ height: 420 }}>
                  <img
                    src="/profile.jpg"
                    alt="Haritha Induwara"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[100%] w-auto object-cover object-top"
                    style={{
                      filter: 'drop-shadow(0 0 24px rgba(108,99,255,0.4))',
                      mixBlendMode: 'luminosity',
                      opacity: 0.9,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-20"
                    style={{ background: 'linear-gradient(to top, #0d0d24 0%, transparent 100%)' }} />
                </div>

                {/* Stats row */}
                <div className="relative grid grid-cols-3 gap-px bg-white/5">
                  {stats.map((s) => (
                    <div key={s.label} className="text-center py-5 bg-[#0a0a1e]/80">
                      <div className="text-2xl font-black text-gradient">{s.num}</div>
                      <div className="text-xs text-[#6b6b85] mt-1">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal-right">
            <SectionTag>About Me</SectionTag>
            <h3 className="text-3xl lg:text-4xl font-black mb-6 leading-tight">
              Crafting{' '}
              <span className="text-gradient">Digital Experiences</span>
              <br />
              That Matter
            </h3>
            <div className="space-y-4 text-[#6b6b85] leading-relaxed mb-8">
              <p>
                I'm <span className="text-white font-semibold">Haritha Induwara Liyanapathirana</span>,
                an ambitious Full Stack Developer and undergraduate at the University of Colombo
                School of Computing (UCSC). I thrive on building robust, user-centric applications
                that solve real-world problems.
              </p>
              <p>
                My journey spans across frontend and backend — designing responsive interfaces with
                React, architecting powerful APIs with FastAPI and Python, and working with both SQL
                and NoSQL databases. I love exploring new technologies and staying ahead of the curve.
              </p>
              <p>
                Beyond coding, I'm a collaborative team player who has contributed to multiple group
                projects including disaster resilience platforms and hardware tracking systems. I believe
                great software lives at the intersection of technical excellence and creative thinking.
              </p>
            </div>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {info.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl glass border border-white/8 group hover:border-[#6c63ff]/30 transition-colors"
                >
                  <i className={`bx ${item.icon} text-[#6c63ff] text-lg`} />
                  <div>
                    <div className="text-[10px] text-[#6b6b85] uppercase tracking-wider">{item.label}</div>
                    <div className="text-sm font-semibold text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] glow-primary hover:-translate-y-1 transition-all duration-300"
            >
              <i className="bx bx-conversation text-xl" /> Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
