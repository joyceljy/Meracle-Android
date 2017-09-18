import { connect } from 'react-redux';
import EverySolutionMemLineChartcomponent from '../components/EverySolutionMemLineChart_component';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
   
    
}
);

class EverySolutionMemLineChartContainer extends EverySolutionMemLineChartcomponent {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps) {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EverySolutionMemLineChartContainer);
