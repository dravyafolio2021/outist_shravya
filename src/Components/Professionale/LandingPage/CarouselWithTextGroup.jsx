import Image from "next/image";
import ParentContent from "../../../Constants/Professionale/CarouselContent";

const { Main, Card } = ParentContent;

const CarouselWithTextGroup = () => {
  return (
    <div className="Parent">
      <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] px-2  py-24 bg-white flex flex-col md:flex-col lg:flex-col xl:flex-col justify-center items-center md:items-start lg:items-start xl:items-start ">
        <div className="w-full md:w-full lg:w-full xl:w-full h-auto px-2 md:px-0 lg:px-0 xl:px-0 pt-[17px] pb-[18px] flex flex-col justify-start items-start gap -6">
          <div className=" flex flex-col justify-start items-start gap-3">
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="text-zinc-800 text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold font-sans leading-[33px]">
                {Main.Heading}
              </div>
            </div>
            <div className="text-zinc-600 text-base font-bold font-sans leading-snug">
              {Main.BodyText}
            </div>
          </div>
        </div>

        {/* CardRow for the Widget of Image and other content */}
        <div className="w-full grid grid-flow-row h-auto md:h-auto lg:h-auto xl:h-auto justify-start items-start gap-1">
          <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row  justify-start items-start gap-4">
            {/* Individual  to be made dynamic  */}
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="w-full h-[220px] xl:h-[268px] md:h-[268px] lg:h-[268px] relative">
                <div className="w-full h-full [220px] absolute bg- zinc-300">
                  <Image src={Main.CardImage1} fill={true} loading="lazy" />
                </div>
              </div>
              <div className="h-[110px] flex flex-col justify-start items-start gap-3">
                <div className="h-[54px] flex flex-col justify-start items-start gap-2">
                  <div className="text-zinc-800 text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold font-sans">
                    A fully-managed storefront! Manage without Hastle
                  </div>
                </div>
                <div className="text-zinc-600 text-base font-normal font-sans leading-snug">
                  Give your clients a world-class booking experience, today at
                  zero fixed cost!
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="w-full h-[220px] xl:h-[268px] md:h-[268px] lg:h-[268px] relative">
                <div className="w-full h-full [220px] absolute bg- zinc-300">
                  <Image
                    src="/Professionale/cardImage1.png"
                    fill={true}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="h-[110px] flex flex-col justify-start items-start gap-3">
                <div className="h-[54px] flex flex-col justify-start items-start gap-2">
                  <div className="text-zinc-800 text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold font-sans">
                    A fully-managed storefront! Manage without Hastle
                  </div>
                </div>
                <div className="text-zinc-600 text-base font-normal font-sans leading-snug">
                  Give your clients a world-class booking experience, today at
                  zero fixed cost!
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="w-full h-[220px] xl:h-[268px] md:h-[268px] lg:h-[268px] relative">
                <div className="w-full h-full [220px] absolute bg- zinc-300">
                  <Image
                    src="/Professionale/cardImage1.png"
                    fill={true}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="h-[110px] flex flex-col justify-start items-start gap-3">
                <div className="h-[54px] flex flex-col justify-start items-start gap-2">
                  <div className="text-zinc-800 text-xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold font-sans">
                    A fully-managed storefront! Manage without Hastle
                  </div>
                </div>
                <div className="text-zinc-600 text-base font-normal font-sans leading-snug">
                  Give your clients a world-class booking experience, today at
                  zero fixed cost!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselWithTextGroup;
