import "./single.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Chart from "../../Components/Chart/Chart";
import List from "../../Components/Table/Table";

export const Single = () => {
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
                src="https://images.pexels.com/photos/1963075/pexels-photo-1963075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="avatar"
              />
              <div className="details">
                <h1 className="itemName">Jasmin Doe</h1>
                <div className="details-item">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jasmindoe@gmial.com</span>
                </div>
                <div className="details-item">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">+1 729 127 226</span>
                </div>
                <div className="details-item">
                  <span className="itemKey">Adress: </span>
                  <span className="itemValue">
                    Elton St 215 Garden Yd.New York
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
export default Single;
