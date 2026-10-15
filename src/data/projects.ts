
// Project data
export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

// Add cases here. The example cases Lovable generated were removed; the Case section shows a
// "coming soon" note while this list is empty.
export const projectsData: ProjectProps[] = [];
