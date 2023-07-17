import "./rightbar.css";

import { Users } from "../../dummyData";
import Online from "../online/Online";

const Rightbar = ({ profile }) => {


  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.png" alt="birthday" />
          <span className="birthdayText">
            <b>Surya</b> & <b>3 other friends</b> have Birthday Today
          </span>
        </div>
        <img className="righbarAd" src="/assets/business.jpg" alt="bannerAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City : </span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From : </span>
            <span className="rightbarInfoValue">Delhi</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship : </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          {Users.map((user) => (
            <div className="rightbarFollowing" key={user.id}>
              <img
                className="rightbarFollowingImg"
                src={user.profilePicture}
                alt=""
              />
              <span className="rightbarFollowingName">{user.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {
          (profile)? <ProfileRightbar/> : <HomeRightbar/>
        }
      </div>
    </div>
  );
};

export default Rightbar;
