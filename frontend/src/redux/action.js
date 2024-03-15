// store/actions.js
import { FETCH_COLOR_FAILURE, FETCH_COLOR_SUCCESS, FETCH_PLANETS_FAILURE, FETCH_PLANETS_SUCCESS, FETCH_SHAPE_FAILURE, FETCH_SHAPE_SUCCESS, FETCH_SIZE_FAILURE, FETCH_SIZE_SUCCESS } from "./actionType";

//planet
export const fetchPlanetsSuccess = (planets) => ({
  type: FETCH_PLANETS_SUCCESS,
  payload: planets,
});

export const fetchPlanetsFailure = (error) => ({
  type: FETCH_PLANETS_FAILURE,
  payload: error,
});
//shape
export const fetchShapeSuccess = (shapes) => ({
  type: FETCH_SHAPE_SUCCESS,
  payload: shapes,
});

export const fetchShapeFailure = (error) => ({
  type: FETCH_SHAPE_FAILURE,
  payload: error,
});
//color
export const fetchColorSuccess = (colors) => ({
  type: FETCH_COLOR_SUCCESS,
  payload: colors,
});

export const fetchColorFailure = (error) => ({
  type: FETCH_COLOR_FAILURE,
  payload: error,
});
//size
export const fetchSizeSuccess = (sizes) => ({
  type: FETCH_SIZE_SUCCESS,
  payload: sizes,
});

export const fetchSizeFailure = (error) => ({
  type: FETCH_SIZE_FAILURE,
  payload: error,
});
// Action creator for fetching planets from API
export const fetchPlanets = (dispatch) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://talentrax-backend.onrender.com/planets"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch planets");
      }
      const planets = await response.json();
      console.log(planets)
      dispatch(fetchPlanetsSuccess(planets));
    } catch (error) {
      dispatch(fetchPlanetsFailure(error.message));
    }
  };
};

export const fetchShape = (dispatch) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://talentrax-backend.onrender.com/shapes"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch planets");
      }
      const shapes = await response.json();
      console.log(shapes)
      dispatch(fetchShapeSuccess(shapes));
    } catch (error) {
      dispatch(fetchShapeFailure(error.message));
    }
  };
};

export const fetchColor = (dispatch) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://talentrax-backend.onrender.com/colors"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch planets");
      }
      const colors = await response.json();
      console.log(colors)
      dispatch(fetchColorSuccess(colors));
    } catch (error) {
      dispatch(fetchColorFailure(error.message));
    }
  };
};

export const fetchSize = (dispatch) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://talentrax-backend.onrender.com/sizes"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch sizes");
      }
      const sizes = await response.json();
      console.log(sizes)
      dispatch(fetchSizeSuccess(sizes));
    } catch (error) {
      dispatch(fetchSizeFailure(error.message));
    }
  };
};
