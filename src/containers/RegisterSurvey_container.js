import { connect } from 'react-redux';
import RegisterSurveyComponent from '../components/RegisterSurvey_component';
import { Actions } from 'react-native-router-flux';
import { RegisterSurveyAction } from '../actions/RegisterSurvey_action';

const mapStateToProps = (state) => ({
    survey_status:state.survey_status,
    login_account: state.login_account,
    child_account: state.child_account
});

const mapDispatchToProps = (dispatch) => ({
   
    ButtonClick: (account,problem,sleep,fruit,veg,cereal,meat,milk) => {
        dispatch(RegisterSurveyAction(account,problem,sleep,fruit,veg,cereal,meat,milk));
    },
}
);

class RegisterSurveyContainer extends RegisterSurveyComponent {
     constructor(props) {
         super(props);
         this.state = {
            err1:false,
            Q1:'',
            Q2:'',
            Q3:'',
            fruit:false,
            veg:false,
            cereal:false,
            meat:false,
            milk:false,

        }
     }
    componentWillReceiveProps(nextProps) {
        const { survey_status } = nextProps; 
        //成功則
        if (survey_status === true) {
            Actions.pop();
           Actions.home({type: "reset"});
        }
    }

   
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterSurveyContainer);