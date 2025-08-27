import PortfolioApp from "./components/PortfolioApp";
import UserContextProvider from "./UserContext";
function App() {
  return (
    <UserContextProvider>
      <PortfolioApp />
    </UserContextProvider>
  );
}

export default App;
