import React, { useState, useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import { FaTelegram, FaViber } from 'react-icons/fa'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [hideIcons, setHideIcons] = useState(false)

  // Функция для прокрутки страницы вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolledFromBottom =
        document.documentElement.scrollHeight -
        window.innerHeight -
        window.pageYOffset

      // Показать/скрыть кнопку прокрутки вверх
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Скрывать иконки, если до конца страницы 320px или меньше
      if (scrolledFromBottom <= 320) {
        setHideIcons(true)
      } else {
        setHideIcons(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    // Удаляем обработчик событий при размонтировании компонента
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className="scroll-to-top-container">
      {/* Иконки Viber и Telegram, скрываются при прокрутке 320px с конца страницы */}
      {!hideIcons && (
        <>
          <a className="viber" href="viber://chat?number=380965520050">
            <FaViber className="viberIcon" />
          </a>
          <a className="telegram" href="https://t.me/sharikUpp">
            <FaTelegram className="telegramIcon" />
          </a>
        </>
      )}

      {/* Кнопка для прокрутки вверх */}
      <div
        className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <IoIosArrowUp />
      </div>
    </div>
  )
}

export default ScrollToTopButton
