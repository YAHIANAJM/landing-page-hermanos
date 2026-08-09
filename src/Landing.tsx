import { useEffect } from 'react'
import { useAutoScrollToForm } from '@/hooks/useAutoScrollToForm'
import Preloader from '@/components/Preloader/Preloader'
import TopBar from '@/components/TopBar/TopBar'
import Navbar from '@/components/Navbar/Navbar'
import BottomNav from '@/components/BottomNav/BottomNav'
import FloatingCTA from '@/components/FloatingCTA/FloatingCTA'
import Hero from '@/components/sections/Hero/Hero'
import Comparison from '@/components/sections/Comparison/Comparison'
import Portfolio from '@/components/sections/Portfolio/Portfolio'
import FormSection from '@/components/sections/FormSection/FormSection'
import Footer from '@/components/Footer/Footer'
import { LocaleProvider } from '@/i18n/LocaleContext'
import { Locale, translations } from '@/i18n/translations'

export default function Landing({ locale }: { locale: Locale }) {
  const t = translations[locale]

  useAutoScrollToForm('form-section', 5000)

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
  }, [locale, t])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a')
      const href = anchor?.getAttribute('href')
      if (!href?.startsWith('#')) return
      e.preventDefault()
      const el = document.getElementById(href.slice(1))
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    document.addEventListener('click', handler, true)
    return () => document.removeEventListener('click', handler, true)
  }, [])

  return (
    <LocaleProvider locale={locale}>
      <Preloader />
      <TopBar />
      <Navbar />
      <FloatingCTA />
      <main>
        <Hero />
        <Comparison />
        <Portfolio />
        <FormSection />
      </main>
      <Footer />
      <BottomNav />
    </LocaleProvider>
  )
}
