import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 md:my-36">
      <div className="px-6 md:px-0">
        <h1 className="font-syne text-4xl md:text-7xl font-bold mb-3">
          Contact Us
        </h1>
        <p className="font-rubik text-sm md:text-lg font-medium text-[#949494] mb-14 md:mb-20">
          For Any Info Knock Us
        </p>
        <div className="border-[1px] border-white mb-24"></div>
      </div>
      <div>
        <div className="block md:flex justify-between">
          <h1 className="text-4xl md:text-[64px]  font-syne font-bold leading-snug md:w-1/2 p-4">
            Get in <br /> Touch With <br /> Us
          </h1>
          <div className="md:w-1/2">
            <form>
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 space-y-12">
                <div>
                  <label className="font-medium  font-rubik text-2xl uppercase">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none rounded bg-[#161D21]  border-b-2 border-violet-200 p-2 mt-2 mb-3"
                    name="user_email"
                    required
                  />
                </div>
                <div>
                  <label className="font-medium  font-rubik text-2xl uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full outline-none rounded bg-[#161D21]  border-b-2 border-violet-200 p-2 mt-2 mb-3"
                    name="subject"
                    required
                  />
                </div>

                <div>
                  <label className="font-medium font-rubik text-2xl  uppercase">
                    Message
                  </label>
                  <textarea
                    className="w-full outline-none rounded bg-[#161D21]  border-b-2 border-violet-200 p-2 mt-2 mb-3"
                    name="message"
                    required
                  />
                </div>
              </div>
              <div className="px-4 mt-8">
                <button className="uppercase font-medium text-2xl bg-[#FF9142] h-[50px] w-[158px] rounded-[30px] font-rubik">
                  send
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" my-12 md:my-24 px-12 md:px-0 space-y-8 md:space-y-0">
          <div className="">
            <Image
              className="h-[350px] md:h-[638px] rounded-2xl object-cover"
              width={1148}
              height={636}
              src="/contact.jpg"
              alt="about1"
            />
          </div>
        </div>
      </div>
      <div className="my-16 md:my-36 px-6 md:px-0">
        <div className="font-syne font-bold text-2xl grid grid-cols-1 md:grid-cols-3 text-center space-y-8 md:space-y-0">
          <div>
            <button>MUJTOBA ALI HALL, SUST</button>
          </div>
          <div>
            <button>+880 1629837675</button>
          </div>
          <div>
            <button>eco.extract.industry@gmail.com</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
