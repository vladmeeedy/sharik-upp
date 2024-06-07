import React from 'react'
import Logo from './image/Logo'
import Balloons from './image/Balloons'
import { NavLink } from 'react-router-dom'
import { PiPhoneCallBold } from 'react-icons/pi'
import { FaTelegram } from 'react-icons/fa'
import { FaViber } from 'react-icons/fa'

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
          <NavLink to="o-nas">О нас</NavLink>
          <NavLink to="garantiya-i-vozvrat">Гарантия и возврат</NavLink>
          <NavLink to="dogovor-oferty">Договор оферты</NavLink>
          <NavLink to="contact-us">Контакты</NavLink>
          <div className="contacts">
            <a className="phoneNumber" href="tel:+380980424818">
              <PiPhoneCallBold className="phoneIcon" />
              <p>(098) 042-48-18</p>
            </a>
            <a
              className="viber"
              href="viber://forward?text=Ваше сообщение здесь"
            >
              <FaViber className="viberIcon" />
              <p>viber</p>
            </a>
            <a className="telegram" href="https://t.me/vladme777">
              <FaTelegram className="telegramIcon" />
              <p>telegram</p>
            </a>
          </div>
        </div>

        <Balloons />
      </div>
    </div>
  )
}

export default Footer
