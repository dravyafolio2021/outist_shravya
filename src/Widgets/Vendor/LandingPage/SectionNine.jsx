import Image from "next/image";
import React from "react";

const SectionNine = () => {
  return (
    <>
      <div className="w-[393px] h-[617px] p-2.5 px-4 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="h-[111px] flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch h-[33px] flex-col justify-start items-start gap-2 flex">
            <div className="self-stretch text-zinc-800 text-3xl font-bold font-['Noto Sans'] leading-[33px]">
              The Outist: Skill Centre
            </div>
          </div>
          <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
            Professional courses and webinars to level up your expertise and
            career, make outdoors safer and win client trust!
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 flex">
          <div className="justify-start items-start gap-3 inline-flex">
            <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="w-[343px] h-[217px] relative">
                  <div className="w-[343px] h-[217px] left-0 top-0 absolute bg-stone-50 rounded-[15px]" />
                  <div className="w-10 h-10 left-[152px] top-[89px] absolute">
                    <Image src="image.svg" width={40} height={40} />
                  </div>
                </div>
              </div>
              <div className="h-[203px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch h-[81px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                    Advance Your Ski-llset: Backcountry Ski Camps in the Lahaul
                  </div>
                </div>
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Hosted by seasoned ski guides, these weekend workshops were
                  made to help skiers of all skill sets reach the next level, no
                  matter where they stand on the learning curve.
                </div>
              </div>
              <div className="w-[342px] justify-start items-center gap-3 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-[24.43px] h-[24.04px] left-[4.36px]  absolute">
                      <Image src="/Avatar.png" width={24} height={24} />
                    </div>
                  </div>
                </div>
                <div className="w-[361px] text-zinc-600 text-base font-medium font-['Noto Sans']">
                  Iniyan D’souza • 10 Nov, 07:00 PM • FREE
                </div>
              </div>
            </div>
            {/* <div className="flex-col justify-start items-start gap-4 inline-flex">
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="w-[343px] h-[217px] relative">
                  <div className="w-[343px] h-[217px] left-0 top-0 absolute bg-stone-50 rounded-[15px]" />
                  <div className="w-10 h-10 left-[152px] top-[89px] absolute">
                    <div className="w-10 h-10 left-0 top-0 absolute bg-zinc-300" />
                  </div>
                </div>
              </div>
              <div className="h-[203px] flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch h-[81px] flex-col justify-start items-start gap-2 flex">
                  <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                    Advance Your Ski-llset: Backcountry Ski Camps in the Lahaul
                  </div>
                </div>
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Hosted by seasoned ski guides, these weekend workshops were
                  made to help skiers of all skill sets reach the next level, no
                  matter where they stand on the learning curve.
                </div>
              </div>
              <div className="w-[342px] justify-start items-center gap-3 inline-flex">
                <div className="w-6 h-6 justify-center items-center flex">
                  <div className="w-6 h-6 relative">
                    <div className="w-[15.43px] h-[21.04px] left-[4.36px] top-[5.30px] absolute" />
                  </div>
                </div>
                <div className="w-[361px] text-zinc-600 text-base font-medium font-['Noto Sans']">
                  Iniyan D’souza • 10 Nov, 07:00 PM • FREE
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionNine;
