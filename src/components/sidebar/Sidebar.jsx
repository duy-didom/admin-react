import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>
          DUYADMIN
        </span>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title' >Main</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'> List</p>
          <li>
            <PersonOutlineOutlinedIcon className='icon' />
            <span>User</span>
          </li>
          <li>
            <ProductionQuantityLimitsOutlinedIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <ListAltOutlinedIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className='icon' />
            <span>Deliver</span>
          </li>
          <p className='title' >USEFULL</p>
          <li>
            <QueryStatsIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsIcon className='icon' />
            <span>Notification</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className='icon' />
            <span>
              System Health
            </span>
          </li>
          <li>
            <SettingsOutlinedIcon className='icon' />
            <span>
              Setting
            </span>
          </li>
          <p className='title'>USERS</p>
          <li>
            <SwitchAccountIcon className='icon' />
            <span>
              Profile
            </span>
          </li>
          <li>
            <ExitToAppIcon className='icon' />
            <span>
              Logout
            </span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
};

export default Sidebar;