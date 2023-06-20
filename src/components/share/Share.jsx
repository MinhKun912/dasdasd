import {
    Close,
    EmojiEmotions,
    PermMedia,
    VideoCameraFront,
} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import "./share.scss";
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
} from "firebase/storage";
import {useDispatch, useSelector} from "react-redux";
import {act_create_Post, act_get_imageUrl} from "../../redux/action/actions";
import {storage} from "../../firebase";

const Share = () => {

    const [file, setFile] = useState(null)
    const [content, setContent] = useState();
    const dispath = useDispatch();
    const userLogin = useSelector(state => state.users.user);
    console.log("day la user login", userLogin)
    console.log(userLogin.userId)
    const [imageUrl, setImageUrl] = useState("");
    const [newPost, setNewPost] = useState({
        content: content,
        user_id: userLogin.userId
    });

    const uploadFile = (e) => {

        let imageUpload = e.target.files[0];
        if (imageUpload == null) return;
        setFile(e.target.files[0])
        const imageRef = ref(storage, `uploadImage/${imageUpload.name}`);
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrl(url);
            });
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispath(act_create_Post({...newPost, imgUrl: imageUrl}));
    };


    console.log(content)

    const removeImage = () => {
        setFile(null);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="share">
                <div className="shareWrapper">
                    <div className="shareTop">
                        <img
                            src="/assets/person/user.jpg"
                            alt=""
                            className="shareProfileImg"
                        />
                        <input
                            type="text"
                            placeholder={"What's on your mind" + ` ` + `${userLogin.name} `}
                            className="shareInput"
                            value={newPost.content}
                            onChange={(e) =>
                                setNewPost({...newPost, content: e.target.value})


                        }

                        />
                    </div>
                    <hr className="shareHr"/>
                    {file && (
                        <div className="shareImgContainer">
                            <img src={URL.createObjectURL(file)} alt="" className="shareImg"/>
                            <Close className="shareCancelImg" onClick={removeImage}/>
                        </div>

                    )}
                    <button type="submit">Xac Nhan</button>
                    <button type="submit">Upload</button>
                    <div className="shareBottom">
                        <div className="shareOptions">
                            <div className="shareOption">
                                <VideoCameraFront
                                    className="shareIcon"
                                    style={{color: "#bb0000f2"}}
                                />
                                <span className="shareOptionText">Live Video</span>
                            </div>
                            <label htmlFor="file" className="shareOption">
                                <PermMedia className="shareIcon" style={{color: "#2e0196f1"}}/>
                                <span className="shareOptionText">Photo/Video</span>
                                <input
                                    type="file"
                                    id="file"
                                    accept=".png,.jpeg,.jpg"
                                    style={{display: "none"}}
                                    // onChange={(e) => setFile(e.target.files[0])}
                                    onChange={uploadFile}
                                    />
                            </label>
                            <div className="shareOption">
                                <EmojiEmotions
                                    className="shareIcon"
                                    style={{color: "#bfc600ec"}}
                                />
                                <span className="shareOptionText">Feelings/Activity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Share;
