import * as userService from "../api/Service";
import { call, put } from 'redux-saga/effects';
import {act_getPost_comment, act_getPost_succsess} from "../redux/action/actions";
import {POST_GET_SUCCSES} from "../redux/constances/actionTypes";
import {get_list_comment} from "../api/CommentService";
export const USER_SAGA_POST = function* (action) {
    try {
        yield call(userService.postUsers, action.payload);

    } catch (error) {
        console.log("error==>", error);
    }
}
export const POST_SAGA_GET_PROFILE_POST=function* (action){
    try {
        let listPostProfile= yield call(userService.get_list_post_profile,action.payload);
        yield put(act_getPost_succsess("post_profile",listPostProfile.data))
        console.log(listPostProfile.data)
    }catch (err){
        console.log(err)
    }
}
export const POST_SAGA_GET = function* (action) {
    try {
       let listPost= yield call(userService.get_list_post);
        console.log(listPost)
       yield put(act_getPost_succsess(POST_GET_SUCCSES,listPost.data));
    } catch (error) {
        console.log("error==>", error);
    }
}
export const GET_COMMENT_SAGA=function* (action){
    try {
     let listComment = yield call(get_list_comment,action.payload)
        console.log("listComment saga",listComment)
        yield put(act_getPost_comment("GET_COMMENT_POST",listComment))
    }catch (err){
        console.log(err)
    }
}
export const CREATE_POST = function* (action) {
    try {
        yield call(userService.create_post,action.payload);
    } catch (error) {
        console.log("error==>", error);
    }
}
export const CREATE_CMT = function* (action) {
    try {
        yield call(userService.add_comment_post,action.payload);
        console.log("cmt",action.payload)
    } catch (error) {
        console.log("error==>", error);
    }
}
export const login = function* (action) {
    try {
        yield call(userService.login, action.payload);
    } catch (error) {
        console.log("error==>", error);
    }
}
export const getImgUrl=function* (action){
    try {
        yield call(userService.get_img_url,action.payload)
    }catch (error){
        console.log(error)
    }
}

export const add_like=function* (action){
    try {
        console.log("day la action cua like",action.payload)
        yield call(userService.add_like,action.payload)

    }catch (err){
        console.log("day la action cua like",action)
        console.log("loi cmnr",err)
    }
}