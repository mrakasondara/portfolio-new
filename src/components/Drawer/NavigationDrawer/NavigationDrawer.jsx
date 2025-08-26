const NavigationDrawer = () => {
  return (
    <nav className="flex flex-col text-primary font-suse font-bold py-[1rem] md:py-[4rem] text-2xl md:text-5xl mt-[2rem] gap-[1rem] md:gap-[3rem] border-b-2 border-primary">
      <div className="flex">
        <a href="" className="hover:text-alternate transition ease-in">
          Projects
        </a>
        <span className="material-icons icon-drawer text-primary hover:bg-primary hover:text-secondary transition ease-in hover:cursor-pointer py-3 px-5 rounded-2xl text-center ml-auto">
          arrow_outward
        </span>
      </div>
      <div className="flex">
        <a href="" className="hover:text-alternate transition ease-in">
          Experiences
        </a>
        <span className="material-icons icon-drawer text-primary hover:bg-primary hover:text-secondary transition ease-in hover:cursor-pointer py-3 px-5 rounded-2xl text-center ml-auto">
          arrow_outward
        </span>
      </div>
      <div className="flex">
        <a href="" className="hover:text-alternate transition ease-in">
          Certificates
        </a>
        <span className="material-icons icon-drawer text-primary hover:bg-primary hover:text-secondary transition ease-in hover:cursor-pointer py-3 px-5 rounded-2xl text-center ml-auto">
          arrow_outward
        </span>
      </div>
    </nav>
  );
};

export default NavigationDrawer;
