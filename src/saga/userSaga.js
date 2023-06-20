import {login} from "../api/Service";
import  {call,put} from 'redux-saga/effects'
import {loginSuscess} from "../redux/action/actions";


export  function* DO_LOGIN (action){
    try{
        let res = yield call(login,action.payload)
        yield  put(loginSuscess(res.data))
    }catch (e) {
        console.log(e)
    }
}