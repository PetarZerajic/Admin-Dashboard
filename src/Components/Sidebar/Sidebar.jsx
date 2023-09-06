import "./sidebar.scss";
import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import DvrIcon from "@mui/icons-material/Dvr";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import InsertChartOutlinedTwoToneIcon from "@mui/icons-material/InsertChartOutlinedTwoTone";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext } from "react";

export const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="Sidebar">
      <div className="top">
        <span className="logo">Admin</span>
      </div>

      <hr></hr>

      <div className="center ">
        <ul>
          <p className="title">MAIN</p>
          <li className=" icon-active">
            <DashboardIcon className="icon" />
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Dashbord</span>
            </Link>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutlineOutlinedIcon className="icon" />
            <Link to="/users" style={{ textDecoration: "none" }}>
              <span>User</span>
            </Link>
          </li>
          <li>
            <Inventory2OutlinedIcon className="icon" />
            <Link to="/products" style={{ textDecoration: "none" }}>
              <span>Product</span>
            </Link>
          </li>
          <li>
            <AirportShuttleOutlinedIcon className="icon" />
            <span>Delivery</span>
          </li>
          <li>
            <DvrIcon className="icon" />
            <span>Orders</span>
          </li>

          <p className="title"> USEFUL LINKS</p>
          <li>
            <InsertChartOutlinedTwoToneIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className="icon" />
            <span>Notification</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <HealthAndSafetyOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>

      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
