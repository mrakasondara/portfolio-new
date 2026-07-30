import {
  RiTailwindCssFill,
  RiNextjsFill,
  RiSupabaseFill,
} from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiWebpack, SiMongodb, SiShadcnui } from "react-icons/si";
export const portfolioItems = [
  {
    image: "/portfolio/padel-point.png",
    title: "Padel Point",
    desc: "Padel Point is a web-based padel court booking application that allows users to view court availability, make reservations, and manage transactions easily..",
    githubUrl: "https://github.com/mrakasondara/padel-point",
    deployUrl: "https://padel-point.netlify.app/",
    techStack: [
      {
        name: "nextjs",
        component: RiNextjsFill,
      },
      {
        name: "tailwindcss",
        component: RiTailwindCssFill,
        className: "text-blue-500",
      },
      {
        name: "shadcn",
        component: SiShadcnui,
      },
      {
        name: "mongodb",
        component: SiMongodb,
        className: "text-green-600",
      },
      {
        name: "supabase",
        component: RiSupabaseFill,
      },
      {
        name: "midtrans",
      },
    ],
  },
  {
    image: "/portfolio/arthavo.jpeg",
    title: "Arthavo",
    desc: "Arthavo Finance App is a web-based financial management application that helps users record income, expenses, subscriptions, and monitor financial conditions in real-time with a modern and responsive display.",
    githubUrl: "https://github.com/mrakasondara/finance-app",
    deployUrl: "https://arthavo.netlify.app/",
    techStack: [
      {
        name: "nextjs",
        component: RiNextjsFill,
      },
      {
        name: "tailwindcss",
        component: RiTailwindCssFill,
        className: "text-blue-500",
      },
      {
        name: "shadcn",
        component: SiShadcnui,
      },
      {
        name: "mongodb",
        component: SiMongodb,
        className: "text-green-600",
      },
      {
        name: "supabase",
        component: RiSupabaseFill,
      },
    ],
  },
];
