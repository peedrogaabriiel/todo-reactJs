import HttpService from "../../services";

const prefix = "load-dragons/";

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

  data.sort(function(a, b) {
    const x = a.name.toLowerCase();
    const y = b.name.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
  });

  dispatch(setDragon(data));
  dispatch(setLoading(false));
  return data;
};

export const Creators = { loadDragons, setDragon };

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
