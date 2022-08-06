import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './BobaShopList.css';
import './SplashPage.css';

function SplashPage() {
  const [bobaShops, setBobaShops] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/bobaShops/');
      const responseData = await response.json();
      setBobaShops(responseData.bobaShops);
    }
    fetchData();
  }, []);

  const bobaShopComponents = bobaShops.map((bobaShop) => {
    return (
      <div className='all-boba-shops'>
        <div className='boba-shop-grid'>
          <div className='boba-shop-div'>
            <NavLink to={`/bobaShops/${bobaShop.id}`}>
              <div className='each-boba-shop'>
                <div className='boba-shop-image' style={{ backgroundImage: `url(${bobaShop.image})` }}>
                </div>
                <div className='boba-shop-content' key={bobaShop.id}>
                  <div className='boba-shop-name'>
                    {bobaShop.name}
                  </div>
                  <div className='boba-shop-phone'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='icons' viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg>
                    {bobaShop.phone}
                  </div>
                  <div className='boba-shop-address'>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className='icons' viewBox="0 0 512 512"><path d="M497.1 222.1l-208.1-208.1c-9.364-9.364-21.62-14.04-33.89-14.03C243.7 .0092 231.5 4.686 222.1 14.03L14.03 222.1C4.676 231.5 .0002 243.7 .0004 255.1c.0002 12.26 4.676 24.52 14.03 33.87l208.1 208.1C231.5 507.3 243.7 511.1 256 511.1c12.26 0 24.52-4.677 33.87-14.03l208.1-208.1c9.352-9.353 14.03-21.61 14.03-33.87C511.1 243.7 507.3 231.5 497.1 222.1zM410.5 252l-96 84c-10.79 9.545-26.53 .9824-26.53-12.03V272H223.1l-.0001 48C223.1 337.6 209.6 352 191.1 352S159.1 337.6 159.1 320V240c0-17.6 14.4-32 32-32h95.1V156c0-13.85 16.39-20.99 26.53-12.03l96 84C414 231 415.1 235.4 415.1 240S414 249 410.5 252z" /></svg>
                    </div>
                    <div className='address-list-page'>
                      {bobaShop.address} {bobaShop.city}, {bobaShop.state} {bobaShop.zipcode}
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {/* <NavLink to='/bobaShops/new'>
        <button className='create-new-boba-shop-button'>create new boba shop</button>
      </NavLink> */}

      <div className="banner-container">

        <h1 className='title-boba-shop-page'>Welcome to besTEAs!</h1>
        {/* <form className="search-boba-shops">
          <label>
            <input
              type="text"
              className="search-inner"
              placeholder="Search Bar In Progress"
            ></input>
          </label>

          <button className="submit-search">
            Search
          </button>
        </form> */}
      </div>
      {/* <h3 className='log-in-to-explore'>
        <NavLink to='/login'>Log In </NavLink>
         to Explore Boba Shops</h3> */}
      <h3 className='log-in-to-explore'>
        Your Next Review Awaits</h3>
      <ul>{bobaShopComponents}</ul>
    </>
  )
}

export default SplashPage;
