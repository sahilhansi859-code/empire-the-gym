import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('gym-language') || 'en'
    }
    return 'en'
  })

  useEffect(() => {
    localStorage.setItem('gym-language', language)
    document.documentElement.lang = language === 'hi' ? 'hi' : 'en'
  }, [language])

  const toggleLanguage = useCallback(() => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en')
  }, [])

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t: language
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}