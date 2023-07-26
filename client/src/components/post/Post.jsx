import './post.css';
import { InsertCommentRounded, MoreVert } from '@mui/icons-material';

import { Users } from '../../dummyData';
import { useState } from 'react';

const Post = ({post}) => {

  const [like,setLike] = useState(post.like);
  const [isliked, setIsLiked] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  console.log(PF)

  const likeHandler = ()=>{
    setLike(isliked ? like-1 : like+1)
    setIsLiked(!isliked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpg"
              alt="personProfile"
            />
            <span className="postUsername">Techno</span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          {console.log(PF + post.photo)}
          <img className="postImg" src={PF + post.photo} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              alt="like"
              onClick={likeHandler}
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              alt="heart"
              onClick={likeHandler}
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <InsertCommentRounded htmlColor="#999" className="postComment" />
            <span className="postCommentText">{post.comment} comments </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post