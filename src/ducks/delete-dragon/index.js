import HttpService from "../../services";

const prefix = "delete-dragon/";

const Types = {
  SET_DELETE_DRAGON: prefix + ""
};

const deleDragon = dragon => ({
  payload: { dragon },
  type: Types.SET_LOADING
});

const deleteDragon = id => async (dispatch, _) => {
  const response = await HttpService.delete(`/dragon${id}`);
  dispatch(deleDragon(id));

  return response;
};

export const Creators = { deleteDragon };

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
