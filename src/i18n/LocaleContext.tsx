import { createContext, ReactNode, useContext } from 'react'
import { Content, Locale, translations } from './translations'

const LocaleContext = createContext<Locale>('fr')

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
}

export function useLocale(): Locale {
  return useContext(LocaleContext)
}

export function useTranslations(): Content {
  return translations[useLocale()]
}
