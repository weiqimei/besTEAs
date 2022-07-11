import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBobaShops, getBobaShop } from '../store/bobashops';
import Reviews from './Reviews';
import { getAllReviews } from '../store/reviews';
import CreateReviewForm from './CreateReviewForm';

import './BobaShop.css';

function BobaShop() {
  const [bobaShop, setBobaShop] = useState({});
  const { bobaShopId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBobaShop(bobaShopId));
  }, [dispatch, bobaShopId]);

  // const bobaShopState = useSelector(state => state.bobaShop);

  console.log(bobaShopId, 'THIS IS BOBA SHOP ID -------------------');

  const reviews = useSelector(state => state.reviewReducer);
  const bobaShopReviews = Object.values(reviews)

  // might need to change
  useEffect(() => {
    dispatch(getAllBobaShops());
    dispatch(getAllReviews(bobaShopId));
  }, [dispatch, bobaShopId]);

  useEffect(() => {
    if (!bobaShopId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/bobaShops/${bobaShopId}`);
      const bobaShop = await response.json();
      setBobaShop(bobaShop);
      console.log(bobaShop, "---------THIS IS BOBASHOP from BobaShop.js");
    })();
  }, [bobaShopId]);

  if (!bobaShop) {
    return null;
  }

  // console.log(bobaShop.image)

  return (
    <>
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
        {(bobaShop?.image) &&
          <div>
            <li>
              <strong>Image</strong>
            </li>
            <li>
              <div className='boba-image' style={{ backgroundImage: `url(${bobaShop.image})` }}>
                {/* {bobaShop.image} */}
              </div>
            </li>
          </div>
        }
        <NavLink to={`/bobaShops/${bobaShop.id}/edit`}>
          <button>Edit Boba Shop Details</button>
        </NavLink>
        <NavLink to={`/bobaShops/${bobaShop.id}/delete`}>
          <button>Delete Boba Shop</button>
        </NavLink>
      </ul>
      <div>
        <Reviews reviews={bobaShopReviews} />
      </div>
      <div>
        <CreateReviewForm bobaShopId={bobaShopId} />
      </div>
    </>
  );
}

export default BobaShop;
