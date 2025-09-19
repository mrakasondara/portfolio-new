import { motion } from "motion/react";
import Header from "./Header/Header";
import Drawer from "./Drawer/Drawer";
import TypingText from "./TypingText/TypingText";
import Portfolio from "./sections/portfolio/Portfolio";
import Experiences from "./sections/experiences/Experiences";
import Certificates from "./sections/certificates/Certificates";
import Contact from "./sections/contact/Contact";
import Footer from "./Footer/Footer";

const PortfolioApp = () => {
  return (
    <div className="bg-main">
      <Header />
      <Drawer />
      <div className="flex flex-col-reverse md:flex-row md:w-[90%] lg:w-1/2 mt-[2rem] md:mx-auto gap-5 p-5">
        <div className="flex flex-col md:w-3/4 justify-center">
          <TypingText />
          <p className="text-2xl text-justify md:text-left text-sub font-suse font-bold mt-2">
            Fresh Graduate with an interest in Frontend Development. Focused on
            building modern, interactive, and responsive web interfaces to
            deliver an optimal user experience.
          </p>
        </div>
        <motion.img
          whileHover={{
            rotate: "5deg",
            boxShadow: "1px 1px gray",
          }}
          src="photo.png"
          className="w-1/2 md:w-auto md:h-50 order-2 mx-auto md:ml-auto rounded-lg"
          alt="photo"
        />
      </div>
      <h2
        className="flex flex-col md:w-[90%] lg:w-1/2 md:mx-auto  p-5 text-4xl font-semibold font-asimovian text-alternate"
        id="Portfolio"
      >
        Portfolio
      </h2>
      <Portfolio />
      <h2
        className="flex flex-col md:w-[90%] lg:w-1/2 md:mx-auto mt-[10rem] p-5 text-4xl font-semibold font-asimovian text-alternate"
        id="Experiences"
      >
        Experiences
      </h2>
      <Experiences />
      <h2
        className="flex flex-col md:w-[90%] lg:w-1/2 md:mx-auto mt-[10rem] p-5 text-4xl font-semibold font-asimovian text-alternate"
        id="Experiences"
      >
        Certificates
      </h2>
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
};

export default PortfolioApp;
