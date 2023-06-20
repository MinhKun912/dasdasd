import {LOGIN_SUCCESS, USER_SUCCESS} from "../constances/actionTypes";

let userlogin = JSON.parse(localStorage.getItem("user-login"))
const initialState = {
    listUsers:[],
    user:userlogin||{},
    isLogin:(userlogin!=null)?true:false
};
export const users = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log({action})
            localStorage.setItem("user-login",JSON.stringify(action.payload))
            return {...state,user:{...action.payload},isLogin: true};
        default:
            return state;
    }
}
;
