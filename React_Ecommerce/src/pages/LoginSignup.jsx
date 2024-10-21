import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
        <div className="LoginSignup-container">
          <div className="form-section">
          <p className='signup'>Sign Up</p>
          <form className="inputs">
            <input type="text" required/>
            <input type="email" name="" id="" required/>
            <input type="password" required />
            <button type='submit'>Continue</button>
          </form>
          <p className='login'>Already have an account?<span>Login here</span></p>
          <div className='terms'>
              <input type="checkbox" />
              <p>By clicking this You agree to the Terms</p>
          </div>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup