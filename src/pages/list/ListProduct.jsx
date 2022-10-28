import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

import DatatableProducts from "../../Components/Datatable/DatatableProducts";

import "./list.scss";
export const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableProducts />
      </div>
    </div>
  );
};
export default List;
