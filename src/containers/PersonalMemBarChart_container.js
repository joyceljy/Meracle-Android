import { connect } from 'react-redux';
import PersonalMemBarChartcomponent from '../components/PersonalMemBarChart_component';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
   
    
}
);

class PersonalMemBarChartContainer extends PersonalMemBarChartcomponent {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps) {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalMemBarChartContainer);
