import dragonList from "./dragon";

import { combineReducers, createStore } from "redux";

const reducers = combineReducers({
  dragonList
});

const store = createStore(reducers);

export default store;
