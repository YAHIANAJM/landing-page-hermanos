import { useEffect } from 'react'

/* If the visitor hasn't scrolled/interacted within delayMs of landing, nudge them to the form. */
export function useAutoScrollToForm(targetId: string, delayMs = 5000): void {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const el = document.getElementById(targetId)
      if (!el) return

      const alreadyVisible = el.getBoundingClientRect().top <= window.innerHeight
      if (alreadyVisible) return

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
    }, delayMs)

    const cancel = () => window.clearTimeout(timer)

    window.addEventListener('scroll', cancel, { passive: true })
    window.addEventListener('wheel', cancel, { passive: true })
    window.addEventListener('touchmove', cancel, { passive: true })
    window.addEventListener('keydown', cancel)

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('scroll', cancel)
      window.removeEventListener('wheel', cancel)
      window.removeEventListener('touchmove', cancel)
      window.removeEventListener('keydown', cancel)
    }
  }, [targetId, delayMs])
}
