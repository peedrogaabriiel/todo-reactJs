import HttpService from "../../services";

const prefix = "dragon-list/";

const Types = {
  SET_DRAGON: prefix + "SET_DRAGON",
  SET_LOADING: prefix + "SET_LOADING",
  SET_ADD_DRAGON: prefix + "SET_ADD_DRAGON"
};

const setLoading = loading => ({
  payload: { loading },
  type: Types.SET_LOADING
});

const setDragon = listDragons => ({
  payload: { listDragons },
  type: Types.SET_DRAGON
});

const addDragon = dragon => ({
  payload: { dragon },
  type: Types.SET_ADD_DRAGON
});

const loadDragons = () => async (dispatch, _) => {
  dispatch(setLoading(true));
  const data = await HttpService.get("/dragon");
  dispatch(setDragon(data));
  dispatch(setLoading(false));
  return data;
};

const CreateDragon = data => async (dispatch, _) => {
  const response = await HttpService.post("/dragon", data);
  dispatch(addDragon(data));
  return response;
};

export const Creators = { loadDragons, setDragon, CreateDragon };

const initialState = {
  listDragons: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_DRAGON:
      return { ...state, listDragons: action.payload.listDragons };
    case Types.SET_LOADING:
      return { ...state, loading: action.payload.loading };
    case Types.SET_ADD_DRAGON:
      const newDragon = action.payload.dragon;
      const listDragons = state.listDragons;
      console.log("LISTA DE DRAGÕES ADD DRAGON", listDragons);
      return { ...state, listDragons: { ...listDragons, newDragon } };
    default:
      return state;
  }
}
