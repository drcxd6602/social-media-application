import "./topbar.css";
import {Chat, Notifications, Person, Search} from '@mui/icons-material';

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Kingzman</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input type="text" className="searchInput" placeholder="Search for friend, post or video" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img  className="topbarImg" src="/assets/person/3.jpg" alt="Profilepicture" />
      </div>
    </div>
  )
}

export default Topbar