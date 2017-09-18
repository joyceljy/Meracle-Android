import { connect } from 'react-redux';
import AvgSleepingBarChartcomponent from '../components/AvgSleepingBarChart_component';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
   
    
}
);

class AvgSleepingBarChartContainer extends AvgSleepingBarChartcomponent {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps) {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AvgSleepingBarChartContainer);
