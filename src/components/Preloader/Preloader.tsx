import { useEffect, useState } from 'react'
import styles from './Preloader.module.css'

const DURATION_MS = 1700
const EXIT_MS = 550

export default function Preloader() {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    let raf = 0
    const start = performance.now()

    const tick = (now: number) => {
      const pct = Math.min(100, ((now - start) / DURATION_MS) * 100)
      setProgress(pct)
      if (pct < 100) {
        raf = requestAnimationFrame(tick)
      } else {
        setExiting(true)
        window.setTimeout(() => {
          setHidden(true)
          document.body.style.overflow = ''
        }, EXIT_MS)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      document.body.style.overflow = ''
    }
  }, [])

  if (hidden) return null

  return (
    <div className={`${styles.preloader} ${exiting ? styles.exiting : ''}`} aria-hidden="true">
      <img src="/images/logo-text-white.png" alt="" className={styles.logo} />
      <div className={styles.barTrack}>
        <div className={styles.barFill} style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}
