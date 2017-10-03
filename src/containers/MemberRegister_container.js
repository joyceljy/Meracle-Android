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
    RegisterButtonClick: (account, password,name,birth,gender) => {
       // dispatch(RegisterAction(account, password,name,address));
    },
    checkAccountbtn:(account)=>{

    }
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
            Birthdate:'',
            err2:false,
            err1:false,
            err3:false,
            //步驟
            step:1,

            //性別
            genderSelected:0,
            Gender:'男',

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