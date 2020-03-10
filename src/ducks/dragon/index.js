import HttpService from "../../services";

const prefix = "dragon-list/";

const Types = {
  SET_DRAGON: prefix + "SET_DRAGON"
};

const setDragon = list => ({
  payload: { list },
  type: Types.SET_DRAGON
});

const loadDragons = () => async (dispatch, _) => {
  const { data } = await HttpService.get("/dragon");
  dispatch(setDragon(data));
  return data;
};

export const Creators = { loadDragons, setDragon };

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_DRAGON:
      return { ...state, list: action.payload.list };
    default:
      return state;
  }
}
