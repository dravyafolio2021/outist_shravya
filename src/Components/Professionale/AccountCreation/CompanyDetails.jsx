import React from "react";

const CompanyDetails = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] px-4  mx-auto lg:w-full ">
          <div className="w-full    py-2.5 bg-white flex flex-col justify-center items-center gap-6">
            <div className="w-full  h-[819px] sm:h-auto flex flex-col justify-center items-start gap-6">
              <div className="w-full flex-col gap-[10px] self-stretch   pb-1 justify-start items-center inline-flex">
                <div className="w-full text-zinc-800 text-xl font-bold font-['Noto Sans'] leading-tight">
                  Company Details
                </div>
                <div className="w-full text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-none">
                  You will need to re-verify your account to change this later.
                </div>
              </div>
              <div className="self-stretch h-[82px] sm:h-auto flex flex-col justify-center items-start gap-3">
                <div className="text-zinc-600 text-sm font-semibold font-['Noto Sans'] leading-[18px]">
                  Name
                </div>
                <div className="self-stretch h-[52px] sm:h-auto rounded-lg border border-neutral-200 flex flex-col justify-center items-start gap-2">
                  <div className="self-stretch h-[52px] p-4 bg-white rounded-xl flex flex-col justify-center items-start">
                    <input
                      placeholder="Business Name"
                      className="text-neutral-400 focus:text-black focus:outline-none text-base font-normal font-['Noto Sans'] leading-tight"
                    />

                    {/* </input> */}
                  </div>
                </div>
              </div>
              <div className="w-full  relative flex flex-col justify-start items-start gap-[24px]">
                <div className="w-full h-fit sm:h-auto flex-col justify-start items-start flex gap-3">
                  <div className="text-zinc-600 text-sm font-semibold font-['Noto Sans'] leading-[18px]">
                    Organization Type
                  </div>

                  <div className="w-full items-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {/* Component 1 */}
                    <div className="hover:bg-[#f9f9f9] hover:border-[#323232] transition duration-300 grow shrink basis-0 p-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2">
                      <div className="justify-start items-center gap-3 inline-flex">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <div className="w-full h-4 sm:h-5   pb-0.5 justify-start items-center inline-flex">
                            <div className="w-full text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[14px]">
                            Private Limited
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Component 1 */}
                    <div className="hover:bg-[#f9f9f9] hover:border-[#323232] transition duration-300   grow shrink basis-0 p-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2">
                      <div className="justify-start items-center gap-3 inline-flex">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <div className="w-full h-4 sm:h-5   pb-0.5 justify-start items-center inline-flex">
                            <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[14px]">
                            Partnership
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Component 1 */}
                    <div className="hover:bg-[#f9f9f9] hover:border-[#323232] transition duration-300  grow shrink basis-0 p-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2">
                      <div className="justify-start items-center gap-3 inline-flex">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <div className="w-full  h-4 sm:h-5  pb-0.5 justify-start items-center inline-flex">
                            <div className="w-full text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[14px]">
                            Limited Liability Partnership (LLP)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Component 1 */}
                    <div className="hover:bg-[#f9f9f9] hover:border-[#323232] transition duration-300  grow shrink basis-0 p-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2">
                      <div className="justify-start items-center gap-3 inline-flex">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <div className="w-full h-4 sm:h-5   pb-0.5 justify-start items-center inline-flex">
                            <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[14px]">
                            Proprietorship
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Component 1 */}
                    <div className="hover:bg-[#f9f9f9] hover:border-[#323232] transition duration-300  grow shrink basis-0 p-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2">
                      <div className="justify-start items-center gap-3 inline-flex">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <div className="w-full h-4 sm:h-5   pb-0.5 justify-start items-center inline-flex">
                            <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[14px]">
                            Public Limited
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Component 1 */}
                    <div className="hover:bg-[#f9f9f9] hover:border-[#323232] transition duration-300  grow shrink basis-0 p-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2">
                      <div className="justify-start items-center gap-3 inline-flex">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <div className="w-full h-4 sm:h-5   pb-0.5 justify-start items-center inline-flex">
                            <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[14px]">
                            Section 8 Company
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Component 1 */}
                    <div className="hover:bg-[#f9f9f9] hover:border-[#323232] transition duration-300  grow shrink basis-0 p-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2">
                      <div className="justify-start items-center gap-3 inline-flex">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <div className="w-full h-4 sm:h-5   pb-0.5 justify-start items-center inline-flex">
                            <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[14px]">
                            Society
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Component 1 */}
                    <div className="hover:bg-[#f9f9f9] hover:border-[#323232] transition duration-300  grow shrink basis-0 p-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2">
                      <div className="justify-start items-center gap-3 inline-flex">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <div className="w-full h-4 sm:h-5   pb-0.5 justify-start items-center inline-flex">
                            <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[14px]">
                            Trust
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Component 1 */}
                    <div className="hover:bg-[#f9f9f9] hover:border-[#323232] transition duration-300  grow shrink basis-0 p-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2">
                      <div className="justify-start items-center gap-3 inline-flex">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <div className="w-full h-4 sm:h-5   pb-0.5 justify-start items-center inline-flex">
                            <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[14px]">
                            Club
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Component 1 */}
                    <div className="hover:bg-[#f9f9f9] hover:border-[#323232] transition duration-300  grow shrink basis-0 p-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2">
                      <div className="justify-start items-center gap-3 inline-flex">
                        <div className="flex flex-col justify-start items-start gap-2">
                          <div className="w-full h-4 sm:h-5   pb-0.5 justify-start items-center inline-flex">
                            <div className="text-zinc-800 text-sm font-normal font-['Noto Sans'] leading-[14px]">
                            Foundation
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="w-[126px] h-[18px] relative" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetails;
