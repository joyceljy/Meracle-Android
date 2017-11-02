import { connect } from 'react-redux';
import AllKidsHomeComponent from '../components/AllKidsHome_component';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import { processColor } from 'react-native';
const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account
});

const mapDispatchToProps = (dispatch) => ({
    SleepingavgClick:()=>{
        Actions.Sleepingavg();
    }
   

}
);

class AllKidsHomeContainer extends AllKidsHomeComponent {
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {
     
       
    }
    componentWillMount() {
       
    }
    componentWillUnmount() {
      
    }
    componentWillReceiveProps(nextProps) {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllKidsHomeContainer);
