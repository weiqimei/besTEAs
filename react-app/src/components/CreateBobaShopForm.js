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
    if (/^[a-zA-Z]+$/.test(city) === false) err.push('City must be letters only');
    if (!state) err.push('State is required');
    if (state.startsWith(' ')) err.push('State cannot start with a space');
    if (state.length >= 25) err.push('State must be less than 25 characters');
    if (/^[a-zA-Z]+$/.test(state) === false) err.push('State must be letters only');
    if (!zipcode) err.push('Zipcode is required');
    if (zipcode.startsWith(' ')) err.push('Zipcode cannot start with a space');
    if (zipcode.length !== 5) err.push('Zipcode must be a 5 digit area code');
    if (isNaN(zipcode)) err.push('Zipcode must be numeric');
    if (!phone) err.push('Phone number is required');
    if (phone.startsWith(' ')) err.push('Phone number cannot start with a space');
    if (isNaN(phone)) err.push('Phone number must be numeric');
    if (phone.length < 7 || phone.length >= 25) err.push('Phone number must be between 7 and 25 characters');
    if (!hours) err.push('Hours is required');
    if (hours.startsWith(' ')) err.push('Hours cannot start with a space');
    if (hours.length >= 50) err.push('Hours must be less than 50 characters');
    if (!image) err.push('Image is required');
    if (image.startsWith(' ')) err.push('Image cannot start with a space');
    if (image && !image.startsWith('https://') && !image.endsWith('.jpg') && !image.endsWith('.png') && !image.endsWith('.jpeg') && !image.endsWith('.gif')) err.push('Please provide a valid image URL');

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
    <div className="add-boba-div">
      <div className="errors-div">
        <h2 className="form-reqs">Form Requirements</h2>
        {errors.length > 0 && errors.map((err, i) => (
          <li className='add-boba-shop-errors' key={i}>{err}</li>
        ))}
      </div>
      <div className="add-a-boba-shop-div">
        <div className='add-a-boba-shop-title'>Add a Boba Shop</div>
        {/* <br /> */}
        <form onSubmit={handleSubmit} className='add-boba-shop-form'>
          <div>
            <div>
              <label className='add-boba-shop-label'>Name</label>
            </div>
            <input className='add-boba-shop-input-field'
              type="text"
              placeholder="Boba Guys"
              value={name}
              onChange={updateName}
              required
            />
          </div>
          <br />
          <div>
            <div>
              <div>
                <label className='add-boba-shop-label'>Address</label>
              </div>
            </div>
            <input className='add-boba-shop-input-field'
              type="text"
              placeholder="123 Boba Street"
              value={address}
              onChange={updateAddress}
              required
            />
          </div>
          <br />
          <div>
            <div>
              <label className='add-boba-shop-label'>City</label>
            </div>
            <input className='add-boba-shop-input-field'
              type="text"
              placeholder="San Francisco"
              value={city}
              onChange={updateCity}
              required
            />
          </div>
          <br />
          <div>
            <div>
              <label className='add-boba-shop-label'>State</label>
            </div>
            <input className='add-boba-shop-input-field'
              type="text"
              placeholder="CA"
              value={state}
              onChange={updateState}
              required
            />
          </div>
          <br />
          <div>
            <div>
              <label className='add-boba-shop-label'>Zipcode</label>
            </div>
            <input className='add-boba-shop-input-field'
              type="text"
              placeholder="94102"
              value={zipcode}
              onChange={updateZipcode}
              required
            />
          </div>
          <br />
          <div>
            <div>
              <label className='add-boba-shop-label'>Phone</label>
            </div>
            <input className='add-boba-shop-input-field'
              type="text"
              placeholder="123-456-7890"
              value={phone}
              onChange={updatePhone}
              required
            />
          </div>
          <br />
          <div>
            <div>
              <label className='add-boba-shop-label'>Business Hours</label>
            </div>
            <input className='add-boba-shop-input-field'
              type="text"
              placeholder="9am-9pm"
              value={hours}
              onChange={updateHours}
              required
            />
          </div>
          <br />
          <div>
            <div>
              <label className='add-boba-shop-label'>Image URL (must be .png/.jpg/.jpeg/.gif)</label>
            </div>
            <input className='add-boba-shop-input-field'
              type="text"
              placeholder="https://boba-image.jpg"
              value={image}
              onChange={updateImage}
              required
            />
          </div>
          <br />
          <div>
            <button className='post-new-boba-shop-button' type="submit" disabled={!!errors.length}>Post New Boba Shop</button>
          </div>
        </form>
      </div>

      <div className="boba-animation">

        <svg xmlns="http://www.w3.org/2000/svg" id="bubbletea" viewBox="0 0 346.68 473.2">
          <defs />
          <g id="tea" stroke="#8574a8" stroke-miterlimit="10" stroke-width="10">
            <path fill="#a89bc4" d="M215.61 415.61c-13.45 21.59-38 47.78-45.61 50-20.94 6.15-107.6-8.78-137-46.11-11.27-14.3-24.81-31.32-27.23-48.54-3.89-27.74 8.33-54.38 9.8-59 17.16-53.69 81.06-197.19 94.31-196.67 56.33 2.23 126.71 34.48 177.65 58.63 9.25 4.39 23.16 9.23 22.63 19.92-2.63 52.72-65.04 174.41-94.55 221.77z" />
            <path fill="#8574a8" d="M42.34 252.37c13.31-8.4 31.25-14.24 44.16-5.25 16.05 11.18 16.84 40.35 36.06 44 10.64 2 20.53-5.74 31.18-7.75 18.39-3.47 37.45 14.43 35.16 33-.46 3.73-1.62 7.54-.61 11.16 2 7.21 11.64 9.54 18.73 7.13s12.63-7.9 19-11.83 15-6.16 21.09-1.79c6.88 4.93 6.63 15.29 4.14 23.38-3.36 10.87-6 20.3-12.14 29.88-14 22-19.32 39.92-35.14 60.62-7.8 10.2-21.38 29.53-34 32-7.61 1.51-23.94 1.75-31.5 0-15.12-3.5-32.8-10.79-47.92-14.28-19.18-4.44-36.87-12.44-50.8-26.35-6.41-6.4-26.06-39.3-30.63-47.12-12.88-21.97 24-120.97 33.22-126.8z" opacity=".22" />
          </g>
          <g id="cheeks" fill="#de9bb5" stroke="#de9bb5" stroke-miterlimit="10" stroke-width="10">
            <ellipse cx="261.24" cy="323.62" rx="4" ry="14.5" transform="rotate(-68.17 110.06 395.85)" />
            <ellipse cx="393.21" cy="376.5" rx="4.5" ry="15.5" transform="rotate(-71.17 245.891 442.235)" />
          </g>
          <path id="mouth" fill="none" stroke="#6a5f71" stroke-miterlimit="10" stroke-width="10" d="M181.82 256.64c-8.55 5.26-19.73 5.71-28.93 1.68a36.68 36.68 0 01-19.54-21.78" />
          <g id="boba" fill="#6a5f71" stroke="#6a5f71" stroke-miterlimit="10" stroke-width="10">
            <circle id="boba-six" cx="47.65" cy="303.03" r="8.95" />
            <circle id="boba-five" cx="77.84" cy="407.44" r="16" />
            <circle id="boba-four" cx="154.25" cy="415.61" r="15.75" />
            <ellipse id="boba-three" cx="115.13" cy="434.94" rx="11.9" ry="11.5" />
            <ellipse id="boba-two" cx="52.35" cy="359.82" rx="17" ry="14.5" />
            <path id="boba-one" d="M181.92 469.3c7.63 1.28 12.49 10.21 10.85 19.95S174.3 468 181.92 469.3z" transform="translate(-162 -94.94)" />
          </g>
          <g id="eyes" stroke-miterlimit="10" stroke-width="10">
            <circle cx="133.35" cy="193.96" r="23.5" fill="#6a5f71" stroke="#6a5f71" />
            <circle cx="215.61" cy="228.68" r="23.5" fill="#6a5f71" stroke="#6a5f71" />
            <ellipse cx="224.23" cy="240.42" fill="#fff" stroke="#fff" rx="1.62" ry="5.61" />
            <ellipse cx="142.94" cy="205.18" fill="#fff" stroke="#fff" rx="1.62" ry="5.61" />
          </g>
          <g id="cap" stroke-miterlimit="10" stroke-width="10">
            <path fill="#e5dbdf" stroke="#e5dbdf" d="M98.37 79.4c3.74-1.79 20.34-7.92 38.72-10 21.7-2.49 46.27 1.75 56.81 3.31 54.13 8 109.9 38.76 128.83 58.08 4 3.58 5.32 8.7 7.93 13.16 2.41 4.13 11.59 12 11 16.92-1.49 12.16-18.42 29.51-21.17 25.22 0 0-149.18-64-225.64-69.65-9.28-.72-1.23-34.77 3.52-37.04z" />
            <path fill="#e3e3e3" stroke="#e3e3e3" d="M339.21 148.15c.55-16 .22-32.88-8.21-46.42-6-9.67-15.52-16.54-24.78-23.16-12.29-8.78-24.68-17.62-38.36-24-45.7-21.37-102-12.26-144.83 16.68 71.57 26.4 146.57 43.9 216.18 76.9z" />
            <path fill="#de9bb5" stroke="#de9bb5" d="M201 36.34c-.52-5.11-.88-10.32-2.77-15.1-3.44-8.67-12-14.94-21.28-16.05a29.75 29.75 0 00-25.12 9.7c-9 9.93-10.62 24.42-7.31 39.4a353 353 0 0137.56-9.93c6.48-1.34 13.24-2.6 18.65-6.44.37-.72 1.27-1.07.27-1.58z" />
            <ellipse cx="464.34" cy="260.32" fill="#fff" stroke="#f7f7f7" rx="3.77" ry="25" transform="rotate(-68.97 314.274 330.766)" />
            <circle cx="319.54" cy="133.41" r="5.75" fill="#fff" stroke="#fff" />
          </g>
        </svg>
      </div>

    </div>
  )
}

export default CreateBobaShopForm;
