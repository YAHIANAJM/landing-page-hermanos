import styles from './BottomNav.module.css'
import { useTranslations } from '@/i18n/LocaleContext'
import { useIdleReveal } from '@/hooks/useIdleReveal'

export default function BottomNav() {
  const t = useTranslations()
  const visible = useIdleReveal(2200)

  return (
    <nav className={`${styles.bar} ${visible ? styles.visible : ''}`} aria-label="Navigation">
      {t.nav.links.map((link) => (
        <a key={link.href} href={link.href} className={styles.link}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}
