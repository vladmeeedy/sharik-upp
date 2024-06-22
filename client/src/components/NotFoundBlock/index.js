import React from 'react'
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🤔</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.description}>к сожалению даная страница отсутствует</p>
    </div>
  )
}
