import React from "react";

const OTPVerification = () => {
  return (
    <>
      <div className="w-[393px] h-[500px] px-4 py-2.5 bg-white flex-col justify-start items-start gap-5 inline-flex">
        <div className="h-[39px] flex-col justify-center items-start gap-2 flex">
          <div className="self-stretch h-5 pr-[262px] justify-start items-center inline-flex">
            <div className="text-zinc-800 text-xl font-bold font-['Noto Sans'] leading-tight">
              Enter OTP
            </div>
          </div>
          <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-3">
            Enter the code we have sent by SMS to +91 999-999-9999
          </div>
        </div>
        <div className="self-stretch h-12 rounded-xl justify-start items-start gap-4 inline-flex">
          <div className="w-[46px] self-stretch p-4 bg-white rounded-xl border border-zinc-800 flex-col justify-center items-center gap-4 inline-flex">
            <div className="self-stretch h-10 px-3 py-2 rounded-lg flex-col justify-center items-center flex">
              <div className="text-center text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-normal">
                1
              </div>
            </div>
          </div>
          <div className="w-[46px] self-stretch p-4 bg-white rounded-xl border border-zinc-800 flex-col justify-center items-center gap-4 inline-flex">
            <div className="self-stretch h-14 p-4 rounded-lg flex-col justify-center items-center flex">
              <div className="text-center text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-normal">
                1
              </div>
            </div>
          </div>
          <div className="w-[46px] self-stretch p-4 bg-white rounded-xl border border-zinc-800 flex-col justify-center items-center gap-4 inline-flex">
            <div className="self-stretch h-10 px-3 py-2 rounded-lg flex-col justify-center items-center flex">
              <div className="text-center text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-normal">
                1
              </div>
            </div>
          </div>
          <div className="w-[46px] self-stretch p-4 bg-white rounded-xl border border-zinc-800 flex-col justify-center items-center gap-4 inline-flex">
            <div className="self-stretch h-10 px-3 py-2 rounded-lg flex-col justify-center items-center flex">
              <div className="text-center text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-normal">
                1
              </div>
            </div>
          </div>
          <div className="w-[46px] self-stretch p-4 bg-white rounded-xl border border-zinc-800 flex-col justify-center items-center gap-4 inline-flex">
            <div className="self-stretch h-10 px-3 py-2 rounded-lg flex-col justify-center items-center flex">
              <div className="text-center text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-normal">
                1
              </div>
            </div>
          </div>
          <div className="w-[46px] self-stretch p-4 bg-white rounded-xl border border-zinc-800 flex-col justify-center items-center gap-4 inline-flex">
            <div className="self-stretch h-10 px-3 py-2 rounded-lg flex-col justify-center items-center flex">
              <div className="text-center text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-normal">
                1
              </div>
            </div>
          </div>
        </div>
        <div className="text-neutral-400 text-sm font-extrabold font-['Avenir'] leading-[18px]">
          Resend in 30sec
        </div>
      </div>
      <div className="w-[393px] h-[72px] px-2.5 py-3 bg-white shadow flex-col justify-center items-center gap-2.5 inline-flex">
        <div className="w-[361px] px-4 py-3.5 bg-blue-700 rounded-2xl border border-blue-700 justify-center items-center gap-2.5 inline-flex">
          <button className="text-center text-white text-base font-extrabold font-['Noto Sans'] leading-tight">
            Verify Mobile Number{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default OTPVerification;
