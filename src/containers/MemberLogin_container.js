import { connect } from 'react-redux';
import MemberLoginComponent from '../components/MemberLogin_component';
import { Actions } from 'react-native-router-flux';
import { LoginAction } from '../actions/MemberLogin_action';

const mapStateToProps = (state) => ({
    login_status: state.login_status,
    login_account: state.login_account
});

const mapDispatchToProps = (dispatch) => ({
    GoRegister: () => {
        Actions.pop();
        Actions.MemberRegister();
    },
    Forgetpw: () => {
        //Actions.MemberRegister();
    },
    LoginButtonClick: (account, password) => {
        dispatch(LoginAction(account, password));
    },
}
);

class MemberLoginContainer extends MemberLoginComponent {
    constructor(props) {
        super(props);
        this.state = {
            Account: '',
            Password: ''
        }
    }
    componentWillReceiveProps(nextProps) {
         const { login_account } = nextProps;
        const { login_status } = nextProps; 
        //登入成功則跳頁至首頁
       if (login_status == true) {
              Actions.MemberRegister();
            }
    }
    


}

export default connect(mapStateToProps, mapDispatchToProps)(MemberLoginContainer);