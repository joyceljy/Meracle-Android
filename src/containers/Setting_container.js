import { connect } from 'react-redux';
import SettingComponent from '../components/Setting_component';
import { Actions } from 'react-native-router-flux';
import { LogoutAction } from '../actions/Logout_action';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account
});

const mapDispatchToProps = (dispatch) => ({

    BackButton: () => {
        Actions.pop()
    },
    Editpswd: () => {
        Actions.EditPassword()
    },
    LogoutClick: (account) => {
        dispatch(LogoutAction());
    },
}
);

class SettingContainer extends SettingComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {

    }
    componentWillUnmount() {

    }
    componentWillReceiveProps(nextProps) {
        const { login_account } = nextProps;
        if (login_account === "") {
            Actions.MemberLogin({ type: "reset" });
        }
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(SettingContainer);
