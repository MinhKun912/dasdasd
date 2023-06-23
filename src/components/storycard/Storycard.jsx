import React from "react";
import "./storycard.scss";

const Storycard = ({ user }) => {
  return (
    <div className="storyCard">
      <div className="overlay"></div>
      <img src="https://assets.bigcartel.com/product_images/291943680/kuro+neko+black.png?auto=format&fit=max&w=2000" alt="" className="storyProfile" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRajw72coO0jiXo5UUSVCgD85HErnTQF0QBnaBcWe7A7WZJTBfMGPsB0nP5e52VRBmwVig&usqp=CAU" alt="" className="storybackground" />
      <span className="text">{user.username}</span>
    </div>
  );
};

export default Storycard;
