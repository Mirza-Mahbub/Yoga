import foundation from "../assets/Images/hp1-about-image.png";
import Button from "./Common/Button";
export default function Foundation() {
  return (
    <div
      className="mt-20"
      style={{
        backgroundImage: `radial-gradient(circle at 77% 43%, rgba(168, 168, 168,0.04) 0%, rgba(168, 168, 168,0.04) 50%,rgba(10, 10, 10,0.04) 50%, rgba(10, 10, 10,0.04) 100%),radial-gradient(circle at 33% 65%, rgba(248, 248, 248,0.04) 0%, rgba(248, 248, 248,0.04) 50%,rgba(228, 228, 228,0.04) 50%, rgba(228, 228, 228,0.04) 100%),radial-gradient(circle at 92% 79%, rgba(152, 152, 152,0.04) 0%, rgba(152, 152, 152,0.04) 50%,rgba(28, 28, 28,0.04) 50%, rgba(28, 28, 28,0.04) 100%),radial-gradient(circle at 91% 13%, rgba(41, 41, 41,0.04) 0%, rgba(41, 41, 41,0.04) 50%,rgba(214, 214, 214,0.04) 50%, rgba(214, 214, 214,0.04) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(230,255,249))`,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 py-5  px-8 lg:px-0 w-full lg:w-4xl xl:w-6xl 2xl:w-7xl mx-auto">
        <div className="w-full ">
          <img src={foundation} alt="Yoga Pose" className="w-full h-auto" />
        </div>
        <div className="w-full ">
          <h3 className="text-3xl font-medium text-[#3dc2c7]">
            Our foundation is
          </h3>
          <h2 className="text-6xl font-bold mb-6 text-[#227179] ">
            Modern Yoga
          </h2>
          <p className="mb-6 text-[#507f7b]">
            Modern postural yoga consists largely but not exclusively of the
            practice of asanas. There were very few standing asanas before 1900.
            By 2012, there were at least 19 widespread styles from Ashtanga Yoga
            to Viniyoga...
          </p>
          <div className="flex gap-4">
            <Button styling="bg-white border text-[#3dc2c7]">Learn More</Button>
            <Button styling="bg-[#3dc2c7] text-white hover:bg-[#5f857d]">
              Our Story
            </Button>
          </div>
        </div>
      </div>
      <div className=" px-8 lg:px-0 w-full lg:w-4xl xl:w-6xl 2xl:w-7xl">
        <span className="w-10 h-0.5 bg-[#d7d7d7]"></span>
      </div>
    </div>
  );
}
