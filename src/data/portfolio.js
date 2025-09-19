import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress, SiWebpack, SiMongodb } from "react-icons/si";
export const portfolioItems = [
  {
    image: "/portfolio/tendaumkm.png",
    title: "TendaUMKM",
    desc: 'Website "UMKM Dukuhdalem" is a digital platform showcasing and promoting small and medium enterprises (UMKM) from the Dukuhdalem area.',
    url: "https://umkm-dukuhdalem-b0d72.web.app/",
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
  {
    image: "/portfolio/papucraft.png",
    title: "PapuCraft",
    desc: "PapuCraft is a website that focuses on Papuan culture, covering various aspects such as arts, crafts, traditions and ancestral heritage.",
    url: "https://papucraft-capstone.vercel.app/",
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
    image: "/portfolio/titikgame.png",
    title: "TitikGame",
    desc: "Titik Game is a blog that discusses various aspects of the gaming world, including the latest game reviews, tips and tricks, and game guides.",
    url: "https://blog-titikgame.vercel.app/",
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
];
