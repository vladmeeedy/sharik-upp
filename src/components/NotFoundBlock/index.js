import React from 'react'
import styles from './NotFoundBlock.module.scss'

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🤔</span>
        <br />
        Нічого не знайдено
      </h1>
      <p className={styles.description}>нажаль дана сторінка відсутня</p>
    </div>
  )
}
