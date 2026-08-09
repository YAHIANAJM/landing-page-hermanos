import { useEffect, useState } from 'react'

/* Hidden by default; reveals on scroll/touch, hides again after a period of inactivity. */
export function useIdleReveal(hideAfterMs = 2200): boolean {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const reveal = () => {
      setVisible(true)
      clearTimeout(timer)
      timer = setTimeout(() => setVisible(false), hideAfterMs)
    }

    window.addEventListener('scroll', reveal, { passive: true })
    window.addEventListener('touchstart', reveal, { passive: true })
    window.addEventListener('touchmove', reveal, { passive: true })
    return () => {
      window.removeEventListener('scroll', reveal)
      window.removeEventListener('touchstart', reveal)
      window.removeEventListener('touchmove', reveal)
      clearTimeout(timer)
    }
  }, [hideAfterMs])

  return visible
}
