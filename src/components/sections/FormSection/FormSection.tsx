import { useState } from 'react'
import styles from './FormSection.module.css'
import Button from '@/components/ui/Button'
import SectionLabel from '@/components/ui/SectionLabel'
import { QualificationFormData } from '@/types'
import { useTranslations } from '@/i18n/LocaleContext'

/* Google Apps Script Web App URL (Deploy > New deployment > Web app) that appends rows to the leads sheet */
const SHEET_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbwraYTV1in_dbNYLvfnJmKY38pmISSrD8tfqDhbMcT0RFDU4btR0mPGJZs0V0sFWyDp-w/exec'

const emptyForm: QualificationFormData = {
  firstName: '',
  lastName: '',
  whatsapp: '',
  service: '',
}

export default function FormSection() {
  const t = useTranslations()
  const [form, setForm] = useState<QualificationFormData>(emptyForm)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(false)

    const serviceLabel = t.form.serviceOptions.find((s) => s.id === form.service)?.label ?? form.service

    try {
      await fetch(SHEET_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          whatsapp: form.whatsapp,
          service: serviceLabel,
        }),
      })

      // Fire only on a confirmed successful submission, not on click
      window.fbq?.('track', 'Lead', {
        content_name: serviceLabel,
        content_category: 'Qualification VIP',
      })

      setSent(true)
      setForm(emptyForm)
    } catch {
      setError(true)
    }
  }

  return (
    <section className={styles.section} id="form-section">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.textCol}>
            <SectionLabel variant="light">{t.form.label}</SectionLabel>
            <h2 className={styles.heading}>{t.form.heading}</h2>
            <p className={styles.sub}>{t.form.sub}</p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="firstName">{t.form.firstName.label}</label>
                <input
                  className={styles.input}
                  id="firstName" name="firstName" type="text"
                  placeholder={t.form.firstName.placeholder}
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="lastName">{t.form.lastName.label}</label>
                <input
                  className={styles.input}
                  id="lastName" name="lastName" type="text"
                  placeholder={t.form.lastName.placeholder}
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="whatsapp">{t.form.whatsapp.label}</label>
              <input
                className={styles.input}
                id="whatsapp" name="whatsapp" type="tel"
                placeholder={t.form.whatsapp.placeholder}
                value={form.whatsapp}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="service">{t.form.service.label}</label>
              <div className={styles.selectWrap}>
                <select
                  className={styles.select}
                  id="service" name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>{t.form.service.placeholder}</option>
                  {t.form.serviceOptions.map((s) => (
                    <option key={s.id} value={s.id}>{s.label}</option>
                  ))}
                </select>
                <svg
                  className={styles.selectIcon}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {sent && (
              <div className={styles.successMsg}>{t.form.success}</div>
            )}

            {error && (
              <div className={styles.errorMsg}>{t.form.error}</div>
            )}

            <Button type="submit" variant="vip" size="lg" fullWidth>
              {t.form.submit}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
