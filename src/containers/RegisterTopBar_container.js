import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import RegisterTopBarComponent from '../components/RegisterTopBar_component';
import {changeRegisterStep} from '../actions/ChangeStep_action';

const mapStateToProps = (state) => ({
    childRegStep:state.childRegStep,
});

const mapDispatchToProps = (dispatch) => ({
     changeRegisterStep:(step)=>{
         dispatch(changeRegisterStep(step));
     },
     goMember:()=>{
         Actions.pop();
        //  Actions.Member();
     },
 }
 );


export default connect(mapStateToProps, mapDispatchToProps)(RegisterTopBarComponent);