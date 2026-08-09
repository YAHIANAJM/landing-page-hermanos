import styles from './Footer.module.css'
import { useTranslations } from '@/i18n/LocaleContext'

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/tech_hermanos_org', icon: 'instagram' },
  { label: 'TikTok', href: 'https://tiktok.com/@techhermanos', icon: 'tiktok' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/tech-hermanos', icon: 'linkedin' },
] as const

const icons: Record<(typeof socialLinks)[number]['icon'], JSX.Element> = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
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

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#home" className={styles.logo}>
              <img src="/images/logo-text-white.png" alt="Tech Hermanos" className={styles.logoImg} />
            </a>
            <p className={styles.tagline}>{t.footer.tagline}</p>
            <div className={styles.social}>
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
            </div>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t.footer.navTitle}</h3>
            <ul className={styles.linkList}>
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t.footer.servicesTitle}</h3>
            <ul className={styles.linkList}>
              {t.form.serviceOptions.map((s) => (
                <li key={s.id}>
                  <a href="#form-section" className={styles.link}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>{t.footer.contactTitle}</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:contact@techermanos.org" className={styles.link}>
                  contact@techermanos.org
                </a>
              </li>
              <li>
                <a href="https://wa.me/212703285402" target="_blank" rel="noreferrer" className={styles.link}>
                  +212 7 03 28 54 02
                </a>
              </li>
              <li className={styles.muted}>{t.footer.address}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} {t.footer.copyrightSuffix}
          </p>
        </div>
      </div>
    </footer>
  )
}
