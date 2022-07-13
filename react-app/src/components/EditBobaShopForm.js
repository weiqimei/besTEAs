import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editBobaShop, getBobaShop } from "../store/bobashops";

const EditBobaShopForm = () => {
  const user = useSelector(state => state.session.user);
  const user_id = user.id;

  const dispatch = useDispatch();
  const history = useHistory();

  const { bobaShopId } = useParams();
  console.log(bobaShopId, "THIS IS BOBASHOP ID from EditBobaShopForm---------");

  const bobaShopObject = Object.values(useSelector(state => state.bobaShopReducer))
  const bobaShop = bobaShopObject[0];
  console.log(bobaShop, "----THIS IS BOBASHOP from EditBobaShopForm---------");

  const [name, setName] = useState(bobaShop.name);
  const [address, setAddress] = useState(bobaShop.address);
  const [city, setCity] = useState(bobaShop.city);
  const [state, setState] = useState(bobaShop.state);
  const [zipcode, setZipcode] = useState(bobaShop.zipcode);
  const [phone, setPhone] = useState(bobaShop.phone);
  const [hours, setHours] = useState(bobaShop.hours);
  const [image, setImage] = useState(bobaShop.image);
  const [errors, setErrors] = useState([]);


  const updateName = (e) => setName(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateZipcode = (e) => setZipcode(e.target.value);
  const updatePhone = (e) => setPhone(e.target.value);
  const updateHours = (e) => setHours(e.target.value);
  const updateImage = (e) => setImage(e.target.value);

  useEffect(() => {
    const err = [];
    if (!name) err.push('Name is required');
    if (name.length >= 25) err.push('Name must be less than 25 characters');
    if (!address) err.push('Address is required');
    if (address.length >= 100) err.push('Address must be less than 100 characters');
    if (!city) err.push('City is required');
    if (city.length >= 25) err.push('City must be less than 25 characters');
    if (!state) err.push('State is required');
    if (state.length >= 25) err.push('State must be less than 25 characters');
    if (!zipcode) err.push('Zipcode is required');
    if (zipcode.length >= 25) err.push('Zipcode must be less than 25 characters');
    if (!phone) err.push('Phone is required');
    if (phone.length >= 25) err.push('Phone must be less than 25 characters');
    if (!hours) err.push('Hours is required');
    if (hours.length >= 50) err.push('Hours must be less than 50 characters');

    setErrors(err);
  }, [name, address, city, state, zipcode, phone, hours, image]);

  useEffect(() => {
    dispatch(getBobaShop(bobaShopId))
  }, [dispatch, bobaShopId])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBobaShop = {
      ...bobaShop,
      name,
      address,
      city,
      state,
      zipcode,
      phone,
      hours,
      user_id,
      image
    };

    let updatedBobaShop = await dispatch(editBobaShop(newBobaShop));
    if (updatedBobaShop) {
      history.push(`/bobaShops`);
    }
  }

  return (
    <>
      <h1 className='log-in-to-beateas'>Edit Boba Shop</h1>
      <form onSubmit={handleSubmit} className='add-boba-shop-form'>
        <div>
          {errors.length > 0 && errors.map((err, i) => (
            <li className='errors' key={i}>{err}</li>
          ))}
        </div>
      <div>
        <input className='add-boba-shop-input-field' 
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName}
        />
      </div>
        <br />
      <div>
        <input className='add-boba-shop-input-field'
          type="text"
          placeholder="Address"
          value={address}
          onChange={updateAddress}
        />
      </div>
        <br />
      <div>
        <input className='add-boba-shop-input-field'
          type="text"
          placeholder="City"
          value={city}
          onChange={updateCity}
        />
      </div>
        <br />
      <div>
        <input className='add-boba-shop-input-field'
          type="text"
          placeholder="State"
          value={state}
          onChange={updateState}
        />
      </div>
        <br />
      <div>
        <input className='add-boba-shop-input-field'
          type="text"
          placeholder="Zipcode"
          value={zipcode}
          onChange={updateZipcode}
        />
      </div>
        <br />
      <div>
        <input className='add-boba-shop-input-field'
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={updatePhone}
        />
      </div>
        <br />
      <div>
        <input className='add-boba-shop-input-field'
          type="text"
          placeholder="Hours"
          value={hours}
          onChange={updateHours}
        />
      </div>
        <br />
      <div>
        <input className='add-boba-shop-input-field'
          type="text"
          placeholder="Image"
          value={image}
          onChange={updateImage}
        />
      </div>
        <br />
      <div>
          <button className='submit-button' type="submit" disabled={!!errors.length}>Update Boba Shop</button>
      </div>
    </form>
    </>
  )
}

export default EditBobaShopForm;
