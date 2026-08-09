import { useEffect, useState } from 'react'

/* Scroll distance at which the navbar reveals — shared with FloatingCTA so both
   toggle in lockstep instead of one lagging behind the other. */
export const NAV_REVEAL_THRESHOLD = 80

export function useScrollPast(threshold: number): boolean {
  const [past, setPast] = useState(false)

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return past
}
