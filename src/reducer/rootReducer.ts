import { combineReducers } from "redux";
import backLogReducer, { backLogInitState, backLogState } from "./backLog/backLogReducer";

export interface StoreState {
  backLog: backLogState
}

export const initStoreState: StoreState = {
  backLog: backLogInitState
}

export default combineReducers({
  backLog: backLogReducer
})