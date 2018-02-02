import * as actions from '../actions/';

const initialState = {
  error: null,
  showLoader: false,
  content: '',
  notices: []
};

export default (state = initialState, action) => {

  if (action.type === actions.FETCH_PAYCHECK_PLANNER_CONTENT_REQUEST) {
    return Object.assign({}, state, {
      ...state,
      error: null,
      showLoader: true,
      content: ''
    })
  }

  else if (action.type === actions.FETCH_PAYCHECK_PLANNER_CONTENT_SUCCESS) {
    return Object.assign({}, state, {
      ...state,
      error: null,
      showLoader: false,
      content: action.content
    });
  }

  else if (action.type === actions.FETCH_PAYCHECK_PLANNER_CONTENT_ERROR) {
    return Object.assign({}, state, {
      ...state,
      error: action.error,
      showLoader: false,
      content: ''
    });
  }

  else if (action.type === actions.FETCH_PAYCHECK_PLANNER_NOTICES_REQUEST) {
    return Object.assign({}, state, {
      ...state,
      error: null,
      showLoader: true,
      notices: []
    })
  }

  else if (action.type === actions.FETCH_PAYCHECK_PLANNER_NOTICES_SUCCESS) {
    return Object.assign({}, state, {
      ...state,
      error: null,
      showLoader: false,
      notices: action.notices
    });
  }

  else if (action.type === actions.FETCH_PAYCHECK_PLANNER_NOTICES_ERROR) {
    return Object.assign({}, state, {
      ...state,
      error: action.error,
      showLoader: false,
      notices: []
    });
  }

  return state;
};