import { connect } from 'react-redux';
import MemberRegisterComponent from '../components/MemberRegister_component';
import { Actions } from 'react-native-router-flux';
import { RegisterAction, CheckAccountAction } from '../actions/MemberRegister_action';

const mapStateToProps = (state) => ({
    reg_status: state.reg_status,
    checkMemAccount_status: state.checkMemAccount_status
});

const mapDispatchToProps = (dispatch) => ({
    GoLogin: () => {
        //Actions.pop();
        Actions.MemberLogin({type: "reset"});
    },
    RegisterButtonClick: (account, password, name, birth, gender) => {
        dispatch(RegisterAction(account, password, name, birth, gender));
        Actions.MemberLogin({type: "reset"});
    },
    checkAccountbtn: (account) => {
        dispatch(CheckAccountAction(account));
    }
}
);

class MemberRegisterContainer extends MemberRegisterComponent {
    constructor(props) {
        super(props);
        this.state = {
            Account: '',
            Password: '',
            Work: '',
            Name: '',
            VPassword: '',
            Birthdate: '',
            err2: false,
            err1: false,
            err3: false,
            //步驟
            step: 1,

            //性別
            genderSelected: 0,
            Gender: '男',

            //確認帳號重複
            accountCheck: true,
            //自動跳轉
            skipLogin: false,

        }
    }
    componentWillReceiveProps(nextProps) {
        const { reg_status } = nextProps;
        const { checkMemAccount_status } = nextProps;
        const { checkMemAccount_status: previous_checkMemAccount } = this.props;
       
        if (previous_checkMemAccount != checkMemAccount_status) {
            this.setState({ accountCheck: checkMemAccount_status })
        }

        //成功則
        if (reg_status === true) {

        }
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(MemberRegisterContainer);