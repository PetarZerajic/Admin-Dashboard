import "./single.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Chart from "../../Components/Chart/Chart";
import List from "../../Components/Table/Table";

export const SingleProduct = () => {
  return (
    <div div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">
              <button className="button">Edit</button>
            </div>
            <h1 className="item-title">Information</h1>
            <div className="single-item">
              <img
                className="itemImg"
                src="https://m.media-amazon.com/images/I/61iGju1RL5L._SX522_.jpg"
                alt="avatar"
              />
              <div className="details">
                <h1 className="itemName">Playstation 5</h1>
                <div className="details-item">
                  <span className="itemKey">Customer:</span>
                  <span className="itemValue">Michael Doe</span>
                </div>
                <div className="details-item">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">201-755-3815</span>
                </div>
                <div className="details-item">
                  <span className="itemKey">Adress: </span>
                  <span className="itemValue">
                    2679 Hillhaven Drive California
                  </span>
                </div>
                <div className="details-item">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue"> USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart
              aspect={3 / 0.7}
              title="User spending last 6 Months (Revenue)"
            />
          </div>
        </div>
        <div className="bottom">
          <h1 className="item-title">Last Transaction</h1>
          <List />
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
