import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import homeReducer from './Home/reducers/';
import paycheckPlannerReducer from './PaycheckPlanner/reducers/';
import savingsBoosterReducer from './SavingsBooster/reducers/';

const store = createStore(
  combineReducers({
    homeReducer,
    paycheckPlannerReducer,
    savingsBoosterReducer
  }),
  applyMiddleware(thunk)
);

export default store;