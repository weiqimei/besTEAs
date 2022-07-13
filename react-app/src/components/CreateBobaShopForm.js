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

  // errors handling
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
        <ul>
          {errors.length > 0 && errors.map((err, i) => (
            <li key={i}>{err}</li>
          ))}
        </ul>
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
          <button className='submit-button' type="submit" disabled={!!errors.length}>Post New Boba Shop</button>
        </div>
      </form>
    </>
  )
}

export default CreateBobaShopForm;



// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
// import { getAllBobaShops, createBobaShop } from "../store/bobashops";
// import './CreateBobaShopForm.css';

// const CreateBobaShopForm = () => {
//   const user = useSelector(state => state.session.user);
//   const user_id = user.id;
//   // console.log(user_id, "THIS IS USER ID---------");

//   const [errors, setErrors] = useState([]);
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zipcode, setZipcode] = useState('');
//   const [phone, setPhone] = useState('');
//   const [hours, setHours] = useState('');
//   const [image, setImage] = useState('');
//   const dispatch = useDispatch();
//   const history = useHistory();


//   const updateName = (e) => setName(e.target.value);
//   const updateAddress = (e) => setAddress(e.target.value);
//   const updateCity = (e) => setCity(e.target.value);
//   const updateState = (e) => setState(e.target.value);
//   const updateZipcode = (e) => setZipcode(e.target.value);
//   const updatePhone = (e) => setPhone(e.target.value);
//   const updateHours = (e) => setHours(e.target.value);
//   const updateImage = (e) => setImage(e.target.value);

//   // useEffect(() => {
//   //   const err = [];
//   //   if (!name) err.push('Name is required');
//   //   if (name.length >= 25) err.push('Name must be less than 25 characters');
//   //   if (!address) err.push('Address is required');
//   //   if (address.length >= 100) err.push('Address must be less than 100 characters');
//   //   if (!city) err.push('City is required');
//   //   if (city.length >= 25) err.push('City must be less than 25 characters');
//   //   if (!state) err.push('State is required');
//   //   if (state.length >= 25) err.push('State must be less than 25 characters');
//   //   if (!zipcode) err.push('Zipcode is required');
//   //   if (zipcode.length >= 25) err.push('Zipcode must be less than 25 characters');
//   //   if (!phone) err.push('Phone is required');
//   //   if (phone.length >= 25) err.push('Phone must be less than 25 characters');
//   //   if (!hours) err.push('Hours is required');
//   //   if (hours.length >= 50) err.push('Hours must be less than 50 characters');

//   //   setErrors(err);

//   // }, [name, address, city, state, zipcode, phone, hours]);

//   // useEffect(() => {
//   //   dispatch(getAllBobaShops());
//   // }, [dispatch]);


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newBobaShop = {
//       name,
//       address,
//       city,
//       state,
//       zipcode,
//       phone,
//       hours,
//       user_id,
//       image
//     };

//     const bobaShop = await dispatch(createBobaShop(newBobaShop));
//     if (bobaShop) {
//       setErrors(bobaShop);
//       history.push(/bobaShops);
//     }
//   }

//   return (
//     <>
//       <h1 className='log-in-to-beateas'>Add a Boba Shop</h1>
//       <br />
//       <form onSubmit={handleSubmit} className='add-boba-shop-form'>
//         {/* <div>
//           {errors.map((error, ind) => (
//             <div className='errors' key={ind}>{error}</div>
//           ))}
//         </div> */}
//         <div>
//           <input className='add-boba-shop-input-field'
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={updateName}
//           />
//         </div>
//         <br />
//         <div>
//           <input className='add-boba-shop-input-field'
//             type="text"
//             placeholder="Address"
//             value={address}
//             onChange={updateAddress}
//           />
//         </div>
//         <br />
//         <div>
//           <input className='add-boba-shop-input-field'
//             type="text"
//             placeholder="City"
//             value={city}
//             onChange={updateCity}
//           />
//         </div>
//         <br />
//         <div>
//           <input className='add-boba-shop-input-field'
//             type="text"
//             placeholder="State"
//             value={state}
//             onChange={updateState}
//           />
//         </div>
//         <br />
//         <div>
//           <input className='add-boba-shop-input-field'
//             type="text"
//             placeholder="Zipcode"
//             value={zipcode}
//             onChange={updateZipcode}
//           />
//         </div>
//         <br />
//         <div>
//           <input className='add-boba-shop-input-field'
//             type="text"
//             placeholder="Phone"
//             value={phone}
//             onChange={updatePhone}
//           />
//         </div>
//         <br />
//         <div>
//           <input className='add-boba-shop-input-field'
//             type="text"
//             placeholder="Hours"
//             value={hours}
//             onChange={updateHours}
//           />
//         </div>
//         <br />
//         <div>
//           <input className='add-boba-shop-input-field'
//             type="text"
//             placeholder="Image"
//             value={image}
//             onChange={updateImage}
//           />
//         </div>
//         <br />
//         <div>
//           <button className='submit-button' type="submit" disabled={!!errors.length}>Post New Boba Shop</button>
//         </div>
//       </form>
//     </>
//   )
// }

// export default CreateBobaShopForm;
