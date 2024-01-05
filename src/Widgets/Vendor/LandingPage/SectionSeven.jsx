import Image from "next/image";
import React from "react";

const SectionSeven = () => {
  return (
    <>
      {" "}
      
      <div className="w-[393px]  h-[289px] p-4 bg-yellow-400 justify-center items-center inline-flex">
        <div className="w-full grow shrink basis-0 self-stretch flex-col justify-center items-start gap-4 inline-flex">
          <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-[177px] flex-col justify-start items-start gap-3 flex">
              <div className="w-[361px] text-zinc-800 text-3xl font-bold font-['Noto Sans'] leading-[33px]">
                The Outist Pledge
              </div>
              <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                “ We pledge to protect and conserve the natural resources of our
                motherland and this great, beautiful planet. We promise to
                educate future generations so they may become caretakers of our
                water, air, land, culture and wildlife. “
              </div>
            </div>
          </div>
          <div className="self-stretch grow shrink basis-0 p-3 bg-white rounded-xl border justify-start items-center gap-2.5 inline-flex">
            <div className="w-10 h-10 bg-zinc-100 rounded-xl flex flex-col justify-center items-center">
              <Image src="people.svg" width={32} height={32} className="p-[4px]" />{" "}
            </div>
            {/* <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
            </div> */}
            <div className="w-[286px] text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
              We support environmental non-profits by sharing a part of our
              profits.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionSeven;
