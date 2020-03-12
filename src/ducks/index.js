import thunk from "redux-thunk";
import userAuth from "./user-auth";
import loadIdDragon from "./dragon-id";
import loadDragons from "./load-dragons";
import createDragon from "./create-dragon";
import deleteDragon from "./delete-dragon";
import logger from "redux-logger";

import { combineReducers, createStore, applyMiddleware } from "redux";

const reducers = combineReducers({
  userAuth,
  loadDragons,
  createDragon,
  loadIdDragon,
  deleteDragon
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
