import React from 'react'
import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.scss'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const locales = {
    ru: { title: 'RU' },
    uk: { title: 'UK' },
  }

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className={styles.root}>
      <ul>
        {Object.keys(locales).map((Locale) => (
          <li key={Locale}>
            <button
              style={{
                fontWeight:
                  i18n.resolvedLanguage === Locale ? 'bold' : 'normal',
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(Locale)}
            >
              {locales[Locale].title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LanguageSwitcher
