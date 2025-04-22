
// This file serves as a simple CMS for the portfolio site
// All content is centralized here for easy management

// Timeline data
export interface TimelineItemProps {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  tags?: string[];
  type: 'job' | 'freelance' | 'education';
}

export const timelineData: TimelineItemProps[] = [
  {
    id: 1,
    year: '2023 - 2025',
    title: 'Senior UX Designer',
    company: 'Tech Innovation Co.',
    description: 'Led the design system initiative across multiple product lines, resulting in 40% faster design implementation and improved product consistency.',
    tags: ['Design Systems', 'UX Research', 'Team Leadership'],
    type: 'job'
  },
  {
    id: 2,
    year: '2021 - 2023',
    title: 'UX Design Lead',
    company: 'Digital Solutions Inc.',
    description: "Managed a team of 4 designers working on the company's flagship product, increasing user satisfaction scores by 35%.",
    tags: ['Product Design', 'User Testing', 'Management'],
    type: 'job'
  },
  {
    id: 3,
    year: '2020 - 2021',
    title: 'Freelance UX Consultant',
    company: 'Various Clients',
    description: 'Provided UX consultancy for startups and established businesses in fintech and healthcare sectors.',
    tags: ['Consulting', 'UI Design', 'Prototyping'],
    type: 'freelance'
  },
  {
    id: 4,
    year: '2018 - 2020',
    title: 'UX/UI Designer',
    company: 'Creative Agency XYZ',
    description: 'Designed user interfaces for web and mobile applications across diverse industries including e-commerce and education.',
    tags: ['Mobile Design', 'User Flows', 'Wireframing'],
    type: 'job'
  },
  {
    id: 5,
    year: '2015 - 2018',
    title: 'Product Designer',
    company: 'Mobile App Startup',
    description: 'Was part of the core team that designed and launched a health tracking app with over 500,000 downloads in its first year.',
    tags: ['Mobile App Design', 'Interaction Design', 'Analytics'],
    type: 'job'
  },
  {
    id: 6,
    year: '2012 - 2015',
    title: 'UI Designer',
    company: 'Web Design Studio',
    description: 'Created responsive web designs for small to medium-sized businesses with a focus on improving conversion rates.',
    tags: ['Web Design', 'Responsive Design', 'CSS'],
    type: 'job'
  },
  {
    id: 7,
    year: '2010 - 2012',
    title: 'Junior Designer',
    company: 'Marketing Agency',
    description: 'Assisted senior designers with creating visual assets for digital marketing campaigns.',
    tags: ['Visual Design', 'Brand Design', 'Marketing'],
    type: 'job'
  },
  {
    id: 8,
    year: '2008 - 2010',
    title: 'Design Internship',
    company: 'Design Studio',
    description: 'Supported the design team with various projects while learning fundamental design principles and tools.',
    tags: ['Design Fundamentals', 'Adobe Suite', 'Typography'],
    type: 'education'
  }
];

// Project data
export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

export const projectsData: ProjectProps[] = [
  {
    id: 1,
    title: "Mobile Banking App Redesign",
    description: "A complete overhaul of a banking app focusing on simplifying the user journey and improving accessibility.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Mobile", "Fintech", "UX Research"],
    featured: true
  },
  {
    id: 2,
    title: "E-commerce Website",
    description: "Redesigned user interface for an e-commerce platform, resulting in 40% increase in conversion rates.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Web", "E-commerce", "UI Design"]
  },
  {
    id: 3,
    title: "Health Tracking Dashboard",
    description: "A dashboard design for health professionals to monitor patient vitals and medication adherence.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Dashboard", "Healthcare", "Data Visualization"]
  },
  {
    id: 4,
    title: "Travel Booking App",
    description: "Created a seamless booking experience for a travel app, focusing on simplifying the complex checkout process.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    tags: ["Mobile", "Travel", "UX Design"]
  }
];

// Hero section content
export const heroContent = {
  title: {
    highlight: "UX/UI Designer",
    line1: "Making Impactful",
    line2: "Experiences",
  },
  description: "I've been a designer in the field since 2012, mostly as a full-stack UX Designer. I'm experienced, and love, everything from everyday design work in Figma to lead roles with a particular interest in design systems, value creation, user needs analysis, product ecosystems and design processes.",
  profileImage: "" // You can add a URL to your profile image here
};

// About section content
export const aboutContent = {
  headline: "I'm a UX/UI Designer passionate about creating meaningful digital experiences",
  paragraphs: [
    "With over 5 years of experience in the digital design industry, I've had the opportunity to work with various clients from startups to established enterprises. My approach combines user-centered design principles with business goals to create solutions that are both functional and beautiful.",
    "I believe that great design is not just about how things look, but how they work. My process involves deep user research, iterative design, and constant validation to ensure that the final product truly meets user needs.",
    "When I'm not designing, you can find me exploring new design trends, attending UX workshops, or mentoring aspiring designers."
  ],
  skills: [
    { 
      name: 'User Research', 
      icon: 'User', 
      description: 'Conducting user interviews, usability testing, and creating personas' 
    },
    { 
      name: 'UI Design', 
      icon: 'Palette', 
      description: 'Creating wireframes, mockups, and high-fidelity prototypes' 
    },
    { 
      name: 'Front-end Development', 
      icon: 'Code', 
      description: 'Translating designs into HTML, CSS, and JavaScript' 
    },
    { 
      name: 'Collaboration', 
      icon: 'Users', 
      description: 'Working effectively with cross-functional teams' 
    }
  ],
  awards: [
    {
      name: 'Design Excellence Award',
      description: 'Recognized for outstanding contribution to user experience design',
      icon: 'Award'
    }
  ]
};

// Section descriptions
export const sectionDescriptions = {
  projects: "A showcase of my recent design projects spanning various industries and platforms.",
  timeline: "A chronological journey through my professional career, showcasing key positions and projects that have shaped my expertise as a designer."
};
