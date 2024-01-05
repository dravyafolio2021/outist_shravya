import Image from "next/image";
import React from "react";

const SetUpAccount = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] h-[269px] px-4 py-2.5 bg-white flex-col justify-center items-start gap-2.5 inline-flex">
          {/* Setup Your Account Section */}
          <div className="w-full h-[49px] pb-1.5 flex-col justify-start items-start gap-1 flex">
            {/* Title */}
            <div className="self-stretch h-5   pb-1 justify-start items-center inline-flex">
              <div className="text-zinc-800 text-base font-bold font-['Noto Sans'] leading-none">
                Setup Your Account
              </div>
            </div>
            {/* Subtitle */}
            <div className="text-zinc-600 text-sm font-light font-['Noto Sans']">
              Complete these 3 steps & start selling
            </div>
          </div>

          {/* Steps Section */}
          <div className="w-full p-[8px] justify-start  items-start gap-3 flex-row md:flex-row lg:flex-row xl:flex-row flex ">
            {/* Step 1: Connect Bank Account */}
            <div className="w-[200px] md:w-[300px] lg:w-[300px] xl:w-[300px] h-[174px] relative">
              <div className="w-[200px] h-[174px] left-0 top-0 absolute bg-white rounded-2xl  border" />
              <div className="w-44 h-[150px] left-[12px] top-[12px] absolute">
                <div className="w-44 h-[58px] left-0 top-[92px] absolute">
                  <div className="w-44 left-0 top-0 absolute text-zinc-800 text-base font-semibold font-['Noto Sans']">
                    Add Your Catalogue
                  </div>
                  <div className="w-44 left-0 top-[26px] absolute text-neutral-400 text-xs font-normal font-['Noto Sans']">
                    Let’s create an experience catalogue & take it live!
                  </div>
                </div>
                <Image
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] opacity-90 rounded-xl"
                  src="assets/IconOne.svg"
                />
              </div>
            </div>

            {/* Step 2: Connect Bank Account */}
            <div className="w-[200px] md:w-[300px] lg:w-[300px] xl:w-[300px] h-[174px] relative">
              <div className="w-[200px] h-[174px] left-0 top-0 absolute bg-white rounded-2xl  border" />
              <div className="w-full h-[150px] left-[12px] top-[12px] absolute">
                <div className="w-full h-[58px] left-0 top-[92px] absolute">
                  <div className="w-full left-0 top-0 absolute text-zinc-800 text-base font-semibold font-['Noto Sans']">
                    Connect Bank Account
                  </div>
                  <div className="w-44 left-0 top-[26px] absolute text-neutral-400 text-xs font-normal font-['Noto Sans']">
                    To get timely payments in your account directly
                  </div>
                </div>
                <Image
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] opacity-90 rounded-xl"
                  src="assets/IconTwo.svg"
                />
              </div>
            </div>

            {/* Step 3: Verify Your Account */}
            {/* <div className="w-[300px] hidden md:flex lg:flex xl:flex h-[174px] relative">
              <div className="w-[300px] h-[174px] left-0 top-0 absolute bg-white rounded-2xl  border" />
              <div className="w-44 h-[150px] left-[12px] top-[12px] absolute">
                <div className="w-44 h-[58px] left-0 top-[92px] absolute">
                  <div className="w-44 left-0 top-0 absolute text-zinc-800 text-base font-semibold font-['Noto Sans']">
                    Verify Your Account
                  </div>
                  <div className="w-44 left-0 top-[26px] absolute text-stone-500 text-xs font-light font-['Noto Sans']">
                    Let’s create an experience catalogue & take it live!
                  </div>
                </div>
                <Image
                  width={60}
                  height={60}
                  className="w-[60px] h-[60px] opacity-90 rounded-xl"
                  src="/assets/IconThree.png"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SetUpAccount;
