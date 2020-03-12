import HttpService from "../../services";

const prefix = "dragon-id/";

const Types = {
  SET_DRAGON_ID: prefix + "SET_DRAGON_ID"
};

const setDragonId = dragon => ({
  payload: { dragon },
  type: Types.SET_DRAGON_ID
});

const loadIdDragon = id => async (dispatch, _) => {
  const data = await HttpService.get(`/dragon/${id}`);
  console.log("dragon", data);
  dispatch(setDragonId(data));

  return data;
};

export const Creators = { loadIdDragon };

const initialState = {
  dragon: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_DRAGON_ID:
      return { ...state, dragon: action.payload.dragon };

    default:
      return state;
  }
}
