import Portfolio from "./components/Portfolio";
import UserContextProvider from "./UserContext";
function App() {
  return (
    <UserContextProvider>
      <Portfolio />
    </UserContextProvider>
  );
}

export default App;
