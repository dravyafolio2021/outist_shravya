import {
  AffiliatedSection,
  CarouselWithTextGroup,
  CarouselWithTextGroupAndAuthor,
  GetStartedCTA,
  Hero,
  HowItWorks,
  OurPartners,
  OutistPledge,
  PromotionalSection,
  SecurityCard,
  SuccessStory,
} from "@/Components";

import { Header } from "@/Widgets";

const LandingPage = () => {
  return (
    <div className="w-full mt-16">

      {/* <Header /> */}
      <Hero />
      <CarouselWithTextGroup />
      <PromotionalSection />
      <HowItWorks />
      <SecurityCard />
      <OutistPledge />
      <CarouselWithTextGroupAndAuthor />
      <OurPartners />
      <AffiliatedSection />
      <SuccessStory />
      <GetStartedCTA />
    </div>
  );
};

export default LandingPage;
