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
          className="absolute bg-white w-full top-0 h-screen py-[1rem] px-[1rem] md:px-[5rem] z-[15] fixed"
        >
          <div className="flex justify-between border-b-1 border-main py-[2rem] text-2xl">
            <h1 className="text-main font-semibold font-nsw">mrakasondara</h1>
            <HideButton />
          </div>
          <NavigationDrawer />
          <h4 className="text-2xl text-slate-300 mt-[1rem] font-bold font-suse">
            Follow me.
          </h4>
          <div className="flex text-2xl text-main uppercase font-asimovian my-3 gap-3">
            <a
              href=""
              className="flex hover:text-alternate items-center gap-1 transition ease-in"
            >
              github
              <span className="material-icons items-center leading-none">
                arrow_outward
              </span>
            </a>
            <a
              href=""
              className="flex hover:text-alternate items-center gap-1 transition ease-in"
            >
              instagram
              <span className="material-icons items-center leading-none">
                arrow_outward
              </span>
            </a>
          </div>
          <p className="font-nsw text-end mt-5 opacity-75 text-main">
            ©{new Date().getFullYear()} All Rights Reserved.
          </p>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
