import { connect } from 'react-redux';
import SleepingavgComponent from '../components/Sleepingavg_component';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import { processColor } from 'react-native';
const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account
});

const mapDispatchToProps = (dispatch) => ({
    BackButton: () => {
        Actions.pop()
    },


}
);

class SleepingavgContainer extends SleepingavgComponent {
    constructor(props) {
        super(props);
        this.state = {
            legend: {
                enabled: false,
                textSize: 14,
                form: "SQUARE",
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                wordWrapEnabled: true
            },
            data: {
                dataSets: [{
                    values: [{y:0},{ y: 10 }, { y: 8.5 }, { y: 9 }, { y: 7 }, { y: 6 }],
                    label: '平均睡眠時間',
                    config: {
                        color: processColor('#9ACBD9'),
                        valueTextColor: processColor('#124264'),
                        barSpacePercent: 0,
                        valueFormatter: '###',
                        barShadowColor: processColor('#7373B9'),
                        highlightAlpha: 90,
                        highlightColor: processColor('#7373B9'),
                        drawLabels: true,
                    }
                }],
                config: {
                    barWidth: 0.3, //柱子宽度，不设置则按照宽度及柱子个数平分
                    drawValues:false
                }

            },
            xline: {
                drawLabels: false,
                valueFormatter: ['8歲以下', '9-10歲', '11-12歲', '13-14歲', '14歲以上'],
                textColor: processColor('rgba(255,255,255,0.8)'),
                textSize: 9,
                position: 'BOTTOM',
                granularity: 1,
                axisMaximum: 6,
                axisMinimum: 0,
                centerAxisLabels: true,
                drawGridLines: true,
                drawAxisLine: false,
                gridDashedLine: { spaceLength: 10 },
                granularityEnabled: true,
            },
            yline:
            {
                left: { textColor: processColor('#B4DAE5'), textSize: 10, drawAxisLine: false, gridDashedLine: { spaceLength: 10 } },
                right: { drawLabels: false, drawAxisLine: false },


            },
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

export default connect(mapStateToProps, mapDispatchToProps)(SleepingavgContainer);
