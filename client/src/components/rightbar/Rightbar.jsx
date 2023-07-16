import './rightbar.css';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img className='birthdayImg' src="/assets/gift.png" alt="birthday" />
          <span className='birthdayText'><b>Surya</b> & <b>3 other friends</b> have Birthday Today</span>
        </div>
        <img className='righbarAd' src="/assets/business.jpg" alt="bannerAd" />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightbarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img className='rightbarProfileImg' src="/assets/person/10.jpg" alt="" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Rightbar