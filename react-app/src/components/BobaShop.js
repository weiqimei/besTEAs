import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    })();
  }, [bobaShopId]);

  if (!bobaShop) {
    return null;
  }

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
        {bobaShop.image}
      </li>
    </ul>
  );
}

export default BobaShop;
