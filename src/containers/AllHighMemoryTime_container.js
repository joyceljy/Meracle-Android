import { connect } from 'react-redux';
import AllHighMemoryTimecomponent from '../components/AllHighMemoryTime_component';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
   
    
}
);

class AllHighMemoryTimeContainer extends AllHighMemoryTimecomponent {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps) {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllHighMemoryTimeContainer);
