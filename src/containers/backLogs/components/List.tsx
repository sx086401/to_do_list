import { Card, Button, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import SendIcon from '@material-ui/icons/Send'
import { BackLog } from '../../../model/BackLog'
import Item from './Item'

const useStyle = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: 20
  },
  board: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 500,
    borderRadius: 30,
    backgroundColor: 'rgb(237, 224, 191)'
  },
  input: {
    width: 350,
    height: 24,
  },
  submitButton: {
    height: 30,
    width: 50,
    border: 'solid 1px black',
    borderRadius: '0 2px 2px 0',
    backgroundColor: 'white'
  }
})

interface Props {
  backLogList: BackLog[]
  onGetBackLogList: () => void
}

export default function List(props: Props) {
  const classes = useStyle()
  const { backLogList: initBackLogList, onGetBackLogList } = props
  const [backLogList, setBackLogList] = useState<BackLog[]>([])
  const [input, setInput] = useState<string>('')

  useEffect(() => {
    onGetBackLogList()
    // To make refreshing the page reset the list.
    setBackLogList(initBackLogList)
  }, [onGetBackLogList, initBackLogList])

  const onDelete = useCallback((backLogID: string) => {
    const index = backLogList.findIndex(backLog => backLog.id === backLogID)
    backLogList.splice(index, 1)
    setBackLogList([...backLogList])
    },
    [backLogList],
  )

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value
    setInput(newInput)
  }

  const onSubmit = () => {
    if (input !== '') {
      const { id: lastBackLogID } = backLogList[backLogList.length - 1]
      const newIDNumber = parseInt(lastBackLogID.slice(-1)) + 1
      const strList = input.split('address: ')

      backLogList.push({
        id: `___AX${newIDNumber}`,
        memo: strList[0],
        address: strList[1],
        createdAt: Date.now()
      })
      setInput('')
    }
  }

  return (
    <div className={classes.root}>
      <Card className={classes.board} variant="outlined">
        {backLogList.map(backLog => <Item key={backLog.id} backLog={backLog} onDelete={onDelete}></Item>)}
        <CardActions disableSpacing={true} style={{display: 'flex', justifyContent: 'center'}}>
          <input value={input} onChange={onChangeInput} className={classes.input}></input>
          <Button variant="outlined" onClick={onSubmit} className={classes.submitButton} endIcon={<SendIcon/>}
          />
        </CardActions>
      </Card>
    </div>
  )
}
