import {getHomeContent} from '../services';

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
  dispatch(fetchHomeContentRequest());
  getHomeContent()
    .then( res => dispatch(fetchHomeContentSuccess(res)))
    .catch( error => dispatch(fetchHomeContentError(error)));
};