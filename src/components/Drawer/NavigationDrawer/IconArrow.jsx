const IconArrow = ({ title }) => {
  return (
    <a
      href={title}
      className="flex hover:text-alternate  hover:cursor-pointer transition ease-in"
    >
      {title}
      <span className="material-icons border icon-drawer text-primary hover:bg-primary hover:text-secondary transition ease-in hover:cursor-pointer py-3 px-[1.7rem] rounded-2xl text-center ml-auto">
        arrow_outward
      </span>
    </a>
  );
};

export default IconArrow;
