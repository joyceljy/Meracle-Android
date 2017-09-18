import { connect } from 'react-redux';
import MemberEditComponent from '../components/MemberEdit_component';
import { Actions } from 'react-native-router-flux';
import { GetMemberData, SaveMemberData, SaveMemberImage } from '../actions/MemberData_action';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    member_data: state.member_data,
    savememberdata_status: state.savememberdata_status,
    member_imageurl: state.member_imageurl,
});

const mapDispatchToProps = (dispatch) => ({

    // ForgetButtonClick: (account) => {
    //     dispatch(ForgetPasswordAction(account));
    // },
    // BackButtonClick: () => {
    //     Actions.pop();
    // }
    GetMemberData: (login_account) => {
        dispatch(GetMemberData(login_account));
    }
    ,
    SaveButtonClick: (account, name, address, birthdate, gender) => {

        dispatch(SaveMemberData(account, name, address, birthdate, gender));
    },
    SaveImage: (account, image) => {
        dispatch(SaveMemberImage(account, image));
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
            Work: '',
            Name: '',
            Address: '',
            err2: false,
            err1: false,
            imageurl: '',
            avatarSource: null,
            imagedata_base64: null,
            init: 0,

        }

    }

    componentDidMount() {
        this.props.GetMemberData(this.props.login_account);
        if (this.state.gender == '男') {
            this.setState({ init: 0 })
        } else {
            this.setState({ init: 1 })
        }
    };

    componentWillReceiveProps(nextProps) {

        //取得會員資料
        const { member_data: previous_memberData } = this.props;
        const { member_data } = nextProps;
        const { member_imageurl } = nextProps;
        if (previous_memberData != member_data) {
            this.setState({
                birthdate: member_data.member_data.Birthday,
                Address: member_data.member_data.Address,
                Name: member_data.member_data.Name,
                gender: member_data.member_data.Gender,
                imageurl: member_data.member_data.Imageurl
            });
        }

        //會員資料儲存提示
        const { savememberdata_status } = nextProps;

        //成功則
        if (savememberdata_status === true) {

        }



    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberEditContainer);