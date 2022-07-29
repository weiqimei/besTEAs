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
              {/* Home */}
              {/* <img src='https://api.logo.com/api/v2/images?logo=logo_e986c06d-9167-44e2-b9b2-1a102c689e3f&u=2022-07-29T05%3A19%3A38.169Z&margins=0&format=webp&quality=30&width=200&background=transparent' className='logo-nav'/> */}
              <img src='https://api.logo.com/api/v2/images?logo=logo_83036964-cf25-46d0-a6c8-da0cf3e30cc9&u=2022-07-29T05%3A11%3A58.774Z&margins=0&format=webp&quality=30&width=200&background=transparent' className='logo-nav' />

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
