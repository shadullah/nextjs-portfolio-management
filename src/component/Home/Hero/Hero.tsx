import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="max-w-6xl min-h-screen mx-auto text-center flex flex-col justify-center items-center">
      <h1 className="font-syne text-7xl font-bold leading-snug mb-24">
        Adaptive Logo Design <br /> for Your Brand
      </h1>
      <Link href="/work">
        <button className="uppercase font-medium text-sm bg-[#FF9142] h-[65px] w-[242px] rounded-full text-center font-rubik">
          explore work <span className="ml-3 text-xl">&rarr;</span>
        </button>
      </Link>
    </div>
  );
};

export default Hero;
