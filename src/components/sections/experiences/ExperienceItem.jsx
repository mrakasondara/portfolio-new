import { motion } from "motion/react";

const ExperienceItem = ({ date, role, desc, flow }) => {
  const animation = {
    offScreen: {
      x: 1,
      opacity: 0,
    },
    onscreen: {
      x: 1,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.li initial={animation.offScreen} whileInView={animation.onscreen}>
      <div className="timeline-middle text-sub">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div
        className={`${
          flow == "start" ? "timeline-start" : "timeline-end"
        } mb-10 md:text-end font-suse`}
      >
        <time className="italic text-sub">{date}</time>
        <div className="text-lg text-alternate font-asimovian">{role}</div>
        <p className="text-sub">{desc}</p>
      </div>
      <hr />
    </motion.li>
  );
};

export default ExperienceItem;
