import Image from "next/image";

const SectionFive = () => {
  return (
    <>
      <div className="w-[393px]  h-[566px] px-4 pt-[22px] pb-[23px] bg-stone-50 flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[521px] flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch h-[100px] flex-col justify-start items-start gap-3 flex">
            <div className="w-[361px] text-zinc-800 text-3xl font-bold font-['Noto Sans'] leading-[33px]">
              Military-grade Data Security
            </div>
            <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
              Your data is yours and yours ONLY!
            </div>
          </div>
          <div className="h-[389px] flex-col justify-start items-start gap-8 flex">
            <div className="w-[361px] justify-start items-start gap-4 inline-flex">
              <div className="w-16 h-16 relative">
                <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-100 rounded-full">
                  <Image src="/GDPR.png" width={64} height={64} />
                </div>
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
            <div className="w-[361px] justify-start items-start gap-4 inline-flex">
            <div className="w-16 h-16 relative">
                <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-100 rounded-full">
                  <Image src="/HIPAA.png" width={64} height={64} />
                </div>
              </div>
              <div className="w-[293px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                  HIPAA compliance
                </div>
                <div className="self-stretch text-zinc-600 text-base font-normal font-['Noto Sans'] leading-snug">
                  Secures your clients' medical info, fostering trust in your
                  brand and your services.
                </div>
              </div>
            </div>
            <div className="w-[361px] justify-start items-start gap-4 inline-flex">
              <div className="w-16 h-16 relative">
                <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-100 rounded-full">
                  <Image src="/PCIDSS.png" width={64} height={64} />
                </div>
              </div>
              <div className="w-[293px] flex-col justify-start items-start gap-2 inline-flex">
                <div className="self-stretch text-zinc-800 text-xl font-semibold font-['Noto Sans']">
                  PCI DSS compliance
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
    </>
  );
};

export default SectionFive;
