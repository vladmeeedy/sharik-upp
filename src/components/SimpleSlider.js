import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoHeartFill } from "react-icons/go";



function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card">
          <img src="/data/imаges/slider-1.jpg" alt=""/>
          <p>Детские впечатления<span><GoHeartFill/></span><span><GoHeartFill/></span><span><GoHeartFill/></span></p>
        </div>
        <div className="card">
          <img src="/data/imаges/serca-pod-potolcom.jpg" alt=""/>
          <p>Романтические моменты<span><GoHeartFill/></span><span><GoHeartFill/></span><span><GoHeartFill/></span></p>
        </div>
        <div className="card">
          <img src="/data/imаges/Balloon-decor-for-events.jpg" alt="" className="w-100"/>
          <p>Праздничные события<span><GoHeartFill/></span><span><GoHeartFill/></span><span><GoHeartFill/></span></p>
        </div>        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
