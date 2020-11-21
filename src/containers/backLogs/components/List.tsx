import { Card, Button, CardActions } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import React from 'react'
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
  backLogs: BackLog[]
}

export default function List(props: Props) {
  const { backLogs } = props
  const classes = useStyle()

  return (
    <div className={classes.root}>
      <Card className={classes.board} variant="outlined">
        {backLogs.map(backLog => <Item key={backLog.id} backLog={backLog}></Item>)}
        <CardActions disableSpacing={true} style={{display: 'flex', justifyContent: 'center'}}>
          <input className={classes.input}></input>
          <Button variant="outlined" className={classes.submitButton} endIcon={<SendIcon/>}/>
        </CardActions>
      </Card>
    </div>
  )
} 