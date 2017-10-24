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
        const connection = signalr.hubConnection('http://signalrpj.azurewebsites.net');
        connection.logging = true;

        const proxy = connection.createHubProxy('chatHub');

        proxy.on('addMessage', (argOne) => {
            console.log('message-from-server', argOne);
            if (argOne == 'openMindwavePage') {

                proxy.invoke('send', this.props.login_account, 'haveOpened');
                this.props.MindWave();
                connection.stop();
            }
        });

        // atempt connection, and handle errors
        connection.start().done(() => {
            proxy.invoke('group', '222@gmail.com');
            console.log('Now connected, connection ID=' + connection.id);
        }).fail(() => {
            console.log('Failed');
        });

        //connection-handling
        connection.connectionSlow(() => {
            console.log('We are currently experiencing difficulties with the connection.')
        });

        connection.error((error) => {
            const errorMessage = error.message;
            let detailedError = '';
            if (error.source && error.source._response) {
                detailedError = error.source._response;
            }
            if (detailedError === 'An SSL error has occurred and a secure connection to the server cannot be made.') {
                console.log('When using react-native-signalr on ios with http remember to enable http in App Transport Security https://github.com/olofd/react-native-signalr/issues/14')
            }
            console.debug('SignalR error: ' + errorMessage, detailedError)
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
