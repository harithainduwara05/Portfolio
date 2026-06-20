import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-2xl text-white flex items-center justify-center text-xl
        bg-gradient-to-r from-[#6c63ff] to-[#00d4ff] glow-primary hover:-translate-y-1 hover:shadow-2xl
        transition-all duration-300 ${visible ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-75'}`}
    >
      <i className="bx bx-up-arrow-alt" />
    </button>
  )
}
