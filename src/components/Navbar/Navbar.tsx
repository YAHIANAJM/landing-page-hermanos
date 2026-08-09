import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'
import { SocialLink } from '@/types'
import { NAV_REVEAL_THRESHOLD, useScrollPast } from '@/hooks/useScrollPast'
import { useTranslations } from '@/i18n/LocaleContext'

/* Swap hrefs with the real Tech Hermanos social profiles */
const socialLinks: SocialLink[] = [
  { label: 'Instagram', href: 'https://instagram.com/techhermanos', icon: 'instagram' },
  { label: 'TikTok', href: 'https://tiktok.com/@techhermanos', icon: 'tiktok' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/techhermanos', icon: 'linkedin' },
]

const icons: Record<SocialLink['icon'], JSX.Element> = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.6-1.6h1.7V3.2C16.5 3.1 15.4 3 14.2 3c-2.6 0-4.4 1.6-4.4 4.5v2.3H7.1v3.2h2.7v8h3.7z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.9 8.6H3.5V20h3.4V8.6ZM5.2 4c-1.2 0-2 .8-2 1.9 0 1 .8 1.9 2 1.9 1.2 0 2-.8 2-1.9C7.2 4.8 6.4 4 5.2 4ZM20.5 20h-3.4v-6c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H9.8s.1-10.5 0-11.4h3.4v1.6c.4-.7 1.3-1.7 3.1-1.7 2.3 0 4.1 1.5 4.1 4.7V20Z" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.6 3h2.6c.2 1.5 1.1 3 2.4 3.8.9.6 2 .9 3.1 1v2.7c-1.5 0-3-.4-4.3-1.2v6.1c0 3.4-2.7 5.9-6 5.9s-6-2.6-6-5.9 2.7-5.9 6-5.9c.3 0 .6 0 .9.1v2.8c-.3-.1-.6-.2-.9-.2-1.6 0-2.9 1.3-2.9 3.1s1.3 3.1 2.9 3.1 3-1.2 3-3.1V3Z" />
    </svg>
  ),
}

export default function Navbar() {
  const visible = useScrollPast(NAV_REVEAL_THRESHOLD)
  const t = useTranslations()
  const { pathname } = useLocation()
  const isAr = pathname.startsWith('/ar')

  return (
    <header className={`${styles.header} ${visible ? styles.visible : ''}`}>
      <div className={styles.topRow}>
        <div className={styles.leftGroup}>
          <nav className={styles.social} aria-label="Réseaux sociaux">
            {socialLinks.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className={styles.socialLink}
              >
                {icons[s.icon]}
              </a>
            ))}
          </nav>

          <div className={styles.langSwitcher} aria-label="Langue">
            <Link to="/" className={!isAr ? styles.langActive : styles.langLink}>FR</Link>
            <span className={styles.langSep}>/</span>
            <Link to="/ar" className={isAr ? styles.langActive : styles.langLink}>AR</Link>
          </div>
        </div>

        <a href="#home" className={styles.logo}>
          <img src="/images/logo-text.png" alt="Tech Hermanos" className={styles.logoImg} />
        </a>

        <a href="#form-section" className={styles.cta}>
          <span>{t.nav.cta}</span>
          <span className={styles.ctaArrow} aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>

      <nav className={styles.subRow} aria-label="Navigation">
        {t.nav.links.map((link) => (
          <a key={link.href} href={link.href} className={styles.subLink}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
