
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
