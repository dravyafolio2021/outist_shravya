import Image from "next/image";

const News = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] h-[436px] px-4 py-2.5 bg-white flex-col justify-center items-start gap-2.5 inline-flex">
          {/* The Outdoor Scene Section */}
          <div className="h-10 pb-px flex-col justify-center items-start gap-1 flex">
            {/* Title */}
            <div className="w-full self-stretch h-4 justify-center items-center inline-flex">
              <div className="w-full text-zinc-800 text-base font-bold font-['Noto Sans'] leading-none">
                The Outdoor Scene
              </div>
            </div>
            {/* Subtitle */}
            <div className="self-stretch h-[19px] justify-center items-center inline-flex">
              <div className="text-zinc-600 text-sm font-light font-['Noto Sans']">
                Never miss an update, keep a pulse of the industry
              </div>
            </div>
          </div>

          {/* News Cards Section */}
          <div className="w-full px-[15px] py-4 bg-white rounded-2xl shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center items-start gap-8 ">
            {/* News Card 1 */}
            <div className="h-[90px]p-4 justify-center items-start gap-4 inline-flex">
              {/* Card Content */}
              <div className="w-56 h-[90px] relative">
                {/* Title */}
                <div className="w-56 left-0 top-[20px] absolute text-zinc-800 text-sm font-semibold font-['Noto Sans']">
                  Almost Succeed on 6,370m Mulkila V in Himachal
                </div>
                {/* Tag */}
                <div className="w-[69px] h-4 px-2 left-0 top-0 pt-1 absolute bg-black rounded flex-col justify-start items-center inline-flex">
                  <div className="text-center text-white text-[9px] font-bold font-['DM Sans'] uppercase leading-none tracking-wide">
                    TOP NEWS
                  </div>
                </div>
                {/* Details */}
                <div className="left-0 top-[74px] absolute text-zinc-600 text-xs font-normal font-['Noto Sans']">
                  Official News. 4hr
                </div>
              </div>
              {/* Image */}
              <Image
                width={90}
                height={90}
                className="w-[90px] h-[90px] opacity-90 rounded-xl"
                src="/assets/NewsOne.png"
                alt="Placeholder"
              />
            </div>

            {/* News Card 2 */}
            <div className="h-[90px] justify-center items-start gap-4 inline-flex">
              {/* Card Content */}
              <div className="w-56 self-stretch relative">
                {/* Title */}
                <div className="w-56 left-0 top-0 absolute text-zinc-800 text-sm font-semibold font-['Noto Sans']">
                  Annapurna Drama Repeats on Makalu: No-O2 Indian Woman Stranded
                </div>
                {/* Details */}
                <div className="left-0 top-[74px] absolute text-zinc-600 text-xs font-normal font-['Noto Sans']">
                  Official News. 4hr
                </div>
              </div>
              {/* Image */}
              <Image
                width={90}
                height={90}
                className="w-[90px] h-[90px] opacity-90 rounded-xl"
                src="/assets/NewsTwo.png"
                alt="Placeholder"
              />
            </div>

            {/* News Card 3 */}
            <div className="h-[90px] justify-center items-start gap-[15px] inline-flex">
              {/* Card Content */}
              <div className="w-[225px] h-[90px] relative">
                {/* Details */}
                <div className="left-0 top-[74px] absolute text-zinc-600 text-xs font-normal font-['Noto Sans']">
                  Official News. 4hr
                </div>
                {/* Description */}
                <div className="w-[225px] left-0 top-[23px] absolute text-zinc-600 text-sm font-light font-['Noto Sans']">
                  Text to add what user have to add here
                </div>
                {/* Title */}
                <div className="w-56 left-0 top-0 absolute text-zinc-800 text-sm font-semibold font-['Noto Sans']">
                  Major First Ascent on El Capitan
                </div>
              </div>
              {/* Image */}
              <Image
                width={90}
                height={90}
                className="w-[90px] h-[90px] opacity-90 rounded-xl"
                src="/assets/NewsThree.png"
                alt="Placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
