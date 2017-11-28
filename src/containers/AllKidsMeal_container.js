import { connect } from 'react-redux';
import AllKidsMealComponent from '../components/AllKidsMeal_component';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import { processColor } from 'react-native';
const mapStateToProps = (state) => ({
    // login_account: state.login_account,
    // child_account: state.child_account
    PublicCerealOrderBy:state.PublicCerealOrderBy,
    PublicMealset:state.PublicMealTotalset
});

const mapDispatchToProps = (dispatch) => ({
    BackButton: () => {
        Actions.pop()
    },


}
);

class AllKidsMealContainer extends AllKidsMealComponent {
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
                    this.props.PublicMealset
                //     {
                //     values: [
                //     { value: 25, label: '' },
                //     { value: 15, label: '' },
                //     { value: 18, label: '' },
                //     { value: 15, label: '' },
                //     { value: 27, label: '' },
                //     ],
                //     label: 'Pie dataset',
                //     config: {
                //         colors: [processColor('#9ACBD9'), processColor('#2F9A9E'), processColor('#F2992E'),processColor('#F5808B'),processColor('#A77DC2')],
                //         valueTextSize: 12,
                //         valueTextColor: processColor('white'),
                //         sliceSpace: 0,
                //         selectionShift: 13
                //     }
                // }
            ],
            },
            description: {
                text: '',
                textSize: 15,
                textColor: processColor('darkgray'),

            },
            MealSort:[]
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

export default connect(mapStateToProps, mapDispatchToProps)(AllKidsMealContainer);
