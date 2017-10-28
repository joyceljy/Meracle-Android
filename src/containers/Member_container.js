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
    GetMemberData: (login_account, token) => {
        dispatch(GetMemberData(login_account, token));
    },
    goAddChild: () => {
        Actions.ChildrenRegister();
    },
    ChildEdit: (login_account, childname, login_token) => {
        dispatch(GetChildrenData(login_account, childname, login_token));
       // Actions.ChildrenEdit();
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
            avatarSource: null,
            imagedata_base64: null,
        }

    }

    componentDidMount() {
        let account = this.props.login_account;
        this.props.GetMemberData(this.props.login_account, this.props.login_token);
        
        //取得會員資料
        this.setState({
            imageurl: this.props.member_data.member_data.Imageurl
        });


        this.props.ChildListActionClick(this.props.login_account, this.props.login_token);
       
            //signalr
        const connection = signalr.hubConnection('https://www.meracle.me/signalrpj/');
        connection.logging = true;

        const proxy = connection.createHubProxy('groupHub');

        proxy.on('addtogroup', function (message) {
            console.log(message);
            if (message == 'openMindwavePage') {

                proxy.invoke('send', account,'haveOpened');
                 Actions.MindwaveTest();
                connection.stop();
            }
        });


        // atempt connection, and handle errors
        connection.start().done(() => {
            proxy.invoke('group', this.props.login_account);
            console.log('Now connected, connection ID=' + connection.id);
        }).fail(() => {
            console.log('Failed');
        });
        
    };

    componentWillReceiveProps(nextProps) {
        //取得會員資料
        const { member_data } = nextProps;
        this.setState({
            imageurl: this.props.member_data.member_data.Imageurl
        });
        const { child_data } = nextProps;
        const { childList } = nextProps;
        const { child_data: previous_child_data } = this.props;

        if (previous_child_data != child_data) {
            Actions.ChildrenEdit();
        }
      

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberContainer);