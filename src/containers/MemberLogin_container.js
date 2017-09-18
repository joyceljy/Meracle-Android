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
        //Actions.pop();
        Actions.MemberRegister();
    },
    Forgetpw: () => {
    Actions.ForgetPassword();
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
            Password: '',
            apierr: false,
            loginfail: false,
            err1:false,
        }
    }

    componentDidMount() {

        //若login_account有值則直接登入&&login_status==="登入成功"
         if(this.props.login_account!=null &&this.props.login_account!=""){
             Actions.home({type: "reset"});
         }
           

    };

    componentWillReceiveProps(nextProps) {
        const { login_account } = nextProps;
        const { login_status } = nextProps;
        //登入成功則跳頁至首頁
        if (login_status === "登入成功") {
            Actions.home({type: "reset"});
        }
            
        // } else if(login_status ==="尚未填寫問卷"){
        //     //未填寫調查
        //      Actions.RegisterSurvey();
        // }
        }
    }





export default connect(mapStateToProps, mapDispatchToProps)(MemberLoginContainer);