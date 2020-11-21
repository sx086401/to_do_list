import React from 'react'
import { BackLog } from '../../../model/BackLog'
import Item from './Item'

interface Props {
  backLogs: BackLog[]
}

export default function List(props: Props) {
  const { backLogs } = props
  return <>
    <div>
      {backLogs.map(backLog => <Item key={backLog.id} backLog={backLog}></Item>)}
    </div>
  </>
} 