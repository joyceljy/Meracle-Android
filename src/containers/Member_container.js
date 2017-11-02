import { connect } from 'react-redux';
import MemberComponent from '../components/Member_component';
import { Actions } from 'react-native-router-flux';
//import { GetChildrenData, SaveChildrenData, SaveChildrenImage } from '../actions/ChildrenData_action';
import { GetMemberData } from '../actions/MemberData_action';
import { ChildrenListAction, GetChildrenData } from '../actions/ChildrenData_action';
import signalr from 'react-native-signalr';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_data: state.child_data,
    login_token: state.login_token,
    member_data: state.member_data,
    childList: state.childList,
});

const mapDispatchToProps = (dispatch) => ({

    goMemberEdit: () => {
        Actions.MemberEdit();
    },
    SettingClick: () => {
        Actions.Setting();
    },
    GetMemberData: (login_account, token) => {
        dispatch(GetMemberData(login_account, token));
    },
    goAddChild: () => {
        Actions.ChildrenRegister();
    },
    ChildEdit: (login_account, childname, login_token) => {
        dispatch(GetChildrenData(login_account, childname, login_token));
        //Actions.ChildrenEdit();
    },
    ChildListActionClick: (account, login_token) => {
        dispatch(ChildrenListAction(account, login_token));
    },
    MindWave: () => {
        Actions.MindwaveTest();
    },
   
});

class MemberContainer extends MemberComponent {
    constructor(props) {
        super(props);
        this.state = {
            //avatarSource: null,
            imageurl: '',
        }

    }

    componentDidMount() {
        //取得會員資料
        this.props.GetMemberData(this.props.login_account, this.props.login_token);

        this.props.ChildListActionClick(this.props.login_account, this.props.login_token);
       
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
        
    };

    componentWillReceiveProps(nextProps) {
        //取得會員資料
        const { member_data } = nextProps;
        const { child_data } = nextProps;
        const { child_data: previous_child_data } = this.props;

        if (previous_child_data != child_data) {
            Actions.ChildrenEdit();
        }
      
        this.setState({
            imageurl: member_data.member_data.Imageurl
        });

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberContainer);