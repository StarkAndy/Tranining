import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
} from '../actions/ActionType';

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, loading: true};

    case FETCH_DATA_SUCCESS:
      const data = action;
      const dataS = action;
      return {...state, data: action.data, loading: false};

    case FETCH_DATA_FAILURE:
      return {...state, error: action.error, loading: false};
    default:
      return state;
  }
};

export default reducer;
