import React from 'react'
import { Provider } from 'react-redux'
import BackLogs from './containers/backLogs/BackLogs'
import configureStore from './store/configureStore'

const store = configureStore()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BackLogs></BackLogs>
    </Provider>
  )
}

export default App;
