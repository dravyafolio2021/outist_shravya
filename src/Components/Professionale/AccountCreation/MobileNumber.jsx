import React from "react";

const MobileNumber = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] px-4 py-[56px] bg-white flex-col justify-center items-start gap-[22px] inline-flex">
          {/* First section - Question and Explanation */}
          <div className="w-full md:max-w-full lg:max-w-[768px] xl:max-w-[1240px] h-[62px] pb-0.5 flex-col justify-center items-start gap-2 flex">
            <div className="w-full self-stretch h-5   justify-start items-center inline-flex">
              <div className="text-zinc-800 text-xl font-bold font-['Noto Sans'] leading-tight">
                What’s your mobile number?
              </div>
            </div>
            <div className="flex flex-row self-stretch h-8 justify-start items-center ">
              <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-4">
                Our team will reach out to you on this number to help you get{" "}
                started on making the most out of Professionalé
              </div>
            </div>
          </div>

          {/* Second section - Mobile Number Input */}
          <div className="justify-start items-start gap-3 inline-flex">
            {/* Country Code Input */}
            <div className="w-[60px] rounded-lg border border-neutral-200 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[52px] p-4 bg-white rounded-xl flex-col justify-center items-start flex">
                <input
                  className="self-stretch focus:outline-none focus:text-black  text-black text-base font-normal font-['Noto Sans'] leading-tight"
                  placeholder="+91"
                />
              </div>
            </div>

            {/* Mobile Number Input */}
            <div className="w-[289px] rounded-lg border border-neutral-200 flex-col justify-start items-start gap-2 inline-flex">
              <div className="self-stretch h-[52px] px-4 pt-3 pb-2 bg-white rounded-xl flex-col justify-center items-start flex">
                <div className="self-stretch text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-3">
                  Mobile Number
                </div>
                <input
                  className="self-stretch focus:outline-none focus:text-black  text-black text-base font-normal font-['Noto Sans'] leading-tight"
                  placeholder="9999999999"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNumber;
