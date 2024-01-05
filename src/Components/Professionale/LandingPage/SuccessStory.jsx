import Image from "next/image";
import React from "react";
import {
  SecurityCardThree,
  SucessStoryImage,
} from "../../../../public/Professionale";

const SuccessStory = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full h-auto md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] py-24 px-4  bg-white flex flex-col justify-start items-start gap-[10px]  ">
          <div className="w-full h-auto  flex-col justify-start items-start gap-[20px]">
            <div className="w-full h-[33px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch h-[33px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-zinc-800 text-3xl font-bold font-['Noto Sans'] leading-[33px]">
                  Success Stories
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 h-auto py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-start items-start gap-[100px] ">
              {/* Container 1 */}
              <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="w-full h-[220px] relative">
                    <div className="w-full h-[220px]  relative">
                      <div className="w-full h-full [220px] absolute bg- zinc-300">
                        <Image
                          src={SucessStoryImage}
                          fill={true}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  flex-col justify-start items-start gap-3 flex">
                  “ Manual work consumed most of my time. And it has now
                  vanished. I can focus so much more on personalisation and
                  curation. “
                  <div className="self-stretch text-zinc-800 text-base font-medium font-['Noto Sans'] leading-snug"></div>
                </div>
                <div className="w-[361px] h-[45px] relative">
                  <div className="w-[311.77px] left-[49.23px]  absolute">
                    <span className="text-zinc-800 text-sm font-bold font-['Noto Sans']">
                      Anurag Sood
                      <br />
                    </span>
                    <span className="text-zinc-800 text-sm font-normal font-['Noto Sans']">
                      Climb The Himalayas, Managing Director
                    </span>
                  </div>
                  <div className="w-11 h-11 left-0 top-0 absolute bg-zinc-300 rounded-full">
                    <Image
                      fill={true}
                      className="w-16 h-16 left-0 top-[-4px] absolute"
                      src={SecurityCardThree}
                    />
                  </div>
                </div>
              </div>

              {/* Container 2 */}
              <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="w-full h-[220px] relative">
                    <div className="w-full h-[220px]  relative">
                      <div className="w-full h-full [220px] absolute bg- zinc-300">
                        <Image
                          src={SucessStoryImage}
                          fill={true}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  flex-col justify-start items-start gap-3 flex">
                  “ Manual work consumed most of my time. And it has now
                  vanished. I can focus so much more on personalisation and
                  curation. “
                  <div className="self-stretch text-zinc-800 text-base font-medium font-['Noto Sans'] leading-snug"></div>
                </div>
                <div className="w-[361px] h-[45px] relative">
                  <div className="w-[311.77px] left-[49.23px]  absolute">
                    <span className="text-zinc-800 text-sm font-bold font-['Noto Sans']">
                      Anurag Sood
                      <br />
                    </span>
                    <span className="text-zinc-800 text-sm font-normal font-['Noto Sans']">
                      Climb The Himalayas, Managing Director
                    </span>
                  </div>
                  <div className="w-11 h-11 left-0 top-0 absolute bg-zinc-300 rounded-full">
                    <Image
                      fill={true}
                      className="w-16 h-16 left-0 top-[-4px] absolute"
                      src={SecurityCardThree}
                    />
                  </div>
                </div>
              </div>
              {/* Container 3 */}
              <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                <div className="self-stretch justify-start items-start gap-3 inline-flex">
                  <div className="w-full h-[220px] relative">
                    <div className="w-full h-[220px]  relative">
                      <div className="w-full h-full [220px] absolute bg- zinc-300">
                        <Image
                          src={SucessStoryImage}
                          fill={true}
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="  flex-col justify-start items-start gap-3 flex">
                  “ Manual work consumed most of my time. And it has now
                  vanished. I can focus so much more on personalisation and
                  curation. “
                  <div className="self-stretch text-zinc-800 text-base font-medium font-['Noto Sans'] leading-snug"></div>
                </div>
                <div className="w-[361px] h-[45px] relative">
                  <div className="w-[311.77px] left-[49.23px]  absolute">
                    <span className="text-zinc-800 text-sm font-bold font-['Noto Sans']">
                      Anurag Sood
                      <br />
                    </span>
                    <span className="text-zinc-800 text-sm font-normal font-['Noto Sans']">
                      Climb The Himalayas, Managing Director
                    </span>
                  </div>
                  <div className="w-11 h-11 left-0 top-0 absolute bg-zinc-300 rounded-full">
                    <Image
                      fill={true}
                      className="w-16 h-16 left-0 top-[-4px] absolute"
                      src={SecurityCardThree}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStory;
