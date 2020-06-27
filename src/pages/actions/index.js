import {FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from './ActionType';

export const requestData = () => ({
  type: FETCH_DATA,
});

export const fetchSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  data,
});

export const fetchFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  error,
});

export function fetchDataHomePage() {
  return function (dispatch) {
    dispatch(requestData());

    return fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=283886de79bcba5aa77acfe24aa51983&language=en-US&query=Superman&page=1&include_adult=false',
      {
        method: 'GET',
      },
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchSuccess(data.results));
      })
      .catch((error) => {
        console.log('Error', error);
        dispatch(fetchFailure(error));
      });
  };
}
