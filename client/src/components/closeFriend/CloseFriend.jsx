import "./closeFriend.css";

const CloseFriend = ({user}) => {
  return (
    <li className="sidebarFriend" key={user.id}>
      <img
        className="sidebarFriendImg"
        src={user.profilePicture}
        alt="friends"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
