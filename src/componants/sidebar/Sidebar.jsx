import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import HealingIcon from "@mui/icons-material/Healing";
import LoginIcon from "@mui/icons-material/Login";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import {Link} from "react-router-dom";
import {DarkModeContext} from "../../context/darkModeContext";
import {useContext} from "react";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext);

  return (
    <nav className='sidebar'>
      {/* ============================= TOP =============================*/}
      <div className='sidebar__top'>
        <Link to={"/"}>
          <span className='logo'>HamidreZa</span>
        </Link>
      </div>
      <hr />

      {/* ============================= CENTER =============================*/}
      <div className='sidebar__center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to={"/"}>
            <li>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </li>
          </Link>

          <p className='title'>LISTS</p>
          <Link to={"/users"}>
            <li>
              <SupervisedUserCircleIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>

          <Link to={"/products"}>
            <li>
              <ShoppingBasketIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <LocalMallIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <StackedLineChartIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <CircleNotificationsIcon className='icon' />
            <span>Notifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <HealingIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <LoginIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <AdminPanelSettingsIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountCircleIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className='icon' />
            <span>Log Out</span>
          </li>
        </ul>
      </div>

      {/* ============================= BOTTOM =============================*/}
      <div className='sidebar__bottom'>
        <div
          className='colorOption'
          onClick={() => dispatch({type: "LIGHT"})}></div>
        <div
          className='colorOption'
          onClick={() => dispatch({type: "DARK"})}></div>
      </div>
    </nav>
  );
};

export default Sidebar;
