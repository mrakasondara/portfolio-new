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
  {
    image: "/portfolio/titikgame.png",
    title: "TitikGame",
    desc: "Titik Game is a blog that discusses various aspects of the gaming world, including the latest game reviews, tips and tricks, and game guides.",
    githubUrl: "https://github.com/mrakasondara/Blog-Titik-Game",
    deployUrl: "https://blog-titikgame.vercel.app/",
    techStack: [
      {
        name: "reactjs",
        component: FaReact,
        className: "text-blue-700",
      },
      {
        name: "tailwindcss",
        component: RiTailwindCssFill,
        className: "text-blue-500",
      },
      {
        name: "mongodb",
        component: SiMongodb,
        className: "text-green-600",
      },
      {
        name: "expressjs",
        component: SiExpress,
      },
    ],
  },
  {
    image: "/portfolio/papucraft.png",
    title: "PapuCraft",
    desc: "PapuCraft is a website that focuses on Papuan culture, covering various aspects such as arts, crafts, traditions and ancestral heritage.",
    githubUrl: "https://github.com/azharihsb-27/papucraft",
    deployUrl: "https://papucraft-capstone.vercel.app/",
    techStack: [
      {
        name: "tailwindcss",
        component: RiTailwindCssFill,
        className: "text-blue-500",
      },
      {
        name: "firebase",
        component: IoLogoFirebase,
        className: "text-orange-500",
      },
      {
        name: "webpack",
        component: SiWebpack,
        className: "text-blue-300",
      },
    ],
  },
  {
    image: "/portfolio/tendaumkm.png",
    title: "TendaUMKM",
    desc: 'Website "UMKM Dukuhdalem" is a digital platform showcasing and promoting small and medium enterprises (UMKM) from the Dukuhdalem area.',
    githubUrl: "https://github.com/mrakasondara",
    deployUrl: "https://umkm-dukuhdalem-b0d72.web.app/",
    techStack: [
      {
        name: "reactjs",
        component: FaReact,
        className: "text-blue-700",
      },
      {
        name: "tailwindcss",
        component: RiTailwindCssFill,
        className: "text-blue-500",
      },
      {
        name: "firebase",
        component: IoLogoFirebase,
        className: "text-orange-500",
      },
    ],
  },
];
