import './register.css';

const Register = () => {
  return (
    <div className='login'>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <h3 className='loginLogo'>Soically</h3>
          <span className='loginDesc'>
            Connect with friends and the world around you on Socially
          </span>
        </div>
        <div className='loginRight'>
          <div className='loginbox'>
            <input className='loginInput' type="text" placeholder='Username' />
            <input className='loginInput' type="email" placeholder='Email' />
            <input className='loginInput' type="password" placeholder='Password' />
            <input className='loginInput' type="password" placeholder='Password Again' />
            <button className='loginButton'>Sign Up</button>
            <hr/>
            <button className='loginRegisterButton'>Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register