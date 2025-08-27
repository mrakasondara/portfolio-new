import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  return (
    <div
      className="flex flex-col lg:flex-row justify-between gap-[2rem] md:w-[90%] lg:w-1/2 my-[2rem] md:mx-auto p-5"
      id="Portfolio"
    >
      <PortfolioItem
        image={"/tendaumkm.png"}
        title={"TendaUMKM"}
        category={"Web Development"}
      />
      <PortfolioItem
        image={"/papucraft.png"}
        title={"PapuCraft"}
        category={"Web Development"}
      />
    </div>
  );
};

export default Portfolio;
