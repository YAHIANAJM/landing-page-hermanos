import styles from './FloatingCTA.module.css'
import { NAV_REVEAL_THRESHOLD, useScrollPast } from '@/hooks/useScrollPast'
import { useTranslations } from '@/i18n/LocaleContext'

export default function FloatingCTA() {
  const hidden = useScrollPast(NAV_REVEAL_THRESHOLD)
  const t = useTranslations()

  return (
    <a
      href="#form-section"
      className={`${styles.cta} ${hidden ? styles.hidden : ''}`}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
    >
      <span className={styles.dot} aria-hidden="true" />
      {t.floatingCta}
      <span className={styles.arrow} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  )
}
