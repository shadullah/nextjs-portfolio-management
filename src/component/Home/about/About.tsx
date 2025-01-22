import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 md:my-0 p-6 md:p-0">
      <div className="block md:flex justify-between items-center min-h-screen space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-6xl font-syne font-bold mb-6">
            Let’s get know <br /> about me closer
          </h1>
          <p className="text-sm md:text-lg text-[#A8A8A8] mb-12 font-rubik">
            Aaronn is a New York-based visual designer focusing on branding and
            visual identity. Her portfolio showcases her wide range of work,
            spanning books, posters and web design.
          </p>
          <Link href="/about">
            <button className="uppercase font-medium text-md bg-[#FF9142] h-[59px] w-[288px] rounded-full text-center font-rubik">
              Discover More About Me
            </button>
          </Link>
        </div>
        <div className="relative w-full md:w-1/2 flex justify-end">
          <Image
            className=" rounded-3xl h-[506px] w-[454px] object-cover object-top"
            height={600}
            width={500}
            alt="about"
            src="/about-pic.png"
          />
          <div className="absolute top-[-3%] w-28 h-8 border-[#FF9142] border-[1px] rounded-[30px]"></div>
          <div className="absolute bottom-[5%] left-[-5%] md:left-[15%] w-[55px] h-[178px] border-[#FF9142] border-[1px] rounded-[30px]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
