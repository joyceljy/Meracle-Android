import { connect } from 'react-redux';
import SideBarComponent from '../components/SideBarContent';
import { Actions } from 'react-native-router-flux';
import { LogoutAction } from '../actions/Logout_action';
import { ListChildren } from '../actions/ChildrenData_action';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account
});

const mapDispatchToProps = (dispatch) => ({

MemberClick: () => {
    Actions.Member();
},
    MemberEditClick: () => {
        Actions.MemberEdit();
    },
    ChildrenEditClick: () => {
        Actions.ChildrenEdit();
    },
    LogoutClick: (account) => {
        dispatch(LogoutAction());
    },
    EditpwdClick: () => {
        Actions.EditPassword();
    },
    AllHighMemClick: () => {
        Actions.AllHighMemoryTime();
    },
    AvgSleepingClick: () => {
        Actions.AvgSleepingBarChart();
    },
    EverySolutionMemClick: () => {
        Actions.EverySolutionMemLineChart();
    },
    FoodClick: () => {
        Actions.FoodRadarChart();
    },
    GamePointClick: () => {
        Actions.GamePoint();
    },
    GamePointcclick: () => {
        Actions.GamePointTimeSeriesLineChart();
    },
    ParentsTroubleClick: () => {
        Actions.ParentsTroublePieChart();
    },
    PersonalHighMemoryTimeClick: () => {
        Actions.PersonalHighMemoryTime();
    },
    PersonalMemClick: () => {
        Actions.PersonalMemBarChart();
    },
    ChildChangeClick: (account) => {
        dispatch(ListChildren(account));
    }
});

class SideBarContainer extends SideBarComponent {
    constructor(props) {
        super(props);
        this.state = {
            childerr: false,
            modalVisible: false,
        }
    }
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {
        const { logout_account } = nextProps;
        if (logout_account == null || logout_account == '') {
            Actions.MemberLogin();
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);