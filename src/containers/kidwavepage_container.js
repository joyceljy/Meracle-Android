import { connect } from 'react-redux';
import KidwavepageComponent from '../components/kidwavepage_component';
import { Actions } from 'react-native-router-flux';

const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account,
    ChildNameBGData: state.ChildNameBGData,
    SetChildNameBGColor: state.ChildNameBGColor,
    ChildBestStatus:state.ChildBestStatus,
    CdDayOfBestScoreByTimer: state.CdDayOfBestScoreByTimer
});

const mapDispatchToProps = (dispatch) => ({

    BackButton: () => {
        Actions.pop()
    },
    
}
);

class KidwavepageContainer extends KidwavepageComponent {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {

    }
    componentWillUnmount() {

    }
    componentWillReceiveProps(nextProps) {
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(KidwavepageContainer);
