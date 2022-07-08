import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function BobaShopList() {
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
      <li key={bobaShop.id}>
        <NavLink to={`/bobaShops/${bobaShop.id}`}>{bobaShop.name}</NavLink>
      </li>
    );
  });

  return (
    <>
      <h1>Boba Shop List: </h1>
      <ul>{bobaShopComponents}</ul>
      <NavLink to='/bobaShops/new'>
        <button>create new boba shop</button>
      </NavLink>
    </>
  )
}

export default BobaShopList;
