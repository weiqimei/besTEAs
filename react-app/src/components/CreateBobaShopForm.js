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
  const [errors, setErrors] = useState([]);

  const updateName = (e) => setName(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateZipcode = (e) => setZipcode(e.target.value);
  const updatePhone = (e) => setPhone(e.target.value);
  const updateHours = (e) => setHours(e.target.value);
  const updateImage = (e) => setImage(e.target.value);

  // function checkImage(url) {
  //   var image = new Image();
  //   image.onload = function () {
  //     if (this.width > 0) {
  //       // console.log("image exists");
  //       return true;
  //     }
  //   }
  //   image.onerror = function () {
  //     // console.log("image doesn't exist");
  //     return false;
  //   }
  //   image.src = url;
  // }
  // async function checkImage(url) {

  //   const res = await fetch(url);
  //   const buff = await res.blob();

  //   return buff.type.startsWith('image/')

  // }


  // errors handling
  useEffect(() => { 
    const err = [];
    if (!name) err.push('Name is required');
    if (name.startsWith(' ')) err.push('Name cannot start with a space');
    if (name.length >= 25) err.push('Name must be less than 25 characters');
    if (!address) err.push('Address is required');
    if (address.startsWith(' ')) err.push('Address cannot start with a space');
    if (address.length >= 100) err.push('Address must be less than 100 characters');
    if (!city) err.push('City is required');
    if (city.startsWith(' ')) err.push('City cannot start with a space');
    if (city.length >= 25) err.push('City must be less than 25 characters');
    if (!state) err.push('State is required');
    if (state.startsWith(' ')) err.push('State cannot start with a space');
    if (state.length >= 25) err.push('State must be less than 25 characters');
    if (!zipcode) err.push('Zipcode is required');
    if (zipcode.startsWith(' ')) err.push('Zipcode cannot start with a space');
    if (zipcode.length >= 25) err.push('Zipcode must be less than 25 characters');
    if (!phone) err.push('Phone is required');
    if (phone.startsWith(' ')) err.push('Phone cannot start with a space');
    if (phone.length >= 25) err.push('Phone must be less than 25 characters');
    if (!hours) err.push('Hours is required');
    if (hours.startsWith(' ')) err.push('Hours cannot start with a space');
    if (hours.length >= 50) err.push('Hours must be less than 50 characters');  
    if (!image) err.push('Image is required');
    if (image.startsWith(' ')) err.push('Image cannot start with a space');
    if (image && !image.startsWith('https://') && !image.endsWith('.jpg') && !image.endsWith('.png') && !image.endsWith('.jpeg')) err.push('Please provide a valid image URL');
    
    setErrors(err);
  }, [name, address, city, state, zipcode, phone, hours, image]);

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
      {/* <br /> */}
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
            required
          />
        </div>
        <br />
        <div>
          <input className='add-boba-shop-input-field'
            type="text"
            placeholder="Address"
            value={address}
            onChange={updateAddress}
            required
          />
        </div>
        <br />
        <div>
          <input className='add-boba-shop-input-field'
            type="text"
            placeholder="City"
            value={city}
            onChange={updateCity}
            required
          />
        </div>
         <br />
        <div>
          <input className='add-boba-shop-input-field'
            type="text"
            placeholder="State"
            value={state}
            onChange={updateState}
            required
          />
        </div>
        <br />
        <div>
          <input className='add-boba-shop-input-field'
            type="text"
            placeholder="Zipcode"
            value={zipcode}
            onChange={updateZipcode}
            required
          />
        </div>
        <br />
        <div>
          <input className='add-boba-shop-input-field'
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={updatePhone}
            required
          />
        </div>
        <br />
        <div>
          <input className='add-boba-shop-input-field'
            type="text"
            placeholder="Hours"
            value={hours}
            onChange={updateHours}
            required
          />
        </div>
        <br />
        <div>
          <input className='add-boba-shop-input-field'
            type="text"
            placeholder="Image (Optional)"
            value={image}
            onChange={updateImage}
            required
          />
        </div>
        <br />
        <div>
          <button className='submit-button' type="submit" disabled={!!errors.length}>Post New Boba Shop</button>
        </div>
      </form>
    </>
  )
}

export default CreateBobaShopForm;
