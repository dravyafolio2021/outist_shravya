import { MyAccountData } from "@/Constants/Professionale/CarouselContent";
import Image from "next/image";
import ActionFooter from "../General/ActionFooter";

const VenodrType = () => {
  return (
    <>
      <div className="Parent   flex flex-col justify-start items-start ">
        <div className="w-full h-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] px-4   mx-auto lg:w-full ">
          <div className="w-full  h-[255px]  py-2.5 bg-white flex flex-col justify-center items-start gap-2.5">
            <div className="w-full  h-5 sm:pr-[159px] justify-start items-center inline-flex">
              <div className="w-full text-zinc-800 text-xl font-bold font-['Noto Sans'] leading-tight">
                I want to register as
              </div>
            </div>
            <div className="w-full text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-none">
              Please select which represents your nature of work
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 h-[156px] sm:h-auto  justify-start items-start gap-3">
              {/* Container 1 */}
              <div className="cursor-pointer hover:bg-[#f1f1f1] hover:border-[#f9f9f9]  h-[72px] sm:h-auto px-3 sm:px-4 py-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2.5">
                <div className="w-full sm:w-[328px] justify-start items-center gap-3 inline-flex">
                  <div className="w-10 h-10 relative bg-zinc-100 rounded-xl">
                    <Image
                      src={MyAccountData.AccountIcon.CreateAccountIconsOne}
                      className="p-2 flex flex-col justify-center items-center"
                      width={40}
                      height={40}
                    />
                  </div>

                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="w-full sm:w-[261px] h-4 sm:h-5  justify-start items-center inline-flex">
                      <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                        Organisation
                      </div>
                    </div>
                    <div className="w-full sm:w-[261px] h-3 sm:h-auto  justify-start items-center inline-flex">
                      <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-3">
                        Tour Operators, Educational Institutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Container 2 */}
              <div className="cursor-pointer hover:bg-[#f1f1f1] hover:border-[#f9f9f9] h-[72px] sm:h-auto px-3 sm:px-4 py-4 bg-white rounded-xl border border-neutral-200 flex flex-col justify-start items-start gap-2.5">
                <div className="w-full sm:w-[328px] justify-start items-center gap-3 inline-flex">
                  <div className="w-10 h-10 relative bg-zinc-100 rounded-xl">
                    <Image
                      src={MyAccountData.AccountIcon.CreateAccountIconsTwo}
                      className="p-2 flex flex-col justify-center items-center"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="w-full sm:w-[261px] h-4 sm:h-5  justify-start items-center inline-flex">
                      <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                        Individual Service Provider
                      </div>
                    </div>
                    <div className="w-full sm:w-[261px] h-3 sm:h-auto  justify-start items-center inline-flex">
                      <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-3">
                        Guides, Instructors and freelancers
                      </div>
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

export default VenodrType;
