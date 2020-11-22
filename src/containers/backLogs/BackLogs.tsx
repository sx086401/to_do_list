import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBackLogListAction } from '../../reducer/backLog/backLogAction'
import { StoreState } from '../../reducer/rootReducer'
import List from './components/List'

export default function BackLogs() {
  const dispatch = useDispatch()
  const backLogList = useSelector((state: StoreState) => state.backLog.backLogList)
  const onGetBackLogList = useCallback(() => {
    dispatch(getBackLogListAction())
    },
    [dispatch],
  )
  return <List backLogList={backLogList} onGetBackLogList={onGetBackLogList}/>
}
