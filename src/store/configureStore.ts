import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from '../epics/rootEpic'
import rootReducer, { initStoreState } from '../reducer/rootReducer'

const epicMiddleware = createEpicMiddleware()

export default function configureStore(preloadState = initStoreState) {
  const store = createStore(rootReducer, preloadState, applyMiddleware(epicMiddleware))
  epicMiddleware.run(rootEpic)
  return store
}