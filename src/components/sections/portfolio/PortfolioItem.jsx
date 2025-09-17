import { motion } from "motion/react";
import { Link } from "react-router-dom";
const PortfolioItem = ({ image, title, desc, url }) => {
  const animation = {
    offScreen: {
      y: -50,
      opacity: 0,
    },
    onscreen: {
      y: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      initial={animation.offScreen}
      whileInView={animation.onscreen}
      className="card bg-sub w-full shadow-sm text-main font-suse"
    >
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title ">{title}</h2>
        <p>{desc}</p>
        <div className="card-actions justify-end items-center">
          <Link
            to={url}
            target="_blank"
            className="badge flex items-center text-sub p-2 bg-main hover:bg-sub rounded-md hover:cursor-pointer transition ease-in hover:text-main hover:border"
          >
            Repository
          </Link>
          <Link
            to={url}
            target="_blank"
            className="badge flex items-center text-sub p-2 bg-alternate hover:bg-sub border-alternate rounded-md hover:cursor-pointer transition ease-in hover:text-alternate hover:border"
          >
            Open Page <span className="material-icons">arrow_outward</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
