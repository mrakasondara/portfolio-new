import { useContext } from "react";
import { UserContext } from "../../UserContext";
const HideButton = () => {
  const { setIsDrawerOpen, isDrawerOpen } = useContext(UserContext);
  return (
    <div className={isDrawerOpen ? "block" : "hidden"}>
      <span
        className="material-icons text-primary border bg-white icon-drawer hover:bg-primary hover:text-secondary transition ease-in hover:cursor-pointer p-1 rounded-full"
        id="close-button"
        onClick={() => setIsDrawerOpen(false)}
      >
        close
      </span>
    </div>
  );
};
export default HideButton;
