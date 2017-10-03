import { combineReducers } from 'redux';

import Login_reducer from './Login_reducer';
import Loginaccount_reducer from './Loginaccount_reducer';
import Register_reducer from './Register_reducer';
import ForgetPassword_reducer from './ForgetPassword_reducer';
import MemberData_reducer from './MemberData_reducer';
import SaveMemberData_reducer from './SaveMemberData_reducer';
import SaveMemberImage_reducer from './SaveMemberImage_reducer';
import Editpwdresult_reducer from './EditPasswordresult_reducer';
import RegisterSurvey_reducer from './RegisterSurvey_reducer';
import ChildChange_reducer from './ChildChange_reducer';
import ChildrenRegister_reducer from './ChildrenRegister_reducer';
import ChangeStep_reducer from './ChangeStep_reducer';
import ChildrenData_reducer from './ChildrenData_reducer';
import SaveChildrenData_reducer from './SaveChildrenData_reducer';
import eegpowerdelta_reducer from './eegpowerdelta_reducer';
import eegpowerlowbeta_reducer from './eegpowerlowbeta_reducer';
import esense_reducer from './esense_reducer';
const root_reducers = combineReducers({

    //login
    login_status: Login_reducer,
    login_account: Loginaccount_reducer, //login

    //Editpwd
    Editpwd_status: Editpwdresult_reducer,

    //register
    reg_status: Register_reducer,

    //forgetpassword
    forget_status: ForgetPassword_reducer,

    //memberdata
    member_data: MemberData_reducer,
    savememberdata_status: SaveMemberData_reducer,

    //member_image
    member_imageurl: SaveMemberImage_reducer,

    //register_survey
    survey_status: RegisterSurvey_reducer,

    //changechild
    child_account: ChildChange_reducer,

    //child register
    child_reg_status: ChildrenRegister_reducer,
    childRegStep: ChangeStep_reducer,

    //childdata
    children_data: ChildrenData_reducer,
    savechildrenddata_status: SaveChildrenData_reducer,

    //childlist
    children_list: ChildChange_reducer,

    //腦波
    eeg_power_delta: eegpowerdelta_reducer,
    eeg_power_low_beta: eegpowerlowbeta_reducer,
    esense: esense_reducer,
});

export default root_reducers;