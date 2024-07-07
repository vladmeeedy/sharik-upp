import React from 'react'
import styles from './NotFoundBlock.module.scss'
import { useTranslation } from 'react-i18next';

export const NotFoundBlock = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.root}>
      <h1>
        <span>🤔</span>
        <br />
        {t('notFoundBlockTitle')}
      </h1>
      <p className={styles.description}>{t('notFoundBlockDescription')}</p>
    </div>
  )
}
