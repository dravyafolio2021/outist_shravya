import Image from "next/image";
import { SecurityCardOne, SecurityCardThree, SecurityCardTwo } from "../../../../public/Professionale";

const SecurityCard = () => {
  return (
    <div className="Parent bg-[#F9F9F9]">
      <div className="w-full md:max-w-full  lg:max-w-full xl:max-w-[1240px] pr-4 py-24 bg-stone-50 flex flex-col justify-center items-center  ">
        {/* Container */}
        <div className="w-full md:w-full h-[566px] md:h-auto lg:h-auto xl:h-auto px-4 md:px-0 lg:px-0 xl:px-0 flex flex-col justify-start items-start gap-8">
          {/* Title and Subtitle */}
          <div className=" w-full h-[100px] flex flex-col justify-start items-start gap-3">
            <div className="w-full text-zinc-800 text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold font-sans leading-[33px]">
              Military-grade Data Security
            </div>
            <div className="w-[361px] text-zinc-600 text-base font-normal font-sans leading-snug">
              Your data is yours and yours ONLY!
            </div>
          </div>

          {/* Security Compliance Details */}
          <div className=" w-full h-auto md:h-auto lg:h-auto xl:h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-between items-start gap-8">
            {/* Compliance Detail 1 */}
            <div className="w-full md:w-[361px] lg:w-[361px] xl:w-[361px] justify-start items-start gap-4 inline-flex">
              {/* Content similar to Step 1 */}
              <div className="w-16 h-16 relative">
                <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-100 rounded-full" />
                <Image
                  fill={true}
                  className="w-16 h-[66.60px] left-0 top-[-4px] absolute"
                  src={SecurityCardThree}
                />
              </div>
              <div className="w-[293px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                  100% GDPR Compliant
                </div>
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  India’s only GDPR compliant experiential travel platform that
                  safeguards your data with gold-standard privacy and security.
                </div>
              </div>
            </div>

            {/* Compliance Detail 2 */}
            <div className="w-full md:w-[361px] lg:w-[361px] xl:w-[361px] justify-start items-start gap-4 inline-flex">
              {/* Content similar to Step 1 */}
              <div className="w-16 h-16 relative">
                <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-100 rounded-full" />
                <Image
                  fill={true}
                  className="w-16 h-[66.60px] left-0 top-[-4px] absolute"
                  src={SecurityCardOne}
                />
              </div>
              <div className="w-[293px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                  HIPAA compliance{" "}
                </div>
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Secures your clients' medical info, fostering trust in your
                  brand and your services.
                </div>
              </div>
            </div>

            {/* Compliance Detail 3 */}
            <div className="w-full md:w-[361px] lg:w-[361px] xl:w-[361px] justify-start items-start gap-4 inline-flex">
              {/* Content similar to Step 1 */}
              <div className="w-16 h-16 relative">
                <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-100 rounded-full" />
                <Image
                  fill={true}
                  className="w-16 h-[66.60px] left-0 top-[-4px] absolute"
                  src={SecurityCardTwo}
                />
              </div>
              <div className="w-[293px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                  PCI DSS compliance{" "}
                </div>
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Ensures worry-free transactions, seamless payments with
                  fortified security.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCard;
