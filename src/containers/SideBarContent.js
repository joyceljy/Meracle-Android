import { connect } from 'react-redux';
import SideBarComponent from '../components/SideBarContent';
import { Actions } from 'react-native-router-flux';
import { ListChildren } from '../actions/ChildrenData_action';
import signalr from 'react-native-signalr';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account,
    member_data: state.member_data,
});

const mapDispatchToProps = (dispatch) => ({

    MemberClick: () => {
        Actions.Member();
    },
    MindwaveClick: () => {
        Actions.MindwaveTest();
    },
    TestResultClick:()=>{

    },
    PublicResultClick:()=>{

    },

});

class SideBarContainer extends SideBarComponent {
    constructor(props) {
        super(props);
        this.state = {
            childerr: false,
            modalVisible: false,
            genderText: '',
            Name: '',
            imageurl: '',
        }
    }
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {

        const { member_data } = nextProps;

    }
    componentDidMount() {
        this.setState({
            Name: this.props.member_data.member_data.Name,
            imageurl: this.props.member_data.member_data.Imageurl,
            pressLabel1: false,
            pressLabel2: false,
            pressLabel3: false,
            pressLabel4: false,
        });

        if (this.props.member_data.member_data.Gender.trim() == '男') {
            this.setState({ genderText: '先生' })
        } else {
            this.setState({ genderText: '小姐' })
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarContainer);