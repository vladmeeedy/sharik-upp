import React from 'react'
import Logo from './image/Logo'
import Balloons from './image/Balloons'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="container__logo">
          <Logo />
          <h1>SHARIK-UPP</h1>
          <p>© Copyright - Все права защищены. 2024</p>
        </div>
        <div className="container__info">
          <NavLink>О нас</NavLink>
          <NavLink>Гарантия и возврат</NavLink>
          <NavLink>Договор оферты</NavLink>
          <NavLink>Контакты</NavLink>
        </div>

        <Balloons />
      </div>
    </div>
  )
}

export default Footer
