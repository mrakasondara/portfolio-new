import { useContext } from "react";
import { UserContext } from "../../UserContext";
const ShowButton = () => {
  const { setIsDrawerOpen } = useContext(UserContext);
  return (
    <div className="block md:hidden">
      <span
        className="material-icons bg-white text-primary hover:bg-primary hover:text-secondary transition ease-in hover:cursor-pointer p-1 rounded-full"
        id="show-button"
        onClick={() => setIsDrawerOpen(true)}
      >
        menu
      </span>
    </div>
  );
};
export default ShowButton;
