import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

import InstructorCard from "./Common/InstructorCard";
import instructorData from "./Common/instructorData";
// Images

export default function InstructorCarousel({ setEmblaApi }) {
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
          {instructorData.map((card, index) => (
            <div
              className="embla__slide flex-none w-full md:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-2rem)/5)] bg-white  text-[1.2rem]  mr-4 box-border"
              key={index}
            >
              <InstructorCard
                imgUrl={card.imgUrl}
                classes={card.classes}
                names={card.names}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
