import "./closeFriend.css";

const CloseFriend = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFriend" key={user.id}>
      <img
        className="sidebarFriendImg"
        src={PF + user.profilePicture}
        alt="friends"
      />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
};

export default CloseFriend;
