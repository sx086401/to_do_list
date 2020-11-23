import { AnyAction } from 'redux'
import { ActionsObservable, ofType } from 'redux-observable'
import { BackLog } from '../../model/BackLog'
import { backLogActionTypes, getBackLogListSuccessAction } from '../../reducer/backLog/backLogAction'
import { mapTo } from 'rxjs/operators'

const backLogs: BackLog[] = [
  {
    id: "___AX1",
    createdAt: 1605148012345,
    memo: "Finish interview quiz"
  },
  {
    id: "___AX2",
    createdAt: 1605312012345,
    memo: "Go k8s workshop at 10:00 trm",
    address: "Taipei 101"
  },
  {
    id: "___AX3",
    createdAt: 1605657612345,
    memo: "Follow up interview process"
  }
]

export const getBackLogEpic = (action$: ActionsObservable<AnyAction>) =>
  action$.pipe(
    ofType(backLogActionTypes.GET_BACKLOG_LIST),
    mapTo(getBackLogListSuccessAction(backLogs)),
  )

const BackLogEpics = [getBackLogEpic]
export default BackLogEpics
