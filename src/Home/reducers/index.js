import * as actions from '../actions/';

const initialState = {
  error: null,
  showLoader: false,
  content: ''
};

export default (state = initialState, action) => {

  if (action.type === actions.FETCH_HOME_CONTENT_REQUEST) {
    return Object.assign({}, state, {
      ...state,
      error: null,
      showLoader: true,
      content: ''
    })
  }

  else if (action.type === actions.FETCH_HOME_CONTENT_SUCCESS) {
    return Object.assign({}, state, {
      ...state,
      error: null,
      showLoader: false,
      content: action.content
    });
  }

  else if (action.type === actions.FETCH_HOME_CONTENT_ERROR) {
    return Object.assign({}, state, {
      ...state,
      error: action.error,
      showLoader: false,
      content: ''
    });
  }

  return state;

};