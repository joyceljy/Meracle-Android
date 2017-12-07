import { connect } from 'react-redux';
import AllkidsRecordComponent from '../components/AllkidsRecord_component';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account,
    member_data: state.member_data,
    ChildNameBGData: state.ChildNameBGData,
    SetChildNameBGColor: state.ChildNameBGColor,
    ChildBestStatus:state.ChildBestStatus,
    CdDayOfBestScoreByTimer: state.CdDayOfBestScoreByTimer
});

const mapDispatchToProps = (dispatch) => ({

    

});

class AllkidsRecordContainer extends AllkidsRecordComponent {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {

       

    }
    componentDidMount() {
        

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllkidsRecordContainer);