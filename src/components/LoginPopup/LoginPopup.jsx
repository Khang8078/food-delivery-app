//import React from 'react'
//import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import PropTypes from 'prop-types'; // Import PropTypes

const LoginPopup = ({setShowLogin}) => {
   // const [currState, setCurrState] = useState("Sign Up")
  return (
    <div className='login-popup'>
        <form action="" className='login-popup-container'>
            <div className="login-popup-title">
                <h2>Sign Up</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs"></div>
        </form>
    </div>
  )
}

export default LoginPopup

// Add prop types validation
LoginPopup.propTypes = {
    setShowLogin: PropTypes.func.isRequired, // Assuming setCategory is a function
  };