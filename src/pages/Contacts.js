import React from 'react'
import { PiPhoneCallBold } from 'react-icons/pi'
import { FaTelegram } from 'react-icons/fa'
import { FaViber } from 'react-icons/fa'


const Contacts = () => {
  return (
    <div className="container">
      <h1 className="content__title">Контакты</h1>
      <div className="container--contacts">
        <div className="contacts-info">
          <h3>Контакты</h3>
            <div>г. Киев, пр-т Петра Григоренка, 43</div>            
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
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="contacts-schedule">
          <h3>График Работы</h3>
          <div>ПН - ВС с 9:00 до 19:00</div>
        </div>
        <div className="contacts-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.7195222194227!2d30.637965576847684!3d50.39042689168336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c5dc698c9f01%3A0x6ada36efd6e7e5b0!2z0JrQstGW0YLQuCwg0L_QvtCy0ZbRgtGA0Y_QvdGWINC60YPQu9GM0LrQuCwg0L_QvtC00LDRgNGD0L3QutC4!5e0!3m2!1sru!2sua!4v1716370754273!5m2!1sru!2sua"
            width="900"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contacts
