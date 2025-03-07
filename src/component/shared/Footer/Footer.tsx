import Image from "next/image";
import React from "react";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-[#131313] md:h-[740px] flex justify-center items-center font-syne">
      <div className="max-w-6xl mx-auto p-6 md:p-0">
        <section>
          <div className="text-center pt-6 md:pt-12">
            <p className="text-[#FF9142] text-sm md:text-2xl  font-bold mb-8">
              Get in Touch With Us
            </p>
            <h1 className="text-xl md:text-5xl font-bold  border-b-4 w-64 md:w-[870px] border-white mx-auto mb-52">
              eco.extract.industry@gmail.com
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 pb-12 md:pb-24">
            <div className="pr-24">
              <Image
                alt="footer-logo"
                height={42.42}
                width={241}
                src="/logoM.png"
              />
            </div>
            <div className="text-2xl font-bold">
              <p className="">MUJTOBA ALI HALL, SUST</p>
              <p>
                +880
                <br />
                1629837675
              </p>
            </div>
            <div>
              <div className="flex items-center text-[#C4C4C4] space-x-3 mt-4 ">
                <span className="text-2xl">
                  <ImFacebook2 />
                </span>
                <span className="text-[27px]">
                  <FaSquareTwitter />
                </span>
                <span className="text-[27px]">
                  <FaSquareInstagram />
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="footer-bottom text-2xl font-bold text-center">
          <div className="bg-white border-[0.3px] md:border-[1px]"></div>
          <p className="py-5 md:py-10">
            &copy; {new Date().getFullYear()}. All rights reserved by
            ECO-EXTRACT.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
