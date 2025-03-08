import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 md:my-36">
      <div className="px-6 md:px-0">
        <h1 className="font-syne text-4xl md:text-7xl font-bold mb-3">
          About Us
        </h1>
        <p className="font-rubik text-sm md:text-lg font-medium text-[#949494] mb-14 md:mb-20">
          Little Brief About Ourself
        </p>
        <div className="border-[1px] border-white mb-24"></div>
      </div>
      <div>
        <div className="block md:flex justify-between">
          <h1 className="text-4xl md:text-[80px]  font-syne font-bold leading-snug md:w-1/2 p-4">
            Our mission is to make sustainable{" "}
            <span className="text-orange-600">BIODIESEL</span>
          </h1>
          <p className="md:w-1/2 text-[#949494] text-[21px] font-semibold leading-10 p-4 md:p-8 mt-3 font-open">
            Create custom Designs with AARONN that converts more visitors than
            any website. With lots of unique design, you can easily select a
            logo without hassle. Create custom landing logos with AARONN that
            converts more visitors than any website. With lots of revisions, you
            can easily build a logo without problem.
          </p>
        </div>
        <div className="relative block md:flex justify-between my-12 md:my-24 px-12 md:px-0 space-y-8 md:space-y-0">
          <div className="md:w-[400px] ">
            <Image
              className="md:h-[515px] md:w-[361px] rounded-2xl"
              width={361}
              height={515}
              src="/about-pic.png"
              alt="about1"
            />
          </div>
          <div className="">
            <Image
              width={750}
              height={515}
              className="md:h-[515px] md:w-[750px] rounded-2xl"
              src="/about2.jpg"
              alt="about2"
            />
          </div>
          <div className="absolute top-0  md:left-[-3%] w-[55px] h-[178px] border-[#FF9142] border-[1px] rounded-[30px]"></div>
          <div className="absolute bottom-0 md:bottom-[-5%] right-0 w-[178px] h-[55px] border-[#FF9142] border-[1px] rounded-[30px]"></div>
        </div>
      </div>
      <div className="my-16 md:my-36 px-6 md:px-0">
        <p className="font-syne text-2xl md:text-5xl mb-12 font-bold">
          Follow us on:
        </p>
        <div className="font-inter font-bold text-[32px] text-[#949494] grid grid-cols-1 md:grid-cols-4">
          <div>
            <button>DRIBBLE</button>
          </div>
          <div>
            <button>TWITTER</button>
          </div>
          <div>
            <button>FACEBOOK</button>
          </div>
          <div>
            <button>INSTAGRAM</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
