import { connect } from 'react-redux';
import PersonalHighMemoryTimecomponent from '../components/PersonalHighMemoryTime_component';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
 
});

const mapDispatchToProps = (dispatch) => ({
   
    
}
);

class PersonalHighMemoryTimeContainer extends PersonalHighMemoryTimecomponent {
    constructor(props) {
        super(props);
    }
    componentWillMount(){

    }
    componentWillReceiveProps(nextProps) {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalHighMemoryTimeContainer);
