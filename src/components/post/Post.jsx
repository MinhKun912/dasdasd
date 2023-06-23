import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {act_create_cmt, act_getPost, act_getPost_comment, act_getPost_profile} from "../../redux/action/actions";
import {posts} from "../../redux/reducer/post";
import {PostItem} from "./PostItem";

const Post = ({ post }) => {
    const listPost= useSelector(state => state.posts)
   const dispatch= useDispatch()
    const [posts, setPosts] = useState([]);
    const [posts2, setPosts2] = useState(1);
// useEffect(()=>{
//     dispatch(act_getPost())
// })

useEffect(()=>{
    dispatch(act_getPost()
        )
   })
useEffect(()=>{
        setPosts(listPost)

    }
)

    console.log("day la post",posts)
  return (

    <div className="post">
      {posts.map((posts)=>
        <PostItem key={posts.postId} posts={posts}/>
          )}

     </div>
  );
};

export default Post;
