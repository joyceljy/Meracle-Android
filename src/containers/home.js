import { connect } from 'react-redux';
import HomeComponent from '../components/home';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import { GetMemberData } from '../actions/MemberData_action';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account,
    login_token: state.login_token,
    member_data: state.member_data,
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
  
    componentWillMount() {
        // BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
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
