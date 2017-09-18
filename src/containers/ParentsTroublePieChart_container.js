import { connect } from 'react-redux';
import ParentsTroublePieChartcomponent from '../components/ParentsTroublePieChart_component';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
   
    
}
);

class ParentsTroublePieChartContainer extends ParentsTroublePieChartcomponent {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps) {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentsTroublePieChartContainer);
