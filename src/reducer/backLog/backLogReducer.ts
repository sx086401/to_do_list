import { AnyAction } from 'redux'
import { BackLog } from '../../model/BackLog'
import { backLogActionTypes } from './backLogAction'

export interface backLogState {
  backLogList: BackLog[]
}

export const backLogInitState: backLogState = {
  backLogList: [],
}

export default function backLogReducer(state: backLogState = backLogInitState, action: AnyAction) {
  switch (action.type) {
    case backLogActionTypes.GET_BACKLOG_LIST_SUCCESS:
      return  { ...state, backLogList: action.payload }
    default:
      return state
  }
}