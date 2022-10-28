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
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../Context/darkModeContext";
import { useContext, useState } from "react";
import { useEffect } from "react";

export const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [mobile, Setmobile] = useState(false);
  const [sidebar, Setsidebar] = useState(false);

  console.log(Setsidebar);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        Setmobile(true);
      } else {
        Setmobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Sidebar">
      {mobile && (
        <div
          className={
            !mobile
              ? "sidebar-toggle-logo-active"
              : sidebar
              ? "sidebar-toggle-logo-active"
              : "sidebar-toggle-logo-inactive"
          }
        >
          {sidebar ? (
            <CloseOutlinedIcon
              className="sidebar-toggle-logo"
              onClick={() => {
                Setsidebar(!sidebar);
              }}
            />
          ) : (
            <MenuOutlinedIcon
              className="sidebar-toggle-logo"
              onClick={() => Setsidebar(!sidebar)}
            />
          )}
        </div>
      )}

      {!mobile && (
        <div className="top">
          <span className="logo">Admin</span>
        </div>
      )}
      <hr></hr>

      <div
        className={
          !mobile
            ? "center sidebar-active"
            : sidebar
            ? "center sidebar-active"
            : "center sidebar-inactive"
        }
      >
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

      <div
        className={
          !mobile
            ? "bottom bottom-active"
            : sidebar
            ? "bottom bottom-acitve"
            : "bottom bottom-inactive"
        }
      >
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
