import React from 'react'
import { BackLog } from '../../../model/BackLog'

interface Props {
  backLog: BackLog
}

export default function Item(props: Props) {
  const { backLog } = props
  return <>
    <h1>{backLog.id}</h1>
    <p>{backLog.createdAt}</p>
  </>
}
