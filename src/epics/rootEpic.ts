import { combineEpics } from 'redux-observable'
import backLogEpics from './backLog/backLogEpics'

export default combineEpics(...backLogEpics)