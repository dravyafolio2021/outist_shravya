const CompanyDetailsTwo = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px]  mx-auto lg:w-full ">
          <div className="w-full h-auto px-4 sm:pr-2.5 py-2.5 bg-white flex flex-col justify-start items-start gap-6">
            <div className="w-full h-[819px] sm:h-auto flex flex-col justify-center items-start gap-6">
              <div className="self-stretch h-[41px] sm:h-6  pb-1 justify-start items-start gap-[4px] flex-col inline-flex">
                <div className="text-zinc-800 text-xl font-bold font-['Noto Sans'] leading-tight">
                  Company Details
                </div>
                <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-none">
                  You will need to re-verify your account to change this later.
                </div>
              </div>

              <div className="w-full  self-stretch h-[82px] sm:h-auto flex flex-col justify-center items-start gap-1">
                <div className="text-zinc-600 text-sm font-semibold font-['Noto Sans'] leading-[18px]">
                  Name
                </div>
                <div className="self-stretch h-[52px] sm:h-auto rounded-lg border border-neutral-200 flex flex-col justify-center items-start gap-2">
                  <div className="self-stretch h-[52px] py-4 bg-white rounded-xl flex flex-col justify-center items-start">
                    <input
                      placeholder="Business Name"
                      className="self-stretch text-neutral-400 text-base font-normal font-['Noto Sans'] leading-tight 
                    focus:outline-none focus:text-black focus:border  
                    py-4 px-3 border border-neutral-300 rounded-md
                    transition duration-300 ease-in-out 
                    hover:border-neutral-400 hover:bg-neutral-50
                    focus:border-black focus:bg-white focus:shadow-outline focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full self-stretch h-[82px] sm:h-auto flex flex-col justify-center items-start gap-1">
                <div className="text-zinc-600 text-sm font-semibold font-['Noto Sans'] leading-[18px]">
                  Mobile Number
                </div>
                <div className="self-stretch h-[52px] sm:h-auto rounded-lg border border-neutral-200 flex flex-col justify-center items-start gap-2">
                  <div className="self-stretch h-[52px] py-4 bg-white rounded-xl flex flex-col justify-center items-start">
                    <input
                      placeholder="Mobile Number"
                      className="self-stretch text-neutral-400 text-base font-normal font-['Noto Sans'] leading-tight 
                    focus:outline-none focus:text-black focus:border  
                    py-4 px-3 border border-neutral-300 rounded-md
                    transition duration-300 ease-in-out 
                    hover:border-neutral-400 hover:bg-neutral-50
                    focus:border-black focus:bg-white focus:shadow-outline focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full self-stretch h-[82px] sm:h-auto flex flex-col justify-center items-start gap-1">
                <div className="text-zinc-600 text-sm font-semibold font-['Noto Sans'] leading-[18px]">
                  Email
                </div>
                <div className="self-stretch h-[52px] sm:h-auto rounded-lg border border-neutral-200 flex flex-col justify-center items-start gap-2">
                  <div className="self-stretch h-[52px] py-4 bg-white rounded-xl flex flex-col justify-center items-start">
                    <input
                      placeholder="Email"
                      className="self-stretch text-neutral-400 text-base font-normal font-['Noto Sans'] leading-tight 
                    focus:outline-none focus:text-black focus:border  
                    py-4 px-3 border border-neutral-300 rounded-md
                    transition duration-300 ease-in-out 
                    hover:border-neutral-400 hover:bg-neutral-50
                    focus:border-black focus:bg-white focus:shadow-outline focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full self-stretch h-[82px] sm:h-auto flex flex-col justify-center items-start gap-1">
                <div className="text-zinc-600 text-sm font-semibold font-['Noto Sans'] leading-[18px]">
                  WhatsApp Number
                </div>
                <div className="self-stretch h-[52px] sm:h-auto rounded-lg border border-neutral-200 flex flex-col justify-center items-start gap-2">
                  <div className="self-stretch h-[52px] py-4 bg-white rounded-xl flex flex-col justify-center items-start">
                    <input
                      placeholder="WhatsApp Number"
                      className="self-stretch text-neutral-400 text-base font-normal font-['Noto Sans'] leading-tight 
                    focus:outline-none focus:text-black focus:border  
                    py-4 px-3 border border-neutral-300 rounded-md
                    transition duration-300 ease-in-out 
                    hover:border-neutral-400 hover:bg-neutral-50
                    focus:border-black focus:bg-white focus:shadow-outline focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full self-stretch h- relative mt- 12 [82px] sm:h-auto flex flex-col justify-center items-start gap-1">
                <div className="text-zinc-600 text-sm font-semibold font-['Noto Sans'] leading-[18px]">
                  Office Address{" "}
                </div>
                <div className="w-full self-stretch  h -[52px] sm:h-auto rounded-lg border border-neutral-200 flex flex-col justify-center items-start gap-2">
                  <div className="w-full self-stretch h-[52px] py-4 bg-white rounded-xl flex flex-col justify-center items-start">
                    <input
                      placeholder="Office Address"
                      className="self-stretch text-neutral-400 text-base font-normal font-['Noto Sans'] leading-tight 
                                  focus:outline-none focus:text-black focus:border  
                                  py-4 px-3 border border-neutral-300 rounded-md
                                  transition duration-300 ease-in-out 
                                  hover:border-neutral-400 hover:bg-neutral-50
                                  focus:border-black focus:bg-white focus:shadow-outline focus:ring-1 focus:ring-black"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full self-stretch h-[82px] sm:h-auto flex flex-col justify-center items-start gap-1">
                <div className="text-zinc-600 text-sm font-semibold font-['Noto Sans'] leading-[18px]">
                  Registration Documents{" "}
                </div>
                <div className="w-full self-stretch h-[52px] sm:h-auto rounded-lg  border-neutral-200 flex flex-col justify-center items-start gap-2">
                  <div className="w-full self-stretch y-4 bg-white rounded-xl flex flex-col justify-center items-start">
                    <div class="w-full md:w-[153px] h-[100px] p-4 border-2 border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center">
                      <label
                        for="file-upload"
                        class="flex flex-col items-center justify-center space-y-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-8 w-8 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            stroke-linejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        <span class="text-sm text-gray-500">Drag & Drop</span>
                        <input id="file-upload" type="file" class="hidden" />
                      </label>
                    </div>
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

export default CompanyDetailsTwo;
