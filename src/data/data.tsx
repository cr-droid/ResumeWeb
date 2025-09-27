import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  //BuildingOffice2Icon,
  // CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header3.webp';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/cpu.jpg';
// import testimonialImage from '../images/testimonial.webp';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  // PortfolioItem,
  SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
  Project,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  // Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  // Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Christian Ruiz.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hi! I earned my Bachelor’s degree in <strong className="text-stone-100"> Computer Science</strong> from <strong className="text-stone-100"> UC Riverside</strong>, where 
        I built a strong foundation in software development and computing. I’m now diving into <strong className="text-stone-100"> IT and Cybersecurity</strong> through an 
        Associate’s degree program at my community college, while also pursuing CompTIA certifications to gain hands-on skills and stay current with the latest in the field.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me going to the <strong className="text-stone-100">gym</strong>, spending time with <strong className="text-stone-100">family and friends</strong>, 
        watching <strong className="text-stone-100">NBA & NFL</strong>, or <strong className="text-stone-100">coding</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/1Ds2Shr14DvrPwcC9s1hJMaJ8_2qetMTHknc6gN6Gnvo/edit?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am the first person in my family to graduate from a university. Both of my parents are Mexican, which makes me Chicano. 
  My interest in computers began at a young age when I received my first laptop at 10. By 16, I had built my own PC using money I saved from 
  yard work and household chores. Around the same time, I took AP Computer Science Principles, which deepened my passion for technology and 
  inspired me to pursue a degree in Computer Science. During my studies at UCR, I became particularly fascinated by cybersecurity, which led 
  me to pursue a degree in IT Cybersecurity. Outside of academics, I enjoy following the NBA, NFL, and occasionally MLB, and I spend most of 
  my free time at the gym or exploring new technologies.`,
  aboutItems: [
    {label: 'Location', text: 'Moreno Valley, CA', Icon: MapIcon},
    {label: 'Nationality', text: 'US Citizen', Icon: FlagIcon},
    {label: 'Interests', text: 'Electronics, Powerbuilding, Sneakerhead, Cars', Icon: SparklesIcon},
    {label: 'Study', text: 'University of California, Riverside', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 9,
      },
    ],
  },
  {
    name: 'Programming Languages:',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'C/C++',
        level: 10,
      },
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'LC-3',
        level: 9,
      },
      {
        name: 'SQL',
        level: 8,
      },
      {
        name: 'JavaScript',
        level: 6,
      },
    ],
  },
  {
    name: 'Operating systems:',
    skills: [
      {
        name: 'Windows',
        level: 10,
      },
      {
        name: 'Linux',
        level: 9,
      },
      {
        name: 'MacOS',
        level: 9,
      },
    ],
  },
];

// /**
//  * Portfolio section
//  */
// export const portfolioItems: PortfolioItem[] = [
//   {
//     title: 'Project title 1',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage1,
//   },
//   {
//     title: 'Project title 2',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage2,
//   },
//   {
//     title: 'Project title 3',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage3,
//   },
//   {
//     title: 'Project title 4',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage4,
//   },
//   {
//     title: 'Project title 5',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage5,
//   },
//   {
//     title: 'Project title 6',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage6,
//   },
//   {
//     title: 'Project title 7',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage7,
//   },
//   {
//     title: 'Project title 8',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage8,
//   },
//   {
//     title: 'Project title 9',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage9,
//   },
//   {
//     title: 'Project title 10',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage10,
//   },
//   {
//     title: 'Project title 11',
//     description: 'Give a short description of your project here.',
//     url: 'https://reactresume.com',
//     image: porfolioImage11,
//   },
// ];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Expected December 2027',
    location: 'Moreno Valley College',
    title: 'AS, IT Cybersecurity',
    content: <p></p>,
  },
  {
    date: 'September 2024',
    location: 'University of California Riverside, Riverside CA',
    title: 'BS, Computer Science',
    content: <p></p>,
  },
  {
    date: 'July 2022',
    location: 'Moreno Valley College',
    title: 'AS, Math & Science',
    content: <p></p>,
  },
];

export const experience: Project[] = [
  {
    title: 'SIEM Log Monitoring & Threat Detection',
    content: (
      <ul>
        <li>• Deployed the Elastic Stack (Elasticsearch, Logstash, Kibana, Filebeat) on Ubuntu to build a custom SIEM solution.</li>
        <li>• Ingested and normalized system logs and CSV-based event data into Elasticsearch for structured analysis and correlation.</li>
        <li>• Configured Logstash pipelines and created Kibana dashboards to detect authentication failures, malware activity, and high-priority alerts.</li>
        <li>• Strengthened incident visibility by developing queries and visualizations to identify security trends and suspicious activity.</li>
      </ul>
    ),
  },
  {
    title: 'Crime Database System',
    content: (
      <ul>
        <li>• Preprocessed 22 million records of police crimes across five major cities (LA, Chicago, NYC, Austin, Philly) using Python scripts in PySpark, and stored the data in MySQL for efficient management</li>
        <li>• Leveraged Node.js to retrieve and streamline the integration of large-scale datasets from MySQL, ensuring smooth data delivery and support for front-end development</li>
      </ul>
    ),
  },
  {
    title: 'Flight Booking System',
    content: (
      <ul>
        <li>• Developed a secure system for companies to store user login credentials, manage itineraries, and handle flight booking data efficiently</li>
        <li>• Enhanced user experience by enabling seamless itinerary management and providing convenient tools for storing, filtering, and updating flight booking data</li>
        <li>• Worked within a team of 4, utilizing Git and Github for version control</li>
      </ul>
    ),
  },
  {
    title: 'Simon Says',
    content: (
      <ul>
        <li>• Simon Says esque game using ATmega328P microcontroller (Arduino UNO) where light patterns are displayed on four LEDs in a cross patern</li>
        <li>• Used bit manipulation to initialize and control components such as an EEPROM, Joystick, LCD screen, Buzzer, and LEDs</li>
        <li>• User uses joystick to enter the pattern (choices are UP, LEFT, RIGHT, DOWN)</li>
        <li>• LCD screen displays game state</li>
        <li>• When powered off, EEPROM stores score data (highscore)</li>
      </ul>
    ),
  },
  {
    title: 'UCR Chatroom',
    content: (
      <ul>
        <li>• Developed a chat system using MongoDB to securely store user login credentials and efficiently manage chat data, using real-time communication and authentication processes within the application</li>
        <li>• Integrated Google Login to provide users with a seamless and secure alternative login method, enhancing the overall user experience</li>
      </ul>
    ),
  },
  {
    title: 'Book and Movie Collectors Website',
    content: (
      <ul>
        <li>• Developed a user-friendly website for collectors to catalog their book and movie collections, track owned items, identify missing pieces, and mark items as available for sale or trade, fostering user interaction and exchanges within the community</li>
        <li>• ntegrated social networking features that allow users to share reviews, ratings, and recent reads/views on their profiles, enhancing the community experience similar to platforms like MyAnimeList</li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I’m just a click away! Here’s how to connect.',
  items: [
    {
      type: ContactType.Email,
      text: 'chrisruiz8852@gmail.com',
      href: 'mailto:chrisruiz8852@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Moreno Valley, CA',
      href: 'https://www.google.com/maps/place/Moreno+Valley,+CA/@33.9216847,-117.3572359,11z/data=!3m1!4b1!4m6!3m5!1s0x80dca109db19e29b:0xc3fab215a09b3f2c!8m2!3d33.9424658!4d-117.2296717!16s%2Fm%2F01zjg7_?entry=ttu',
    },
    {
      type: ContactType.Github,
      text: 'cr-droid',
      href: 'https://github.com/cr-droid',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/cr-droid'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/christian-ruiz-581a761b8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B76aXVz91T%2BKmSz8cN1pQTQ%3D%3D'},
];
