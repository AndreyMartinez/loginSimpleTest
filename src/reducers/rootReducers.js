import { combineReducers } from 'redux'
import { reducer as notifications } from 'react-notification-system-redux'
import { loadingBarReducer } from 'react-redux-loading-bar'
import userReducer from './userReducers'
import loginReducer from './loginReducers'


const rootReducer = combineReducers({
userReducer,
notifications,
loadingBar:loadingBarReducer,
login:loginReducer,
})

export default rootReducer;