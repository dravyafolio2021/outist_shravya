import Image from "next/image";
import React from "react";

const SectionFour = () => {
  return (
    <>
      
      <div className="w-[393px] h-[521px] px-4 pt-[17px] pb-4 bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[488px] flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch h-[67px] flex-col justify-start items-start gap-3 flex">
            <div className="text-zinc-800 text-3xl font-bold font-['Noto Sans'] leading-[33px]">
              How It Works?
            </div>
            <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
              Get onboarded in 3 simple steps
            </div>
          </div>
          <div className="h-[389px] flex-col justify-start items-start gap-8 flex">
            <div className="w-[361px] justify-start items-start gap-4 inline-flex">
              <div className="w-[47px] h-12 relative">
                <div className="w-[47px] flex-col justify-center p-3 items-center h-12 left-0 top-0 absolute bg-amber-400 rounded-[13px]">
                  <Image src="selection.svg" width={36} height={36} />
                </div>
              </div>
              <div className="w-[298px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                  Register Your Account
                </div>
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Create and verify your account with basic business details and
                  registration document.
                </div>
              </div>
            </div>
            <div className="w-[361px] justify-start items-start gap-4 inline-flex">
              <div className="w-12 h-12 relative">
                <div className="w-12 h-12 left-0 top-0 absolute bg-zinc-100 rounded-xl" />
                <div className="w-8 h-8 left-[8px] top-[8px] absolute">
                  <div className="w-8 h-8 left-0 top-0 absolute b g-zinc-300">
                    <Image src="business.svg" width={48} height={48} />
                  </div>
                </div>
              </div>
              <div className="w-[298px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                  Setup Your Storefront
                </div>
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Simply list your experiences and services with assistance from
                  our team, by providing product and service details.
                </div>
              </div>
            </div>
            <div className="w-[361px] justify-start items-start gap-4 inline-flex">
              <div className="w-[47px] h-12 relative">
                <div className="w-[47px] flex-col justify-center p-3 items-center h-12 left-0 top-0 absolute bg-amber-400 rounded-[13px]">
                  <Image src="selection.svg" width={36} height={36} />
                </div>
              </div>
              <div className="w-[298px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                  Get Set Go
                </div>
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Deliver exceptional experiences, manage your business like a
                  breeze and see your revenues shoot up!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
