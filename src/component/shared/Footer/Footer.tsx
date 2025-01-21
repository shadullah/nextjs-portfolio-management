import Image from "next/image";
import React from "react";
import { FaSquareInstagram, FaSquareTwitter } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-[#131313] h-[740px] flex justify-center items-center font-syne">
      <div className="max-w-6xl mx-auto">
        <section>
          <div className="text-center pt-12">
            <p className="text-[#FF9142] text-2xl  font-bold mb-8">
              Get in Touch With Us
            </p>
            <h1 className="text-6xl font-bold  border-b-4 w-[600px] border-white mx-auto mb-52">
              info@aaronn.com
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 pb-24">
            <div className="pr-24">
              <Image
                alt="footer-logo"
                height={42.42}
                width={241}
                src="/Brand-logo.svg"
              />
            </div>
            <div className="text-2xl font-bold">
              <p className="">Street Avenue 21, CA</p>
              <p>
                0-8-00-888-
                <br />
                000
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold">+9 0283353</p>
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
          <div className="bg-white border-[1px]"></div>
          <p className=" py-10">
            &copy; {new Date().getFullYear()}. Ideapeel. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
