const GET_BOBASHOPS = 'bobashops/GET_BOBASHOPS'
const GET_ONE = 'bobashops/GET_ONE'
const ADD_ONE = 'bobashops/ADD_ONE'


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

const addOneBobaShop = (bobaShop) => {
  return {
    type: ADD_ONE,
    payload: bobaShop
  }
}

export const getAllBobaShops = () => async (dispatch) => {
  const response = await fetch('/api/bobaShops/');

  if (response.ok) {
    const bobaShops = await response.json();
    // console.log(bobaShops, "THIS IS BOBASHOPS");
    dispatch(getBobaShops(Object.values(bobaShops)));
  }
}

export const getBobaShop = (id) => async (dispatch) => {
  const response = await fetch(`/api/bobaShops/${id}`);

  if (response.ok) {
    const bobaShop = await response.json();
    dispatch(getOneBobaShop(bobaShop));
  }
}

export const createBobaShop = (bobaShop) => async (dispatch) => {
  const response = await fetch('/api/bobaShops', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bobaShop)
  });
    const newBobaShop = await response.json();
    console.log(newBobaShop, "THIS IS NEWBOBASHOP------------");
    dispatch(addOneBobaShop(newBobaShop));
    return newBobaShop;
}


const initialState = {}

export default function bobaShopReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BOBASHOPS:
      const allBobaShops = {};
      // console.log(action.payload, "THIS IS ACTION.PAYLOAD------")
      action.payload.forEach(bobaShop => {
        allBobaShops[bobaShop.id] = bobaShop;
      })
      return { ...allBobaShops }
    case GET_ONE:
      const bobaShop = {};
      bobaShop[action.payload.id] = action.payload;
      return { ...bobaShop }
    case ADD_ONE:
      const newBobaShop = {};
      newBobaShop[action.payload.id] = action.payload;
      return { ...newBobaShop }
    default:
      return state
  }
}
