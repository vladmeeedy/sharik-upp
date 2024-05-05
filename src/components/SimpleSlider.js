import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="card">
          <img src="/imаges/AJ_balloon_1.svg" alt="" className="w-100"/>
        </div>
        <div className="card">
          <img src="/imаges/AJ_balloon_2.svg" alt=""className="w-100"/>
        </div>
        <div className="card">
          <img src="/imаges/AJ_balloon_4.svg" alt="" className="w-100"/>
        </div>        
      </Slider>
    </div>
  );
}

export default SimpleSlider;
