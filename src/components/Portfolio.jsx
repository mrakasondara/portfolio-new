import Header from "./header/header";
import Drawer from "./Drawer/Drawer";
import TypingText from "./TypingText/TypingText";
const Portfolio = () => {
  return (
    <div className="bg-primary">
      <Header />
      <Drawer />
      <div className="flex flex-col md:w-1/2 my-[2rem] md:mx-auto p-5">
        <TypingText />
        <p className="text-2xl text-secondary font-suse font-bold">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo,
          delectus?
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
