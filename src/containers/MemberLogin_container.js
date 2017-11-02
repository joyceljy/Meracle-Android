import { connect } from 'react-redux';
import MemberLoginComponent from '../components/MemberLogin_component';
import { Actions } from 'react-native-router-flux';
import { LoginAction } from '../actions/MemberLogin_action';
import { GetMemberData } from '../actions/MemberData_action';

const mapStateToProps = (state) => ({
    login_token: state.login_token,
    login_account: state.login_account,
    member_data: state.member_data,
});

const mapDispatchToProps = (dispatch) => ({
    GoRegister: () => {
        //Actions.pop();
        Actions.MemberRegister({ type: "reset" });
    },
    Forgetpw: () => {
        Actions.ForgetPassword();
    },
    LoginButtonClick: (account, password) => {
        dispatch(LoginAction(account, password));
    },
    GetMemberData: (login_account, token) => {
        dispatch(GetMemberData(login_account, token));
    },
}
);

class MemberLoginContainer extends MemberLoginComponent {
    constructor(props) {
        super(props);
        this.state = {
            Account: '',
            Password: '',
            apierr: false,
            loginfail: false,
            err1: false,
        }
    }

    componentDidMount() {

        //若login_token有值則直接登入
        // if (this.props.login_token != null && this.props.login_token != "") {
        //     Actions.home({ type: "reset" });
        // }


    };

    componentWillReceiveProps(nextProps) {
        const { login_token: previous_login_token } = this.props;
        const { member_data: previous_member_data } = this.props;
        const { login_account } = nextProps;
        const { login_token } = nextProps;
        //登入成功則跳頁至首頁
        if (this.props.login_token != login_token) {
            this.props.GetMemberData(login_account, login_token);
        }
        const { member_data } = nextProps;
        if (previous_member_data != member_data && member_data != null) {
            Actions.home({ type: "reset" });
        }
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(MemberLoginContainer);