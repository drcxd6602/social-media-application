import './sidebar.css';
import { Bookmarks, Chat, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'> 
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon'/>
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <Chat className='sidebarIcon'/>
            <span className='sidebarListItemText'>Chats</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleFilledOutlined className='sidebarIcon'/>
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='sidebarListItem'>
            <Group className='sidebarIcon'/>
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmarks className='sidebarIcon'/>
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutline className='sidebarIcon'/>
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
            <Event className='sidebarIcon'/>
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <School className='sidebarIcon'/>
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr'/>
        <ul className='sidebarFriendList'>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/person/1.jpg" alt="friends" />
            <span className='sidebarFriendName'>Julie More</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/person/10.jpg" alt="friends" />
            <span className='sidebarFriendName'>Julie More</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/person/2.jpg" alt="friends" />
            <span className='sidebarFriendName'>Sanika Gaikwad</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/person/4.jpg" alt="friends" />
            <span className='sidebarFriendName'>Julie More</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/person/5.jpg" alt="friends" />
            <span className='sidebarFriendName'>Julie More</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/person/6.jpg" alt="friends" />
            <span className='sidebarFriendName'>Julie More</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/person/7.jpg" alt="friends" />
            <span className='sidebarFriendName'>Julie More</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/person/8.jpg" alt="friends" />
            <span className='sidebarFriendName'>Julie More</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/person/9.jpg" alt="friends" />
            <span className='sidebarFriendName'>Julie More</span>
          </li>
          <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src="/assets/person/10.jpg" alt="friends" />
            <span className='sidebarFriendName'>Julie More</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar