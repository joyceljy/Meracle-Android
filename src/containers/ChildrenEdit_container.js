import { connect } from 'react-redux';
import ChildrenEditComponent from '../components/ChildrenEdit_component';
import { Actions } from 'react-native-router-flux';
import { GetChildrenData, SaveChildrenData, SaveChildrenImage } from '../actions/ChildrenData_action';
import signalr from 'react-native-signalr';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_data: state.child_data,
    savechildrendata_status: state.savememberdata_status,
    member_imageurl: state.member_imageurl,
    //child_name: state.child_name,
    login_token: state.login_token,
});

const mapDispatchToProps = (dispatch) => ({
    BackButton: () => {
        Actions.Member();
    },
    // GetChildrenData: (login_account, childname, token) => {
    //     dispatch(GetChildrenData(login_account, childname, token));
    // }
    // ,
    SaveButtonClick: (login_account, childname, birthdate, gender, token) => {

        dispatch(SaveChildrenData(login_account, childname, birthdate, gender, token));
    },
    SaveImage: (login_account, childname, image, token) => {
        dispatch(SaveChildrenImage(login_account, childname, image, token));
    },
    MindWave: () => {
        Actions.MindwaveTest();
    },
});

class ChildrenEditContainer extends ChildrenEditComponent {
    constructor(props) {
        super(props);
        this.state = {
            birthdate: '',
            isDateTimePickerVisible: false,
            gender: '',
            Name: '',
            err2: false,
            err1: false,
            imageurl: '',
            avatarSource: null,
            imagedata_base64: null,

            genderSelected: 0

        }

    }

    componentDidMount() {

        this.setState({
            birthdate: this.props.child_data.child_data.Birthday,
            Name: this.props.child_data.child_data.CdName,
            gender: this.props.child_data.child_data.Gender,
            imageurl: this.props.child_data.child_data.Imageurl
        });
        if (this.props.child_data.child_data.Gender == '男') {
            this.setState({ genderSelected: 0 })
        } else {
            this.setState({ genderSelected: 1 })
        }

    };

    componentWillReceiveProps(nextProps) {

        //取得會員資料
        const { child_data } = nextProps;
        const { child_name } = nextProps;

        //會員資料儲存提示
        const { savechildrendata_status } = nextProps;

        //成功則
        if (savechildrendata_status === true) {

        }



    }
    componentDidMount() {
        //signalr
        const connection = signalr.hubConnection('http://signalrpj.azurewebsites.net');
        connection.logging = true;

        const proxy = connection.createHubProxy('chatHub');

        proxy.on('addMessage', (argOne ) => {
            console.log('message-from-server', argOne);
            if (argOne == 'openMindwavePage') {

                proxy.invoke('send', this.props.login_account, 'haveOpened');
                this.props.MindWave();
                connection.stop();
            }
        });

        // atempt connection, and handle errors
        connection.start().done(() => {
            proxy.invoke('group',this.props.login_account);
            console.log('Now connected, connection ID=' + connection.id);
        }).fail(() => {
            console.log('Failed');
        });
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenEditContainer);