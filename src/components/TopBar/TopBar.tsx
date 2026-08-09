import styles from './TopBar.module.css'
import { useTranslations } from '@/i18n/LocaleContext'

export default function TopBar() {
  const t = useTranslations()

  return (
    <div className={styles.bar} role="note">
      <div className={styles.track}>
        {t.topbar.items.map((item, idx) => (
          <span key={idx} className={styles.entry}>
            <span className={styles.item}>
              {idx === 0 && <span className={styles.dot} />}
              {item}
            </span>
            {idx < t.topbar.items.length - 1 && <span className={styles.sep}>•</span>}
          </span>
        ))}
      </div>
    </div>
  )
}
