import Image from "next/image";
import React from "react";

const SectionTwo = () => {
  return (
    <>
      <div className="w-[393px]  h-[524px] px-4 pt-[17px] pb-[18px] bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
          <div className="h-[122px] flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch h-[66px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-zinc-800 text-3xl font-bold font-['Noto Sans'] leading-[33px]">
                Big On Efficiency, Ultra-Low On Cost
              </div>
            </div>
            <div className="self-stretch">
              <span className="text-zinc-600 text-base font-bold font-['Noto Sans'] leading-snug">
                7 benefits
              </span>
              <span className="text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                {" "}
                make O Professionalé{" "}
              </span>
              <span className="text-zinc-600 text-base font-bold font-['Noto Sans'] leading-snug">
                the best personal assistant
              </span>
              <span className="text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                {" "}
                you will EVER have!
              </span>
            </div>
          </div>
          <div className="w-[377px] justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="w-[343px] h-[217px] relative">
                  <div className="w-[343px] h-[217px] left-0 top-0 absolute bg-stone-50 rounded-[15px]" />
                  <div className="w-10 h-10 left-[152px] top-[89px] absolute">
                    <div className="w-10 h-10 left-0 top-0 absolute bg -zinc-300">
                      <Image src="image.svg" width={42} height={42} />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[110px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch h-[54px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                    A fully-managed storefront! Manage without Hastle
                  </div>
                </div>
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Give your clients a world-class booking experience, today at
                  zero fixed cost!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
