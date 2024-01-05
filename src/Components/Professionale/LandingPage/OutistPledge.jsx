import React from "react";
import { SecurityCardThree } from "../../../../public/Professionale";
import Image from "next/image";

const OutistPledge = () => {
  return (
    <>
      <div className="Parent bg-[#FACC15]">
        <div className="w-full md:max-w-full  lg:max-w-full xl:max-w-[1240px] h-auto py-24 px-6 bg-yellow-400 justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch  justify-center items-start gap-1 flex  flex-col md:flex-row lg:flex-row xl:flex-row gap-4">
            <div className="self-stretch h-auto flex-col justify-start items-start gap-3 inline-flex">
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
            <div className="self-stretch p-3 bg-white rounded-xl border justify-start items-center gap-2.5 inline-flex">
              <div className="w-10 h-10 relative bg-zinc-100 rounded-xl" >
              <Image
                  fill={true}
                  className="w-16 h-[66.60px] left-0 top-[-4px] absolute"
                  src={SecurityCardThree}
                />
              </div>
              <div className="w-[286px] h-9 justify-center items-center flex">
                <div className="w-[286px] text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
                  We support environmental non-profits by sharing a part of our
                  profits.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OutistPledge;
