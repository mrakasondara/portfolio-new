import IconArrow from "./IconArrow";

const NavigationDrawer = () => {
  return (
    <nav className="flex flex-col text-primary font-asimovian pb-[1.5rem] font-bold text-3xl md:text-5xl mt-[2rem] gap-[2rem] md:gap-[3rem] border-b-1 border-primary">
      <IconArrow title={"Portfolio"} />
      <IconArrow title={"Experiences"} />
      <IconArrow title={"Certificates"} />
    </nav>
  );
};

export default NavigationDrawer;
