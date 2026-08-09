import styles from './Hero.module.css'
import Button from '@/components/ui/Button'
import { useTranslations } from '@/i18n/LocaleContext'

export default function Hero() {
  const t = useTranslations()

  return (
    <section className={styles.hero} id="home">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.badge}>
              <span className={styles.dot} />
              {t.hero.badge}
            </div>

            <h1 className={styles.heading}>
              {t.hero.heading.line1}
              <br />
              {t.hero.heading.line2} <span className={styles.highlight}>{t.hero.heading.highlight}</span>
            </h1>

            <p className={styles.subtitle}>{t.hero.subtitle}</p>

            <div className={styles.actions}>
              <Button href="#form-section" variant="primary" size="lg">
                {t.hero.ctaPrimary}
              </Button>
              <Button href="#comparison" variant="outline" size="lg">
                {t.hero.ctaSecondary}
              </Button>
            </div>
          </div>

          <div className={styles.videoCol}>
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
        </div>
      </div>
    </section>
  )
}
