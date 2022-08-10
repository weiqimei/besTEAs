const GET_SEARCH = 'search/bobaShops'

export const getSearch = (names) => {
  return {
    type: GET_SEARCH,
    names
  }
}

export const searchBobaShops = () => async (dispatch) => {
  const response = await fetch(`/api/search/`)

  if (response.ok) {
    const names = await response.json()

    console.log(names, 'THIS IS NAMES FROM SEARCH THUNK')

    dispatch(getSearch(names))
  }
}

let initialState = { entries: {} }

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SEARCH:
      return {
        entries: action.names
      }
    default:
      return state;
  }
}
