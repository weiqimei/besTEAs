import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul className='navbar'>
        <div className='each-nav-element'>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </div>
        <div className='each-nav-element'>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div className='each-nav-element'>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
        {/* <div className='each-nav-element'>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div> */}
        <div className='each-nav-element'>
          <NavLink to='/bobaShops' exact={true} activeClassName='active'>
            Boba Shops
          </NavLink>
        </div>
        <div className='each-nav-element'>
          <LogoutButton />
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
