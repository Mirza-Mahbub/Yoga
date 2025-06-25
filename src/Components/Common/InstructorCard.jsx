export default function InstructorCard({ imgUrl, names, classes }) {
  return (
    <div>
      <a href="">
        <img src={imgUrl} alt="" />
      </a>
      <div className="flex flex-col justify-center items-center py-10">
        <h3 className="text-[#227179] font-semibold">{names}</h3>
        <h3 className="text-[#b6b6b6] mt-2 ">{classes}</h3>
        <span className="w-20 h-[1px] bg-[#d7d7d798] mt-2"></span>
      </div>
    </div>
  );
}
