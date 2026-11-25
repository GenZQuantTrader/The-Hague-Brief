export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  expandedBio: string;
  focusAreas: string[];
  featuredWork: string;
  contactHandle: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "amaka-eze",
    name: "Amaka Eze",
    role: "Editor-in-Chief",
    photo: "/images/amaka.jpg",
    bio: "Leads editorial vision, magazine curation, and special investigative features across Frontiers.",
    expandedBio:
      "With over a decade in independent publishing and investigative reporting, Amaka oversees Frontiers' quarterly magazine editions, editorial standards, and cover commissions.",
    focusAreas: ["Investigative Features", "Quarterly Editions", "Editorial Strategy"],
    featuredWork: "Inside the Modern Newsroom",
    contactHandle: "amaka@frontiers.example",
  },
  {
    id: "david-mensah",
    name: "David Mensah",
    role: "Managing Editor",
    photo: "/images/david.jpg",
    bio: "Oversees daily articles, opinion columns, and contributor partnerships.",
    expandedBio:
      "David coordinates the day-to-day newsroom workflow, works closely with regular columnists and guest essayists, and ensures every story meets Frontiers' clarity and depth standards.",
    focusAreas: ["Opinion Columns", "Contributor Network", "Daily Reporting"],
    featuredWork: "Building Institutions That Outlast Trends",
    contactHandle: "david@frontiers.example",
  },
  {
    id: "ngozi-balogun",
    name: "Ngozi Balogun",
    role: "Creative & Publications Director",
    photo: "/images/ngozi.jpg",
    bio: "Directs visual identity, magazine layouts, and downloadable digital editions.",
    expandedBio:
      "Ngozi shapes the visual craft of Frontiers—uniting typography, print-inspired layout pacing, and downloadable PDF editions into a cohesive reading experience.",
    focusAreas: ["Publication Design", "PDF Editions", "Visual Identity"],
    featuredWork: "The Value of Slow Journalism",
    contactHandle: "ngozi@frontiers.example",
  },
];