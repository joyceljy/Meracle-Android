import { connect } from 'react-redux';
import SideBarComponent from '../components/SideBarContent';
import { Actions } from 'react-native-router-flux';
import { LogoutAction } from '../actions/Logout_action';
import { ListChildren } from '../actions/ChildrenData_action';
import signalr from 'react-native-signalr';

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
    },
    MindWave: () => {
        Actions.MindwaveTest();
    },
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
    componentDidMount() {
        //signalr
        const connection = signalr.hubConnection('http://signalrchattestpj.azurewebsites.net');
        connection.logging = true;

        const proxy = connection.createHubProxy('chatHub');

        proxy.on('addNewMessageToPage', (argOne, argTwo, ) => {
            console.log('message-from-server', argOne, argTwo);
            if (argOne == 'openMindwavePage') {

                proxy.invoke('send', 'haveOpened', '');
                this.props.MindWave();
                connection.stop();
            }
        });

        // atempt connection, and handle errors
        connection.start().done(() => {
            console.log('Now connected, connection ID=' + connection.id);
        }).fail(() => {
            console.log('Failed');
        });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);