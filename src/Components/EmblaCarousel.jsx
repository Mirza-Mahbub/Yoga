import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

import SliderCard from "./Common/SliderCard";
import cardData from "./Common/cardData";
// Images

export default function EmblaCarousel({ setEmblaApi }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  useEffect(() => {
    if (emblaApi && setEmblaApi) {
      setEmblaApi(emblaApi);
    }
  }, [emblaApi, setEmblaApi]);

  return (
    <div className="carousel__wrapper">
      <div className="embla overflow-hidden w-full" ref={emblaRef}>
        <div className="embla__container flex">
          {cardData.map((card, index) => (
            <div
              className="embla__slide flex-none w-full md:w-[calc((100%-2rem)/3)] bg-[#eee] rounded-lg  text-center text-[1.2rem] shadow-[0_2px_6px_rgba(0,0,0,0.1)] mr-4 box-border"
              key={index}
            >
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
        </div>
      </div>
    </div>
  );
}
