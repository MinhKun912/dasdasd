import { all, takeLatest } from "redux-saga/effects";
import * as actionType from "../redux/constances/actionTypes";
import {
    add_like,
    CREATE_CMT,
    CREATE_POST,
    GET_COMMENT_SAGA, get_like,
    getImgUrl,
    login,
    POST_SAGA_GET,
    POST_SAGA_GET_PROFILE_POST,
    USER_SAGA_POST
} from "./Saga";
import {DO_LOGIN} from "./userSaga";

export const rootSaga = function* () {
    yield all([
        takeLatest(actionType.USER_POST,USER_SAGA_POST),
        takeLatest(actionType.SET_USER,login),
        takeLatest(actionType.POST_GET,POST_SAGA_GET),
        takeLatest(actionType.POST_CREATE,CREATE_POST),
takeLatest(actionType.POST_LIKE,add_like),
        takeLatest(actionType.CMT_CREATE,CREATE_CMT),
        takeLatest(actionType.DO_LOGIN,DO_LOGIN),
        takeLatest(actionType.GET_IMG_URL,getImgUrl),
        takeLatest("GET_COMMENT_POST",GET_COMMENT_SAGA),
        takeLatest(actionType.GET_PROFILE_POST,POST_SAGA_GET_PROFILE_POST)
    ])
}