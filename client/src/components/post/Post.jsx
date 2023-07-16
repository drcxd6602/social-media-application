import './post.css';
import { InsertCommentRounded, MoreVert } from '@mui/icons-material';

const Post = () => {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImg' src="/assets/person/1.jpg" alt="personProfile" />
            <span className='postUsername'>Techno Priya</span>
            <span className='postDate'>5 min ago</span>
          </div>
          <div className='postTopRight'>
            <MoreVert/>
          </div>
        </div>

        <div className='postCenter'>
          <span className='postText'>Hey! Its my first post :) </span>
          <img className='postImg' src="/assets/post/2.jpg" alt="" />  
        </div>
        
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src="/assets/like.png" alt="like" />
            <img className='likeIcon' src="/assets/heart.png" alt="heart" />
            <span className='postLikeCounter'>32 people like it</span>
          </div>
          <div className='postBottomRight'>
            <InsertCommentRounded htmlColor='#999' className='postComment'/>
            <span className='postCommentText'>9 comments </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post