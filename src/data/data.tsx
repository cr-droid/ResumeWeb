import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  //BuildingOffice2Icon,
  CalendarIcon,
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
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/cpu.jpg';
import testimonialImage from '../images/testimonial.webp';

import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
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
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
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
        I'm a recent <strong className="text-stone-100">UCR gradaute</strong>, bachelor's in 
         <strong className="text-stone-100"> Computer Science</strong>. I am a 2nd generation immigrant and I 
         hope to empower my family into believing that they too can graduate university and get into fields 
         that seem intimidating to be successful in.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me going to the <strong className="text-stone-100">gym</strong>,
        spending time with <strong className="text-stone-100">family and friends</strong>, or going on adventures with {' '}
        <strong className="text-stone-100">nature</strong>.
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
  description: `I am the first person in my family to graudate from a university. Both my parents are Mexican, which makes me a 
  Chicano. I developed my interest in computers at an early age, when I received my first laptop at 10 years old. I later built
  my own PC at 16, with money I saved up from doing yardwork and chores. During this time, I was also in AP computer sicence principles,
  which strengthened my liking of computers. And I eventually decided to pursue an education in computer science. I like to watch the NBA,
  NFL, and occassionally MLB. I spend most of my free time going to the gym or learning about new technologies.`,
  aboutItems: [
    {label: 'Location', text: 'Moreno Valley, CA', Icon: MapIcon},
    {label: 'Age', text: '22', Icon: CalendarIcon},
    {label: 'Nationality', text: 'US Citizen', Icon: FlagIcon},
    {label: 'Interests', text: 'Electronics, Powerbuilding, Sneakerhead', Icon: SparklesIcon},
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
        name: 'C++',
        level: 10,
      },
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'Python',
        level: 9,
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
        name: 'C#',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 5,
      },
    ],
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2022',
    location: 'Moreno Valley College',
    title: 'AS Math & Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'May 2024',
    location: 'University of California Riverside, Riverside CA',
    title: 'B.S Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: Project[] = [
  {
    title: 'Flight Booking System',
    content: (
      <p>
        Took care of user credential confidentiality by encrypting and decrypting user login information as necessary. Also updated and stored booked flight data 
        for each user's itinerary. Also stored, filtered and updated flight data.
      </p>
    ),
  },
  {
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
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
