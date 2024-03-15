// store/store.js
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import reducer from "./reducer";
import { thunk } from "redux-thunk";

let rootReducer=combineReducers({reducer})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store;
