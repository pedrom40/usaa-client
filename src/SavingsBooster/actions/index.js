import {API_BASE_URL} from "../../config";

/* Content */
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

  // announce that the call has been queued
  dispatch(fetchSavingsBoosterContentRequest());

  // make the call
  fetch(`${API_BASE_URL}/savings-booster`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(dispatch(fetchSavingsBoosterContentError(res.statusText)));
      }
      return res.json();
    })
    .then(res => {
      dispatch(fetchSavingsBoosterContentSuccess(res.content));
    });

};

/* Notices */
export const FETCH_SAVINGS_BOOSTER_MESSAGES_REQUEST = 'FETCH_SAVINGS_BOOSTER_MESSAGES_REQUEST';
export const fetchSavingsBoosterMessagesRequest = () => ({
  type: FETCH_SAVINGS_BOOSTER_MESSAGES_REQUEST
});

export const FETCH_SAVINGS_BOOSTER_MESSAGES_SUCCESS = 'FETCH_SAVINGS_BOOSTER_MESSAGES_SUCCESS';
export const fetchSavingsBoosterMessagesSuccess = messages => ({
  type: FETCH_SAVINGS_BOOSTER_MESSAGES_SUCCESS,
  messages
});

export const FETCH_SAVINGS_BOOSTER_MESSAGES_ERROR = 'FETCH_SAVINGS_BOOSTER_MESSAGES_ERROR';
export const fetchSavingsBoosterMessagesError = error => ({
  type: FETCH_SAVINGS_BOOSTER_MESSAGES_ERROR,
  error
});

// fetch Paycheck Planner content call
export const fetchSavingsBoosterMessages = () => dispatch => {

  // announce that the call has been queued
  dispatch(fetchSavingsBoosterMessagesRequest());

  // make the call
  fetch(`${API_BASE_URL}/savings-booster/messages`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(dispatch(fetchSavingsBoosterMessagesError(res.statusText)));
      }
      return res.json();
    })
    .then(res => {
      dispatch(fetchSavingsBoosterMessagesSuccess(res.messages));
    });

};