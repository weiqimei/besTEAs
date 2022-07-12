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

  const bobaShopsObject = useSelector(state => state.bobaShopReducer);
  console.log(bobaShopsObject, '----This is bobaShopsObject from BobaShop.js');
  const bobaShopArray = Object.values(bobaShopsObject)
  console.log(bobaShopArray, '----This is bobaShopArray from BobaShop.js');

  console.log(bobaShopId, '----This is bobaShopId from BobaShop.js');

  const targetBobaShop = bobaShopArray.filter(bobaShop => bobaShop.id === parseInt(bobaShopId));
  const target = Object.values(targetBobaShop)
  const targetBobaShopOne = target[0];
  console.log(targetBobaShopOne, '----This is targetBobaShop from BobaShop.js');
  if (targetBobaShopOne) {
    console.log(targetBobaShopOne.user_id, '----This is targetBobaShop || from BobaShop.js');
  }

  const sessionUser = useSelector((state) => state.session.user)
  console.log(sessionUser, '----This is sessionUser from BobaShop.js');
  console.log(sessionUser.id, '----This is sessionUser id from BobaShop.js');

  // const user = useSelector(state => state.session.user);
  const user_id = sessionUser.id;

  console.log(user_id, '----This is user_id from BobaShop.js');

  // useEffect(() => {
  // }, [dispatch, bobaShopId]);

  // const bobaShopState = useSelector(state => state.bobaShop);

  // console.log(bobaShopId, 'THIS IS BOBA SHOP ID -------------------');

  const reviews = useSelector(state => state.reviewReducer);
  const bobaShopReviews = Object.values(reviews)

  // might need to change
  useEffect(() => {
    dispatch(getBobaShop(bobaShopId));
    // dispatch(getAllBobaShops());
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
        {targetBobaShopOne &&
          sessionUser?.id === targetBobaShopOne.user_id && <NavLink to={`/bobaShops/${bobaShop.id}/edit`}>
            <button>Edit Boba Shop Details</button>
          </NavLink>
        }
        {targetBobaShopOne &&
          sessionUser?.id === targetBobaShopOne.user_id && <NavLink to={`/bobaShops/${bobaShop.id}/delete`}>
            <button>Delete Boba Shop</button>
          </NavLink>
        }
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


// {
//   sessionUser?.id === OneBobaShop[0].user_id && <NavLink to={`/bobaShops/${bobaShop.id}/edit`}>
//     <button>Edit Boba Shop Details</button>
//   </NavLink>
// }
// {
//   sessionUser?.id === OneBobaShop[0].user_id && <NavLink to={`/bobaShops/${bobaShop.id}/delete`}>
//     <button>Delete Boba Shop</button>
//   </NavLink>
// }
