import { connect } from 'react-redux';
import ChildrenEditComponent from '../components/ChildrenEdit_component';
import { Actions } from 'react-native-router-flux';
import { GetChildrenData, SaveChildrenData, SaveChildrenImage,ClearChildrenData } from '../actions/ChildrenData_action';
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
        dispatch(ClearChildrenData());
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
            imageurl: this.props.child_data.child_data.Imageurl.trim()
        });
        if (this.props.child_data.child_data.Gender.trim() == '男') {
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

   
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenEditContainer);