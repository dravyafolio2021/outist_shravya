import React from "react";

const OTPVerification = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] h-[165px] px-4 py-2.5 bg-white flex-col justify-center items-start gap-5 inline-flex">
          {/* OTP Input Section */}
          <div className="h-[39px] flex-col justify-center items-start gap-2 flex">
            <div className="self-stretch h-5  justify-start items-center inline-flex">
              <div className="text-zinc-800 text-xl font-bold font-['Noto Sans'] leading-tight">
                Enter OTP
              </div>
            </div>
            <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-3">
              Enter the code we have sent by SMS to +91 999-999-9999
            </div>
          </div>

          {/* OTP Input Fields */}
          <div className="self-stretch h-12 rounded-xl justify-start items-start gap-4 inline-flex">
            {/* Individual OTP Input Fields */}
            {/* You can see six similar divs here for each digit */}
            <div className="w-[46px] self-stretch p-4 bg-white rounded-xl border border-zinc-800 flex-col justify-center items-center gap-4 inline-flex">
              <div className="self-stretch h-10   py-2 rounded-lg flex-col justify-center items-center flex">
                <div className="text-center text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-normal">
                  1
                </div>
              </div>
            </div>
            <div className="w-[46px] self-stretch p-4 bg-white rounded-xl border border-zinc-800 flex-col justify-center items-center gap-4 inline-flex">
              <div className="self-stretch h-10   py-2 rounded-lg flex-col justify-center items-center flex">
                <div className="text-center text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-normal">
                  1
                </div>
              </div>
            </div>
            <div className="w-[46px] self-stretch p-4 bg-white rounded-xl border border-zinc-800 flex-col justify-center items-center gap-4 inline-flex">
              <div className="self-stretch h-10  py-2 rounded-lg flex-col justify-center items-center flex">
                <div className="text-center text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-normal">
                  1
                </div>
              </div>
            </div>
            <div className="w-[46px] self-stretch p-4 bg-white rounded-xl border border-zinc-800 flex-col justify-center items-center gap-4 inline-flex">
              <div className="self-stretch h-10  py-2 rounded-lg flex-col justify-center items-center flex">
                <input
                  className="text-center focus:outline-none focus:textbl text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-normal"
                  placeholder="1"
                />
              </div>
            </div>
            <div className="w-[46px] self-stretch p-4 bg-white rounded-xl border border-zinc-800 flex-col justify-center items-center gap-4 inline-flex">
              <div className="self-stretch h-10   py-2 rounded-lg flex-col justify-center items-center flex">
                <div className="text-center text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-normal">
                  1
                </div>
              </div>
            </div>
            {/* ... Five more similar divs */}
          </div>

          {/* Resend OTP */}
          <div className="text-neutral-400 text-sm font-extrabold font-['Avenir'] leading-[18px]">
            Resend in 30sec
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default OTPVerification;
