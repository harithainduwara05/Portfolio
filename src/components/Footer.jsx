const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="text-xl font-black tracking-tight">
            <span className="text-gradient">Haritha</span>
            <span className="text-[#6b6b85]">.dev</span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                className="text-xs text-[#6b6b85] hover:text-white transition-colors uppercase tracking-wider"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-[#6b6b85]">
            Designed & Built with{' '}
            <span className="text-[#ff6b9d] animate-pulse">❤️</span>{' '}
            by Haritha Induwara © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
