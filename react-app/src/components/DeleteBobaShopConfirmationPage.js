import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getBobaShop, deleteBobaShop } from "../store/bobashops";


const DeleteBobaShopConfirmationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { bobaShopId } = useParams();

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteBobaShop(bobaShopId));
    history.push("/bobaShops");
  }

  useEffect(() => {
    dispatch(getBobaShop(bobaShopId));
  }, [dispatch, bobaShopId]);

  return (
    <div>
      <h1>Are you sure you want to delete this Boba Shop?</h1>
      <button onClick={handleDelete}>Confirm Delete</button>
    </div>
  )
}

export default DeleteBobaShopConfirmationPage;
