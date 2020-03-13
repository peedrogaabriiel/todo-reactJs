import HttpService from "../../services";

const prefix = "create-dragon/";

const Types = {
  SET_LOADING: prefix + "SET_LOADING",
  SET_ADD_DRAGON: prefix + "SET_ADD_DRAGON"
};

const addDragon = dragon => ({
  payload: { dragon },
  type: Types.SET_ADD_DRAGON
});

const setLoading = loading => ({
  payload: { loading },
  type: Types.SET_LOADING
});

const createDragon = data => async (dispatch, _) => {
  dispatch(setLoading(true));
  const response = await HttpService.post("/dragon", data);
  dispatch(addDragon(data));
  dispatch(setLoading(false));
  return response;
};

export const Creators = { createDragon };

const initialState = {
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_LOADING:
      return { ...state, loading: action.payload.loading };
    case Types.SET_ADD_DRAGON:
      const newDragon = action.payload.dragon;
      const listDragons = state.listDragons;
      return { ...state, listDragons: { ...listDragons, newDragon } };
    default:
      return state;
  }
}
