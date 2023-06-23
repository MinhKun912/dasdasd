import React, {useEffect} from "react";
import Header from "../../components/navbar/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./profile.scss";
import Feed from "./../../components/feed/Feed";
import Rightbar from "./../../components/rightbar/Rightbar";
import {useDispatch, useSelector} from "react-redux";
import {act_getPost_profile} from "../../redux/action/actions";
import {Link} from "react-router-dom";
import {IconButton} from "@mui/material";
import {ChatBubbleOutline, Favorite, MoreVert, ShareOutlined, ThumbUp, ThumbUpAltOutlined} from "@mui/icons-material";
import {posts, posts_profile} from "../../redux/reducer/post";

const Profile = () => {
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(act_getPost_profile(user.userId))
    }, [])
    const user = useSelector(state => state.users.user)
    const listPost = useSelector(state => state.posts_profile)
    console.log("profile", listPost)
    let profile_post = listPost.map(item => {
        console.log(item.listComment)
        return <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to="/profile/userId">
                        <img
                            src="https://th.bing.com/th/id/OIP.quLsEWBbuwudRTxYL9u_pAHaJQ?pid=ImgDet&w=199&h=248&c=7&dpr=1.3"
                            className="postProfileImg" alt=""/>
                        {/*    <img*/}
                        {/*    src={*/}
                        {/*    Users.filter((u) => u.id === post.userId)[0].profilePicture*/}
                        {/*  }*/}
                        {/*  alt=""*/}
                        {/*  className="postProfileImg"*/}
                        {/*/>*/}
                    </Link>
                    <span className="postUsername">
    {item.user.name}
                        {/*{Users.filter((u) => u.id === post.userId)[0].username}*/}
            </span>
                    {/*<span className="postDate">{post.date}</span>*/}
                </div>
                <div className="postTopRight">
                    <IconButton>
                        <MoreVert className="postVertButton"/>
                    </IconButton>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{item.content}</span>
                <img src={item.imgUrl} alt="" className="postImg"/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <Favorite className="bottomLeftIcon" style={{color: "red"}}/>
                    <ThumbUp className="bottomLeftIcon" style={{color: "#011631"}}/>
                    {/*<span className="postLikeCounter">{post.like}</span>*/}
                </div>
                <div className="postBottomRight">
            <span className="postCommentText">
            · comments · share
            </span>
                </div>
            </div>
            {/*------------- pót footer ------------------------*/}
            <hr className="footerHr"/>
            <div className="draw_comment">
                <div className="cmt-img">
                    <div className="cmt-avatar">
                        {item.listComment.map((user) => <div><img className='comment-img' src={user.userCMT.avatarUrl} alt=""/></div>)}
                    </div>
                    <div className="cmt-name">
                        {item.listComment.map((user) => <p>{user.userCMT.name}</p>)}

                    </div>

                    <div className="content-cmt">
                        {item.listComment.map((cmt) => <p>{cmt.content}</p>)}
                    </div>


                </div>
            </div>
            <form action="">

                <input type="text" className="comment-input"/>

            </form>
            <div className="postBottomFooter">
                <div className="postBottomFooterItem">
                    <ThumbUpAltOutlined className="footerIcon"/>
                    <span className="footerText">Like</span>
                </div>
                <div className="postBottomFooterItem">
                    <ChatBubbleOutline className="footerIcon"/>
                    <span className="footerText">Comment</span>
                </div>
                <div className="postBottomFooterItem">
                    <ShareOutlined className="footerIcon"/>
                    <span className="footerText">Share</span>
                </div>
            </div>
        </div>
    })

    return (
        <div className="profile">
            <Header/>
            <div className="profileWrapper">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            {/*day la anh bia*/}
                            <img
                                src="https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/312344547_163011133016999_2683804416794258228_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=KtqBqPs0uP8AX8iFRpu&_nc_ht=scontent.fhan4-3.fna&oh=00_AfC-KnURjUmZ4bi5Zjpn8dvZRTgprDcD9nkPYYkg6hGUNw&oe=648C7239"
                                alt=""
                                className="profileCoverImg"
                            />
                            {/*day la anh dai dien*/}

                            <img
                                src="https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/288653030_137333575584755_4970607294584990282_n.jpg?stp=dst-jpg_s851x315&_nc_cat=102&ccb=1-7&_nc_sid=da31f3&_nc_ohc=oVi9ElL0SZsAX9t-eFN&_nc_ht=scontent.fhan3-1.fna&oh=00_AfDTSD8E1XPoaBuhjLSHONTlpGG5KdChCuCQ58ffLHpz0Q&oe=648B7989"
                                alt=""
                                className="profileUserImg"
                            />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.name}</h4>
                            <span className="profileInfoDesc">content</span>
                        </div>
                        {profile_post}
                    </div>
                    <div className="profileRightBottom">
                        {/*  <Feed />*/}
                        {/*  <Rightbar />*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
