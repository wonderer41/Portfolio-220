import next from "next";

export const skills = [
  { name: "HTML", proficiency: 50, icon: "/SkillsWidget/html5.svg" },
  { name: "Tailwind CSS", proficiency: 75, icon: "/SkillsWidget/tailwind.svg" },
  { name: "React", proficiency: 70, icon: "/SkillsWidget/react.png" },
];

export const work = [
  {
    logo: "/WorkWidget/jpmorgann.png",
    organization: "JPMorgan Chase & Co.",
    jobTitle: "Senior Software Engineer",
    startYear: 2030,
    endYear: null,
  },
  {
    logo: "/WorkWidget/ai1.png",
    organization: "OpenAI",
    jobTitle: "Senior Software Engineer",
    startYear: 2028,
    endYear: 2030,
  },
  {
    logo: "/WorkWidget/Steam_icon_logo.svg.png",
    organization: "Steam",
    jobTitle: "Junior Software Engineer",
    startYear: 2026,
    endYear: 2027,
  },
  {
    logo: "/WorkWidget/microsoft.png",
    organization: "Microsoft",
    jobTitle: "Junior Software Engineer",
    startYear: 2025,
    endYear: 2026,
  },
];

export const footerLinks = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Uses",
    url: "/uses",
  },
];

export const navOptions = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/uses", label: "Uses" },
  { path: "/about", label: "About" },
];

export const socialLinks = [
  { icon: "/SocialLinks/github.svg", link: "https://github.com/wonderer41" },
  { icon: "/SocialLinks/linkedin.svg", link: "https://www.linkedin.com/in/gerardo-lazo-arones-657665218/" },
  { icon: "/SocialLinks/twitter.svg", link: "https://twitter.com" },
];

export const articleList = [
  {
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
    link: "/articles/my-first-article",
  },
  {
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
    link: "/articles/my-second-article",
  },
  {
    date: "December 25, 2023",
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue...",
    link: "/articles/my-third-article",
  },
];

export const workstationList = [
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
];
export const developmentList = [
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
];
export const designList = [
  {
    title: "Whimsical",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Figma",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
];
export const productivityList = [
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
  {
    title: "Item Name",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.",
  },
];

export const projectList = [
  {
    logo: "/ProjectCard/company.svg",
    name: "Company",
    content: "Creating technology to empower civilians to explore space on their own terms.",
    link: "https://company.com",
  },
  {
    logo: "/ProjectCard/company.svg",
    name: "Company",
    content: "Creating technology to empower civilians to explore space on their own terms.",
    link: "https://company.com",
  },
  {
    logo: "/ProjectCard/company.svg",
    name: "Company",
    content: "Creating technology to empower civilians to explore space on their own terms.",
    link: "https://company.com",
  },
  {
    logo: "/ProjectCard/company.svg",
    name: "Company",
    content: "Creating technology to empower civilians to explore space on their own terms.",
    link: "https://company.com",
  },
  {
    logo: "/ProjectCard/company.svg",
    name: "Company",
    content: "Creating technology to empower civilians to explore space on their own terms.",
    link: "https://company.com",
  },
  {
    logo: "/ProjectCard/company.svg",
    name: "Company",
    content: "Creating technology to empower civilians to explore space on their own terms.",
    link: "https://company.com",
  },
];
