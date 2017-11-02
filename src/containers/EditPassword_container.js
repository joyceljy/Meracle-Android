import { connect } from 'react-redux';
import EditPasswordComponent from '../components/EditPassword_component';
import { Actions } from 'react-native-router-flux';
import { EditPasswordAction } from '../actions/EditPassword_action';

const mapStateToProps = (state) => ({
editpwd_status: state.Editpwd_status,
login_account: state.login_account,
login_token:state.login_token
});

const mapDispatchToProps = (dispatch) => ({

    EditPasswordClick: (account,password_pre,password_aft,token) => {
        dispatch(EditPasswordAction(account,password_pre,password_aft,token));
    },
    BackButton: () => {
        Actions.pop()
    }
}
);

class EditPasswordContainer  extends EditPasswordComponent  {
    constructor(props) {
        super(props);
        this.state = {
    
        }
    }

    componentDidMount() {
        

    };

    componentWillReceiveProps(nextProps) {
        const { editpwd_status } = nextProps;

        //成功則
        if (editpwd_status === true) {
           
            Actions.Setting();
        }
    }



}

export default connect(mapStateToProps, mapDispatchToProps)(EditPasswordContainer);