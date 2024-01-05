import Image from "next/image";
import React from "react";

const SectionOne = () => {
  return (
    <>
      <div className="w-[393px] pt-[150px] pb-[60px] h-[795px] px-4  bg-white flex-col justify-center items-start gap-12 inline-flex">
        <div className="self-stretch h-[336px] flex-col pt-[10px] justify-start items-start gap-8 flex">
          <div className="self-stretch  h-[336px] flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch    h-[264px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-zinc-800 text-[36px] font-bold font-['Noto Sans'] leading-[44px]">
                Where your business takes centerstage
                <span className="flex flex-col - mb-[-10px]">
                  <Image src="Vector.svg" width={200} height={14} />
                </span>
                in the world of outdoors and adventure experiences
              </div>
            </div>
            <div className="justify-start items-center gap-6 inline-flex">
              <div className="p-3 bg-blue-700 rounded-2xl border-2 border-blue-700 justify-center items-center flex">
                <div className="px-4 justify-center items-center flex">
                  <button className="text-white text-base font-bold font-['Noto Sans'] leading-normal tracking-wide">
                    Get Started Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[361px] h-[333px] justify-center items-center inline-flex">
          <Image
            className="w-[361px] h-[333px]"
            width={360}
            height={332}
            src="/LandingHero.png"
          />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
