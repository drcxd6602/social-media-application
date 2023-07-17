import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar.jsx";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profileOuter">
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img className="profileCoverImg" src="/assets/post/4.jpg" alt="" />
                <img className="profileUserImg" src="/assets/person/1.jpg" alt="" />
              </div>
              <div className="profileInfo">
                <h4 className="profileUsername">Juile More</h4>
                <span className="profileUserDesc">Hello My Friends ! </span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
