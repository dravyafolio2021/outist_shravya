import Image from "next/image";
import React from "react";

const SectionSix = () => {
  return (
    <>
      <div className="w-[393px] h-[458px] px-4 pt-5 pb-[21px] bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
          <div className="h-[33px] flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch h-[33px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-zinc-800 text-3xl font-bold font-['Noto Sans'] leading-[33px]">
                Success Stories
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="w-[361px] h-[217px] relative">
                  <div className="w-[361px] h-[217px] left-0 top-0 absolute bg-stone-50 rounded-[15px]" />
                  <div className="w-10 h-10 left-[152px] top-[89px] absolute">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-z inc-300">
                      <Image src="image.svg" width={42} height={42} />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[66px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch text-zinc-800 text-base font-medium font-['Noto Sans'] leading-snug">
                  “ Manual work consumed most of my time. And it has now
                  vanished. I can focus so much more on personalisation and
                  curation. “
                </div>
              </div>
              <div className="w-[361px] h-[45px] relative">
                <div className="w-[45px] h-[45px]  absolute bg-zinc-300 rounded-full">
                  <Image src="image.svg" width={42} height={42} className="rounded-full" />{" "}
                </div>

                <div className="w-[311.77px] left-[49.23px] top -[0px] absolute">
                  <span className="text-zinc-800 text-sm font-bold font-['Noto Sans']">
                    Anurag Sood
                    <br />
                  </span>
                  <span className="text-zinc-800 text-sm font-normal font-['Noto Sans']">
                    Climb The Himalayas, Managing Director
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSix;
