import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const middleware = [createLogger()]

export default function configStore() {
  const store = createStore(rootReducer, applyMiddleware(...middleware))
  return store
}