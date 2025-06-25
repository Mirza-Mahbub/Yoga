import HeroBgMobile from "../assets/Images/freepik__background__82464.png";
import HeroBG from "../assets/Images/slider-bg-3.png";
import Button from "./Common/Button";
import DownArrow from "./SVG/DownArrow";

export default function Hero() {
  return (
    <>
      <div className=" flex flex-col  items-end w-full h-[80vh] lg:h-screen bg-[#dbe8e7] ">
        <div
          className="hidden w-full h-full lg:flex justify-center items-center bg-right bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${HeroBG})`,
          }}
        >
          <div className=" flex h-full justify-center w-full lg:w-4xl xl:w-6xl 2xl:w-7xl px-2.5 lg:px-0">
            <div className="flex flex-col justify-center w-full h-full gap-5 ">
              <h1 className="text-[#404b48] text-7xl font-bold">
                <span className=" font-normal text-[#6f948d]">Online</span>
                <br />
                Yoga Classes
              </h1>
              <p className="mt-5 text-[#547670] w-96">
                Balance Yoga is the most popular online yoga classes, trusted by
                100,000+ customers. Our instructers are well- known and
                certified.
              </p>
              <Button styling="bg-[#f1615a] hover:bg-white hover:text-[#f1615a] mt-5">
                Browse Courses
              </Button>
              <button className="w-fit">
                <a href="#">
                  <DownArrow />
                </a>
              </button>
            </div>
          </div>
        </div>
        <div
          className="lg:hidden w-full h-full flex justify-center items-center bg-right bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url(${HeroBgMobile})`,
          }}
        >
          <div className="flex flex-col justify-center w-full h-full gap-5 ">
            <h1 className="text-[#404b48] text-7xl font-bold">
              <span className=" font-normal text-[#6f948d]">Online</span>
              <br />
              Yoga Classes
            </h1>
            <p className="mt-5 text-[#547670] w-96">
              Balance Yoga is the most popular online yoga classes, trusted by
              100,000+ customers. Our instructers are well- known and certified.
            </p>
            <Button styling="bg-[#f1615a] hover:bg-white hover:text-[#f1615a] mt-5">
              Browse Courses
            </Button>
            <button className="w-fit">
              <a href="#">
                <DownArrow />
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
