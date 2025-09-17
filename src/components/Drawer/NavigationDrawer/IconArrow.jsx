import { useContext } from "react";
import { UserContext } from "../../../UserContext";

const IconArrow = ({ title }) => {
  const { setIsDrawerOpen } = useContext(UserContext);
  return (
    <a
      href={`#${title}`}
      className="flex hover:text-alternate  hover:cursor-pointer transition ease-in"
      onClick={() => setIsDrawerOpen(false)}
    >
      {title}
      <span className="material-icons border icon-drawer text-main hover:bg-main hover:text-sub transition ease-in hover:cursor-pointer py-3 px-[1.7rem] rounded-2xl text-center ml-auto">
        arrow_outward
      </span>
    </a>
  );
};

export default IconArrow;
