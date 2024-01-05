import Image from "next/image";
import React from "react";

const SectionThree = () => {
  return (
    <>
      <div className="w-[393px]   h-[205px]   px-4 py-[9px] bg-white justify-center items-center inline-flex">
        <div className="w-[361px] h-[187px] relative">
          <div className="w-[361px] h-[187px] left-0 top-0 absolute flex-col justify-start items-start gap-3 inline-flex">
            <div className="self-stretch h-[109px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-zinc-800 text-3xl font-bold font-['Noto Sans'] leading-[33px]">
                Your Business. <br />
                <span className="flex flex-col ml-[60px] justify-end mb-[-5px]">
                  <Image src="Vector.svg" width={150} height={14} />
                </span>
                Your Rules. <br />
                <span className="flex flex-col  ml-[60px]  justify-end mb-[-5px]">
                  <Image src="Vector.svg" width={120} height={14} />
                </span>
                Your Price.
                <span className="flex flex-col  ml-[60px]  justify-end mb-[10px]">
                  <Image src="Vector.svg" width={100} height={14} />
                </span>
              </div>
            </div>
            <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
              O Professional is your most powerful gear alongside your trusty
              ice axes, tents, gliders, bikes, and rafts!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
