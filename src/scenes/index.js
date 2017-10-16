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
import RegisterSurvey from './RegisterSurvey_scene';
import FoodRadarChart from './FoodRadarChart_scene';
import GamePointTimeSeriesLineChart from './GamePointTimeSeriesLineChart_scene'
import EverySolutionMemLineChart from './EverySolutionMemLineChart_scene'
import PersonalMemBarChart from './PersonalMemBarChart_scene'
import AvgSleepingBarChart from './AvgSleepingBarChart_scene'
import ParentsTroublePieChart from './ParentsTroublePieChart_scene'
import PersonalHighMemoryTime from './PersonalHighMemoryTime_scene'
import AllHighMemoryTime from './AllHighMemoryTime_scene'
import GamePoint from './GamePoint_scene'
import MindwaveTest from './MindwaveTest_scene'
import Member from './Member_scene';

const scenes = Actions.create(
    <Scene key="root" >

        <Scene key="MemberLogin" component={MemberLogin} hideNavBar={true} />
        <Scene key="MemberRegister" component={MemberRegister} hideNavBar={true} />
        <Scene key="ChildrenRegister" component={ChildrenRegister} hideNavBar={true} />
        <Scene key="RegisterSurvey" component={RegisterSurvey} hideNavBar={true} />
        <Scene key="ForgetPassword" component={ForgetPassword} hideNavBar={true} />
        <Scene key="home" component={Home} hideNavBar={true} />
        <Scene key="MemberEdit" component={MemberEdit} hideNavBar={true} />
        <Scene key="ChildrenEdit" component={ChildrenEdit} hideNavBar={true} />
        <Scene key="EditPassword" component={EditPassword} hideNavBar={true} />
        <Scene key="FoodRadarChart" component={FoodRadarChart} hideNavBar={true} />
        <Scene key="MindwaveTest" component={MindwaveTest} hideNavBar={true} />
        <Scene key="Member" component={Member} hideNavBar={true} />
        <Scene key="PersonalHighMemoryTime" component={PersonalHighMemoryTime} hideNavBar={true} />
        <Scene key="EverySolutionMemLineChart" component={EverySolutionMemLineChart} hideNavBar={true} />
        <Scene key="SideBar" component={SideBar} hideNavBar={true} />
        <Scene key="PersonalMemBarChart" component={PersonalMemBarChart} hideNavBar={true} />
        <Scene key="AvgSleepingBarChart" component={AvgSleepingBarChart} hideNavBar={true} />
        <Scene key="ParentsTroublePieChart" component={ParentsTroublePieChart} hideNavBar={true} />
        <Scene key="AllHighMemoryTime" component={AllHighMemoryTime} hideNavBar={true} />
        <Scene key="GamePoint" component={GamePoint} hideNavBar={true} />
        <Scene key="GamePointTimeSeriesLineChart" component={GamePointTimeSeriesLineChart} hideNavBar={true} />
    </Scene>
)
export default scenes;