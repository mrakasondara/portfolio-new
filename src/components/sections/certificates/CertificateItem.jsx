import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
const CertificateItem = ({ image, title, url }) => {
  const [isActive, setIsActive] = useState(false);
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
        bounce: 0.1,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="card bg-base-100 image-full w-full md:w-[45%] shadow-sm"
      initial={animation.offScreen}
      whileInView={animation.onscreen}
      onClick={() => {
        setIsActive(true);
      }}
      onMouseOut={() => setIsActive(false)}
    >
      <figure>
        <motion.img
          initial={{ opacity: 1 }}
          animate={{ opacity: isActive ? 0.3 : 1 }}
          src={image}
          className="thumb"
          alt={title}
        />
      </figure>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        className="card-body items-center justify-center"
        id="overlay"
      >
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-end">
          <Link
            to={url}
            target="_blank"
            className="badge flex items-center text-sub p-2 bg-alternate hover:bg-sub border-alternate rounded-md hover:cursor-pointer transition ease-in hover:text-alternate hover:border"
          >
            Detail <span className="material-icons">arrow_outward</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CertificateItem;
