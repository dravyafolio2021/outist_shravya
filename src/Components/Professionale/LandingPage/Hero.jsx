import { Heading } from "@/Components";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="Parent">
      <div className="w-full md:max-w-[393px] lg:max-w-[795px] xl:max-w-[1240px] px-4 pt-[30px] pb-12 bg-white flex flex-col md:flex-row lg:flex-row xl:flex-row justify-between items-start gap-12">
        {/* Column 1 */}
        <div className="w-full md:w-[50%] lg:w-[50%] xl:w-[50%] h-auto md:h-[440px] lg:h-[440px] xl:h-[440px]  flex flex-col justify-center items-start gap-8">
          <div className="w-full py-2 md:h-auto lg:h-auto xl:h-auto flex flex-col justify-start items-start gap-2">
            <div className="text-zinc-800 text-[40px] md:text-[40px] lg:text-[40px] xl:text-[40px] font-bold font-sans leading-[44px] md:leading-[44px]">
              Where your business takes centerstage in the world of outdoors and
              adventure experiences
            </div>
            {/* <Heading content="Where your business takes centerstage in the world of outdoors and
              adventure experiences" classType="H1"  /> */}
          </div>
          <div className="flex justify-start items-center gap-6">
            <div className="p-3 bg-blue-700 rounded-2xl border-2 border-blue-700 flex justify-center items-center">
              <div className="px-4">
                <div className="text-white text-base md:text-base font-bold font-sans leading-normal tracking-wide">
                  Get Started Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full md:w-auto lg:w-auto xl:w-auto  h-[350px] md:h-[400px]  lg:h-[400px]  xl:h-[400px]  justify-center items-center">
          <Image
            width={350}
            height={350}
            className="w-full h-full"
            src="/assets/LandingHero.png"
            alt="Landing Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
