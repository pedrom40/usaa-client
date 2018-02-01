import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './reducers/home';
import paycheckPlannerReducer from './reducers/paycheck-planner';
import savingsBoosterReducer from './reducers/savings-booster';

const store = createStore(
  combineReducers({
    homeReducer,
    paycheckPlannerReducer,
    savingsBoosterReducer
  }),
  applyMiddleware(thunk)
);

export default store;