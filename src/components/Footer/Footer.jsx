import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

const Footer = () => {
  const animation = {
    offScreen: {
      opacity: 0,
      y: 100,
    },
    onscreen: {
      opacity: 1,
      y: 10,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div className="flex flex-col flex-wrap md:flex-row md:justify-center gap-[3rem] py-3 w-full bg-white text-main font-suse mt-[2rem]">
      <div className="w-full md:justify-center gap-[3rem] md:w-[90%] lg:w-1/2 my-[2rem] md:mx-auto">
        <motion.h1
          initial={animation.offScreen}
          whileInView={animation.onscreen}
          className="text-3xl font-bold text-alternate text-center md:text-start font-nsw mb-5"
        >
          mrakasondara
        </motion.h1>
        <div className="flex flex-col md:flex-row gap-y-4 items-center">
          <motion.ul
            initial={animation.offScreen}
            whileInView={animation.onscreen}
            className="flex gap-3 uppercase justify-center md:justify-start text-lg"
          >
            <li>
              <a className="hover:underline" href="#Portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#Experiences">
                Experiences
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#Certificates">
                Certificates
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#Contact">
                Contact
              </a>
            </li>
          </motion.ul>
          <motion.a
            initial={animation.offScreen}
            whileInView={animation.onscreen}
            href={"https://www.github.com/mrakasondara"}
            target="_blank"
            className="md:ml-auto text-2xl hover:text-alternate"
          >
            <FaGithub />
          </motion.a>
        </div>
        <motion.p
          initial={animation.offScreen}
          whileInView={animation.onscreen}
          className="mt-[3rem] text-center md:text-right font-nsw font-semi opacity-75"
        >
          ©2025 All Rights Reserved.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Footer;
