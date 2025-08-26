import { useContext } from "react";
import { motion, AnimatePresence } from "motion/react";
import HideButton from "../ToggleButton/hideButton";
import { UserContext } from "../../UserContext";
import NavigationDrawer from "./NavigationDrawer/NavigationDrawer";

const Drawer = () => {
  const { isDrawerOpen } = useContext(UserContext);
  const transition = {
    duration: 0.4,
    ease: "easeInOut",
  };
  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <motion.aside
          initial={{ display: "none", y: -50, opacity: 0.1 }}
          animate={{ display: "block", y: 0, opacity: 1 }}
          exit={{ display: "none", y: -100, opacity: 0.1 }}
          transition={transition}
          className="absolute bg-white w-full top-0 h-screen py-[1rem] px-[1rem] md:px-[5rem] z-5"
        >
          <div className="flex justify-between border-b-2 border-primary py-[2rem] text-2xl">
            <h1 className="text-primary font-semibold font-nsw">
              mrakasondara
            </h1>
            <HideButton />
          </div>
          <NavigationDrawer />
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
