import { Card, CardContent, CardHeader, makeStyles, Typography } from '@material-ui/core'
import React, { useCallback } from 'react'
import CancelIcon from '@material-ui/icons/Cancel'
import { BackLog } from '../../../model/BackLog'
import { IconButton } from '@material-ui/core'

const useStyle = makeStyles({
  deleteButton: {
    color: 'red',
    background: 'black',
    position: 'absolute',
    width: 20,
    height: 20,
    top: 0,
    right: 0,
  },
  card: {
    position: 'relative',
    width: 400,
    margin: 10,
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
  onDelete: (backLogID: string) => void
}

export default function Item(props: Props) {
  const classes = useStyle()
  const { backLog, onDelete } = props

  const onDeleteClick = useCallback(() => {
    onDelete(backLog.id)
    },
    [onDelete, backLog],
  )

  return (
    <Card className={classes.card} variant="outlined">
      <IconButton className={classes.deleteButton} onClick={onDeleteClick}>
        <CancelIcon/>
      </IconButton>
      <CardHeader data-testid='memo' title={backLog.memo}></CardHeader>
      <CardContent>
        {backLog.address && <Typography variant="body1" component="p">
          Address: {backLog.address}
        </Typography>
        }
        <Typography
          data-testid='createdAt'
          className={"createAt"}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          memo created at: {backLog.createdAt}
        </Typography>
      </CardContent>
    </Card>
  )
}
