import React from 'react'
import styles from './OrderSuccess.module.scss'

export const OrderSuccess = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>🥰</span>
        <br />
        Спасибо за заказ!
      </h1>
      <p className={styles.description}>Мы свяжемся с вами для уточнения всех подробностей</p>
    </div>
  )
}