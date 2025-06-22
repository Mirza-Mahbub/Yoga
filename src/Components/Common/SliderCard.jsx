import Idea from "../SVG/Idea";
import Lesson from "../SVG/Lesson";
import Student from "../SVG/Student";
export default function SliderCard({
  classNum,
  students,
  instructor,
  course,
  imgUrl,
  yogaStyle,
  cost,
}) {
  return (
    <div className="relative flex flex-col w-full">
      <div className="firstDiv relative group w-full h-96 overflow-hidden rounded-lg">
        <img
          src={imgUrl}
          alt="Slide"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 "
        />
        <div className="absolute inset-0 bg-white  bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-xl  ">
          <div className="flex flex-col gap-5">
            <div className="flex gap-2.5">
              <Lesson />
              <h3 className="text-[#5f857d]">{classNum} Lesson</h3>
            </div>
            <div className="flex gap-2.5">
              <Student />
              <h3 className="text-[#5f857d]">{students} Students Enrolled</h3>
            </div>
            <div className="flex gap-2.5">
              <Idea />
              <h3 className="text-[#5f857d]">{course}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="secondDiv absolute left-0 right-0 -bottom-10 px-10 z-10">
        <div className="bg-white p-5 shadow-lg z-10">
          <h3>{instructor}</h3>
          <h3>{yogaStyle}</h3>
          <h3>{cost}</h3>
        </div>
      </div>
    </div>
  );
}
