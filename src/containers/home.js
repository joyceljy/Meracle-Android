import { connect } from 'react-redux';
import HomeComponent from '../components/home';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account
});

const mapDispatchToProps = (dispatch) => ({
    MindWave: () => {
        Actions.MindwaveTest();
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
    componentWillMount() {
        // BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
    componentWillUnmount() {
        //BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
       
    }
    componentWillReceiveProps(nextProps) {
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
