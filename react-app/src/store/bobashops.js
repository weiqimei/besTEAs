const GET_BOBASHOPS = 'bobashops/GET_BOBASHOPS'
const GET_ONE = 'bobashops/GET_ONE'


const getBobaShops = (bobaShops) => ({
  type: GET_BOBASHOPS,
  payload: bobaShops
})

const getOneBobaShop = (bobaShop) => {
  return {
    type: GET_ONE,
    payload: bobaShop
  }
}


export const getAllBobaShops = () => async (dispatch) => {
  const response = await fetch('/api/bobaShops/');

  if (response.ok) {
    const bobaShops = await response.json();
    console.log(bobaShops, "THIS IS BOBASHOPS");
    dispatch(getBobaShops(bobaShops));
  }
}

export const getBobaShop = (id) => async (dispatch) => {
  const response = await fetch(`/api/bobaShops/${id}`);

  if (response.ok) {
    const bobaShop = await response.json();
    dispatch(getOneBobaShop(bobaShop));
  }
}


const initialState = {}

export default function bobaShopReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOBASHOPS:
      const allBobaShops = {};
      action.payload.forEach(bobaShop => {
        allBobaShops[bobaShop.id] = bobaShop;
      })
      return { ...allBobaShops }
    case GET_ONE:
      const bobaShop = {};
      bobaShop[action.payload.id] = action.payload;
      return { ...bobaShop }
    default:
      return state
  }
}
