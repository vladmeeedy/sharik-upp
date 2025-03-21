import React from 'react'
import Logo from './image/Logo'
import Balloons from './image/Balloons'
import { NavLink } from 'react-router-dom'
import { PiPhoneCallBold } from 'react-icons/pi'
import { FaTelegram } from 'react-icons/fa'
import { FaViber } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazyload'
import { FaSquareInstagram } from 'react-icons/fa6'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <div className="footer">
      <div className="container">
        <div className="container__logo">
          <Logo />
          <div>SHARIK-UPP</div>
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
          <a className="viber" href="viber://chat?number=380965520050">
            <FaViber className="viberIcon" />
            <p>viber</p>
          </a>
          <a className="telegram" href="https://t.me/sharikUpp">
            <FaTelegram className="telegramIcon" />
            <p>telegram</p>
          </a>
          <a className="instagram" href="https://www.instagram.com/sharik_upp/">
            <FaSquareInstagram className="instagramIcon" />
            <p>instagram</p>
          </a>
        </div>
        <LazyLoad height={200} offset={100}>
          <Balloons />
        </LazyLoad>
      </div>
    </div>
  )
}

export default Footer
