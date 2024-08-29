import {
  faBookOpenReader,
  faCode,
  faFileLines,
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
  { icon: faFileLines, route: "experience", title: "Work Experience" },
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
      "Code should not only produce expected results but also be easy for other developers to read. I have practiced producing high-quality code by breaking down complex components, reducing duplicate code, writing detailed documentation, using descriptive variable names and so on.",
    faIcon: faBookOpenReader,
  },
  {
    title: "Make Reasonable Choice",
    description:
      "Every choice we make shapes the outcome. While our decisions may not always yield the best results, I strive to ensure that they are well-reasoned. Throughout a career in computer science, we need to make decisions on various issues, such as selecting a library to use and choosing a user interface design. I make an effort to understand the rationale behind each choice.",
    faIcon: faRoute,
  },
  {
    title: "Apply Recent Technology",
    description:
      "We have been programming with high-level languages that are easier to read and write. Additionally, developers are continuously creating useful libraries that enhance readability, flexibility, and client-side performance. I advocate for utilizing the latest and most effective technologies in our products to promote greater efficiency in development.",
    faIcon: faMicrochip,
  },
];

export const aboutData: CardDataType[] = [
  {
    title: "How Did I Enter CS?",
    description:
      "I have a life goal of making a meaningful impact on society, and it is not limited to any specific area. For this reason, I chose to work on an Environmental Science project in my senior high school. After graduating, I came to the United States for higher education. When I discussed my future path with my Environmental Science professor, he genuinely suggested that I consider learning Computer Science as a valuable tool. That is how I developed interested in Computer Science.",
  },
  {
    title: "My CS Education",
    description:
      "Over the course of four years at Stanford University, I developed a solid foundation in programming languages and UI/UX design. I became aware of the real-world opportunities that demonstrated the potential to drive change through computer science. I view computer science as a tool, similar to a wrench, that empowers me to create and integrate technology into various fields that could benefit from more convenience and efficiency.",
  },
  {
    title: "Precious Takeaways from Job",
    description:
      "After approximately five years of working at a start-up dedicated to developing technological solutions for the traditional drayage industry, I have significantly enhanced my front-end skills. More importantly, I have come to understand that the tech industry is constantly evolving, with new and innovative advancements emerging regularly that can be applied to improve products.",
  },
  {
    title: "My Goal for Future",
    description:
      "I prefer a work environment that presents challenges and problems, offering me opportunities for research and the discovery of the latest technological advancements. I am also grateful for my work experience, which has instilled in me good coding habits. I would like to share the knowledge I have acquired with newcomers to the tech industry. At the same time, I aim to enhance my professionalism by learning from more experienced engineers and designers.",
  },
];

export const experienceData: CardDataType[] = [
  {
    title: "Collect user needs",
    description:
      "Graduating with a passion for integrating technology into traditional industries, I was introduced to the founder of Square 8 by a friend of my professor. Square 8 was a startup focused on developing software solutions for the drayage industry. Although I had no prior knowledge of drayage before joining the project, the founder shared his vision for a future logistics industry powered by better management software, and I recognized the potential of this vision. Upon joining the company, I began by learning the fundamentals of the drayage industry, including key terminology and operational processes. In addition to studying textbooks, I dedicated significant time to observing operators at the parent logistics companies, where I watched their operational processes, asked questions, and took notes. Through this user research, I gained valuable insights into the challenges associated with the management software they were currently using. With a clearer understanding of their situation, I began drafting designs for new products.",
  },
  {
    title: "Draft Designs",
    description:
      "The founder's vision began with a mobile application designed to facilitate communication between drivers and their trucking management companies. I started by drafting a flowchart and a set of mobile screen designs. As we engaged with operators from the parent logistics companies, we recognized the outdated and inefficient nature of their container management software, as well as the difficulties in integrating our mobile application into this existing software. Driven by our ambition, we decided to develop a comprehensive container management platform alongside the mobile application. Our target user groups expanded to include brokers, trucking management companies, drivers, and customers who provide loads. I gathered user needs from each user group, created designs for the mobile app, operator web portal, and customer web portal, and regularly hosted meetings to obtain feedback from users.",
  },
  {
    title: "Setup Web App",
    description:
      "Due to my preference for product design and front-end development, we recruited a senior backend engineer to initiate the project together. I worked closely with him to design the workflow and database schema, and we chose Apollo GraphQL for implementing the API. During the recruitment process, I wrote some of the resolvers for the middle tier using Golang. After a few months I shifted my focus away from this area and transitioned into mobile app development.",
  },
  {
    title: "Setup Mobile App",
    description:
      "I began by developing a functional Android app using Kotlin, which underwent field testing with a driver from the parent trucking management company. Later, we decided to create a lite version to expedite its release. Consequently, we designed a second version of the mobile app with fewer but essential features, and I also developed an iOS version using SwiftUI. The product manager introduced me to a contractor experienced in iOS app development to assist with any problems I encountered. After some time, the mobile app was mostly ready for use, but the web application for container management was still far from usable. I transitioned to the web application team to contribute to the platform's development and chose to stay in the frontend team. Two to three years later, the Android mobile app was handed over to a full-stack engineer several months before we were set to launch the platform.",
  },
  {
    title: "Professionality in Web",
    description:
      "As our product scope expanded, we continued to add new members to our team. We welcomed senior engineers, product managers, and executive members who provided valuable insights and guidance. I gradually transitioned to web application development and committed to enhancing my front-end skills. Upon graduating from university, I was capable of drawing and coding to create what I envisioned; however, I lacked professionalism in these areas. While working with our senior product manager, senior UX designer, and leading front-end engineer, I learned how to systematically define design tokens and components, organize designs in Figma, and most importantly, care about code quality and client-side web performance.",
  },
  {
    title: "Ending of the Project",
    description:
      "Unfortunately, despite having developed an operational product, Square 8 was ordered to shut down just before the Beta release in July 2024 by the head of the parent logistics company due to a loss of trust in our project. Without the support of the parent logistics company, we, as a technology solution provider, lost the foundational operational expertise necessary for managing the person on the ground to do the work. We had a fantastic team, and I gained invaluable experience from this role. My front-end work at Square 8 had a significant impact on me. It introduced me to the world of React and TypeScript, instilled in me the habit of writing clean, readable code  through decomponentization and well-structured design, and, most importantly, taught me how to research and find solutions to the challenges we encountered at work.",
  },
];

export const codeData: CardDataType[] = [
  {
    title: "Apollo GraphQL",
    subtitle: "API",
    description:
      "Apollo GraphQL is a modern API platform that offers numerous advantages over traditional API platforms. One of the primary reasons I like GraphQL is its ability to significantly reduce boilerplate code. With GraphQL, I can query exactly what I need using minimal syntax. I assisted in setting up the middle tier in my first year and have been working on the front-end side with GraphQL for over four years.",
    faIcon: faLayerGroup,
  },
  {
    title: "Playwright",
    subtitle: "Testing",
    description:
      "Because Square 8 was a small team, I wrote several tests for automated testing. We initially used Cypress as our testing tool, but as we continuously improved our codebase, us the front-end team refactored the testing files from Cypress to Playwright. We read the Playwright documentation and experimented with it for a week, and we all preferred Playwright. I particularly appreciated Playwright because it offers much better code readability and easier tracing.",
    faIcon: faVialCircleCheck,
  },
  {
    title: "React Hook Form",
    subtitle: "UI Component",
    description:
      "I have experience with various React component libraries that have enabled the team to build the management platform more efficiently. We primarily worked with forms and tables, which provided me with extensive experience in using React Hook Form. We chose React Hook Form for its performance, flexibility, and extensibility. Although we utilized its validation feature for approximately 2 to 3 years, we ultimately switched to Zod schema as we defined more custom types on our backend.",
    faIcon: faList,
  },
];
