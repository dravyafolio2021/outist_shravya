import Image from "next/image";
import { SucessStoryImage } from "../../../../public/Professionale";

const CarouselWithTextGroupAndAuthor = () => {
  return (
    <>
      <div className="Parent  bg-background">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] h-auto px-4 py-24 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-start gap-2.5 flex">
            <div className="h-auto flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch h-[33px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch text-zinc-800 text-3xl font-bold font-['Noto Sans'] leading-[33px]">
                  The Outist: Skill Centre
                </div>
              </div>
              <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                Professional courses and webinars to level up your expertise and
                career, make outdoors safer and win client trust!
              </div>
            </div>

            {/* Carousel Start */}
            <div className="flex flex-col justify-between items-start  gap-16 md:gap-10 lg:gap-10 xl:gap-10 md:flex-row lg:flex-row xl:flex-row">
              <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-full justify-start items-start gap-3 inline-flex">
                  {/* Course/Event Image */}
                  <div className="w-full h-[220px] relative">
                    <div className="w-full h-[217px] absolute left-0 top-0 bg-stone-50 rounded-[15px]">
                      <Image fill={true} src={SucessStoryImage} />
                    </div>
                    {/* Icon Over Image */}
                    {/* <div className="w-10 h-10 absolute left-[152px] top-[89px] bg-zinc-300" /> */}
                  </div>
                </div>
                <div className="h-auto flex-col justify-start items-start gap- 3 flex">
                  {/* Course/Event Title */}
                  <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                      Advance Your Ski-llset: Backcountry Ski Camps in the
                      Lahaul
                    </div>
                  </div>
                  {/* Course/Event Description */}
                  <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                    Hosted by seasoned ski guides, these weekend workshops were
                    made to help skiers of all skill sets reach the next level,
                    no matter where they stand on the learning curve.
                  </div>
                </div>
                {/* Course/Event Details */}
                <div className="w-full justify-start items-center gap-3 inline-flex">
                  {/* Details Icon */}
                  <div className="w-6 h-6 rounded-full  justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-6 h-6 rounded-full    absolute">
                        <Image
                          className="rounded-full"
                          fill={true}
                          src={SucessStoryImage}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Details Text */}
                  <div className="text-zinc-600 text-base font-medium font-['Noto Sans']">
                    Iniyan D’souza • 10 Nov, 07:00 PM • FREE
                  </div>
                </div>
              </div>

              <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-full justify-start items-start gap-3 inline-flex">
                  {/* Course/Event Image */}
                  <div className="w-full h-[220px] relative">
                    <div className="w-full h-[217px] absolute left-0 top-0 bg-stone-50 rounded-[15px]">
                      <Image fill={true} src={SucessStoryImage} />
                    </div>
                    {/* Icon Over Image */}
                    {/* <div className="w-10 h-10 absolute left-[152px] top-[89px] bg-zinc-300" /> */}
                  </div>
                </div>
                <div className="h-auto flex-col justify-start items-start gap- 3 flex">
                  {/* Course/Event Title */}
                  <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                      Advance Your Ski-llset: Backcountry Ski Camps in the
                      Lahaul
                    </div>
                  </div>
                  {/* Course/Event Description */}
                  <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                    Hosted by seasoned ski guides, these weekend workshops were
                    made to help skiers of all skill sets reach the next level,
                    no matter where they stand on the learning curve.
                  </div>
                </div>
                {/* Course/Event Details */}
                <div className="w-full justify-start items-center gap-3 inline-flex">
                  {/* Details Icon */}
                  <div className="w-6 h-6 rounded-full  justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-6 h-6 rounded-full    absolute">
                        <Image
                          className="rounded-full"
                          fill={true}
                          src={SucessStoryImage}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Details Text */}
                  <div className="text-zinc-600 text-base font-medium font-['Noto Sans']">
                    Iniyan D’souza • 10 Nov, 07:00 PM • FREE
                  </div>
                </div>
              </div>

              <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
                <div className="w-full justify-start items-start gap-3 inline-flex">
                  {/* Course/Event Image */}
                  <div className="w-full h-[220px] relative">
                    <div className="w-full h-[217px] absolute left-0 top-0 bg-stone-50 rounded-[15px]">
                      <Image fill={true} src={SucessStoryImage} />
                    </div>
                    {/* Icon Over Image */}
                    {/* <div className="w-10 h-10 absolute left-[152px] top-[89px] bg-zinc-300" /> */}
                  </div>
                </div>
                <div className="h-auto flex-col justify-start items-start gap- 3 flex">
                  {/* Course/Event Title */}
                  <div className="self-stretch h-auto flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                      Advance Your Ski-llset: Backcountry Ski Camps in the
                      Lahaul
                    </div>
                  </div>
                  {/* Course/Event Description */}
                  <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                    Hosted by seasoned ski guides, these weekend workshops were
                    made to help skiers of all skill sets reach the next level,
                    no matter where they stand on the learning curve.
                  </div>
                </div>
                {/* Course/Event Details */}
                <div className="w-full justify-start items-center gap-3 inline-flex">
                  {/* Details Icon */}
                  <div className="w-6 h-6 rounded-full  justify-center items-center flex">
                    <div className="w-6 h-6 relative">
                      <div className="w-6 h-6 rounded-full    absolute">
                        <Image
                          className="rounded-full"
                          fill={true}
                          src={SucessStoryImage}
                        />
                      </div>
                    </div>
                  </div>
                  {/* Details Text */}
                  <div className="text-zinc-600 text-base font-medium font-['Noto Sans']">
                    Iniyan D’souza • 10 Nov, 07:00 PM • FREE
                  </div>
                </div>
              </div>

              {/* Repeat the above structure for another course/event */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselWithTextGroupAndAuthor;
