import { GetStartedCTA, Hero, SectionEight, SectionFive, SectionFour, SectionNine, SectionSeven, SectionSix, SectionThree, SectionTwo } from "@/Components";
import { Header } from "@/Widgets";
import React from "react";

const LandingPagedoc = () => {
  return (
    <div>
      <Header />
      <Hero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionNine />
      <SectionSeven />
      <SectionEight />
      <SectionSix />
      <GetStartedCTA />
    </div>
  );
};

export default LandingPagedoc;
