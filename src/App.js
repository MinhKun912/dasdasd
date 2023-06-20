
import './App.css';
import { DarkModeContext } from "./context/darkModeContext";
import {useContext, useEffect} from "react";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import Register from "./components/loginRegister/Register";
import MenuLink from "./components/menuLink/MenuLink";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import {createStore} from "redux";
import {userReducer} from "./redux/reducer/user";
    import {Provider, useDispatch} from "react-redux";
import store from "./redux/store"
import {act_getPost} from "./redux/action/actions";
import Profile from "./pages/profile/Profile";
import EditProfile from "./pages/editProfile/EditProfile";
import Chat from "./components/chat/Chat";

function App() {
    const dispath= useDispatch();
    const { darkMode } = useContext(DarkModeContext);
    useEffect(()=>{
        dispath(act_getPost());
    },[])
    return (
        <Provider store={ store}>
            <Routes>
                <Route path="chat" element={<Chat />} />
                <Route path="/">
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route index element={<Home />} />
                    <Route path="profile"element={<Profile/>} >
                        <Route path=":userId" element={<Profile />} />
                        <Route path="edit" element={<EditProfile />}></Route>
                    </Route>
                </Route>
            </Routes>
        </Provider>

  );
}

export default App;
