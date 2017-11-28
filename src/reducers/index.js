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
import CheckMemAccount_reducer from './CheckMemAccount_reducer';
import CheckChildName_reducer from './CheckChildName_reducer';
import ChildList_reducer from './ChildList_reducer';
import AllPublicBody_reducer from './AllPublicBody_reducer';
import PublicBodyTotal_reducer from './PublicBodyTotal_reducer';
import PublicBodyTotalset_reducer from './PublicBodyTotalset_reducer';
import PublicCereal_reducer from './PublicCereal_reducer';
import PublicCerealTotal_reducer from './PublicCerealTotal_reducer';
import PublicMealTotalset_reducer from './PublicMealTotalset_reducer';
import AllPublicSleepAvgScore_reducer from './AllPublicSleepAvgScore_reducer';
import AllPublicSleepAvgScoreOrderby_reducer from './AllPublicSleepAvgScoreOrderby_reducer';
import AllPublicSleepTotalset_reducer from "./AllPublicSleepTotalset_reducer";
import AllPublicMemeryOrderBy_reducer from './AllPublicMemeryOrderBy_reducer';
import AllPublicMemery_reducer from './AllPublicMemery_reducer';
import AllPublicMemoryTotalset_reducer from './AllPublicMemoryTotalset_reducer'
import MemoryPoint_reducer from './MemoryPoint_reducer';
import SaveMemoryPoint_reducer from './SaveMemoryPoint_reducer';
const root_reducers = combineReducers({

    //login
    login_token: Login_reducer,
    login_account: Loginaccount_reducer, //login

    //Editpwd
    Editpwd_status: Editpwdresult_reducer,

    //register
    reg_status: Register_reducer,
    checkMemAccount_status: CheckMemAccount_reducer,

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
    child_name: ChildChange_reducer,

    //child register
    child_reg_status: ChildrenRegister_reducer,
    childRegStep: ChangeStep_reducer,
    checkChildName_status: CheckChildName_reducer,

    //childdata
    child_data: ChildrenData_reducer,
    savechildrenddata_status: SaveChildrenData_reducer,

    //腦波
    eeg_power_delta: eegpowerdelta_reducer,
    eeg_power_low_beta: eegpowerlowbeta_reducer,
    esense: esense_reducer,

    //小孩列表
    childList: ChildList_reducer,

    //大眾孩童生理狀況
    PublicBody: AllPublicBody_reducer,
    PublicBodyTotal: PublicBodyTotal_reducer,
    PublicBodyTotalset: PublicBodyTotalset_reducer,
    //大眾孩童飲食習慣
    PublicCerealOrderBy: PublicCereal_reducer,
    PublicMealTotal: PublicCerealTotal_reducer,
    PublicMealTotalset: PublicMealTotalset_reducer,
    //大眾孩童睡眠時間
    PublicSleep: AllPublicSleepAvgScore_reducer,
    PublicSleepOrderby: AllPublicSleepAvgScoreOrderby_reducer,
    PublicSleepTotalset:AllPublicSleepTotalset_reducer,
    //大眾孩童每日記憶力表現
    PublicMemeryOrderBy:AllPublicMemeryOrderBy_reducer,
    PublicMemery:AllPublicMemery_reducer,
    PublicMemoryTotalset:AllPublicMemoryTotalset_reducer,


    //記憶分數
    quizPointArray:MemoryPoint_reducer,
    quizSaved:SaveMemoryPoint_reducer,
});

export default root_reducers;