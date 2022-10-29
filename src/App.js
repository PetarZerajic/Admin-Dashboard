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
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add new User"></New>}
              ></Route>
            </Route>
            <Route path="products">
              <Route index element={<ListProduct />} />
              <Route path=":productId" element={<SingleProduct />} />
              <Route
                path="new"
                element={
                  <New inputs={productInputs} title="Add new Product"></New>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
