import {combineReducers} from "redux";
import {users} from "./user";
import {posts, posts_comment, posts_profile} from "./post";
import {likes} from "./like";
export const rootReducer = combineReducers({posts_comment,users,posts,posts_profile,likes})