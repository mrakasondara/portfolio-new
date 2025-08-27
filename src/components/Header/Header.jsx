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
      className="p-5 flex items-center bg-primary justify-between font-semibold sticky top-0 z-[10]"
    >
      <h1 className="text-xl text-secondary font-nsw">mrakasondara</h1>
      <Navigation />
      <ShowButton />
      <div className="hidden md:flex items-center text-sm font-suse gap-2">
        <span className="text-secondary">rakasondara21@gmail.com</span>
        <span className="material-icons bg-white text-primary hover:bg-primary hover:text-secondary transition ease-in hover:cursor-pointer p-1 rounded-full">
          mail
        </span>
      </div>
    </motion.header>
  );
};

export default Header;
