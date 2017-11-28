import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

import MemberRegister from './MemberRegister_scene';
import ChildrenRegister from './ChildrenRegister_scene';
import MemberLogin from './MemberLogin_scene';
import ForgetPassword from './ForgetPassword_scene';
import Home from './home_scene';
import MemberEdit from './MemberEdit_scene';
import ChildrenEdit from './ChildrenEdit_scene';
import SideBar from './SideBar_scene';
import EditPassword from './EditPassword_scene';
import MindwaveTest from './MindwaveTest_scene'
import Member from './Member_scene';
import Setting from './Setting_scene';
import kidwavepage from './kidwavepage_scene';
import AllKidsHome from './AllKidsHome_scene';
import Sleepingavg from './Sleepingavg_scene';
import AllKidsProblem from './AllKidsProblem_scene';
import AllKidsMeal from './AllKidsMeal_scene';
import AllKidsAvgScore from './AllKidsAvgScoreADay_scene'
// import waveavgpage from './waveavg_scene';
const scenes = Actions.create(
    <Scene key="root" >

        <Scene key="MemberLogin" component={MemberLogin} hideNavBar={true} />
        <Scene key="MemberRegister" component={MemberRegister} hideNavBar={true} />
        <Scene key="ChildrenRegister" component={ChildrenRegister} hideNavBar={true} />
        <Scene key="ForgetPassword" component={ForgetPassword} hideNavBar={true} />
        <Scene key="home" component={Home} hideNavBar={true} />
        <Scene key="AllKidsHome" component={AllKidsHome} hideNavBar={true} />
        <Scene key="AllKidsProblem" component={AllKidsProblem} hideNavBar={true} />
        <Scene key="AllKidsMeal" component={AllKidsMeal} hideNavBar={true} />
        <Scene key="kidwavepage" component={kidwavepage} hideNavBar={true} />
        <Scene key="Sleepingavg" component={Sleepingavg} hideNavBar={true} />
        <Scene key="AllKidsAvgScore" component={AllKidsAvgScore} hideNavBar={true} />
        <Scene key="MemberEdit" component={MemberEdit} hideNavBar={true} />
        <Scene key="ChildrenEdit" component={ChildrenEdit} hideNavBar={true} />
        <Scene key="EditPassword" component={EditPassword} hideNavBar={true} />
        <Scene key="MindwaveTest" component={MindwaveTest} hideNavBar={true} />
        <Scene key="Member" component={Member} hideNavBar={true} />
        <Scene key="Setting" component={Setting} hideNavBar={true} />
        <Scene key="SideBar" component={SideBar} hideNavBar={true} />
    </Scene>
)
export default scenes;