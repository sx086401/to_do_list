import { AnyAction } from "redux";
import { BackLog } from "../../model/BackLog";

export interface backLogState {
  backLogs: BackLog[]
}

export const backLogInitState: backLogState = {
  backLogs: [],
}

export default function backLogReducer(state: backLogState = backLogInitState, action: AnyAction) {
  switch (action.type) {
    default:
      return state
  }
}