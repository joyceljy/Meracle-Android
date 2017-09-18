import { connect } from 'react-redux';
import EditPasswordComponent from '../components/EditPassword_component';
import { Actions } from 'react-native-router-flux';
import { EditPasswordAction } from '../actions/EditPassword_action';

const mapStateToProps = (state) => ({
editpwd_status: state.Editpwd_status,
login_account: state.login_account,
});

const mapDispatchToProps = (dispatch) => ({

    EditPasswordClick: (account,password) => {
        dispatch(EditPasswordAction(account,password));
    },
    
}
);

class EditPasswordContainer  extends EditPasswordComponent  {
    constructor(props) {
        super(props);
        this.state = {
           
            err1: false,
            success1:false,
            passerr:false,
        }
    }

    componentDidMount() {
        

    };

    componentWillReceiveProps(nextProps) {
        const { editpwd_status } = nextProps;

        //成功則
        if (editpwd_status === true) {
           
            Actions.home();
        }
    }



}

export default connect(mapStateToProps, mapDispatchToProps)(EditPasswordContainer);