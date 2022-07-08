import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BobaShop.css';

function BobaShop() {
  const [bobaShop, setBobaShop] = useState({});
  const { bobaShopId } = useParams();

  useEffect(() => {
    if (!bobaShopId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/bobaShops/${bobaShopId}`);
      const bobaShop = await response.json();
      setBobaShop(bobaShop);
      console.log(bobaShop, "---------THIS IS BOBASHOP");
    })();
  }, [bobaShopId]);

  if (!bobaShop) {
    return null;
  }

  // console.log(bobaShop.image)

  return (
    <ul>
      <li>
        <strong>Boba Shop Id</strong> {bobaShopId}
      </li>
      <li>
        <strong>Name</strong> {bobaShop.name}
      </li>
      <li>
        <strong>Address</strong> {bobaShop.address} {bobaShop.city} {bobaShop.state} {bobaShop.zipcode}
      </li>
      <li>
        <strong>Phone Number</strong> {bobaShop.phone}
      </li>
      <li>
        <strong>Hours</strong> {bobaShop.hours}
      </li>
      <li>
        <strong>Image</strong> {bobaShop.image}
      </li>
      <li>
        <div className='boba-image' style={{backgroundImage: `url(${bobaShop.image})`}}>
        {/* {bobaShop.image} */}
        </div>
      </li>
    </ul>
  );
}

export default BobaShop;
