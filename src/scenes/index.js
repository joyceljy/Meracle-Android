import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';

 import MemberRegister from './MemberRegister_scene';
 import MemberLogin from './MemberLogin_scene';

const scenes = Actions.create(
    <Scene key="root">
          <Scene key="MemberRegister" component={MemberRegister} hideNavBar={true}/> 
          <Scene key="MemberLogin" component={MemberLogin} hideNavBar={true}/>          
    </Scene>
)
export default scenes;