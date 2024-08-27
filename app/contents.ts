import {
  faBookOpenReader,
  faCode,
  faFile,
  faLayerGroup,
  faList,
  faMicrochip,
  faPenRuler,
  faRoute,
  faUser,
  faVialCircleCheck,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { SidebarItemType } from "./components/sidebar/SidebarItem";

export const navigation: SidebarItemType[] = [
  { icon: faUser, route: "about", title: "Who am I" },
  { icon: faFile, route: "experience", title: "Work Experience" },
  { icon: faCode, route: "code", title: "Code" },
  { icon: faPenRuler, route: "hobby", title: "Hobby" },
];

/**
 * @param {string} title The title displayed on the card
 * @param {string} subtitle optional, the subtitle displayed on the card beneath the title with smaller font size
 * @param {string} description The paragraph displayed on the card
 * @param {IconDefinition} faIcon optional, the icon to show on the top right corner
 */
type CardDataType = {
  title: string;
  description: string;
  subtitle?: string;
  faIcon?: IconDefinition;
};

export const devotionData = [
  {
    title: "Write Readable Code",
    description:
      "Code should not only produce expected results, but also be easy for other developers to read. I have practiced and emphasized on producing good quality code, including breaking down complex components, extracting out duplicate codes, writing detailed documentations, using descriptive variable names, and so on.",
    faIcon: faBookOpenReader,
  },
  {
    title: "Make Reasonable Choice",
    description:
      "Every choice we make shapes the outcome. The choice we make might not produce the best outcome, but I want to make sure that it is a reasonable one by the time we make it. Throughout our career, we need to make decisions on problems such as which library to use, which user interface design to adopt and so on, and I learn reasons for each of them.",
    faIcon: faRoute,
  },
  {
    title: "Apply Recent Technology",
    description:
      "We have been programming with high-level programming languages that are easier for us to read and write, and on top of that, people are constantly developing useful libraries that produce code with better readability, flexibility and client-side performance. I am in favor of applying the latest greatest pick of tech to the product for quicker and better development.",
    faIcon: faMicrochip,
  },
];

export const aboutData: CardDataType[] = [
  {
    title: "How Did I Enter CS?",
    description:
      " I have a life goal of making some valuable change on the society, and it is not specific to any area. Because of that I picked some Environmental Science project in my senior high school. After graduating from the senior high school, I came to the United States for higher education. When I talked to the Environmental Science professor for future path, the professor genuinely suggested me to try learning Computer Science as a tool, and that is how I got into Computer Science.",
  },
  {
    title: "My CS Education",
    description:
      "Over the four-year course of learning at Stanford University, I learned basics of programming language and UI/UX design, and I saw the opportunities in the real world which convinced me that I can change something with Computer Science. Seeing Computer Science as a tool like a wrench that helps me build stuff, I would like to help bring technology to any fields that could enjoy more convenience with tech.",
  },
  {
    title: "Precious Take-aways from My First Job",
    description:
      "After about five years of working at a start-up that works on a tech solution for traditional drayage industry, I gained more professionality in the front-end skill, but more importantly, I am fully aware that the tech industry is constantly changing and there are always something new and great emerging which can be applied to  make the products better.",
  },
  {
    title: "My Goal for Future",
    description:
      "I would like to work with some challenges and problems that give me chances to research and discover cool new stuff. I am also very thankful to my work experience that got me into good coding habits, and if possible I would like to pass what I have learned down to any new comers to the tech world. At the same time, I want to gain more professionality from more senior engineers and senior designers.",
  },
];

export const experienceData: CardDataType[] = [
  {
    title: "Collect user needs",
    description:
      "Graduated with the passion of bringing technology to traditional industries, I was introduced to the founder of Square 8 by my professor's friend. It was a startup that was just founded to develop a software solution for drayage industry. Although I did not have any knowledge about the drayage industry prior to the joining of the project, the founder shared his vision of future logistics industry operated on a better management software with me and I saw the value of this future. After joining the company, I started with learning about the basics of drayage industry, including industry terminologies and operation process. In addition to reading the textbook, I spent a lot more time sitting with operators in the parent logistics companies observing, asking and recording. From the user research, I learned the difficulties they had with the current management software and the current workflow process. With a better understanding their current situation, I started with drafting designs for products.",
  },
  {
    title: "Draft Designs",
    description:
      "The founder's vision started with a mobile app that facilitates drivers to communicate with their trucking management companies, and thus I started with drafting a flow chart and a set of mobile screen designs. As we talked to the operators from the parent logistics companies, we realized how old and stale their software platform is, and how hard it is to integrate mobile app data with the plaform. We were ambitious and decided to make a full container management platform alongside with the mobile app. Out target users groups were then extended to brokers, trucking management companies, drivers, and customers that give loads. I have collected needs from each of the user groups, drafted designs for the mobile app, operator web portal, and customer web portal, and regularly held meetings to get feedback from users.",
  },
  {
    title: "Setup Web App",
    description:
      "Because I had a preference on product design and front-end development, we found a senior backend engineer to start the project together. I worked closely with him to design workflow and database schema, and we picked Apollo GraphQL for implementing API. When we were in the process of recruiting, I wrote some of the resolvers on the middle tier with Golang, but soon I got my feet off from this ground and jumped into mobile app development.",
  },
  {
    title: "Setup Mobile App",
    description:
      "I started with programming a useable Android app with Kotlin which went through a field test with a driver from the parent trucking management company. Later we decided to make a lite version so that it can be put in use faster, and therefore we designed a second version of mobile app with fewer but essential functions, and I developed an iOS app with SwiftUI. The product manager introduced some contractor who had experience in iOS app development to help me with any problems I had. The mobile app was mostly done after some time, but the web management platform was far from complete. I moved to the web application team to help with the plaform and I decided to stay there. 2~3 years later the Android mobile app got picked up by a full-stack engineer before we were about to launch the plaform.",
  },
  {
    title: "Professionality in Web",
    description:
      "As our product scope became larger, we kept adding new members to our team. We had senior engineers, product managers, and executive members joining us, providing a lot of valuable insights and advice to the team. I gradually moved to web application development and decided to be more professional with my front-end skill. When I gradudated from the university, I was able to draw, organize and code to make something that I want, but I lack professionality in these skills. While working with our senior product manager, senior UX designer and leading frontend engineer, I learned how to systematically define design tokens and components, organize designs on Figma, and more importantly, care for code quality and client-side web performance. ",
  },
  {
    title: "Ending of the Project",
    description:
      "Unfortunately even though we had already developed a product that is operational, right before Beta release Square 8 was ordered to shut down by the boss of the parent logisitic company in July 2024 as our project lost his trust, and without the support of parent logisitics company, we as a technology solution lost the foundation of operational expertise of managing the person on the ground to do the work. We had a great team and I had so much takeaways from this precious experience. The front-end work experience at Square 8 had a great impact on me - it brought me into the world of React and Typescript, it got me into the habit of writing readable code by decomponentizing the code and well-structuring the repository, and on top of that, it taught me how to research and find the solutions for the problems we had at work.",
  },
];

export const codeData: CardDataType[] = [
  {
    title: "Apollo GraphQL",
    subtitle: "API",
    description:
      "Apollo GraphQL is a modern API platform. It has many advantages over older API platforms which you can find on their website, but the reason I am very fond of GraphQL is how much boilerplate code it can reduce. With GraphQL I just query what I want with very little syntax that I need to follow. I helped set up the middle tier on the first year, and I have worked on the front-end side with GraphQL for over 4 years.",
    faIcon: faLayerGroup,
  },
  {
    title: "Playwright",
    subtitle: "Testing",
    description:
      "Because Square 8 was a small team, I had written quite a few tests for automate testing. We started with Cypress as testing tool, but as we were constantly improving our codebase, we the front-end team, refactored the testing files from Cypress to Playwright. We looked at the Playwright documents and played with it for a week, and we all prefer Playwright. I liked Playwright a lot because it has a much better readability and eaiser tracing.",
    faIcon: faVialCircleCheck,
  },
  {
    title: "react-hook-form",
    subtitle: "UI Component",
    description:
      "I had experience with many react component libraries that helped the company build the management platform quicker and easier. We dealt with forms and tables for most of the time, and therefore I had extensive experience in react-hook-form. We picked react-hook-form because it is performant, flexible and extensible. We had been using their validation for about 2~3 years, but in the end we switched to zod schema as we have defined more custom types on our backend side.",
    faIcon: faList,
  },
];
