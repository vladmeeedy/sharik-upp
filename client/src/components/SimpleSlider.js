import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GoHeartFill } from 'react-icons/go'
import LazyLoad from 'react-lazyload'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'

function SimpleSlider() {
  const { t } = useTranslation()
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  }
  return (
    <div className="slider-container">
      <Helmet>
        <link rel="preload" href="/data/imаges/slider-12.jpg" as="image" />
        <link
          rel="preload"
          href="/data/imаges/serca-pod-potolcom2.jpg"
          as="image"
        />
        <link
          rel="preload"
          href="/data/imаges/Balloon-decor-for-events2.jpg"
          as="image"
        />
      </Helmet>
      <Slider {...settings}>
        <div className="card">
          <LazyLoad height={200} offset={100}>
            <img
              src="/data/imаges/slider-12.jpg"
              title={t('slider.childrenExperiences')}
              alt={t('slider.childrenExperiences')}
              loading="lazy"
            />
          </LazyLoad>

          <p>
            {t('slider.childrenExperiences')}
            <span>
              <GoHeartFill />
            </span>
            <span>
              <GoHeartFill />
            </span>
            <span>
              <GoHeartFill />
            </span>
          </p>
        </div>
        <div className="card">
          <LazyLoad height={200} offset={100}>
            <img
              src="/data/imаges/serca-pod-potolcom2.jpg"
              title={t('slider.romanticMoments')}
              alt={t('slider.romanticMoments')}
              loading="lazy"
            />
          </LazyLoad>

          <p>
            {t('slider.romanticMoments')}
            <span>
              <GoHeartFill />
            </span>
            <span>
              <GoHeartFill />
            </span>
            <span>
              <GoHeartFill />
            </span>
          </p>
        </div>
        <div className="card">
          <LazyLoad height={200} offset={100}>
            <img
              src="/data/imаges/Balloon-decor-for-events2.jpg"
              title={t('slider.holidayEvents')}
              alt={t('slider.holidayEvents')}
              loading="lazy"
            />
          </LazyLoad>

          <p>
            {t('slider.holidayEvents')}
            <span>
              <GoHeartFill />
            </span>
            <span>
              <GoHeartFill />
            </span>
            <span>
              <GoHeartFill />
            </span>
          </p>
        </div>
      </Slider>
    </div>
  )
}

export default SimpleSlider
