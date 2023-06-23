import React, {useState} from "react";
import "./register.scss";
import {DriveFolderUploadOutlined} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {act_create_user} from "../../redux/action/actions";

const Register = () => {
    const dispatch = useDispatch();
    const usenavigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userName, setUsername] = useState();
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const handleCreate = (e) => {
        dispatch(act_create_user({email, password, userName, name, age}));
        usenavigate('/login')
        e.preventDefault();
    }
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">FaceBook</h3>
                    <span className="registerDesc">
            Connect with friends and the world around you on Facebook.
          </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <div className="top">
                            <img
                                src="https://th.bing.com/th/id/OIP.FDMU1ns2YbxA7XcsMBR1bQHaHa?pid=ImgDet&rs=1"
                                alt=""
                                className="profileImg"
                            />
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlined className="icon"/>
                                    <input
                                        type="file"
                                        name="file"
                                        id="file"
                                        accept=".png,.jpeg,.jpg"
                                        style={{display: "none"}}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="bottom">
                            <form className="bottomBox" onSubmit={(e) => handleCreate(e)}>
                                <input
                                    name="full_name"
                                    onChange={(e) => setUsername(e.target.value)}
                                    type="text"
                                    placeholder="Username"
                                    id="username"
                                    className="registerInput"
                                    required
                                />

                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Email"
                                    id="email"
                                    className="registerInput"
                                    required
                                />


                                <input
                                    onChange={(e) =>

                                        setPassword(e.target.value)}
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        id="password"
                                        className="registerInput"
                                        required
                                        />


                                        <input

                                        type="password"
                                        placeholder="Confirm Password"
                                        id="confirmPasword"
                                        className="registerInput"
                                        required
                                        />
                                        <input
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder="Your Name "
                                        id="name"
                                        className="registerInput"
                                        required
                                        />
                                        <input
                                        onChange={(e) => setAge(e.target.value)}
                                        type="text"
                                        placeholder="age"
                                        id="age"
                                        className="registerInput"
                                        required
                                        />
                                        <button type="submit" className="registerButton">
                                        Sign Up
                                        </button>
                                        <Link to="/login">
                                        <button className="loginRegisterButton">
                                        Log into Account
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
export default Register;
