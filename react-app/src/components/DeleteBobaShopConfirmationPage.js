import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory, NavLink } from "react-router-dom";
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
      <h1 className="confirm-delete">Are you sure you want to delete this Boba Shop?</h1>
      <div className='submit-button-confirm'>
        <button className='submit-button-confirm-delete' onClick={handleDelete}>
          Confirm Delete
        </button>
      </div>
      <div className="cancel-div">
        <NavLink to={`/bobaShops/${bobaShopId}`}>
          <div className='cancel-link'>Cancel</div>
        </NavLink>
      </div>
    </div>
  )
}

export default DeleteBobaShopConfirmationPage;
