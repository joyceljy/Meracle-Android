import { connect } from 'react-redux';
import ChildrenEditComponent from '../components/ChildrenEdit_component';
import { Actions } from 'react-native-router-flux';
import { GetChildrenData, SaveChildrenData, SaveChildrenImage } from '../actions/ChildrenData_action';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_data: state.member_data,
    savechildrendata_status: state.savememberdata_status,
    member_imageurl: state.member_imageurl,
    child_account: state.child_account
});

const mapDispatchToProps = (dispatch) => ({
    BackButton: () => {
        Actions.Member();
    },
    GetChildrenData: (login_account, childname) => {
        dispatch(GetChildrenData(login_account, childname));
    }
    ,
    SaveButtonClick: (login_account, childname, birthdate, gender) => {

        dispatch(SaveChildrenData(login_account, childname, address, birthdate, gender));
    },
    SaveImage: (login_account, childname, image) => {
        dispatch(SaveChildrenImage(login_account, childname, image));
    },
});

class ChildrenEditContainer extends ChildrenEditComponent {
    constructor(props) {
        super(props);
        this.state = {
            birthdate: '',
            isDateTimePickerVisible: false,
            gender: '',
            Account: '',
            err2: false,
            err1: false,
            imageurl: '',
            avatarSource: null,
            imagedata_base64: null,

            genderSelected: 0

        }

    }

    componentDidMount() {
        this.props.GetChildrenData(this.props.login_account, this.props.child_account);
        if (this.state.gender == '男') {
            this.setState({ genderSelected: 0 })
        } else {
            this.setState({ genderSelected: 1 })
        }
    };

    componentWillReceiveProps(nextProps) {

        //取得會員資料
        const { child_data: previous_childData } = this.props;
        const { child_data } = nextProps;
        const { member_imageurl } = nextProps;
        if (previous_childData != child_data) {
            this.setState({
                birthdate: child_data.child_data.Birthday,
                Name: child_data.child_data.Name,
                gender: child_data.child_data.Gender,
                imageurl: child_data.child_data.Imageurl
            });
        }

        //會員資料儲存提示
        const { savechildrendata_status } = nextProps;

        //成功則
        if (savechildrendata_status === true) {

        }



    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenEditContainer);