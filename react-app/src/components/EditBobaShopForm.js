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
