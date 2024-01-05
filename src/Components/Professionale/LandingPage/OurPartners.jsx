import React from "react";
import { SecurityCardOne, SecurityCardThree, SecurityCardTwo, SucessStoryImage } from "../../../../public/Professionale";
import Image from "next/image";

const OurPartners = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] h-[251px] px-4 py-2.5 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="h-[61px] flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch h-[27px] flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                Partner Institutes and Educators
              </div>
            </div>
            <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
              Learn from the best to become the best!
            </div>
          </div>

          {/* Grid Starts here */}
          <div className="h-40 justify-start items-start gap-5 flex flex-col md:flex-row lg:flex-row xl:flex-row">
            <div className="w-[361px] justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 relative bg-zinc-100 rounded-full">
                <Image
                  src={SecurityCardOne}
                  fill={true}
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="w-[293px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Institute Name
                </div>
              </div>
            </div>
            <div className="w-[361px] justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 relative bg-zinc-100 rounded-full">
                <Image
                  src={SecurityCardTwo}
                  fill={true}
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="w-[293px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Institute Name
                </div>
              </div>
            </div>
            <div className="w-[361px] justify-start items-center gap-4 inline-flex">
              <div className="w-10 h-10 relative bg-zinc-100 rounded-full">
                <Image
                  src={SecurityCardThree}
                  fill={true}
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div className="w-[293px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Institute Name
                </div>
              </div>
            </div>
            {/* <!-- Repeat the above structure for other institutes --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurPartners;
