import { useState } from "react";
import Button from "./Common/Button";
import Heading from "./Common/Heading";
import Carousel from "./EmblaCarousel";
import SimpleSlider from "./SimpleSlider";
import ButtonRightArrow from "./SVG/ButtonRightArrow";
import LeftArrow from "./SVG/LeftArrow";
import RightArrow from "./SVG/RightArrow";

export default function Pricing() {
  const [embla, setEmbla] = useState(null);

  const scrollPrev = () => embla && embla.scrollPrev();
  const scrollNext = () => embla && embla.scrollNext();

  return (
    <div>
      <div className=" flex flex-col gap-5 w-full lg:w-4xl xl:w-6xl 2xl:w-7xl mx-auto py-16 ">
        <Heading text="Popular Online Classes" styling="mt-10" />
        <div className="flex justify-between">
          <p className="text-[#878787] w-3xl ">
            A meditative means of discovering dysfunctional perception and
            cognition, as well as overcoming it to release any suffering, find
            inner peace and salvation.
          </p>
          {/* Carousel Button */}
          <div className="flex gap-2.5">
            <button onClick={scrollPrev}>
              <LeftArrow />
            </button>
            <button onClick={scrollNext}>
              <RightArrow />
            </button>
          </div>
        </div>
        <Button styling="bg-[#6f948d] mt-10 flex items-center  gap-2 z-10">
          Browse All Classes
          <ButtonRightArrow />
        </Button>
      </div>
      <div className="flex flex-col gap-10  -mt-[85px]">
        <Carousel setEmblaApi={setEmbla} />
        <SimpleSlider />
      </div>
    </div>
  );
}
