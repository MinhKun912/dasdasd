import React, {useEffect, useState} from "react";
import "./post.scss";
import { Users } from "../../data";
import { IconButton } from "@mui/material";
import {
  ChatBubbleOutline,
  MoreVert,
  Favorite,
  ThumbUp,
  ThumbUpAltOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {act_create_cmt, act_getPost, act_getPost_comment, act_getPost_profile} from "../../redux/action/actions";
import {posts} from "../../redux/reducer/post";
import {PostItem} from "./PostItem";

const Post = ({ post }) => {

  const listPost= useSelector(state => state.posts)


  return (
    <div className="post">
      {listPost.map((posts)=>
        <PostItem key={posts.postId} posts={posts}/>
        )}
    </div>
  );
};

export default Post;
