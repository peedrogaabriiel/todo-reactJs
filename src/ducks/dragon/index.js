import HttpService from "../../services";

const prefix = "dragon-list/";

const Types = {
  SET_DRAGON: prefix + "SET_DRAGON",
  SET_LOADING: prefix + "SET_LOADING"
};

const setLoading = loading => ({
  payload: { loading },
  type: Types.SET_LOADING
});

const setDragon = listDragons => ({
  payload: { listDragons },
  type: Types.SET_DRAGON
});

const loadDragons = () => async (dispatch, _) => {
  dispatch(setLoading(true));
  const data = await HttpService.get("/dragon");
  dispatch(setDragon(data));
  dispatch(setLoading(false));
  return data;
};

const loadDragonId = id => async (dispatch, _) => {
  const data = await HttpService.get(`/dragon/${id}`);

  dispatch(setDragon(data));

  return data;
};

export const Creators = { loadDragons, setDragon, loadDragonId };

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
    default:
      return state;
  }
}
