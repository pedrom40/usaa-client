import {getPaycheckPlannerContent} from '../services';

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
  dispatch(fetchPaycheckPlannerContentRequest());
  getPaycheckPlannerContent()
    .then( res => dispatch(fetchPaycheckPlannerContentSuccess(res)))
    .catch( error => dispatch(fetchPaycheckPlannerContentError(error)));
};