import React, {useState} from "react";
import '../navbar/NavItem/Header.css';

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {Link, useNavigate} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import "./navbar.scss";
import {useSelector} from "react-redux";
import { ReactComponent as BellIcon } from '../../img/icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../img/icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../img/icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../img/icons/plus.svg';
import {Avatar} from "@mui/material";
import NavItem from "./NavItem/NavItem";
import DropdownMenu from "./DropdownMenu/DropdownMenu";

const Header = () => {
  const profile=()=>{
    navigate("/profile")
  }
  const isLogin = useSelector(state=>state.users.isLogin);
  const userLogin = useSelector(state=>state.users.user);
  const navigate =  useNavigate();

  return (
    // <div className="navbarContainer">
    //   <div className="navbarLeft">
    //     <Link to="/" style={{ textDecoration: "none" }}>
    //       <span className="logo">FaceBook</span>
    //     </Link>
    //   </div>
    //   <div className="navbarCenter">
    //     <div className="searchBar">
    //       <SearchIcon className="searchIcon" />
    //       <input
    //         type="text"
    //         placeholder="Search for friends post or video"
    //         className="searchInput"
    //       />
    //     </div>
    //   </div>
    //   <div className="navbarRight">
    //     <div className="navbarLinks">
    //       <span className="navbarLink">Homepage</span>
    //       <span className="navbarLink">Timeline</span>
    //     </div>
    //     <div className="navbarIcons">
    //       <div className="navbarIconItem">
    //         <PersonIcon />
    //         <span className="navbarIconBadge">2</span>
    //       </div>
    //       <div className="navbarIconItem" >
    //         <ChatBubbleIcon />
    //         {/*<label className="navbarIconBadge" onClick={chat}>Chat</label>*/}
    //       </div>
    //       <div className="navbarIconItem">
    //         <NotificationsIcon />
    //       </div>
    //     </div>
    //     {isLogin?<Link className="userIcon" to="/profile/userId">
    //       <img src="" alt="" className="navbarImg" />
    //       <p onClick={profile}>{userLogin.name}</p>
    //     </Link>:""}
    //   </div>
    // </div>

      <div className="header">
        <div className="headerLeft">
          {/*<img src={fbLogo} alt="fbLogo"/>*/}
          <div className="headerInput">
            <SearchIcon />
            <input type="text" placeholder="Search Facebook" />
          </div>
        </div>

        <div className="headerCenter">
          <div className="headerOption headerOptionActive">
            <HomeIcon fontSize="large" />
          </div>
          <div className="headerOption">
            <FlagIcon fontSize="large" />
          </div>
          <div className="headerOption">
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div className="headerOption">
            <StorefrontOutlinedIcon fontSize="large" />
          </div>
          <div className="headerOption">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </div>

        <div className="headerRight">
          <div className="headerInfo">
            <Avatar  />
            {/* <h4>{user.displayName}</h4> */}
          </div>

          {/* <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton> */}
          <nav className="navbar">
            <ul className="navbar-nav">
              <NavItem icon={<PlusIcon />} />
              <NavItem icon={<MessengerIcon />} />
              <NavItem icon={<BellIcon />} />

              <NavItem icon={<CaretIcon />}>
                <DropdownMenu></DropdownMenu>
              </NavItem>
            </ul>
          </nav>
        </div>
      </div>
  );
};

export default Header;
