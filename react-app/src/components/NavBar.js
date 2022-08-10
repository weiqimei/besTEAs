import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
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
              {/* <div className='yelp-logo'>
                besTEAs <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M42.9 240.32l99.62 48.61c19.2 9.4 16.2 37.51-4.5 42.71L30.5 358.45a22.79 22.79 0 0 1-28.21-19.6 197.16 197.16 0 0 1 9-85.32 22.8 22.8 0 0 1 31.61-13.21zm44 239.25a199.45 199.45 0 0 0 79.42 32.11A22.78 22.78 0 0 0 192.94 490l3.9-110.82c.7-21.3-25.5-31.91-39.81-16.1l-74.21 82.4a22.82 22.82 0 0 0 4.09 34.09zm145.34-109.92l58.81 94a22.93 22.93 0 0 0 34 5.5 198.36 198.36 0 0 0 52.71-67.61A23 23 0 0 0 364.17 370l-105.42-34.26c-20.31-6.5-37.81 15.8-26.51 33.91zm148.33-132.23a197.44 197.44 0 0 0-50.41-69.31 22.85 22.85 0 0 0-34 4.4l-62 91.92c-11.9 17.7 4.7 40.61 25.2 34.71L366 268.63a23 23 0 0 0 14.61-31.21zM62.11 30.18a22.86 22.86 0 0 0-9.9 32l104.12 180.44c11.7 20.2 42.61 11.9 42.61-11.4V22.88a22.67 22.67 0 0 0-24.5-22.8 320.37 320.37 0 0 0-112.33 30.1z" /></svg>
              </div> */}
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
              <SearchBar />
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
