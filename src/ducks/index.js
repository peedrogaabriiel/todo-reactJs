import dragonList from "./dragon";
import thunk from "redux-thunk";

import { combineReducers, createStore, applyMiddleware } from "redux";

const reducers = combineReducers({
  dragonList
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
