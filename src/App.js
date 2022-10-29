import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import SingleProduct from "./pages/single/SingleProduct";
import ListProduct from "./pages/list/ListProduct";
import { productInputs, userInputs } from "./formSource";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      Cao svima ja sam mali Pera
    </div>
  );
}

export default App;
