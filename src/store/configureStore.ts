import { applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import rootReducer, { initStoreState } from "../reducer/rootReducer";

export default function configureStore(preloadState = initStoreState) {
  const epicMiddleware = createEpicMiddleware()
  const store = createStore(rootReducer, preloadState, applyMiddleware(epicMiddleware))
  return store
}