import HttpService from "../../services";
import { Creators as loadDragons } from "../load-dragons";

const prefix = "delete-dragon/";

const Types = {
  SET_DELETE_DRAGON: prefix + "SET_DELETE_DRAGON"
};

const dragonDelete = dragon => ({
  payload: { dragon },
  type: Types.SET_DELETE_DRAGON
});

const deleteDragonList = id => async (dispatch, getState) => {
  const filterDragon = getState().loadDragons.listDragons.filter(
    item => item.id != id
  );

  dispatch(loadDragons.setDragon(filterDragon));

  const response = await HttpService.del(`/dragon/${id}`);
  dispatch(dragonDelete(id));

  return response;
};

export const Creators = { deleteDragonList };

const initialState = {
  dragon: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_DELETE_DRAGON:
      return { ...state, dragon: action.payload.dragon };
    default:
      return state;
  }
}
