import React from "react";

const CompanyDetails = () => {
  return (
    <>
      <div className="w-[393px] h-[900px] pl-4 pr-2.5 py-2.5 bg-white flex-col justify-start items-start gap-6 inline-flex">
        <div className="h-[41px] flex-col justify-center items-start gap-px flex">
          <div className="self-stretch h-6 pr-48 pb-1 justify-start items-center inline-flex">
            <div className="text-zinc-800 text-xl font-bold font-['Noto Sans'] leading-tight">
              Company Details
            </div>
          </div>
          <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-none">
            You will need to re-verify your account to change this later.
          </div>
        </div>
        <div className="h-[82px] relative">
          <div className="left-0 top-0 absolute text-zinc-600 text-sm font-semibold font-['Noto Sans'] leading-[18px]">
            Name
          </div>
          <div className="w-[361px] h-[52px] left-0 top-[30px] pb-[5px] absolute rounded-lg border border-neutral-200 flex-col justify-start items-start gap-2 inline-flex">
            <div className="self-stretch h-[53px] p-4 bg-white rounded-xl flex-col justify-center items-start flex">
              <input
                className="self-stretch text-neutral-400 focus:outline-none focus:text-black focus:border-blue-500 text-base font-normal font-['Noto Sans'] leading-tight"
                placeholder="Business Name"
              />
              {/* Business Name */}
            </div>
          </div>
        </div>
        <div className="w-full relative">
          <div className="  top-0 absolute text-zinc-600 text-sm font-semibold font-['Noto Sans'] leading-[18px]">
            Organization Type
          </div>
          <div className="w-[361px] dravya h-[606px] left-0 top-[34px] absolute flex-col justify-start items-start gap-3 inline-flex">
            <div className="w-[361px] p-4 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
                Private Limited
              </div>
            </div>
            <div className="w-[361px] p-4 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
                Partnership
              </div>
            </div>
            <div className="w-[361px] p-4 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
                Limited Liability Partnership (LLP)
              </div>
            </div>
            <div className="w-[361px] p-4 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
                Proprietorship
              </div>
            </div>
            <div className="w-[361px] p-4 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
                Public Limited
              </div>
            </div>
            <div className="w-[361px] p-4 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
                Section 8 Company
              </div>
            </div>
            <div className="w-[361px] p-4 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
                Society
              </div>
            </div>
            <div className="w-[361px] p-4 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
                Trust
              </div>
            </div>
            <div className="w-[361px] p-4 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
                Club
              </div>
            </div>
            <div className="w-[361px] p-4 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 inline-flex">
              <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[18px]">
                Foundation
              </div>
            </div>
            {/* <div className="grow shrink basis-0 p-4 bg-white rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="w-[261px] h-4 pr-[185px] pb-0.5 justify-start items-center inline-flex">
                    <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[14px]">
                      Foundation
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-[393px]  h-[76px] px-4 py-3 bg-white shadow flex flex-row justify-between  items-center ">
        <div className=" cursor-pointer text-blue-700 text-base font-bold font-['Noto Sans'] leading-[18px]">
          Back
        </div>
        <button className="px-6 py-4 bg-blue-700 rounded-2xl border border-blue-700 justify-end items-center gap-4 inline-flex">
          <div className="text-center text-white text-base font-bold font-['Noto Sans'] leading-tight">
            Next
          </div>
        </button>
      </div>
    </>
  );
};

export default CompanyDetails;
