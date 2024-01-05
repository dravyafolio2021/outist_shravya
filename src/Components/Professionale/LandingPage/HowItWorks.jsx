import Image from "next/image";
import {
  HowitWorkIconOne,
  HowitWorkIconTwo,
} from "../../../../public/Professionale";

const HowItWorks = () => {
  return (
    <div className="Parent bg-white">
      <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] pr-4 py-24 bg-white flex flex-col justify-center items-center ">
        {/* Container */}
        <div className="w-full md:w-full lg:w-full xl:w-full h-auto md:h-auto lg:h-auto xl:h-auto px-4 md:px-0 lg:px-0 xl:px-0 flex flex-col justify-start items-start gap-8">
          {/* Title and Subtitle */}
          <div className="w-full  flex flex-col justify-start items-start gap-1">
            <div className="text-zinc-800 text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold font-sans leading-[33px]">
              How It Works?
            </div>
            <div className="text-zinc-600 text-base font-normal font-sans leading-snug">
              Get onboarded in 3 simple steps
            </div>
          </div>

          {/* Steps */}
          <div className="w-full h-auto md:h-[389px] lg:h-auto xl:h-auto flex flex-col md:flex-row lg:flex-row xl:flex-row  justify-between items-start gap-8">
            {/* Step 1 */}
            <div className="w-full md:w-[361px] lg:w-[361px] xl:w-[361px] justify-start items-start gap-4 inline-flex">
              <div className="w-[47px] md:w-[47px] lg:w-[12px] xl:w-[47px] h-12 md:h-12 lg:h-[12px] xl:h-[12px] relative">
                <div className="w-12 h-12 absolute  bg -amber-400 rounded-[13px]">
                  <Image src={HowitWorkIconTwo} fill={true} />
                </div>
              </div>
              <div className="w-[298px] md:w-[298px] lg:w-[298px] xl:w-[298px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-zinc-800 text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold font-sans">
                  Register Your Account
                </div>
                <div className="text-zinc-600 text-base font-normal font-sans leading-snug">
                  Create and verify your account with basic business details and
                  registration document.
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="w-full md:w-[361px] lg:w-[361px] xl:w-[361px] justify-start items-start gap-4 inline-flex">
              <div className="w-[47px] md:w-[47px] lg:w-[12px] xl:w-[47px] h-12 md:h-12 lg:h-[12px] xl:h-[12px] relative">
                <div className="w-12 h-12 absolute  bg -amber-400 rounded-[13px]">
                  <Image
                    src={HowitWorkIconOne}
                    className="top-[4px]"
                    fill={true}
                  />{" "}
                </div>
              </div>
              <div className="w-[298px] md:w-[298px] lg:w-[298px] xl:w-[298px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-zinc-800 text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold font-sans">
                  Setup Your Storefront
                </div>
                <div className="text-zinc-600 text-base font-normal font-sans leading-snug">
                  Simply list your experiences and services with assistance from
                  our team, by providing product and service details.
                </div>
              </div>
            </div>

            {/* Step 3*/}
            <div className="w-full md:w-[361px] lg:w-[361px] xl:w-[361px] justify-start items-start gap-4 inline-flex">
              <div className="w-[47px] md:w-[47px] lg:w-[12px] xl:w-[47px] h-12 md:h-12 lg:h-[12px] xl:h-[12px] relative">
                <div className="w-12 h-12 flex items-center justify-center flex-col absolute bg-zinc-400 rounded-[13px]">
                  <Image src={HowitWorkIconTwo} fill={true} />
                </div>
              </div>
              <div className="w-[298px] md:w-[298px] lg:w-[298px] xl:w-[298px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="text-zinc-800 text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold font-sans">
                  Get Set Go
                </div>
                <div className="text-zinc-600 text-base font-normal font-sans leading-snug">
                  Deliver exceptional experiences, manage your business like a
                  breeze and see your revenues shoot up!
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
