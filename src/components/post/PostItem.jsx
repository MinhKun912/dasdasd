import {Link} from "react-router-dom";
import {Avatar, IconButton} from "@mui/material";
import './Post.css'

import {
    AccountCircle,
    ChatBubbleOutline, ExpandMoreOutlined,
    Favorite,
    MoreVert, NearMe,
    ShareOutlined,
    ThumbUp,
    ThumbUpAltOutlined
} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {act_create_cmt, act_get_lkike, act_getPost, act_getPost_comment, add_like} from "../../redux/action/actions";
import {users} from "../../redux/reducer/user";
import {likes} from "../../redux/reducer/like";
import axios from "axios";

export const PostItem = ({posts}) => {

    const [content, setContent] = useState()
    const [inputValue, setInputValue] = useState('');
    const [submit, isSubmit] = useState(false);
    const [comment, setComment] = useState({
        content: '',
        user: {},
    });
    console.log(comment)
    const userLogin = useSelector(state => state.users.user)
    const dispath = useDispatch();
    const [post_id, setPost_id] = useState();


    const create_like = () => {
        let user_id = userLogin.userId;
        dispath(add_like({user_id, post_id}));
    }
    const create_cmt = (e) => {
        e.preventDefault()
        let user_id = userLogin.userId;
        let post_id = posts.postId;
        dispath(act_create_cmt({content, user_id, post_id}))
        isSubmit(true)
        setInputValue("d")

    }
    useEffect(() => {
        dispath(act_getPost_comment())
    })
    return (
        //     <div className="postWrapper">
        //         <div className="postTop">
        //             <div className="postTopLeft">
        //                 <Link to="/profile/userId">
        //                     <img src={userLogin.avatarUrl} className="postProfileImg" alt=""/>
        //                 </Link>
        //                 <span className="postUsername">
        // {posts.user.name}
        //         </span>
        //             </div>
        //             <div className="postTopRight">
        //                 <IconButton>
        //                     <MoreVert className="postVertButton" />
        //                 </IconButton>
        //             </div>
        //         </div>
        //         <div className="postCenter">
        //             <span className="postText">{posts.content}</span>
        //             <video id="videoPage" controls={true} src={posts.imgUrl} poster={posts.imgUrl}  className="postImg" >
        //             </video>
        //         </div>
        //         <div className="postBottom">
        //             <div className="postBottomLeft">
        //                 <ThumbUp className="bottomLeftIcon" style={{ color: "#011631" }} />
        //                 <span className="postLikeCounter">12</span>
        //             </div>
        //             <div className="postBottomRight">
        //         <span className="postCommentText">
        //         · comments · share
        //         </span>
        //             </div>
        //         </div>
        //         {/*------------- pót footer ------------------------*/}
        //         <hr className="footerHr" />
        //         <div className="draw_comment">
        //             <div className="cmt-img">
        //                 <div className="cmt-avatar">
        //                     {posts.listComment.map(user=><div><img src={user.userCMT.avatarUrl} className="comment-img" alt=""/></div>)}
        //                 </div>
        //                 <div className="cmt-name">
        //                     {posts.listComment.map(user=><p>{user.userCMT.name} </p>)}
        //                 </div>
        //                 <div className="content-cmt">
        //                     {posts.listComment.map(comment=><p>{comment.content}</p>)}
        //                     {comment2.content}
        //                 </div>
        //             </div>
        //         </div>
        //         {       <div className="draw_comment">
        //             <div className="cmt-img">
        //                 <div className="cmt-avatar">
        //                 </div>
        //                 <div className="cmt-name">
        //                 </div>
        //                 <div className="content-cmt">
        //                 </div>
        //             </div>
        //         </div>}
        //         {submit }
        //         <form onSubmit={create_cmt}>
        //             <input
        //                 onChange={(e)=>{setContent(e.target.value)
        //                     setComment({
        //                         content: e.target.value,
        //                         user:userLogin
        //                     })
        //                 }}
        //                 className="comment-input" type="text" placeholder="comment here"/>
        //             <button style={{display:"none"}} type={"submit"}>ok</button>
        //             {submit &&(<div>comment sucsess</div>)}
        //         </form>
        //         <div className="postBottomFooter">
        //             <form
        //                 onSubmit={(e)=>create_like(e.preventDefault())}>
        //             <div className="postBottomFooterItem">
        //                 <ThumbUpAltOutlined className="footerIcon" />
        //                 <label htmlFor="ok" className="footerText">Like</label>
        //                 <button style={{display:"none"}}  type='submit' id='ok' >ok</button>
        //             </div>
        //             </form>
        //             <div className="postBottomFooterItem">
        //                 <ChatBubbleOutline className="footerIcon" />
        //                 <span className="footerText">Comment</span>
        //             </div>
        //             <div className="postBottomFooterItem">
        //                 <ShareOutlined className="footerIcon" />
        //                 <span className="footerText">Share</span>
        //             </div>
        //         </div>
        //     </div>

        <div className="post">
            <div className="postTop">
                <Avatar
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fhoc_18%2Fstatus%2F1612805401942327299&psig=AOvVaw0qH5VW41cX2s458WFiyEaN&ust=1687530204264000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMCi04KK1_8CFQAAAAAdAAAAABAE"
                    className="postAvatar"/>

                <div className="postTopInfo">
                    <h3>USERNAME</h3>

                </div>
            </div>

            <div className="postBottom">
                <p>{posts.content}</p>
            </div>

            <div className="postImage">
                {/*<img src={posts.imgUrl} alt=""/>*/}
                <video id="videoPage" controls={true} src={posts.imgUrl} poster={posts.imgUrl}/>

            </div>
            <form onSubmit={create_cmt}>
                <input
                    onChange={(e)=>{setContent(e.target.value)
                        setComment({
                            content: e.target.value,
                            user:userLogin
                        })

                    }}
                    className="comment-input" type="text" placeholder="comment here"/>
                <button style={{display:"none"}} type={"submit"}>ok</button>
            </form>

            <div className="draw_comment">
                <div className="cmt-img">
                    {posts.listComment.map(user => <Avatar src={user.userCMT.avatarUrl}/>)}
                </div>
                <div className="cmt-name">
                    {posts.listComment.map(user => <p>{user.userCMT.name} </p>)}
                </div>
                <div className="content-cmt">
                    {posts.listComment.map(comment => <p>{comment.content}</p>)}
                </div>
            </div>

            <div className="postOptions">
                <div className="postOption">
                    <ThumbUp/>
                    <p>Like</p>
                </div>

                <div className="postOption">
                    <ChatBubbleOutline/>
                    <p>Comment</p>
                </div>

                <div className="postOption">
                    <NearMe/>
                    <p>Share</p>
                </div>
                <div className="postOption">
                    <AccountCircle/>
                    <ExpandMoreOutlined/>
                </div>
            </div>
        </div>

    )
}