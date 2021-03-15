// глобальное хранилище 
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// должен получать обязательно редьюсер
const store = createStore(
   rootReducer,
   composeEnhancers(applyMiddleware(thunk)))

export default store