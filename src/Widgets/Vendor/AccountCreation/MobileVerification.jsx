import React from "react";

const MobileVerification = () => {
  return (
    <>
      <div className="w-[393px] min- h-[900px] px-4 py-2.5 bg-white flex-col justify-start items-start gap-[22px] inline-flex">
        <div className="h-[62px] pb-0.5 flex-col justify-center items-start gap-2 flex">
          <div className="self-stretch h-5 pr-[74px] justify-start items-center inline-flex">
            <div className="text-zinc-800 text-xl font-bold font-['Noto Sans'] leading-tight">
              What’s your mobile number?
            </div>
          </div>
          <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-none">
            Our team will reach out to you on this number to help you get <br />
            started on making the most out of Professionalé
          </div>
        </div>
        <div className="w-[361px] relative">
          <div className="w-[289px] h-[52px] left-[72px] top-0 absolute rounded-lg border border-neutral-200 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch h-[52px] px-4 pt-3 pb-2 bg-white rounded-xl flex-col justify-center items-start flex">
              <div className="self-stretch text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-3">
                Mobile Number
              </div>
              <div className="self-stretch text-black text-base font-normal font-['Noto Sans'] leading-tight">
                9999999999
              </div>
            </div>
          </div>
          <div className="w-[60px] h-[52px] left-0 top-0 absolute rounded-lg border border-neutral-200 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch h-[52px] p-4 bg-white rounded-xl flex-col justify-center items-start flex">
              <div className="self-stretch text-neutral-400 text-base font-normal font-['Noto Sans'] leading-tight">
                +91
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[393px] h-[72px] px-2.5 py-3 bg-white shadow flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-[361px] px-4 py-3.5 bg-blue-700 rounded-2xl border border-blue-700 justify-center items-center gap-2.5 inline-flex">
          <div className="text-center text-white text-base font-extrabold font-['Noto Sans'] leading-tight">
            Send OTP
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileVerification;
