import styles from './Hero.module.css'
import Button from '@/components/ui/Button'
import { useTranslations } from '@/i18n/LocaleContext'

export default function Hero() {
  const t = useTranslations()

  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.inner}>
          <h1 className={`${styles.heading} ${styles.animIn}`}>
            {t.hero.heading.line1}
            <br />
            {t.hero.heading.line2} <span className={styles.highlight}>{t.hero.heading.highlight}</span>
          </h1>

          <div className={`${styles.videoCol} ${styles.animIn} ${styles.delay1}`}>
            <div className={styles.videoCard}>
              <video
                className={styles.video}
                controls
                playsInline
                poster="/images/pitch-poster.jpg"
              >
                <source src="/videos/pitch.webm" type="video/webm" />
                <source src="/videos/pitch.mp4" type="video/mp4" />
              </video>
              <div className={styles.videoBadge}>
                <span className={styles.playDot} />
                {t.hero.videoBadge}
              </div>
            </div>
          </div>

          <div className={styles.textBody}>
            <p className={`${styles.subtitle} ${styles.animIn} ${styles.delay1}`}>{t.hero.subtitle}</p>

            <div className={`${styles.actions} ${styles.animIn} ${styles.delay2}`}>
              <Button href="#form-section" variant="primary" size="lg">
                {t.hero.ctaPrimary}
              </Button>
              <Button href="#comparison" variant="outline" size="lg">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>
        </div>

        <span className={styles.scrollCue} aria-hidden="true">
          <span className={styles.scrollCueDot} />
        </span>
      </div>
    </section>
  )
}
