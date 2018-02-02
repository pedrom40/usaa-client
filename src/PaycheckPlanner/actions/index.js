import {API_BASE_URL} from "../../config";

/* Content */
export const FETCH_PAYCHECK_PLANNER_CONTENT_REQUEST = 'FETCH_PAYCHECK_PLANNER_CONTENT_REQUEST';
export const fetchPaycheckPlannerContentRequest = () => ({
  type: FETCH_PAYCHECK_PLANNER_CONTENT_REQUEST
});

export const FETCH_PAYCHECK_PLANNER_CONTENT_SUCCESS = 'FETCH_PAYCHECK_PLANNER_CONTENT_SUCCESS';
export const fetchPaycheckPlannerContentSuccess = content => ({
  type: FETCH_PAYCHECK_PLANNER_CONTENT_SUCCESS,
  content
});

export const FETCH_PAYCHECK_PLANNER_CONTENT_ERROR = 'FETCH_PAYCHECK_PLANNER_CONTENT_ERROR';
export const fetchPaycheckPlannerContentError = error => ({
  type: FETCH_PAYCHECK_PLANNER_CONTENT_ERROR,
  error
});

// fetch Paycheck Planner content call
export const fetchPaycheckPlannerContent = () => dispatch => {

  // announce that the call has been queued
  dispatch(fetchPaycheckPlannerContentRequest());

  // make the call
  fetch(`${API_BASE_URL}/paycheck-planner`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(dispatch(fetchPaycheckPlannerContentError(res.statusText)));
      }
      return res.json();
    })
    .then(res => {
      dispatch(fetchPaycheckPlannerContentSuccess(res.content));
    });

};

/* Notices */
export const FETCH_PAYCHECK_PLANNER_NOTICES_REQUEST = 'FETCH_PAYCHECK_PLANNER_NOTICES_REQUEST';
export const fetchPaycheckPlannerNoticesRequest = () => ({
  type: FETCH_PAYCHECK_PLANNER_NOTICES_REQUEST
});

export const FETCH_PAYCHECK_PLANNER_NOTICES_SUCCESS = 'FETCH_PAYCHECK_PLANNER_NOTICES_SUCCESS';
export const fetchPaycheckPlannerNoticesSuccess = notices => ({
  type: FETCH_PAYCHECK_PLANNER_NOTICES_SUCCESS,
  notices
});

export const FETCH_PAYCHECK_PLANNER_NOTICES_ERROR = 'FETCH_PAYCHECK_PLANNER_NOTICES_ERROR';
export const fetchPaycheckPlannerNoticesError = error => ({
  type: FETCH_PAYCHECK_PLANNER_NOTICES_ERROR,
  error
});

// fetch Paycheck Planner content call
export const fetchPaycheckPlannerNotices = () => dispatch => {

  // announce that the call has been queued
  dispatch(fetchPaycheckPlannerNoticesRequest());

  // make the call
  fetch(`${API_BASE_URL}/paycheck-planner/notices`)
    .then(res => {
      if (!res.ok) {
        return Promise.reject(dispatch(fetchPaycheckPlannerNoticesError(res.statusText)));
      }
      return res.json();
    })
    .then(res => {
      dispatch(fetchPaycheckPlannerNoticesSuccess(res.notices));
    });

};