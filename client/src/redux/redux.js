import { combineReducers } from 'redux';

// auth
import auth from './auth.js';

// api fetch
import reducer from './reducer.js';

export default combineReducers({ 
    auth,reducer
})