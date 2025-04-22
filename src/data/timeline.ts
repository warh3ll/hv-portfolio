
// Timeline data
export interface TimelineItemProps {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
  type: 'job' | 'freelance' | 'education' | 'personal project';
}

export const timelineData: TimelineItemProps[] = [
  {
    id: 1,
    year: '2022 - Current',
    title: 'UX/UI Lead',
    company: 'Abilia',
    description: "My role at Abilia is a multifaceted one. On the one hand, I'm still active in projects, mostly conceptual ones for exploring future product offerings based on insights and analysis of our user research. On the other hand, I'm leading the design work, developing the design system, mentoring our junior designers and making sure we focus on making things that create value for our users, be it end-users, staff, relatives and others around them. I'm active in meeting with customers and getting insights into problems we could solve for them. I created our design system from scratch that are now being used for all future products, it's a complex system that needs to be scalable across multiple platforms and multiple product suites.",
    tags: ['Product Design', 'Design Systems', 'Research', 'Medtech', 'UX Leadership', 'UX Writing', 'Product Ecosystems'],
    type: 'job'
  },
  {
    id: 2,
    year: '2022 - 2022',
    title: 'Senior Product Designer',
    company: 'Hiber',
    description: "At Hiber I worked on the Platform team, doing UX/UI design for the website and the app. I made expert reviews of both of these as well to be able to pinpoint some low and high effort usability, accessibility and flow suggestions to fix. I was the initiator and curator of the Design System at Hiber as well as design processes connected to that. Working together with devs to make it as easy as possible to use and utilize for all. I was part of setting up research and hypotheses around user behaviour groups for us to research more, making them an integral part of prioritizing our path forward in a meaningful way both for Hiber as a company but even more importantly for our users.",
    tags: ['Product Design', 'Design Systems', 'Gaming'],
    type: 'job'
  },
  {
    id: 3,
    year: '2021 - 2022',
    title: 'Senior UX Designer',
    company: 'Parkeringsbolaget',
    description: "Doing UX/UI design for the company portal at Parkeringsbolaget in Gothenburg. Focus is on improving the visual user experience as well as adapting existing and new features as we learn more on user behaviours. Creating components and pushing the design system forwards, as well as overhauling the design process.",
    tags: ['Product Design', 'Design Systems', 'Research', 'Visual Design', 'Consultant'],
    type: 'job'
  },
  {
    id: 4,
    year: '2021',
    title: 'Designer',
    company: 'Critical Showdown',
    description: "A personal passion project between myself and my brother. Critical Showdown is a free-to-play video game review score fantasy league type site. Users guess what review score video games will get at release and receive points for their picks. Players compete each quarter for having the 10 best picks!",
    tags: ['Product Design', 'Design Systems', 'Gaming', 'Side Project'],
    type: 'personal project'
  },
  {
    id: 5,
    year: '2020 - 2020',
    title: 'UX Designer',
    company: 'Inet',
    description: "During my time at Inet I led the design work for the new gamified customer club, I was also the project leader. I researched and developed a concept for a new CRM system to be built in-house. I did everything from research to impact mapping to creating a new design system.",
    tags: ['Product Design', 'Design Systems', 'Impact Mapping', 'eCommerce'],
    type: 'job'
  },
  {
    id: 6,
    year: '2019-2020',
    title: 'Senior UX Designer',
    company: 'ICA',
    description: 'Doing user research and impact mapping for the development of ICAs internal systems for franchisees. The research resulted on a foundation for the continued development of marketing management for store owners.',
    tags: ['Consultant', 'UX Research', 'Impact Mapping', 'Marketing'],
    type: 'job'
  },
  {
    id: 7,
    year: '2018 - 2018',
    title: 'UX Designer',
    company: 'Various',
    description: 'This year was wild with lots of different short consultancies. I worked with Svenska Spel (dashboard design), SurgicalScience (also dashboard design), Qmatic (visual design), and Volvo Penta (concept design of a virtual helm).',
    tags: ['Consultant', 'UI Design', 'Prototyping', 'Impact Mapping', 'Research'],
    type: 'job'
  },
  {
    id: 8,
    year: '2016 - 2017',
    title: 'UX Designer',
    company: 'Västtrafik',
    description: 'Västtrafiks website needed to enter a new generation, my role as a UX Designer in this project was both for user research -- primarily usability testing -- and interaction design. Through 6 major testing periods and continuous small scale testing I could verify the user needs and goals and convert them to design improvements at a quick pace.',
    tags: ['Responsive Design', 'Usability Testing', 'Interaction Design', 'Consultant'],
    type: 'job'
  },
  {
    id: 9,
    year: '2015 - 2016',
    title: 'UX Designer',
    company: 'AstraZeneca',
    description: 'As a UX Designer I participated in projects concerning smart companion applications to help patients manage their asthma and to give their doctor a better view of their health status.',
    tags: ['Medtech', 'Product Design', 'Usability Testing', 'Hardware Design', 'Consultant'],
    type: 'job'
  },
  {
    id: 10,
    year: '2014 - 2015',
    title: 'UX Designer',
    company: 'Volvo Car Retail Solutions',
    description: 'Designed the sales management web platform for Volvo retailers and a concept design for the new workshop management system.',
    tags: ['Consultant', 'Sketch', 'UXPin', 'Research'],
    type: 'job'
  },
  {
    id: 11,
    year: '2014 - 2022 (except 2020)',
    title: 'UX Designer/Senior UX Designer',
    company: 'inUse Experience',
    description: 'For 7 years I worked at inUse (RIP) together with about 100 other excellent designers, I learned so much from them, and the company really wanted to make us grow during all those years. I feel priviliged to have been part of that.',
    tags: ['Design Bureau'],
    type: 'job'
  },
  {
    id: 12,
    year: '2012 - 2014',
    title: 'Support Tech/Designer',
    company: 'CompuGroup Medical',
    description: 'User experience design and user research for an electronic health record (EHR) system. I also programmed some custom reports and certificates for customers.',
    tags: ['Research', 'Medtech'],
    type: 'job'
  },
  {
    id: 13,
    year: '2008 - 2011',
    title: 'Bachelor of Informatics (Interaction Design)',
    company: 'Linnaeus University',
    description: 'I spent three years in the small city of Kalmar on the east coast of Sweden studying interaction design, as it was called then! I still prefer that term to be honest.',
    tags: ['University'],
    type: 'education'
  }
];
