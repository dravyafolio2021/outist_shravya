import Image from "next/image";
import React from "react";

const PromotionalSection = () => {
  return (
    <div className="Parent bg-[#F9F9F9] py-8">
      <div className="w-full  md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px]  px-4 py-[9px] bg-[#F9F9F9] justify-center items-center inline-flex">
        {/* Container */}
        <div className="w-full lg:h-[205px] xl:h-[205px] relative flex flex-col justify-start items-start">
          {/* Text Content */}
          <div className="h-[187px] flex flex-col justify-start items-start gap-3">
            {/* Title */}
            <div className="h-[109px] flex flex-col justify-start items-start">
              {/* Multiline Title */}
              <div className="text-zinc-800 text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold font-sans leading-[33px]">
                Your Business.
                <br className="m" /> {/* Hide line break on larger screens */}
                <span className="l-24">
                  <Image width={100} height={24} src="assets/vector.svg" />
                </span>
                Your Rules.
                <br className="" /> {/* Hide line break on larger screens */}
                <span className="">
                  <Image width={100} height={24} src="assets/vector.svg" />
                </span>
                Your Price.
                <span className="">
                  <Image width={100} height={24} src="assets/vector.svg" />
                </span>
              </div>
            </div>

            
            {/* Description */}
            <div className="text-zinc-600 text-base font-normal py-2 md:py-4 lg:py-6 xl:py8 font-sans leading-snug">
              O Professional is your most powerful gear alongside your trusty
              ice axes, tents, gliders, bikes, and rafts!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalSection;
