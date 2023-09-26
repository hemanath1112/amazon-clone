import React from 'react'
import classes from './AsideBar.module.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';

const AsideBar = ({open}) => {
  return (
    <div className={classes.backdrop}>
        <div className={classes.closeIcon} onClick={open}>
            <CloseIcon />  
        </div>
        <div className={classes.whitebar}>
            <div className={classes.top}>
                <AccountCircleIcon />
              
                <h3>Hello, Sign in</h3>
            </div>
            <div className={classes.SideText}>
                <h4>Trending</h4>
                <p>Best Sellers</p>
                <p>New Releases</p>
                <p>Movers and Shakers</p>
            </div>
            <div className={classes.SideText}>
                <h4>Digital Content And Devices</h4>
                <p>Amazon miniTV-FREE entertainment</p>
                <div className={classes.RightLoco}>
                    <p><span>Echo & Alexa</span><ChevronRightIcon/><span></span></p>
                    <p><span>Fire TV</span><ChevronRightIcon/><span></span></p>
                    <p><span>Kindle E-Readers & eBook</span><ChevronRightIcon/><span></span></p>
                    <p><span>Audible Audiobooks</span><ChevronRightIcon/><span></span></p>
                    <p><span>Amazon Prime Video</span><ChevronRightIcon/><span></span></p>
                    <p><span>Amazon Prime Music</span><ChevronRightIcon/><span></span></p>
                </div>
            </div>
            <div className={classes.SideText}>
                <h4>Shop By Category</h4>
                <div  className={classes.RightLoco}>
                    <p><span>Mobiles, Computers</span><ChevronRightIcon/><span></span></p>
                    <p><span>Tv, Appliances, Electronics</span><ChevronRightIcon/><span></span></p>
                    <p><span>Men's Fashion</span><ChevronRightIcon/><span></span></p>
                    <p><span>Woman's Fashion</span><ChevronRightIcon/><span></span></p>
                    <p><span>Woman's Fashion</span><ChevronRightIcon/><span></span></p>
                    <p><span>Woman's Fashion</span><ChevronRightIcon/><span></span></p>
                    <p><span>Woman's Fashion</span><ChevronRightIcon/><span></span></p>
                    <p><span>Woman's Fashion</span><ChevronRightIcon/><span></span></p>
                </div>
                <p><span>See All</span><KeyboardArrowDownIcon/></p>
            </div>
        </div>
        
    </div>
    
  )
}

export default AsideBar