import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editBobaShop, getBobaShop } from "../store/bobashops";


// const EditBobaShopForm = () => {
//   const user = useSelector(state => state.session.user);
//   const user_id = user.id;

//   const dispatch = useDispatch();
//   const history = useHistory();

//   const { bobaShopId } = useParams();
//   console.log(bobaShopId, "THIS IS BOBASHOP ID from EditBobaShopForm---------");

//   const bobaShopObject = Object.values(useSelector(state => state.bobaShopReducer))
//   const bobaShop = bobaShopObject[0];
//   console.log(bobaShop, "----THIS IS BOBASHOP from EditBobaShopForm---------");

//   const [name, setName] = useState(bobaShop.name);
//   const [address, setAddress] = useState(bobaShop.address);
//   const [city, setCity] = useState(bobaShop.city);
//   const [state, setState] = useState(bobaShop.state);
//   const [zipcode, setZipcode] = useState(bobaShop.zipcode);
//   const [phone, setPhone] = useState(bobaShop.phone);
//   const [hours, setHours] = useState(bobaShop.hours);
//   const [image, setImage] = useState(bobaShop.image);

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

//     dispatch(getBobaShop(newBobaShop, bobaShopId))

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

// const EditBobaShopForm = () => {
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

//   const submitForm = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('address', address);
//     formData.append('city', city);
//     formData.append('state', state);
//     formData.append('zipcode', zipcode);
//     formData.append('phone', phone);
//     formData.append('hours', hours);
//     formData.append('image', image);

//     dispatch(editBobaShop(formData));
//     history.push(`/bobaShops`);
//   }

//   return (
//     <form onSubmit={submitForm}>
//       <div>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="City"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="State"
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Zipcode"
//           value={zipcode}
//           onChange={(e) => setZipcode(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Phone"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Hours"
//           value={hours}
//           onChange={(e) => setHours(e.target.value)}
//         />
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="Image"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//         />
//       </div>
//       <div>
//         <button type="submit">Update Boba Shop!</button>
//       </div>
//     </form>
//   )
// }

// ----------------------------------------------------------------------------------------------------------------------
// const EditBobaShopForm = () => {
//   const user = useSelector(state => state.session.user);
//   const user_id = user.id;
//   // console.log(user_id, "THIS IS USER ID---------");

//   const { bobaShopId } = useParams();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getBobaShop(bobaShopId));
//   }, [dispatch, bobaShopId]);

//   const history = useHistory();

//   // const bobaShopId = useParams().bobaShopId;
//   console.log(bobaShopId, 'THIS IS BOBA SHOP ID from EditBobaShopForm.js-------------------');

//   // useEffect(() => {
//   //   dispatch(getBobaShop(bobaShopId));
//   // }, [dispatch, bobaShopId]);

//   // const bobaShop = useSelector(state => state.getBobaShop);
//   // console.log(bobaShop, 'THIS IS BOBA SHOP from EditBobaShopForm.js-------------------');

//   const bobaShops = useSelector(state => Object.values(state?.bobaShops));  
//   console.log(bobaShops, 'THIS IS BOBA SHOPS from EditBobaShopForm.js-------------------');
//   const [name, setName] = useState(bobaShops.name);
//   const [address, setAddress] = useState(bobaShops.address);
//   const [city, setCity] = useState(bobaShops.city);
//   const [state, setState] = useState(bobaShops.state);
//   const [zipcode, setZipcode] = useState(bobaShops.zipcode);
//   const [phone, setPhone] = useState(bobaShops.phone);
//   const [hours, setHours] = useState(bobaShops.hours);
//   const [image, setImage] = useState(bobaShops.image);

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


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newBobaShop = {
//       ...bobaShops,
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
// const EditBobaShopForm = () => {
//   const user = useSelector(state => state.session.user);
//   const user_id = user.id;
//   // console.log(user_id, "THIS IS USER ID---------");

//   const bobaShopId = useParams().bobaShopId;
//   console.log(bobaShopId, "THIS IS BOBASHOP ID from EditBobaShopForm---------");

//   // const bobaShop = useSelector(state => state.bobaShops);
//   // console.log(bobaShop, "----THIS IS BOBASHOP from EditBobaShopForm---------");
//   // // const bobaShop = useSelector(state => state.bobaShop);

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
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('address', address);
//     formData.append('city', city);
//     formData.append('state', state);
//     formData.append('zipcode', zipcode);
//     formData.append('phone', phone);
//     formData.append('hours', hours);
//     formData.append('image', image);
//     dispatch(editBobaShop(formData, bobaShopId));


//     let updatedBobaShop = await dispatch(editBobaShop(formData));
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
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={updateName}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={updateAddress}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={updateCity}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={updateState}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Zipcode"
          value={zipcode}
          onChange={updateZipcode}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={updatePhone}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Hours"
          value={hours}
          onChange={updateHours}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Image"
          value={image}
          onChange={updateImage}
        />
      </div>
      <div>
        <button type="submit">Update Boba Shop</button>
      </div>
    </form>
  )
}

export default EditBobaShopForm;
