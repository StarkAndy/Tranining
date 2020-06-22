import {FETCH_DATA} from '../actions/ActionType';

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {...state, data: action.payload};

    default:
      return state;
  }
};

export default reducer;
