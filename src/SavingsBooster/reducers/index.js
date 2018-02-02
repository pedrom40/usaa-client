import * as actions from '../actions/';

const initialState = {
  error: null,
  showLoader: false,
  content: '',
  messages: []
};

export default (state = initialState, action) => {

  if (action.type === actions.FETCH_SAVINGS_BOOSTER_CONTENT_REQUEST) {
    return Object.assign({}, state, {
      ...state,
      error: null,
      showLoader: true,
      content: ''
    })
  }

  else if (action.type === actions.FETCH_SAVINGS_BOOSTER_CONTENT_SUCCESS) {
    return Object.assign({}, state, {
      ...state,
      error: null,
      showLoader: false,
      content: action.content
    });
  }

  else if (action.type === actions.FETCH_SAVINGS_BOOSTER_CONTENT_ERROR) {
    return Object.assign({}, state, {
      ...state,
      error: action.error,
      showLoader: false,
      content: ''
    });
  }

  else if (action.type === actions.FETCH_SAVINGS_BOOSTER_MESSAGES_REQUEST) {
    return Object.assign({}, state, {
      ...state,
      error: null,
      showLoader: true,
      messages: []
    })
  }

  else if (action.type === actions.FETCH_SAVINGS_BOOSTER_MESSAGES_SUCCESS) {
    return Object.assign({}, state, {
      ...state,
      error: null,
      showLoader: false,
      messages: action.messages
    });
  }

  else if (action.type === actions.FETCH_SAVINGS_BOOSTER_MESSAGES_ERROR) {
    return Object.assign({}, state, {
      ...state,
      error: action.error,
      showLoader: false,
      messages: []
    });
  }

  return state;
};