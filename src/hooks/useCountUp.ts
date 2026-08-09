import { useEffect, useRef, useState } from 'react'

/* Counts 0 → target once the ref'd element scrolls into view. */
export function useCountUp<T extends HTMLElement = HTMLDivElement>(target: number, duration = 1400) {
  const [value, setValue] = useState(0)
  const ref = useRef<T>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min(1, (now - start) / duration)
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return { value, ref }
}
