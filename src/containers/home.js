import { connect } from 'react-redux';
import HomeComponent from '../components/home';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account
});

const mapDispatchToProps = (dispatch) => ({


}
);

class HomeContainer extends HomeComponent {
    constructor(props) {
        super(props);
        this.state = {
            scene: 'home'
        }
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
