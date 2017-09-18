import { connect } from 'react-redux';
import GamePointTimeSeriesLineChartcomponent from '../components/GamePointTimeSeriesLineChart_component';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
   
    
}
);

class GamePointTimeSeriesLineChartContainer extends GamePointTimeSeriesLineChartcomponent {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps) {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePointTimeSeriesLineChartContainer);
