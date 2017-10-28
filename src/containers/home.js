import { connect } from 'react-redux';
import HomeComponent from '../components/home';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import { GetMemberData } from '../actions/MemberData_action';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account,
    login_token: state.login_token,
});

const mapDispatchToProps = (dispatch) => ({
    GetMemberData: (login_account, token) => {
        dispatch(GetMemberData(login_account, token));
    },

}
);

class HomeContainer extends HomeComponent {
    constructor(props) {
        super(props);
        this.state = {
            scene: 'home'
        }
    }
    componentDidMount() {
        let account = this.props.login_account;

        //取得會員資料
        this.props.GetMemberData(this.props.login_account, this.props.login_token);


        //signalr
        const connection = signalr.hubConnection('https://www.meracle.me/signalrpj/');
        connection.logging = true;

        const proxy = connection.createHubProxy('groupHub');

        proxy.on('addtogroup', function (message) {
            console.log(message);
            if (message == 'openMindwavePage') {

                proxy.invoke('send', account, 'haveOpened');
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



    }
    componentWillMount() {
        // BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
    componentWillUnmount() {
        //BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);

    }
    componentWillReceiveProps(nextProps) {
        //取得會員資料
        const { member_data } = nextProps;
    }


    // onBackAndroid = () => {
    //     
    //          Alert.aler                                                                                                                                                                                                                                                                                                                                                                                                                                      t(
    //         '',
    //         '是否要關閉APP?',
    //         [
    //             { text: '取消', onPress: () => { } },
    //             { text: '確定', onPress: () => { BackAndroid.exitApp(); } },
    //         ],
    //     );
    //     return true;
    //     


    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
