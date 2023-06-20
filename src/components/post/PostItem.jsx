import {Link} from "react-router-dom";
import {IconButton} from "@mui/material";
import {ChatBubbleOutline, Favorite, MoreVert, ShareOutlined, ThumbUp, ThumbUpAltOutlined} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {act_create_cmt, add_like} from "../../redux/action/actions";
import {users} from "../../redux/reducer/user";
import {likes} from "../../redux/reducer/like";

export const PostItem = ({posts}) => {
    console.log(posts.postId)
    const [content,setContent]=useState();
    const userLogin = useSelector(state => state.users.user)
    const dispath=useDispatch();
    const [post_id,setPost_id]=useState();
    const [like,setLike]=useState({
        post_id:posts.postId,
        user_id:userLogin.userId
    });
useEffect((e)=>{
    setPost_id(posts.postId)
},[])
    const create_like=()=>{

        console.log(like)
     let user_id=userLogin.userId;
     dispath(add_like({user_id,post_id}));

    }
    const create_cmt=(e)=>{
        e.preventDefault();
        let user_id = userLogin.userId;
        let post_id = posts.postId;
        console.log(user_id);
        console.log(post_id)
        console.log(content)
        dispath(act_create_cmt({content,user_id,post_id}))
        console.log('object --->', {content,user_id,post_id})
    }
    return(
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to="/profile/userId">
                        <img src={userLogin.avatarUrl} className="postProfileImg" alt=""/>
                        {/*    <img*/}
                        {/*    src={*/}
                        {/*    Users.filter((u) => u.id === post.userId)[0].profilePicture*/}
                        {/*  }*/}
                        {/*  alt=""*/}
                        {/*  className="postProfileImg"*/}
                        {/*/>*/}
                    </Link>
                    <span className="postUsername">
    {posts.user.name}
                        {/*{Users.filter((u) => u.id === post.userId)[0].username}*/}
            </span>
                    {/*<span className="postDate">{post.date}</span>*/}
                </div>
                <div className="postTopRight">
                    <IconButton>
                        <MoreVert className="postVertButton" />
                    </IconButton>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{posts.content}</span>
                <img src={posts.imgUrl} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <Favorite className="bottomLeftIcon" style={{ color: "red" }} />
                    <ThumbUp className="bottomLeftIcon" style={{ color: "#011631" }} />
                    {/*<span className="postLikeCounter">{post.like}</span>*/}
                </div>
                <div className="postBottomRight">
            <span className="postCommentText">
            · comments · share
            </span>
                </div>
            </div>
            {/*------------- pót footer ------------------------*/}
            <hr className="footerHr" />
            <div className="draw_comment">
                <div className="cmt-img">
                    <div className="cmt-avatar">
                        {posts.listComment.map(user=><div><img src={user.userCMT.avatarUrl} className="comment-img" alt=""/></div>)}
                    </div>
                    <div className="cmt-name">
                        {posts.listComment.map(user=><p>{user.userCMT.name} </p>)}
                    </div>
                    <div className="content-cmt">
                        {posts.listComment.map(comment=><p>{comment.content}</p>)}
                    </div>
                </div>
            </div>
            <form onSubmit={create_cmt}>
                <input

                    onChange={(e)=>{setContent(e.target.value)}} className="comment-input" type="text" placeholder="comment here"/>
                <button style={{display:"none"}} type={"submit"}>ok</button>
            </form>
            <div className="postBottomFooter">
                <form onSubmit={(e)=>create_like(e.preventDefault())}>
                <div className="postBottomFooterItem">
                    <ThumbUpAltOutlined className="footerIcon" />
                    <span className="footerText" >Like</span>







                    <button type='submit' >ok</button>
                </div>
                </form>
                <div className="postBottomFooterItem">
                    <ChatBubbleOutline className="footerIcon" />
                    <span className="footerText">Comment</span>
                </div>
                <div className="postBottomFooterItem">
                    <ShareOutlined className="footerIcon" />
                    <span className="footerText">Share</span>
                </div>
            </div>
        </div>
    )
}