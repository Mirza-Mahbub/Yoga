import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderCard from "./Common/SliderCard";
import cardData from "./Common/cardData";

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
      {cardData.map((card, index) => (
        <div key={index}>
          <SliderCard
            imgUrl={card.imgUrl}
            classNum={card.classNum}
            students={card.students}
            instructor={card.instructor}
            course={card.course}
            cost={card.cost}
            yogaStyle={card.yogaStyle}
          />
        </div>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
