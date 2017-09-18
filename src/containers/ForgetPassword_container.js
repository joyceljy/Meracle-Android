import { connect } from 'react-redux';
import ForgetPasswordComponent from '../components/ForgetPassword_component';
import { Actions } from 'react-native-router-flux';
import { ForgetPasswordAction } from '../actions/ForgetPassword_action';

const mapStateToProps = (state) => ({
forget_status: state.forget_status,
});

const mapDispatchToProps = (dispatch) => ({

    ForgetButtonClick: (account) => {
        dispatch(ForgetPasswordAction(account));
    },
    BackButtonClick: () => {
        Actions.pop();
    }
}
);

class ForgetPasswordContainer extends ForgetPasswordComponent {
    constructor(props) {
        super(props);
        this.state = {
            Account: '',
            err1: false,
            success1:false,
            err2:false,
            passerr:false,
        }
    }

    componentDidMount() {
        

    };

    componentWillReceiveProps(nextProps) {
        const { forget_status } = nextProps;

        //成功則
        if (forget_status === true) {
            setTimeout(() => this.setState({
                success1: true
            }), 500); // show toast after 0.5s

            setTimeout(() => this.setState({
                success1: false
            }), 5000); // hide toast after 5s
        } else {
             setTimeout(() => this.setState({
                err2: true
            }), 500); // show toast after 0.5s

            setTimeout(() => this.setState({
                err2: false
            }), 5000); // hide toast after 5s
           
        }
    }



}

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordContainer);