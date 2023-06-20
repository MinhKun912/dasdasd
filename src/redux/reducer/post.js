import {GET_COMMENT, POST_GET_SUCCSES} from "../constances/actionTypes";
import {loginSuscess} from "../action/actions";

const initState=[]
;
export const posts = (state = initState, action) => {
    switch (action.type) {
        case POST_GET_SUCCSES:
            return [...action.payload];
        default:
            return state;
    }
}
    export const posts_profile = (state = initState, action) => {
        switch (action.type) {
            case"post_profile":
                return [...action.payload];
            default:
                return state;
        }

    }
export const posts_comment = (state = initState, action) => {
    switch (action.type) {
        case "GET_COMMENT_POST":
            console.log("comment act",action)
            // return [...action.payload];
            return action.payload
        default:
            return state;
    }

}