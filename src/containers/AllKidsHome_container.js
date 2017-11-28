import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import { processColor } from 'react-native';
import AllKidsHomeComponent from '../components/AllKidsHome_component';
import { Problemdataset, Mealdataset,Sleepdataset,Memorydataset } from '../actions/AllKidschartdataset_action'
const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account,
    TotalPublicBody: state.PublicBodyTotal,
    TotalPublicMeal: state.PublicMealTotal,
    PublicSleep: state.PublicSleep,
    PublicMemory:state.PublicMemery,
});

const mapDispatchToProps = (dispatch) => ({
    Problemaction: (dataset) => {
        dispatch(Problemdataset(dataset))
    },
    Mealaction: (dataset) => {
        dispatch(Mealdataset(dataset))
    },
    Sleepaction: (dataset) => {
        dispatch(Sleepdataset(dataset))
    },
    Memoryaction: (dataset) => {
        dispatch(Memorydataset(dataset))
    },
    SleepingavgClick: () => {
        Actions.Sleepingavg();
    },
    AllKidsProblemClick: () => {
        Actions.AllKidsProblem();
    },
    AllKidsMealClick: () => {
        Actions.AllKidsMeal();
    },
    AllKidsAvgScoreClick: () => {
        Actions.AllKidsAvgScore();
    },
});

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
