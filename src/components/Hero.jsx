import { useEffect, useState } from 'react'

const TITLES = [
  'Full Stack Developer',
  'React Enthusiast',
  'Python & FastAPI Builder',
  'UCSC Undergraduate',
  'Problem Solver',
]

function useTyping(titles) {
  const [display, setDisplay] = useState('')
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = titles[idx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 40)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setIdx((i) => (i + 1) % titles.length)
      timeout = setTimeout(() => {}, 400)
    }

    setDisplay(current.substring(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, idx, titles])

  return display
}

const socials = [
  { icon: 'bxl-github', href: 'https://github.com/', label: 'GitHub' },
  { icon: 'bxl-linkedin', href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: 'bxl-twitter', href: 'https://twitter.com/', label: 'Twitter' },
  { icon: 'bx-envelope', href: 'mailto:your.email@example.com', label: 'Email' },
]

export default function Hero() {
  const typed = useTyping(TITLES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ---- LEFT: Content ---- */}
          <div className="order-2 lg:order-1 animate-slide-up">
            {/* Greeting */}
            <div className="flex items-center gap-2 mb-4">
              <span className="animate-wave text-2xl">👋</span>
              <span className="font-mono text-sm text-[#00d4ff] bg-[#00d4ff]/8 border border-[#00d4ff]/20 px-3 py-1 rounded-full tracking-wider uppercase">
                Hello, I'm
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-3 tracking-tight">
              Haritha
              <br />
              <span className="text-gradient">Induwara</span>
            </h1>

            {/* Typed Title */}
            <h2 className="text-xl lg:text-2xl font-semibold text-[#6b6b85] mb-6 min-h-[2rem]">
              <span className="text-white">{typed}</span>
              <span className="animate-blink border-r-2 border-[#6c63ff] ml-0.5">&nbsp;</span>
            </h2>

            {/* Description */}
            <p className="text-[#6b6b85] text-lg leading-relaxed max-w-xl mb-10">
              A passionate Full Stack Developer from Sri Lanka, currently pursuing my
              undergraduate degree at UCSC. I transform ideas into elegant, scalable
              digital solutions — from pixel-perfect UIs to powerful backend APIs.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] glow-primary hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
              >
                <i className="bx bx-rocket text-xl" /> View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white glass border border-white/10 hover:-translate-y-1 hover:border-[#6c63ff]/40 transition-all duration-300"
              >
                <i className="bx bx-envelope text-xl" /> Get In Touch
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#6b6b85] uppercase tracking-wider mr-1">Follow</span>
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl glass border border-white/8 text-[#6b6b85] hover:text-[#6c63ff] hover:border-[#6c63ff]/40 hover:-translate-y-1 transition-all duration-300 text-xl"
                >
                  <i className={`bx ${s.icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* ---- RIGHT: Photo ---- */}
          <div className="order-1 lg:order-2 flex justify-center items-center">
            <div className="relative">
              {/* Orbital ring */}
              <div
                className="absolute inset-0 rounded-full border border-[#6c63ff]/20"
                style={{ margin: '-48px' }}
              />
              <div
                className="absolute inset-0 rounded-full border border-[#00d4ff]/10"
                style={{ margin: '-80px' }}
              />

              {/* Glow backing */}
              <div className="absolute inset-0 rounded-3xl animate-pulse-glow" />

              {/* Gradient ring around photo */}
              <div
                className="relative rounded-3xl p-[3px]"
                style={{
                  background: 'linear-gradient(135deg, #6c63ff 0%, #00d4ff 50%, #ff6b9d 100%)',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 4s ease infinite',
                }}
              >
                {/* Photo container with matching dark bg */}
                <div className="relative rounded-[22px] overflow-hidden"
                  style={{
                    width: 340,
                    height: 400,
                    background: 'linear-gradient(160deg, #0d0d24 0%, #111128 40%, #0a0a1e 100%)',
                  }}
                >
                  {/* Background elements behind photo */}
                  <div className="absolute inset-0">
                    {/* Grid lines */}
                    <div
                      className="absolute inset-0 opacity-[0.06]"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '40px 40px',
                      }}
                    />
                    {/* Glow blobs */}
                    <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-30"
                      style={{ background: 'radial-gradient(circle, #6c63ff, transparent 70%)' }} />
                    <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-20"
                      style={{ background: 'radial-gradient(circle, #00d4ff, transparent 70%)' }} />
                    {/* Code lines decoration */}
                    <div className="absolute top-6 left-4 font-mono text-[9px] text-[#6c63ff]/30 leading-5">
                      <div>{'const developer = {'}</div>
                      <div>{'  name: "Haritha",'}</div>
                      <div>{'  role: "FullStack",'}</div>
                      <div>{'  passion: "Code"'}</div>
                      <div>{'}'}</div>
                    </div>
                  </div>

                  {/* Profile photo — positioned to blend */}
                  <img
                    src="/profile.jpg"
                    alt="Haritha Induwara"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[95%] w-auto object-cover object-top"
                    style={{
                      filter: 'drop-shadow(0 0 30px rgba(108,99,255,0.5))',
                      mixBlendMode: 'luminosity',
                      opacity: 0.92,
                    }}
                  />
                  {/* Vignette bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-24"
                    style={{ background: 'linear-gradient(to top, #0d0d24 0%, transparent 100%)' }} />
                </div>
              </div>

              {/* Floating badges */}
              <div
                className="absolute -right-8 top-8 glass border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 animate-float"
                style={{ animationDelay: '0s' }}
              >
                <div className="w-9 h-9 rounded-xl bg-[#6c63ff]/15 flex items-center justify-center text-[#6c63ff]">
                  <i className="bx bx-code-alt text-lg" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Full Stack</div>
                  <div className="text-[10px] text-[#6b6b85]">Developer</div>
                </div>
              </div>

              <div
                className="absolute -left-10 bottom-24 glass border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 animate-float"
                style={{ animationDelay: '2s' }}
              >
                <div className="w-9 h-9 rounded-xl bg-[#00d4ff]/15 flex items-center justify-center text-[#00d4ff]">
                  <i className="bx bxs-graduation text-lg" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">UCSC</div>
                  <div className="text-[10px] text-[#6b6b85]">Undergraduate</div>
                </div>
              </div>

              <div
                className="absolute -right-6 bottom-10 glass border border-white/10 rounded-2xl px-4 py-3 flex items-center gap-3 animate-float"
                style={{ animationDelay: '4s' }}
              >
                <div className="w-9 h-9 rounded-xl bg-[#ff6b9d]/15 flex items-center justify-center text-[#ff6b9d]">
                  <i className="bx bx-layer text-lg" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">4+ Projects</div>
                  <div className="text-[10px] text-[#6b6b85]">Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[3px] text-[#6b6b85]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#6c63ff] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
