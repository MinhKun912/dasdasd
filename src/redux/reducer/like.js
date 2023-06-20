import {POST_LIKE} from "../constances/actionTypes";

const giaTriKhoiTao=[];
export const likes=(state=giaTriKhoiTao,action)=>{
    switch (action.type) {
        case POST_LIKE:
            console.log("like reducer",action.payload)
            return action.payload
        default:
            return state;
    }
}