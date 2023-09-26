import React from 'react'
import classes from './Login.module.css'
import Logo from '../../assets/amazon-logo (2).png'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Login = () => {
  return (
    <div>
        <div>
            <img src={Logo} alt="Amazon logo" />
        </div>
        <div>
            <h2>Sign in</h2>
                <form action="">
                    <label htmlFor="">Email or mobile phone number</label>
                    <input type="text" />
                    <button>Continue</button>
                </form>
            <p>By continuing, you agree to Amazon's Conditions of <span>Use</span> and <span>Privacy Notice.</span></p>
            <p><span><ArrowRightIcon/></span>Need help?</p>
        </div>
        <div>
            New to Amazon?
        </div>
        <button>Create your Amazon account</button>
        <div>
            <p><span> Conditions of Use  Privacy    </span><span>Notice</span><span></span>Help</p>
            <p>&copy; © 1996-2023, Amazon.com, Inc. or its <span>Hemanath</span></p>
        </div>
    </div>
  )
}

export default Login