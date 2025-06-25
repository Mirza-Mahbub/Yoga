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
    <div className=" flex pb-10 flex-col w-full">
      <div className="firstDiv relative group w-full h-96 overflow-hidden ">
        <img
          src={imgUrl}
          alt="Slide"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 "
        />
        <div className="absolute inset-0 bg-white  bg-opacity-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center text-xl  ">
          <div className="flex flex-col gap-5">
            <div className="flex gap-2.5">
              <Lesson />
              <h3 className="text-[#227187]">{classNum} Lesson</h3>
            </div>
            <div className="flex gap-2.5">
              <Student />
              <h3 className="text-[#227187]">{students} Students Enrolled</h3>
            </div>
            <div className="flex gap-2.5">
              <Idea />
              <h3 className="text-[#227187]">{yogaStyle}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="secondDiv -mt-10 px-5 z-10">
        <div className="bg-white p-5 z-10 shadow-sm">
          <h3 className="text-sm text-[#afafaf] ">With {instructor}</h3>
          <h3 className="text-[#227187]">{course}</h3>
          <h3 className="text-lg font-semibold">{cost}</h3>
        </div>
      </div>
    </div>
  );
}
