import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = document.querySelectorAll('section[id]')
      sections.forEach((s) => {
        const top = s.offsetTop - 120
        const bottom = top + s.offsetHeight
        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(s.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#080812]/80 backdrop-blur-2xl border-b border-white/5 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleNav(e, '#hero')}
          className="text-xl font-black tracking-tight"
        >
          <span className="text-gradient">Haritha</span>
          <span className="text-[#6b6b85]">.dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className={`text-sm font-medium transition-colors duration-200 relative group ${
                active === l.href.slice(1)
                  ? 'text-[#6c63ff]'
                  : 'text-[#6b6b85] hover:text-white'
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] transition-all duration-300 ${
                  active === l.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="px-5 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] glow-primary hover:-translate-y-0.5 transition-transform duration-200"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0f0f1a]/95 backdrop-blur-2xl border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="text-sm font-medium text-[#6b6b85] hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="px-5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] text-center"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  )
}
