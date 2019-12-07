import { createStore, combineReducers ,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import home from './reducers/home'
import header from './reducers/header'
import mine from './reducers/mine'
import pro from './reducers/pro'


const reducer = combineReducers({
  home,
  header,
  mine,
  pro
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));

export default store

