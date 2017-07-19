import { combineReducers } from 'redux';

import Login_reducer from './Login_reducer';
import Loginaccount_reducer from './Loginaccount_reducer';
const root_reducers = combineReducers({
    
    //login
 login_status: Login_reducer,
 login_account:Loginaccount_reducer,

});

export default root_reducers;