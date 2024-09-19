import React from 'react'
import Logo from './image/Logo'
import Balloons from './image/Balloons'
import { NavLink } from 'react-router-dom'
import { PiPhoneCallBold } from 'react-icons/pi'
import { FaTelegram } from 'react-icons/fa'
import { FaViber } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="footer">
      <div className="container">
        <div className="container__logo">
          <Logo />
          <h1>SHARIK-UPP</h1>
          <p>© Copyright - {t('footerCopiright')} 2024</p>
        </div>
        <div className="container__info">
          <NavLink to="o-nas">{t('footerAboutUs')}</NavLink>
          <NavLink to="garantiya-i-vozvrat">{t('footerGuarantee')}</NavLink>
          <NavLink to="dogovor-oferty">{t('footerContractOfer')}</NavLink>
          <NavLink to="contact-us">{t('footerContactUs')}</NavLink>
        </div>
        <div className="contacts">
          <a className="phoneNumber" href="tel:+380965520050">
            <PiPhoneCallBold className="phoneIcon" />
            <p>(096) 552-00-50</p>
          </a>
          <a className="viber" href="viber://forward?text=Ваше сообщение здесь">
            <FaViber className="viberIcon" />
            <p>viber</p>
          </a>
          <a className="telegram" href="https://t.me/sharikUpp">
            <FaTelegram className="telegramIcon" />
            <p>telegram</p>
          </a>
        </div>

        <Balloons />
      </div>
    </div>
  )
}

export default Footer
