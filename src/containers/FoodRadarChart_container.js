import { connect } from 'react-redux';
import FoodRadarChartcomponent from '../components/FoodRadarChart_component';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
   
    
}
);

class FoodRadarChartContainer extends FoodRadarChartcomponent {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps) {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodRadarChartContainer);
