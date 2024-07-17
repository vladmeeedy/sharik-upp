import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GoHeartFill } from 'react-icons/go'
import LazyLoad from 'react-lazyload'
import { useTranslation } from 'react-i18next'

function SimpleSlider() {
  const { t } = useTranslation();
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
      <Slider {...settings}>
        <div className="card">
          <LazyLoad height={200} offset={100}>
            <img src="/data/imаges/slider-1.jpg" alt="" />
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
            <img src="/data/imаges/serca-pod-potolcom.jpg" alt="" />
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
              src="/data/imаges/Balloon-decor-for-events.jpg"
              alt=""
              className="w-100"
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
