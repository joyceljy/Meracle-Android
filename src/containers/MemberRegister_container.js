import { connect } from 'react-redux';
import MemberRegisterComponent from '../components/MemberRegister_component';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    // login_status: state.login_status,
    // login_data: state.login_data
});

const mapDispatchToProps = (dispatch) => ({
   GoLogin: () => {
        Actions.pop();
        Actions.MemberLogin();
    },
}
);

class MemberRegisterContainer extends MemberRegisterComponent {
     constructor(props) {
         super(props);
     }
    componentWillReceiveProps(nextProps) {
    }

   
}

export default connect(mapStateToProps, mapDispatchToProps)(MemberRegisterContainer);