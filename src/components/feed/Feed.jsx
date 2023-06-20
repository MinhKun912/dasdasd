import React from "react";
import { Posts } from "../../data";
import Post from "../post/Post";
import Share from "../share/Share";
import Stories from "../stories/Stories";
import "./feed.scss";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
        <Share />
          <Post/>
      </div>
    </div>
  );
};

export default Feed;
