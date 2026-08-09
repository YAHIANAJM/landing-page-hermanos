import styles from './Comparison.module.css'
import SectionLabel from '@/components/ui/SectionLabel'
import { useTranslations } from '@/i18n/LocaleContext'
import { useCountUp } from '@/hooks/useCountUp'

export default function Comparison() {
  const t = useTranslations()
  const { value, ref } = useCountUp<HTMLDivElement>(t.comparison.stat.number)

  return (
    <section className={styles.section} id="comparison">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.statBlock} ref={ref}>
            <SectionLabel variant="light">{t.comparison.stat.label}</SectionLabel>
            <div className={styles.statNumber}>
              {value}
              <span className={styles.statSuffix}>{t.comparison.stat.suffix}</span>
            </div>
            <p className={styles.statDesc}>{t.comparison.stat.description}</p>
          </div>

          <div className={styles.content}>
            <div className={styles.header}>
              <SectionLabel variant="light">{t.comparison.label}</SectionLabel>
              <h2 className={styles.heading}>{t.comparison.heading}</h2>
            </div>

            <div className={styles.grid}>
              <div className={`${styles.card} ${styles.without}`}>
                <h3 className={styles.cardTitle}>{t.comparison.withoutTitle}</h3>
                <ul className={styles.list}>
                  {t.comparison.without.map((text, i) => (
                    <li key={i} className={styles.item}>
                      <span className={styles.iconNo}>✕</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.card} ${styles.withUs}`}>
                <span className={styles.vipTag}>{t.comparison.vipTag}</span>
                <h3 className={styles.cardTitle}>{t.comparison.withTitle}</h3>
                <ul className={styles.list}>
                  {t.comparison.withUs.map((text, i) => (
                    <li key={i} className={styles.item}>
                      <span className={styles.iconYes}>✓</span>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
