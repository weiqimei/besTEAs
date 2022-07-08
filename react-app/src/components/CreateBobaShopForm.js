import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllBobaShops, createBobaShop } from "../store/bobashops";

const CreateBobaShopForm = () => {
  const userId = useSelector(state => state.session.userId);
  // console.log(userId, "THIS IS USERID");

  const dispatch = useDispatch();
  const history = useHistory();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [phone, setPhone] = useState('');
  const [hours, setHours] = useState('');
  // image

  const updateName = (e) => setName(e.target.value);
  const updateAddress = (e) => setAddress(e.target.value);
  const updateCity = (e) => setCity(e.target.value);
  const updateState = (e) => setState(e.target.value);
  const updateZipcode = (e) => setZipcode(e.target.value);
  const updatePhone = (e) => setPhone(e.target.value);
  const updateHours = (e) => setHours(e.target.value);
  // const updateImage = (e) => setImage(e.target.value);

  // errors handling
  useEffect(() => { }, [name, address, city, state, zipcode, phone, hours]);

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
      userId,
      // image
    };
    let bobaShop = await dispatch(createBobaShop(newBobaShop));
    if (bobaShop) {
      history.push(`/bobaShops/${bobaShop.id}`);
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
        <button type="submit">Post New Boba Shop</button>
      </div>
    </form>
  )
}

export default CreateBobaShopForm;
