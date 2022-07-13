import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBobaShops, createBobaShop } from "../store/bobashops";
import './CreateBobaShopForm.css';

const CreateBobaShopForm = () => {
  const user = useSelector(state => state.session.user);
  const user_id = user.id;
  // console.log(user_id, "THIS IS USER ID---------");

  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phone, setPhone] = useState('');
  const [hours, setHours] = useState('');
  const [image, setImage] = useState('');

  const updateName = (e) => setName(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateZipcode = (e) => setZipcode(e.target.value);
  const updatePhone = (e) => setPhone(e.target.value);
  const updateHours = (e) => setHours(e.target.value);
  const updateImage = (e) => setImage(e.target.value);

  // errors handling
  useEffect(() => { }, [name, address, city, state, zipcode, phone, hours, image]);

  useEffect(() => {
    dispatch(getAllBobaShops());
  }, [dispatch]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBobaShop = {
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
    let bobaShop = await dispatch(createBobaShop(newBobaShop));
    if (bobaShop) {
      history.push(`/bobaShops`);
    }
  }

  return (
    <>
      <h1 className='log-in-to-beateas'>Add a Boba Shop</h1>
      <br />
      <form onSubmit={handleSubmit} className='add-boba-shop-form'>
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
          <button className='submit-button' type="submit">Post New Boba Shop</button>
        </div>
      </form>
    </>
  )
}

export default CreateBobaShopForm;
