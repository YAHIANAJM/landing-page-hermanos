import styles from './BottomNav.module.css'
import { useTranslations } from '@/i18n/LocaleContext'
import { useIdleReveal } from '@/hooks/useIdleReveal'

const icons: Record<string, JSX.Element> = {
  '#home': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 11.5 12 4l8 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10v9h12v-9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 19v-5h4v5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  '#comparison': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 4v13a2 2 0 0 0 2 2h11" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 15l3-3 3 2 4-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  '#portfolio': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="7.5" width="17" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 12.5h17" strokeLinecap="round" />
    </svg>
  ),
  '#form-section': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path
        d="M12 3.5l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  '#footer': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 6.5 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} className={styles.link} aria-label={label}>
      <span className={styles.icon} aria-hidden="true">
        {icons[href]}
      </span>
    </a>
  )
}

export default function BottomNav() {
  const t = useTranslations()
  const visible = useIdleReveal(2200)
  const sideLinks = [
    ...t.nav.links.filter((link) => link.href !== '#form-section'),
    { href: '#footer', label: t.footer.contactTitle },
  ]
  const ctaLink = t.nav.links.find((link) => link.href === '#form-section')
  const splitAt = Math.ceil(sideLinks.length / 2)
  const leftLinks = sideLinks.slice(0, splitAt)
  const rightLinks = sideLinks.slice(splitAt)

  return (
    <nav className={`${styles.bar} ${visible ? styles.visible : ''}`} aria-label="Navigation">
      <div className={styles.sideGroup}>
        {leftLinks.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>

      {ctaLink && (
        <a href={ctaLink.href} className={styles.fab} aria-label={ctaLink.label}>
          <span className={styles.fabIcon} aria-hidden="true">
            {icons[ctaLink.href]}
          </span>
        </a>
      )}

      <div className={styles.sideGroup}>
        {rightLinks.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} />
        ))}
      </div>
    </nav>
  )
}
