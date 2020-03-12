import thunk from "redux-thunk";
import loadIdDragon from "./dragon-id";
import loadDragons from "./load-dragons";
import createDragon from "./create-dragon";
import deleteDragon from "./delete-dragon";

import { combineReducers, createStore, applyMiddleware } from "redux";

const reducers = combineReducers({
  loadDragons,
  createDragon,
  loadIdDragon,
  deleteDragon
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
