import { connect } from 'react-redux';
import MemberComponent from '../components/Member_component';
import { Actions } from 'react-native-router-flux';
//import { GetChildrenData, SaveChildrenData, SaveChildrenImage } from '../actions/ChildrenData_action';
import { GetMemberData} from '../actions/MemberData_action';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_data: state.member_data,
   
});

const mapDispatchToProps = (dispatch) => ({

    goMemberEdit:()=>{
        Actions.MemberEdit();
    },
    GetMemberData: (login_account) => {
        dispatch(GetMemberData(login_account));
    },
    goAddChild:()=>{
        Actions.ChildrenRegister();
    }
    
});

class MemberContainer extends MemberComponent {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
        }

    }

    componentDidMount() {
        //取得會員資料
        this.props.GetMemberData(this.props.login_account);
    };

    componentWillReceiveProps(nextProps) {
         //取得會員資料
         const { member_data: previous_memberData } = this.props;
         const { member_data } = nextProps;
         if (previous_memberData != member_data) {
             this.setState({
                //  birthdate: member_data.member_data.Birthday,
                //  Address: member_data.member_data.Address,
                //  Name: member_data.member_data.Name,
                //  gender: member_data.member_data.Gender,
                 imageurl: member_data.member_data.Imageurl
             });
         }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberContainer);