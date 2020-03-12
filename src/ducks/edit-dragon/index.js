import HttpService from "../../services";

const prefix = "create-dragon/";

const Types = {
  SET_EDIT_DRAGON: prefix + "SET_EDIT_DRAGON"
};

const editDragonInfos = dragon => ({
  payload: { dragon },
  type: Types.SET_EDIT_DRAGON
});

const editDragon = dragon => async (dispatch, _) => {
  const response = await HttpService.put(`/dragon/${dragon.id}`, dragon);
  dispatch(editDragonInfos(response));
  return response;
};

export const Creators = { editDragon };

export default function reducer(state = "", action) {
  switch (action.type) {
    case Types.SET_EDIT_DRAGON:
      const newDragon = action.payload.dragon;
      const listDragons = state.listDragons;
      return { ...state, listDragons: { ...listDragons, newDragon } };
    default:
      return state;
  }
}
