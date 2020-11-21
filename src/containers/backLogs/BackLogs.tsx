import React from 'react'
import { BackLog } from '../../model/BackLog'
import List from './components/List'

export default function BackLogs() {
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
  return <List backLogs={backLogs}/>
}
