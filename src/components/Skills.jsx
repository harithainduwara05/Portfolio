const skills = [
  { icon: 'bxl-react',      name: 'React',       level: 'Frontend',  color: '#61dafb' },
  { icon: 'bxl-javascript', name: 'JavaScript',   level: 'Language',  color: '#f7df1e' },
  { icon: 'bxl-python',     name: 'Python',       level: 'Backend',   color: '#3776ab' },
  { icon: 'bxl-java',       name: 'Java',         level: 'Language',  color: '#ed8b00' },
  { icon: 'bx-server',      name: 'FastAPI',      level: 'Backend',   color: '#00d4ff' },
  { icon: 'bxl-mongodb',    name: 'MongoDB',      level: 'Database',  color: '#47a248' },
  { icon: 'bx-code-curly',  name: 'C',            level: 'Language',  color: '#a8b9cc' },
  { icon: 'bx-code-alt',    name: 'C++',          level: 'Language',  color: '#00599c' },
]

const categories = [
  {
    title: 'Frontend Development',
    icon: 'bx-palette',
    color: '#6c63ff',
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Tailwind CSS'],
  },
  {
    title: 'Backend Development',
    icon: 'bx-server',
    color: '#00d4ff',
    tags: ['Python', 'FastAPI', 'Java', 'REST APIs', 'MongoDB', 'API Design'],
  },
  {
    title: 'Languages & Tools',
    icon: 'bx-wrench',
    color: '#ff6b9d',
    tags: ['C', 'C++', 'Git & GitHub', 'VS Code', 'Linux', 'Postman'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      {/* Subtle divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6c63ff]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block font-mono text-xs text-[#00d4ff] bg-[#00d4ff]/8 border border-[#00d4ff]/20 px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            My Skills
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gradient mb-4 tracking-tight">
            Technologies I Work With
          </h2>
          <p className="text-[#6b6b85] text-lg max-w-2xl mx-auto">
            I've honed my expertise across a diverse stack of languages, frameworks, and tools —
            always eager to learn what's next.
          </p>
        </div>

        {/* Skill cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 reveal">
          {skills.map((s) => (
            <div
              key={s.name}
              className="group relative glass border border-white/8 rounded-2xl p-6 text-center cursor-default hover:-translate-y-2 hover:border-[#6c63ff]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Top shine bar */}
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
              />
              {/* Icon */}
              <div
                className="w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-5deg]"
                style={{ background: `${s.color}15`, color: s.color }}
              >
                <i className={`bx ${s.icon}`} />
              </div>
              <div className="font-bold text-white text-sm">{s.name}</div>
              <div className="text-[10px] text-[#6b6b85] mt-1 uppercase tracking-wider">{s.level}</div>
            </div>
          ))}
        </div>

        {/* Category strips */}
        <div className="grid md:grid-cols-3 gap-5 reveal">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="glass border border-white/8 rounded-2xl p-6 hover:border-[#6c63ff]/20 transition-colors"
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                  style={{ background: `${cat.color}15`, color: cat.color }}
                >
                  <i className={`bx ${cat.icon}`} />
                </div>
                <span className="font-bold text-white text-sm">{cat.title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-lg border border-white/8 text-[#6b6b85] hover:text-white hover:border-[#6c63ff]/30 transition-all cursor-default"
                    style={{ background: `${cat.color}08` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
