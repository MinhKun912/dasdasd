import * as actionTypes from "../constances/actionTypes";
import {POST_LIKE, SET_USER} from "../constances/actionTypes";
export const act_create_user = (newUser) => {
    return {
        type: actionTypes.USER_POST,
        payload: newUser
    }
}
    export const set_user = (user) => {
        return{
            type: SET_USER,
            payload: user
        }

    }
    export const add_like=(like)=>{
        console.log("like o action",like)
    return{
        type:POST_LIKE,
        payload:like
    }
}

    export const loginSuscess=(user)=>{
    return{
        type:actionTypes.LOGIN_SUCCESS,
        payload:user

    }
    }
    export const dologin=(user)=>{
    return{
        type:actionTypes.DO_LOGIN,
        payload:user

    }
    }
export const setCurrentUser = (user) => {
    return {
        type: 'SET_CURRENT_USER',
        payload: user
    };
};
export const act_getPost=(post) =>{
    return{
        type:actionTypes.POST_GET,
        payload:post
    }
}
export const act_create_cmt=(cmt)=>{
    console.log("dayla cmt",cmt)
    return{
        type:actionTypes.CMT_CREATE,
        payload:cmt
    }
}
export const act_getPost_profile=(id)=>{
    return{
        type:actionTypes.GET_PROFILE_POST,
        payload:id
    }
}
export const act_getPost_comment=(PostId)=>{
    return{
        type:"GET_COMMENT_POST",
        payload:PostId
    }
}
export const act_create_Post=(post)=>{
    return{
        type:actionTypes.POST_CREATE,
        payload:post
    }
}
export const act_getPost_succsess=(actionType,data)=>{
    return{
        type:actionType,
        payload:data
    }
}

export const act_get_imageUrl=(imgUrl)=>{
    return {
        type:actionTypes.GET_IMG_URL,
        payload:imgUrl
    }
}