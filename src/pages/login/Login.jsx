import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "./login.scss";
import {useDispatch} from "react-redux";
import {act_create_user, dologin, loginSuscess, set_user, setCurrentUser} from "../../redux/action/actions";
import * as api from "../../saga/Saga";

const Login = () => {
  const [userName,setUserName]=useState();
  const [password,setPassword]=useState();
  const dispatch = useDispatch();
  const usenavigate = useNavigate();


  function handleSubmit(event) {
   event.preventDefault()
    dispatch(dologin({userName,password}))
    usenavigate("/")
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">FaceBook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <div className="bottom">
              <form className="bottomBox" onSubmit={(e)=>handleSubmit(e)}>
                <input
                    onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  placeholder="User Name"
                  id="email"
                  className="loginInput"
                  required
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  placeholder="Password"
                  id="password"
                  className="loginInput"
                  required
                />

                <button type="submit" className="loginButton">
                  Sign In
                </button>
                <Link to="/register">
                  <button className="loginRegisterButton">
                    Create a New Account
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
