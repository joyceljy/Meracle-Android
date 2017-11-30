import { connect } from 'react-redux';
import MemberEditComponent from '../components/MemberEdit_component';
import { Actions } from 'react-native-router-flux';
import { GetMemberData, SaveMemberData, SaveMemberImage } from '../actions/MemberData_action';
import signalr from 'react-native-signalr';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    member_data: state.member_data,
    savememberdata_status: state.savememberdata_status,
    member_imageurl: state.member_imageurl,
    login_token: state.login_token,
});

const mapDispatchToProps = (dispatch) => ({

    BackButton: () => {
        Actions.pop();
    },
    GetMemberData: (login_account, token) => {
        dispatch(GetMemberData(login_account, token));
    }
    ,
    SaveButtonClick: (account, name, address, birthdate, gender, token) => {

        dispatch(SaveMemberData(account, name, address, birthdate, gender, token));
    },
    SaveImage: (account, image, token) => {
        dispatch(SaveMemberImage(account, image, token));
    },
    MindWave: () => {
        Actions.MindwaveTest();
    },
});

class MemberEditContainer extends MemberEditComponent {
    constructor(props) {
        super(props);
        this.state = {
            birthdate: '',
            isDateTimePickerVisible: false,
            gender: '',
            value: 0,
            Account: '',
            Name: '',
            Address: '',
            err2: false,
            err1: false,
            imageurl: '',
            avatarSource: null,
            imagedata_base64: null,

            genderSelected: 0,


        }

    }

    componentDidMount() {
        //this.props.GetMemberData(this.props.login_account,this.props.login_token);
        let account = this.props.login_account;
        this.setState({
            birthdate: this.props.member_data.member_data.Birthday,
            Address: this.props.member_data.member_data.Address,
            Name: this.props.member_data.member_data.Name,
            gender: this.props.member_data.member_data.Gender,
            imageurl: this.props.member_data.member_data.Imageurl
        });

        if (this.props.member_data.member_data.Gender.trim() == '男') {
            this.setState({ genderSelected: 0 })
        } else {
            this.setState({ genderSelected: 1 })
        }


    };

    componentWillReceiveProps(nextProps) {

        //取得會員資料

        const { member_data } = nextProps;

        //會員資料儲存提示
        const { savememberdata_status } = nextProps;

        //成功則
        if (savememberdata_status === true) {
            this.props.GetMemberData(this.props.login_account, this.props.login_token);
        }



    }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberEditContainer);