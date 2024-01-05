import { HeadingTwo, HeadingTwoDynamic } from "@/Widgets";
import Image from "next/image";

const SectionOne = () => {
  return (
    <>
      <div className="w-[393px] h-[255px] pl-4 pr-2 py-2.5 bg-white flex-col justify-center items-start gap-2.5 inline-flex">
        <div className="w-[361px] h-5 pr-[159px] justify-start items-center inline-flex">
          <HeadingTwoDynamic Content="I want to register as" />
        </div>
        <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-none">
          Please select which represents your nature of work
        </div>
        <div className="w-full pr-2 h-[156px] flex-col justify-start items-start gap-3 flex">
          <div className="self-stretch w-full px-4 cursor-pointer hover:border-black hover:scale-105 transform transition duration-200  grow shrink basis-0  py-4 bg-white rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2.5 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="w-10 h-10 flex flex-col justify-center items-center bg-zinc-100 rounded-xl">
                <Image src="corporate_fare.svg" width={24} height={24} />
              </div>
              {/* <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
              </div> */}
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[261px] h-4 pr-[161px] justify-start items-center inline-flex">
                  <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                    Organisation
                  </div>
                </div>
                <div className="w-[261px] h-3 pr-[46px] justify-start items-center inline-flex">
                  <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-3">
                    Tour Operators, Educational Institutes
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch cursor-pointer hover:border-black hover:scale-105 transform transition duration-200  grow shrink basis-0 px-3 py-4 bg-white rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2.5 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="w-10 h-10 flex flex-col justify-center items-center bg-zinc-100 rounded-xl">
                <Image src="people.svg" width={24} height={24} />
              </div>
              {/* <div className="w-6 h-6 relative">
                <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300" />
              </div> */}
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[261px] h-4 pr-[57px] justify-start items-center inline-flex">
                  <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                    Individual Service Provider
                  </div>
                </div>
                <div className="w-[261px] h-3 pr-[62px] justify-start items-center inline-flex">
                  <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-3">
                    Guides, Instructors and freelancers
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

export default SectionOne;
