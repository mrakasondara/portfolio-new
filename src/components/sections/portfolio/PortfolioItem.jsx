const PortfolioItem = ({ image, title, category }) => {
  return (
    <figure className="w-full lg:w-1/2 rounded-lg">
      <a href="">
        <img
          src={image}
          alt="Tenda UMKMM"
          className="rounded-lg w-full bg-secondary hover:opacity-[0.7] hover:cursor-pointer object-center h-[400px] md:h-[400px] lg:h-[350px]"
        />
      </a>
      <figcaption className="font-suse text-xl text-secondary font-bold my-2">
        {title}
      </figcaption>
      <p className="text-alternate -mt-3 font-semibold opacity-75">
        {category}
      </p>
    </figure>
  );
};

export default PortfolioItem;
