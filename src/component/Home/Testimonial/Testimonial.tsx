import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 md:my-36 p-6 md:p-0">
      <div className="block md:flex justify-between space-y-10 md:space-y-0">
        <div className="w-full">
          <div className="mb-20">
            <h1 className="font-syne font-bold text-3xl md:text-6xl">
              Testimonial
            </h1>
          </div>
          <div>
            <p className="text-justify md:text-balance font-rubik text-lg text-[#949494] mb-12">
              “Aaronn was fantastic to work with from start to finish. We were
              looking for a simple, stand-out logo and he delivered. I tried
              designing the logo myself thinking I wouldn’t need to pay the
              money for a professional graphic designer but I was very wrong.
              Working with Aaronn was worth every penny and was surprisingly
              affordable! I remember him saying simplicity is key to a
              successful logo and boy he was right. I can’t thank Aaronn enough
              for his effort and professionalism. I would recommend him to
              anyone looking for a design!”
            </p>
            <h4 className="font-bold text-2xl font-syne">-Martin lee</h4>
          </div>
        </div>
        <div className="w-1/3">
          <Image
            src="/quote.png"
            alt="quote"
            height={183}
            width={199}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
