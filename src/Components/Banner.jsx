import banner1 from "../assets/Images/Banner/banner-1 (1).png";
import banner2 from "../assets/Images/Banner/banner-2.png";
import banner3 from "../assets/Images/Banner/banner-3.png";
import banner4 from "../assets/Images/Banner/banner-4.png";
import banner5 from "../assets/Images/Banner/banner-5.png";

export default function Banner() {
  return (
    <div
      className=" py-20"
      style={{
        backgroundImage: ` radial-gradient(circle at 27% 33%, rgba(193, 193, 193,0.04) 0%, rgba(193, 193, 193,0.04) 50%,rgba(77, 77, 77,0.04) 50%, rgba(77, 77, 77,0.04) 100%),radial-gradient(circle at 35% 8%, rgba(183, 183, 183,0.04) 0%, rgba(183, 183, 183,0.04) 50%,rgba(25, 25, 25,0.04) 50%, rgba(25, 25, 25,0.04) 100%),radial-gradient(circle at 93% 50%, rgba(218, 218, 218,0.04) 0%, rgba(218, 218, 218,0.04) 50%,rgba(127, 127, 127,0.04) 50%, rgba(127, 127, 127,0.04) 100%),linear-gradient(90deg, hsl(116,0%,99%),hsl(116,0%,99%))`,
      }}
    >
      <h3 className="text-center text-2xl font-normal text-[#6f948d]">
        We are featured in
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 lg:gap-0 py-5  px-8 lg:px-0 w-full lg:w-4xl xl:w-6xl 2xl:w-7xl mx-auto">
        <img src={banner1} alt="" />
        <img src={banner2} alt="" />
        <img src={banner3} alt="" />
        <img src={banner4} alt="" />
        <img src={banner5} alt="" />
      </div>
    </div>
  );
}
