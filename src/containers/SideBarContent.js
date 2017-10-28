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
   
    LogoutClick: (account) => {
        dispatch(LogoutAction());
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
    // componentDidMount() {
    //     //signalr
    //     const connection = signalr.hubConnection('https://www.meracle.me/signalrpj/');
    //     connection.logging = true;

    //     const proxy = connection.createHubProxy('chatHub');

    //     proxy.on('addMessage', (argOne ) => {
    //         console.log('message-from-server', argOne);
    //         if (argOne == 'openMindwavePage') {

    //             proxy.invoke('send', this.props.login_account, 'haveOpened');
    //             this.props.MindWave();
    //             connection.stop();
    //         }
    //     });

    //     // atempt connection, and handle errors
    //     connection.start().done(() => {
    //         proxy.invoke('group',this.props.login_account);
    //         console.log('Now connected, connection ID=' + connection.id);
    //     }).fail(() => {
    //         console.log('Failed');
    //     });
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);