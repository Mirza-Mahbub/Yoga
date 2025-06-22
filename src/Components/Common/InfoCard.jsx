export default function InfoCard({ imgUrl, heading, text }) {
  return (
    <div className="flex py-10 gap-4 ">
      <img src={imgUrl} alt="" className="w-16 h-16" />
      <div className="flex flex-col gap-8 pt-1 h-full">
        <h3 className="text-2xl font-bold text-[#227179]">{heading}</h3>
        <p className="w-64">{text}</p>
        <span className="w-10 h-0.5 bg-[#d7d7d7]"></span>
      </div>
    </div>
  );
}
