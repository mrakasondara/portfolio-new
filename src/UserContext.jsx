import { createContext, useState } from "react";
export const UserContext = createContext({});
const UserContextProvider = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <UserContext.Provider value={{ isDrawerOpen, setIsDrawerOpen }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
