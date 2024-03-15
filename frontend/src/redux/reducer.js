import { FETCH_COLOR_SUCCESS, FETCH_PLANETS_FAILURE, FETCH_PLANETS_SUCCESS, FETCH_SHAPE_SUCCESS, FETCH_SIZE_SUCCESS } from "./actionType";

// store/reducers.js
const initialState = {
  searchText: "",
  colors: [],
  shapes: [],
  sizes: [],
  planets: [], // This should be populated with your planet data from API
  isError:false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_TEXT":
      return { ...state, searchText: action.payload };
    
    case FETCH_PLANETS_SUCCESS: {
      return {
        ...state,
        planets: action.payload,
      };
    }
    case FETCH_SHAPE_SUCCESS:{
      return{
        ...state,
        shapes:action.payload
      }
    }
    case FETCH_COLOR_SUCCESS:{
      return{
        ...state,
        colors:action.payload
      }
    }
    case FETCH_SIZE_SUCCESS:{
      return{
        ...state,
        sizes:action.payload
      }
    }
    default:
      return state;
  }
};

export default reducer;
