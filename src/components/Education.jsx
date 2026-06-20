const timeline = [
  {
    period: '2024 — Present',
    degree: 'BSc (Hons) in Information Systems',
    institution: 'University of Colombo School of Computing (UCSC)',
    icon: 'bxs-graduation',
    color: '#6c63ff',
    desc: 'Pursuing an undergraduate degree in Information Systems under the Technology stream at UCSC. Gaining hands-on experience across Science for Technology (SFT), Engineering Technology (ET), and Information & Communication Technology (ICT) — covering software engineering, databases, networking, and full-stack web development.',
    tags: ['Technology Stream', 'Science for Technology', 'ET', 'ICT', 'Software Engineering', 'Web Dev', 'Databases'],
  },
  {
    period: 'Before 2024',
    degree: 'G.C.E. Advanced Level — Technology Stream',
    institution: 'Sri Lanka',
    icon: 'bxs-school',
    color: '#00d4ff',
    desc: 'Completed Advanced Level examination under the Technology stream, covering Science for Technology (SFT), Engineering Technology (ET), and Information & Communication Technology (ICT) — building a strong technical foundation that led to pursuing an Information Systems degree at UCSC.',
    tags: ['Technology Stream', 'Science for Technology (SFT)', 'Engineering Technology (ET)', 'ICT'],
  },
]

export default function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6c63ff]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block font-mono text-xs text-[#00d4ff] bg-[#00d4ff]/8 border border-[#00d4ff]/20 px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Education
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gradient mb-4 tracking-tight">
            Academic Background
          </h2>
          <p className="text-[#6b6b85] text-lg max-w-2xl mx-auto">
            My academic journey has been the foundation of my technical expertise and passion for innovation.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-[#6c63ff] via-[#00d4ff] to-transparent" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className={`relative pl-16 reveal`} style={{ transitionDelay: `${i * 150}ms` }}>
                {/* Dot */}
                <div
                  className="absolute left-[17px] top-7 w-5 h-5 rounded-full border-2 border-[#6c63ff] bg-[#080812] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#6c63ff]"
                  style={{ boxShadow: `0 0 12px ${item.color}60` }}
                />

                {/* Card */}
                <div className="group glass border border-white/8 rounded-3xl p-8 hover:border-[#6c63ff]/30 hover:-translate-y-1 transition-all duration-300">
                  <div className="flex flex-wrap items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${item.color}15`, color: item.color }}
                    >
                      <i className={`bx ${item.icon}`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-mono text-xs text-[#00d4ff] mb-1 uppercase tracking-wider">
                        {item.period}
                      </div>
                      <h3 className="text-lg font-black text-white">{item.degree}</h3>
                      <div
                        className="text-sm font-semibold mt-1 flex items-center gap-1.5"
                        style={{ color: item.color }}
                      >
                        <i className="bx bx-map-pin text-xs" /> {item.institution}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[#6b6b85] leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-lg border border-white/8 text-[#6b6b85]"
                        style={{ background: `${item.color}08` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
