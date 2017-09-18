import { connect } from 'react-redux';
import MemberRegisterComponent from '../components/MemberRegister_component';
import { Actions } from 'react-native-router-flux';
import { RegisterAction } from '../actions/MemberRegister_action';

const mapStateToProps = (state) => ({
    reg_status:state.reg_status
});

const mapDispatchToProps = (dispatch) => ({
   GoLogin: () => {
        Actions.pop();
        //Actions.MemberLogin();
    },
    RegisterButtonClick: (account, password,name,address) => {
        dispatch(RegisterAction(account, password,name,address));
    },
}
);

class MemberRegisterContainer extends MemberRegisterComponent {
     constructor(props) {
         super(props);
         this.state = {
            Account:'',
            Password:'',
            Work:'',
            Name:'',
            VPassword:'',
            Address:'',
            err2:false,
            err1:false,
            //err3:false,

        }
     }
    componentWillReceiveProps(nextProps) {
        const { reg_status } = nextProps; 
        //成功則
        if (reg_status === true) {
           
        }
    }

   
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberRegisterContainer);