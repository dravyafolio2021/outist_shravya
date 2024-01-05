import Image from "next/image";
import { AffiliateLogo } from "../../../Constants/Professionale/CarouselContent";
import {
  AffiliateFive,
  AffiliateFour,
  AffiliateOne,
  AffiliateThree,
  AffiliateTwo,
} from "../../../../public/Professionale";

const AffiliatedSection = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] h-auto py-8 px-4 bg-white flex-col justify-center items-center gap-2.5 inline-flex">
          <div className="h-[241px] flex-col justify-center items-start gap-[10px]">
            {/* Text Content */}
            <div className="w-full">
              <span className="text-gray-600 text-xl md:text-2xl font-semibold font-sans">
                Crafted with love and profound respect for the{" "}
                <span className="text-blue-600">
                  great outdoors and the incredible local communities{" "}
                </span>
                that make our journeys safe and unforgettable!
              </span>
            </div>

            {/* Affiliated with */}
            <div className="w-full py-[4px] text-gray-600 text-base md:text-lg font-normal font-sans">
              Proudly affiliated with
            </div>

            {/* Logos */}
            <div className="flex flex-col h-16 gap-2">
              <div className="w-16 h-16 flex flex-row rounded-fullrelative">
                <Image
                  width={64}
                  height={64}
                  className="w-16 h-16 opacity-90 rounded-xl"
                  src={AffiliateOne}
                  alt="Placeholder"
                />
                <Image
                  width={64}
                  height={64}
                  className="w-16h-16 opacity-90 rounded-xl"
                  src={AffiliateTwo}
                  alt="Placeholder"
                />
                <Image
                  width={64}
                  height={64}
                  className="w-16h-16 opacity-90 rounded-xl"
                  src={AffiliateThree}
                  alt="Placeholder"
                />
                <Image
                  width={64}
                  height={64}
                  className="w-16h-16 opacity-90 rounded-xl"
                  src={AffiliateFour}
                  alt="Placeholder"
                />
                <Image
                  width={64}
                  height={64}
                  className="w-16h-16 opacity-90 rounded-xl"
                  src={AffiliateFive}
                  alt="Placeholder"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AffiliatedSection;
