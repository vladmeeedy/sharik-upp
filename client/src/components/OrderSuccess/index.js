import React from 'react'
import styles from './OrderSuccess.module.scss'
import { useTranslation } from 'react-i18next';

export const OrderSuccess = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <h1>
        <span>🥰</span>
        <br />
        {t('orderSuccessTitle')}
      </h1>
      <p className={styles.description}>{t('orderSuccessDescription')}</p>
    </div>
  )
}