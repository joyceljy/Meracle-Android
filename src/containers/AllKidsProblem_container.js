import { connect } from 'react-redux';
import AllKidsProblemComponent from '../components/AllKidsProblem_component';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import { processColor } from 'react-native';
const mapStateToProps = (state) => ({
    login_token: state.login_token,
    PublicBody: state.PublicBody,
    TotalPublicBody:state.TotalPublicBody,
    PublicBodyTotalset:state.PublicBodyTotalset
});

const mapDispatchToProps = (dispatch) => ({
    BackButton: () => {
        Actions.pop({ type: "reset" })
    },


}
);

class AllKidsProblemContainer extends AllKidsProblemComponent {
    constructor(props) {
        super(props);
        this.state = {
            legend: {
                enabled: false,
                textSize: 8,
                form: 'CIRCLE',
                position: 'RIGHT_OF_CHART',
                wordWrapEnabled: true
            },
            data: {
                dataSets: [
                    this.props.PublicBodyTotalset
                ],
            },
            description: {
                text: '',
                textSize: 15,
                textColor: processColor('darkgray'),

            },
            ProblemSort: []
        };

    }

    componentDidMount() {


    }
    componentWillMount() {
        
    }
    componentWillUnmount() {


    }
    componentWillReceiveProps(nextProps) {


    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllKidsProblemContainer);
