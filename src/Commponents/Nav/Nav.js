import React, { Fragment } from 'react'
import classes from './Nav.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Fragment>
        <div className={classes.Navbar}>
          <Link to="/aside">
            <div className="menu">
                  <MenuIcon />
                  <span>All</span>
              </div>
          </Link>
           
            <p>Amazon miniTV</p>
            <p>sell</p>
            <p>Best Sellers</p>
            <p>Mobiles</p>
            <p>Today Deals</p>
            <p>New Releases</p>
            <p>Prime</p>
            <p>Customer Service</p>
            <p>Electonics</p>
        </div>
    </Fragment>
  )
}

export default Nav