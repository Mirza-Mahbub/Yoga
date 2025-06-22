import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import yoga3 from "../assets/Images/10benefitsofyoga.jpg";
import yoga4 from "../assets/Images/iStock-1489516412-1920x1280.jpg";
import yoga2 from "../assets/Images/photo-1544367567-0f2fcb009e0b.jpeg";
import yoga5 from "../assets/Images/what-is-yoga.avif";
import yoga1 from "../assets/Images/yoga-before-or-after-workout-02.webp";
import SliderCard from "./Common/SliderCard";

const SimpleSlider = () => {
  const settings = {
    dots: true, // Shows navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Transition speed
    slidesToShow: 1, // How many slides at once
    slidesToScroll: 1, // Slides per scroll
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Delay between slides
    arrows: true, // Show left/right arrows
  };

  return (
    <Slider {...settings}>
      <SliderCard
        imgUrl={yoga1}
        classNum="7"
        students="53"
        instructor="Pranayama"
        course="Vinasaya Yoga"
      />
      <SliderCard
        imgUrl={yoga2}
        classNum="7"
        students="53"
        instructor="Pranayama"
        course="Vinasaya Yoga"
      />
      <SliderCard
        imgUrl={yoga3}
        classNum="7"
        students="53"
        instructor="Pranayama"
        course="Vinasaya Yoga"
      />
      <SliderCard
        imgUrl={yoga4}
        classNum="7"
        students="53"
        instructor="Pranayama"
        course="Vinasaya Yoga"
      />
      <SliderCard
        imgUrl={yoga5}
        classNum="7"
        students="53"
        instructor="Pranayama"
        course="Vinasaya Yoga"
      />
    </Slider>
  );
};

export default SimpleSlider;
