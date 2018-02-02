import {API_BASE_URL} from "../../config";

export const FETCH_HOME_CONTENT_REQUEST = 'FETCH_HOME_CONTENT_REQUEST';
export const fetchHomeContentRequest = () => ({
  type: FETCH_HOME_CONTENT_REQUEST
});

export const FETCH_HOME_CONTENT_SUCCESS = 'FETCH_HOME_CONTENT_SUCCESS';
export const fetchHomeContentSuccess = content => ({
  type: FETCH_HOME_CONTENT_SUCCESS,
  content
});

export const FETCH_HOME_CONTENT_ERROR = 'FETCH_HOME_CONTENT_ERROR';
export const fetchHomeContentError = error => ({
  type: FETCH_HOME_CONTENT_ERROR,
  error
});

// fetch home content call
export const fetchHomeContent = () => dispatch => {

  // announce the call has been queued
  dispatch(fetchHomeContentRequest());

  // make the call
  fetch(`${API_BASE_URL}/home`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(dispatch(fetchHomeContentError(res.statusText)));
      }
      return res.json();
    })
    .then(res => {
      dispatch(fetchHomeContentSuccess(res.content));
    });

};