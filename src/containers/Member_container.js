import { connect } from 'react-redux';
import MemberComponent from '../components/Member_component';
import { Actions } from 'react-native-router-flux';
//import { GetChildrenData, SaveChildrenData, SaveChildrenImage } from '../actions/ChildrenData_action';
import { GetMemberData } from '../actions/MemberData_action';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_data: state.member_data,
    login_token: state.login_token,
    member_data: state.member_data,

});

const mapDispatchToProps = (dispatch) => ({

    goMemberEdit: () => {
        Actions.MemberEdit();
    },
    GetMemberData: (login_account, token) => {
        dispatch(GetMemberData(login_account, token));
    },
    goAddChild: () => {
        Actions.ChildrenRegister();
    }

});

class MemberContainer extends MemberComponent {
    constructor(props) {
        super(props);
        this.state = {
            //avatarSource: null,
            imageurl: '',
        }

    }

    componentDidMount() {
        //取得會員資料
        this.props.GetMemberData(this.props.login_account, this.props.login_token);

    };

    componentWillReceiveProps(nextProps) {
        //取得會員資料
        const { member_data } = nextProps;

        this.setState({
            imageurl: member_data.member_data.Imageurl
        });

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberContainer);