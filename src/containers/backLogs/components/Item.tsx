import { Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel'
import { BackLog } from '../../../model/BackLog'

const useStyle = makeStyles({
  deleteButton: {
    color: 'red',
    background: 'black',
    borderRadius: '100%',
    position: 'absolute',
    width: 20,
    height: 20,
    top: 0,
    right: 0,
  },
  card: {
    position: 'relative',
    width: 400,
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    background: 'rgb(216, 233, 251)',
    '& .createAt': {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }
})

interface Props {
  backLog: BackLog
}

export default function Item(props: Props) {
  const classes = useStyle()
  const { backLog } = props

  return (
    <Card className={classes.card} variant="outlined">
      <CancelIcon className={classes.deleteButton}/>
      <CardHeader title={backLog.memo}></CardHeader>
      <CardContent>
        {backLog.address && <Typography variant="body1" component="p">
          Address: {backLog.address}
        </Typography>
        } 
        <Typography className={"createAt"} variant="body2" color="textSecondary" component="p">
          memo created at: {backLog.createdAt}
        </Typography>
      </CardContent>
    </Card>
  )
}
