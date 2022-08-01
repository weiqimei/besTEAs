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
                    {bobaShop.phone}
                  </div>
                  <div className='boba-shop-address'>
                    {bobaShop.address} {bobaShop.city}, {bobaShop.state} {bobaShop.zipcode}
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
        <form className="search-boba-shops">
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
        </form>
      </div>
      {/* <h3 className='log-in-to-explore'>
        <NavLink to='/login'>Log In </NavLink>
         to Explore Boba Shops</h3> */}
      <h3 className='log-in-to-explore'>
        - Explore Boba Shops -</h3>
      <ul>{bobaShopComponents}</ul>
    </>
  )
}

export default SplashPage;
