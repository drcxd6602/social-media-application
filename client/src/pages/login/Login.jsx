import './login.css';

const Login = () => {
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
            <input className='loginInput' type="email" placeholder='Email' />
            <input className='loginInput' type="password" placeholder='Password' />
            <button className='loginButton'>Log In</button>
            <span className='loginForgot'>Forgot Password?</span>
            <hr/>
            <button className='loginRegisterButton'>Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login