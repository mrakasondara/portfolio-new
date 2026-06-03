import { motion } from "motion/react";
import PortfolioItem from "./PortfolioItem";
import { portfolioItems as items } from "../../../data/portfolio";

const Portfolio = () => {
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
