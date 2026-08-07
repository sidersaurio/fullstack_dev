import { Project, Talk } from "@/types/about";

export const MOCK_PROJECTS: Project[] = [
    {
        id: "1",
        title: "E-commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores, built with Next.js and Tailwind CSS.",
        link: "#",
    },
    {
        id: "2",
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates using WebSockets.",
        link: "#",
    },
    {
        id: "3",
        title: "Finance Tracker",
        description: "Personal finance tracking application with data visualization charts.",
        link: "#",
    },
    {
        id: "4",
        title: "Social Media Analytics",
        description: "Analytics tool for tracking engagement across multiple social platforms.",
        link: "#",
    },
];

export const MOCK_TALKS: Talk[] = [
    {
        id: "1",
        title: "Building Scalable React Apps",
        excerpt: "Strategies and patterns for maintaining large codebases and ensuring performance at scale.",
        link: "#",
    },
    {
        id: "2",
        title: "The State of Web Accessibility",
        excerpt: "Why accessibility matters more than ever and how to implement it in your workflow.",
        link: "#",
    },
];
