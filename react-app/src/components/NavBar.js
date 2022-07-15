import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';
import './NavBar.css';

const NavBar = () => {

  const currentUser = useSelector(state => state.session.user);

  return (
    <>
      {!currentUser ? <nav>
        <ul className='navbar'>
          <div className='each-nav-element'>
            <NavLink to='/' exact={true} activeClassName='active'>
              Home
            </NavLink>
          </div>
          <div className='each-nav-element'>
            <NavLink to='/bobaShops/new'>
              Add Boba Shop
            </NavLink>
          </div>
          <div className='each-nav-element'>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </div>
          <div className='each-nav-element signup'>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </div>
        </ul>
      </nav> :
        <nav>
          <ul className='navbar'>
            <div className='each-nav-element'>
              <NavLink to='/bobaShops' exact={true} activeClassName='active'>
                Browse Boba Shops
              </NavLink>
            </div>
            <div className='each-nav-element'>
              <NavLink to='/bobaShops/new'>
                Add Boba Shop
              </NavLink>
            </div>

            <div>
              <LogoutButton />
            </div>
          </ul>
        </nav>}
    </>
  );
}

export default NavBar;

{/* <div className='each-nav-element'>
  <NavLink to='/users' exact={true} activeClassName='active'>
    Users
  </NavLink>
</div> */}
