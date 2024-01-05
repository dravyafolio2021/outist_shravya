import {
  AffiliateFive,
  AffiliateFour,
  AffiliateOne,
  AffiliateThree,
  AffiliateTwo,
  CardImage1,
  CardImage2,
  CardImage3,
  CardImage4,
  CardImage5,
  Corporate,
  People,
} from "../../../public/Professionale/index";

const ParentContent = {
  Main: {
    Heading: "Big On Efficiency, Ultra-Low On Cost",
    BodyText:
      "7 benefits make O Professionalé the best personal assistant you will EVER have!",
  },
  Card: [
    {
      id: 1,
      Title: "Efficiency",
      BodyText:
        "O Professionalé is a personal assistant that will help you run your business efficiently and effectively.",
      image: CardImage1,
    },
    {
      id: 2,
      Title: "Security",
      BodyText:
        "Our platform ensures your data is secure and protected at all times, giving you peace of mind.",
      image: CardImage2,
    },
    {
      id: 3,
      Title: "Simplicity",
      BodyText:
        "Simplify your daily tasks with our user-friendly interface, designed for ease of use.",
      image: CardImage3,
    },
    {
      id: 4,
      Title: "Versatility",
      BodyText:
        "Adaptability is key. Our system is versatile enough to meet your unique business needs.",
      image: CardImage4,
    },
    {
      id: 5,
      Title: "Reliability",
      BodyText:
        "Count on us for reliable service, ensuring your business operations are always on track.",
      image: CardImage5,
    },
  ],

  SuccessStory: [
    {
      id: 1,
      Title: "Reliability",
      BodyText:
        "Count on us for reliable service, ensuring your business operations are always on track.",
      image: CardImage5,
    },
  ],
};

export default ParentContent;

export const Logo = {
  AffiliateLogo: [
    {
      id: 1,
      image: AffiliateOne,
    },
    {
      id: 2,
      image: AffiliateTwo,
    },
    {
      id: 3,
      image: AffiliateThree,
    },
    {
      id: 4,
      image: AffiliateFour,
    },
    {
      id: 5,
      image: AffiliateFive,
    },
  ],
};

export const MyAccountData = {
  AccountIcon: {
    CreateAccountIconsOne: Corporate,
    CreateAccountIconsTwo: People,
  },
};
