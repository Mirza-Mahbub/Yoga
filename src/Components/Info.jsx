import icon1 from "../assets/Images/icon1-1.png";
import icon2 from "../assets/Images/icon2-1.png";
import icon3 from "../assets/Images/icon3.png";
import InfoCard from "./Common/InfoCard";

export default function Info() {
  return (
    <div className="w-full flex justify-center py-10 bg-[#f5f5f5]">
      <div className=" w-full lg:w-4xl xl:w-6xl 2xl:w-7xl flex flex-col lg:flex-row justify-between">
        <InfoCard
          imgUrl={icon1}
          heading="Many Styles"
          text="20+ Styles of Yoga Workout and Meditation that suit everyone"
        />
        <InfoCard
          imgUrl={icon2}
          heading="Pro Instructors"
          text="Professional Yoga Instructors from around the world"
        />
        <InfoCard
          imgUrl={icon3}
          heading="Quality Content"
          text="All Our Classes are Well Planned by Professional Yoga Instructors"
        />
      </div>
    </div>
  );
}
