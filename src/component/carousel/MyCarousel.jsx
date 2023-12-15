import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import logo from '../images/Rectangle 1698.png'
import './MyCarouselStyle.css'

function MyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };
  return (
    <div className="containerSlider">
    <Slider {...settings} className="slider">
      <div>
        <img src = {logo} alt = '' />
        <div>
        <h1>Дмитрий Шпак</h1>
        </div>
      </div>
      <div >
        <img src = {logo} alt = '' />
        <h1>Борис Карманов</h1>
      </div>
      <div>
        <img src = {logo} alt = '' />
        <div>
        <h1>Сергей Чан</h1>
        </div>
      </div>
      <div >
        <img src = {logo} alt = '' />
        <h1>Анатолий Гудзенко</h1>
      </div>
    </Slider>
  </div>
  )
}

export default MyCarousel