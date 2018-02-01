import {getSavingsBoosterContent} from '../services';

export const FETCH_SAVINGS_BOOSTER_CONTENT_REQUEST = 'FETCH_SAVINGS_BOOSTER_CONTENT_REQUEST';
export const fetchSavingsBoosterContentRequest = () => ({
  type: FETCH_SAVINGS_BOOSTER_CONTENT_REQUEST
});

export const FETCH_SAVINGS_BOOSTER_CONTENT_SUCCESS = 'FETCH_SAVINGS_BOOSTER_CONTENT_SUCCESS';
export const fetchSavingsBoosterContentSuccess = content => ({
  type: FETCH_SAVINGS_BOOSTER_CONTENT_SUCCESS,
  content
});

export const FETCH_SAVINGS_BOOSTER_CONTENT_ERROR = 'FETCH_SAVINGS_BOOSTER_CONTENT_ERROR';
export const fetchSavingsBoosterContentError = error => ({
  type: FETCH_SAVINGS_BOOSTER_CONTENT_ERROR,
  error
});

// fetch home content call
export const fetchSavingsBoosterContent = () => dispatch => {
  dispatch(fetchSavingsBoosterContentRequest());
  getSavingsBoosterContent()
    .then( res => dispatch(fetchSavingsBoosterContentSuccess(res)))
    .catch( error => dispatch(fetchSavingsBoosterContentError(error)));
};