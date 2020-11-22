import { BackLog } from "../../model/BackLog"

export const backLogActionTypes = {
  GET_BACKLOG_LIST: '@GET_LIST',
  GET_BACKLOG_LIST_SUCCESS: '@back_log/GET_LIST_SUCCESS',
}

export const getBackLogListAction = () => ({
  type: backLogActionTypes.GET_BACKLOG_LIST
})

export const getBackLogListSuccessAction = (payload: BackLog[]) => ({
  type: backLogActionTypes.GET_BACKLOG_LIST_SUCCESS,
  payload,
})