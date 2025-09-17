import { motion } from "motion/react";
import Navigation from "./Navigation/Navigation";
import ShowButton from "../ToggleButton/ShowButton";

const Header = () => {
  const transition = {
    duration: 0.7,
    ease: "easeInOut",
  };
  return (
    <motion.header
      initial={{ y: 50, opacity: 0.1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={transition}
      className="p-5 flex items-center bg-main justify-between font-semibold sticky top-0 z-[10]"
    >
      <motion.h1
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
          color: "#4300ff",
        }}
        className="text-xl text-sub font-nsw"
      >
        mrakasondara
      </motion.h1>
      <Navigation />
      <ShowButton />
      <div className="hidden md:flex items-center text-sm font-suse gap-2">
        <span className="text-sub">rakasondara21@gmail.com</span>
        <a
          href="#Contact"
          className="material-icons bg-white text-main hover:bg-main hover:text-sub transition ease-in hover:cursor-pointer p-1 rounded-full"
        >
          mail
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
