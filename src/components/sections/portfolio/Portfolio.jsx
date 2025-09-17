import { motion } from "motion/react";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const items = [
    {
      image: "/portfolio/tendaumkm.png",
      title: "TendaUMKM",
      desc: 'Website "UMKM Dukuhdalem" is a digital platform showcasing and promoting small and medium enterprises (UMKM) from the Dukuhdalem area.',
      url: "https://umkm-dukuhdalem-b0d72.web.app/",
    },
    {
      image: "/portfolio/papucraft.png",
      title: "PapuCraft",
      desc: "PapuCraft is a website that focuses on Papuan culture, covering various aspects such as arts, crafts, traditions and ancestral heritage.",
      url: "https://papucraft-capstone.vercel.app/",
    },
    {
      image: "/portfolio/titikgame.png",
      title: "TitikGame",
      desc: "Titik Game is a blog that discusses various aspects of the gaming world, including the latest game reviews, tips and tricks, and game guides.",
      url: "https://blog-titikgame.vercel.app/",
    },
  ];
  const transition = {
    duration: 0.7,
    ease: "easeInOut",
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0.1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
      className="flex flex-col flex-wrap md:flex-row md:justify-center lg:justify-center gap-[5rem] md:w-[90%] lg:w-1/2 my-[2rem] md:mx-auto p-5 mt-[2rem]"
      id="Portfolio"
    >
      {items.map((item, index) => (
        <PortfolioItem {...item} key={index} />
      ))}
    </motion.div>
  );
};

export default Portfolio;
