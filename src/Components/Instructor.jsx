import InstructorCarousel from "./InstructorCursor";

import { useState } from "react";
import Heading from "./Common/Heading";
import LeftArrow from "./SVG/LeftArrow";
import RightArrow from "./SVG/RightArrow";

export default function Instructor() {
  const [embla, setEmbla] = useState(null);

  const scrollPrev = () => embla && embla.scrollPrev();
  const scrollNext = () => embla && embla.scrollNext();

  return (
    <div>
      <div className=" flex flex-col gap-5 w-full lg:w-4xl xl:w-6xl 2xl:w-7xl mx-auto py-16 ">
        <Heading text="Our Instructors" styling="mt-10" />
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
      </div>
      <div className="flex flex-col gap-10  ">
        <InstructorCarousel setEmblaApi={setEmbla} />
      </div>
    </div>
  );
}
