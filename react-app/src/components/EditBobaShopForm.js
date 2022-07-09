import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBobaShops, editBobaShop, getBobaShop } from "../store/bobashops";


// const EditBobaShopForm = () => {
//   const user = useSelector(state => state.session.user);
//   const user_id = user.id;
//   // console.log(user_id, "THIS IS USER ID---------");

//   const bobaShopId = useParams().bobaShopId;
//   const bobaShop = useSelector(state => state.bobaShop);

//   const dispatch = useDispatch();
//   const history = useHistory();
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [zipcode, setZipcode] = useState('');
//   const [phone, setPhone] = useState('');
//   const [hours, setHours] = useState('');
//   const [image, setImage] = useState('');

//   const updateName = (e) => setName(e.target.value);
//   const updateAddress = (e) => setAddress(e.target.value);
//   const updateCity = (e) => setCity(e.target.value);
//   const updateState = (e) => setState(e.target.value);
//   const updateZipcode = (e) => setZipcode(e.target.value);
//   const updatePhone = (e) => setPhone(e.target.value);
//   const updateHours = (e) => setHours(e.target.value);
//   const updateImage = (e) => setImage(e.target.value);

//   // errors handling
//   useEffect(() => { }, [name, address, city, state, zipcode, phone, hours, image]);

//   useEffect(() => {
//     dispatch(getBobaShop(bobaShopId));
//   }, [dispatch, bobaShopId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newBobaShop = {
//       ...bobaShop,
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
//     let updatedBobaShop = await dispatch(editBobaShop(newBobaShop));
//     if (updatedBobaShop) {
//       history.push(`/bobaShops`);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={updateName}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Address"
//           value={address}
//           onChange={updateAddress}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="City"
//           value={city}
//           onChange={updateCity}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="State"
//           value={state}
//           onChange={updateState}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Zipcode"
//           value={zipcode}
//           onChange={updateZipcode}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Phone"
//           value={phone}
//           onChange={updatePhone}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Hours"
//           value={hours}
//           onChange={updateHours}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Image"
//           value={image}
//           onChange={updateImage}
//         />
//       </div>
//       <div>
//         <button type="submit">Update Boba Shop</button>
//       </div>
//     </form>
//   )
// }

// ----------------------------------------------------------------------------------------------------------------------

const EditBobaShopForm = () => {
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

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('address', address);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('zipcode', zipcode);
    formData.append('phone', phone);
    formData.append('hours', hours);
    formData.append('image', image);

    dispatch(editBobaShop(formData));
    history.push(`/bobaShops`);
  }

  return (
    <form onSubmit={submitForm}>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Update Boba Shop!</button>
      </div>
    </form>
  )
}


export default EditBobaShopForm;
