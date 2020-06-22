import {FETCH_DATA} from './ActionType';

export function loadDataAtHomePage() {
  return {
    type: FETCH_DATA,
    payload: {
      data: 'Test Data',
    },
  };
}
