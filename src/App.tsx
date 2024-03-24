// components
import { Home } from "./pages";
// images & icons
import logo from "./assets/images/brand/poisologo.svg";
// styles
import "./App.css";

const App = () => {
  return (
    <>
      <img src={logo} alt="poiso" />

      <Home />
    </>
  );
};

export default App;
