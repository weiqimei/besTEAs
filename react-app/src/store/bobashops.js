const GET_BOBASHOPS = 'bobashops/GET_BOBASHOPS'


const getBobaShops = (bobaShops) => ({
  type: GET_BOBASHOPS,
  payload: bobaShops
})


export const getAllBobaShops = () => async (dispatch) => {
  const response = await fetch('/api/bobaShops/');

  if (response.ok) {
    const bobaShops = await response.json();
    console.log(bobaShops, "THIS IS BOBASHOPS");
    dispatch(getBobaShops(bobaShops));
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
    default:
      return state
  }
}
