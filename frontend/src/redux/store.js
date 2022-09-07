// 
import {applyMiddleware, createStore} from 'redux'
// extension pour visualiser les "states" à partir de google chrome
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'
import logger from 'redux-logger'

export const store = createStore (reducers, composeWithDevTools(
    applyMiddleware(logger)

))