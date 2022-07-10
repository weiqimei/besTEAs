const GET_BOBASHOPS = 'bobaShops/GET_BOBASHOPS'
const GET_ONE = 'bobaShops/GET_ONE'
const ADD_ONE = 'bobaShops/ADD_ONE'
const EDIT_ONE = 'bobaShops/EDIT_ONE'


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

const editOneBobaShop = (bobaShop) => {
  return {
    type: EDIT_ONE,
    payload: bobaShop
  }
}


export const getAllBobaShops = () => async (dispatch) => {
  const response = await fetch('/api/bobaShops');

  if (response.ok) {
    const bobaShops = await response.json();
    // console.log(bobaShops, "THIS IS BOBASHOPS");
    dispatch(getBobaShops(Object.values(bobaShops)));
    // might need to return response here
  }
}

export const getBobaShop = (bobaShopId) => async (dispatch) => {
  console.log(bobaShopId, "--------THIS IS BOBASHOPID from getBobaShop--------");
  const response = await fetch(`/api/bobaShops/${bobaShopId}`);

  if (response.ok) {
    const bobaShop = await response.json();
    dispatch(getOneBobaShop(bobaShop));
    // might need to return response here
  }
}

export const createBobaShop = (bobaShop) => async (dispatch) => {
  console.log(bobaShop, "THIS IS BOBASHOP---");

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

// export const editBobaShop = (bobaShop) => async (dispatch) => {
//   const response = await fetch(`/api/bobaShops/${bobaShop.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(bobaShop)
//   });
//   if (response.ok) {
//     const editedBobaShop = await response.json();
//     dispatch(editOneBobaShop(editedBobaShop));
//     // might todo: return editedBobaShop
//     return editedBobaShop;
//   }
// }

// export const editBobaShop = (data, bobaShopId) => async (dispatch) => {
//   const response = await fetch(`/api/bobaShops/${bobaShopId}`, {
//     method: 'PUT',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify(data)
//   })
//   if (response.ok) {
//     const editedBobaShop = await response.json();
//     dispatch(editOneBobaShop(editedBobaShop));
//     return editedBobaShop;
//   }
// }

// export const editBobaShop = (data, bobaShopId) => async (dispatch) => {
//   console.log(bobaShopId, "--------THIS IS BOBASHOPID from editBobaShop--------"); // FIX THIS
//   const res = await fetch(`/api/bobaShops/${bobaShopId}`, {
//     method: 'PUT',
//     body: data
//   })
//   if (res.ok) {
//     const editedBobaShop = await res.json();
//     dispatch(editOneBobaShop(editedBobaShop));
//     return editedBobaShop;
//   }
// }

export const editBobaShop = (data) => async (dispatch) => {
  // console.log(bobaShopId, "--------THIS IS BOBASHOPID from editBobaShop--------"); // FIX THIS
  const res = await fetch(`/api/bobaShops/${data.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (res.ok) {
    const editedBobaShop = await res.json();
    dispatch(editOneBobaShop(editedBobaShop));
    return editedBobaShop;
  }
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
      // const newState = {
      //   ...state,
      //   [action.business.id]: action.business,
      // };
      // return newState;
    case EDIT_ONE: // might need to fix this
      const editedBobaShop = {
        ...state,
        [action.payload.id]: action.payload
      };
      return editedBobaShop;
    // case EDIT_ONE:
    //   let editedBobaShop = { ...state };
    //   bobaShop = action.payload;
    //   editedBobaShop[bobaShop.id] = bobaShop;
    //   return editedBobaShop;
      // case EDIT_ONE:
      //   for (let bobaShop in state.payload) {
      //     if (bobaShop.id === action.payload.id) {
      //       return action.payload;
      //     }
      //     else {
      //       return bobaShop;
      //     }
      //   }
      //   return { ...state };
    default:
      return state
  }
}
