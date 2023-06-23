import React from "react";
import "./menuLink.scss";
import chat from "../chat/Chat";
import {useNavigate} from "react-router-dom";

const MenuLink = ({ Icon, text }) => {
    const navigate=useNavigate();
    const chat=()=>{
        navigate("/chat")
    }
  return (
    <div className="menuLink">
      {Icon}
      <span onClick={chat} className="menuLinkText">{text}</span>
      {/*<span className="menuLinkTextName">{text === "Logout" && "(Amber)"}</span>*/}
    </div>
  );
};

export default MenuLink;
