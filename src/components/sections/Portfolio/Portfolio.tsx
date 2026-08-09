import { useEffect, useRef, useState } from 'react'
import styles from './Portfolio.module.css'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslations } from '@/i18n/LocaleContext'

export default function Portfolio() {
  const t = useTranslations()
  const trackRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [index, setIndex] = useState(0)
  const lastIndex = t.portfolio.items.length - 1

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let raf = 0
    const updateIndex = () => {
      const isRtl = getComputedStyle(track).direction === 'rtl'
      const trackRect = track.getBoundingClientRect()

      // Once scrolled as far as it goes, the last card can never reach the
      // "start" edge (there's no more track left to push it there), so the
      // closest-to-start search below would never land on it. Detect the
      // scroll ceiling directly and pin the last dot in that case.
      const lastCard = cardRefs.current[cardRefs.current.length - 1]
      if (lastCard) {
        const lastRect = lastCard.getBoundingClientRect()
        const atEnd = isRtl
          ? lastRect.left <= trackRect.left + 1
          : lastRect.right >= trackRect.right - 1
        if (atEnd) {
          setIndex(cardRefs.current.length - 1)
          return
        }
      }

      let closest = 0
      let closestDist = Infinity
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const cardRect = card.getBoundingClientRect()
        const dist = isRtl
          ? Math.abs(trackRect.right - cardRect.right)
          : Math.abs(cardRect.left - trackRect.left)
        if (dist < closestDist) {
          closestDist = dist
          closest = i
        }
      })
      setIndex(closest)
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(updateIndex)
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    updateIndex()
    return () => {
      track.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [t.portfolio.items.length])

  const goTo = (i: number) => {
    const clamped = Math.max(0, Math.min(lastIndex, i))
    cardRefs.current[clamped]?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' })
  }

  return (
    <section className={styles.section} id="portfolio" data-nav-theme="dark">
      <div className="container">
        <div className={styles.header}>
          <div>
            <SectionLabel variant="dark">{t.portfolio.label}</SectionLabel>
            <h2 className={styles.heading}>{t.portfolio.heading}</h2>
            <p className={styles.sub}>{t.portfolio.sub}</p>
          </div>

          <div className={styles.arrows}>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              aria-label={t.portfolio.prevLabel}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.arrowBtn}
              onClick={() => goTo(index + 1)}
              disabled={index === lastIndex}
              aria-label={t.portfolio.nextLabel}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.track} ref={trackRef}>
          {t.portfolio.items.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => { cardRefs.current[i] = el }}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <img src={item.imageUrl} alt={item.title} loading="lazy" />
                <span className={styles.category}>{item.category}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
                <div className={styles.tags}>
                  {item.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <audio className={styles.audio} controls preload="none" src={item.audioUrl}>
                  {t.portfolio.audioFallback}
                </audio>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {t.portfolio.items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
