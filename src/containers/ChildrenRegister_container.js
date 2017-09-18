import { connect } from 'react-redux';
import ChildrenRegisterComponent from '../components/ChildrenRegister_component';
import { Actions } from 'react-native-router-flux';
import { ChildrenRegisterAction } from '../actions/ChildrenRegister_action';

const mapStateToProps = (state) => ({
    child_reg_status:state.child_reg_status,
    child_account: state.child_account,
    login_account: state.login_account,

});

const mapDispatchToProps = (dispatch) => ({
   
    ChildRegisterButtonClick: (account,name,birth,gender) => {
        dispatch(ChildrenRegisterAction(account,name,birth,gender));
    },
}
);

class ChildrenRegisterContainer extends ChildrenRegisterComponent {
     constructor(props) {
         super(props);
         this.state = {
            birthdate: '',
            isDateTimePickerVisible: false,
            gender: '男',
            value: 0,
            Name:'',
            err1:false,

        }
     }
    componentWillReceiveProps(nextProps) {
        const { child_reg_status } = nextProps; 
        //成功則
        if (child_reg_status === true) {
           Actions.home();
        }
    }

   
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenRegisterContainer);