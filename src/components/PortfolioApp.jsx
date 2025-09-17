import Header from "./header/header";
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
      <div className="flex flex-col md:w-[90%] lg:w-1/2 mt-[2rem] md:mx-auto p-5">
        <TypingText />
        <p className="text-2xl text-sub font-suse font-bold mt-2">
          Fresh Graduate with an interest in Frontend Development. Focused on
          building modern, interactive, and responsive web interfaces to deliver
          an optimal user experience.
        </p>
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
