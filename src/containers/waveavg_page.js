import { connect } from 'react-redux';
import WaveavgComponent from '../components/waveavg_page';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import { processColor } from 'react-native';
const mapStateToProps = (state) => ({
    login_account: state.login_account,
    child_account: state.child_account
});

const mapDispatchToProps = (dispatch) => ({
    
    kidwavepageClick:() => {
        Actions.kidwavepage();
    },

}
);

class WaveavgContainer extends WaveavgComponent {
    constructor(props) {
        super(props);
        this.state = {
            // scene: 'home',
            kidlistpre: [],
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
                    values: [5, 40, 77, 81, 43, 20],
                    label: 'Company B',
                    config: {
                        drawValues: false,
                        colors: [processColor('#9ACBD9')],
                    }
                }, {
                    values: [40, 5, 50, 23, 79, 30],
                    label: 'Company C',
                    config: {
                        drawValues: false,
                        colors: [processColor('#F5808B')],
                    }
                }, {
                    values: [10, 55, 35, 90, 82, 60],
                    label: 'Company D',
                    config: {
                        drawValues: false,
                        colors: [processColor('#F2992E')],
                    }
                },
                    // {
                    //     values: [90, 53, 82,10 ,35,88 ],
                    //     label: 'Company E',
                    //     config: {
                    //       drawValues: false,
                    //       colors: [processColor('#2F9A9E')],
                    //     }
                    //   },
                    //   {
                    //     values: [87, 66, 44, 55, 90,64],//小孩各狀態腦波
                    //     label: 'Company F',//小孩姓名
                    //     config: {
                    //       drawValues: false,
                    //       colors: [processColor('#A77DC2')],
                    //     }
                    //   }
                ],
                config: {
                    barWidth: 0.2,//5個小孩0.1
                    group: {
                        fromX: 0,
                        groupSpace: 0.4,//5個小孩0.5
                        barSpace: 0,
                    },
                }
            },
            xline: {
                drawLabels: true,
                valueFormatter: ['', '', '', '', '', ''],
                textColor: processColor('rgba(255,255,255,0.8)'),
                textSize: 9,
                position: 'BOTTOM',
                granularity: 1,
                axisMaximum: 6,
                axisMinimum: 0,
                centerAxisLabels: true,
                drawGridLines: true,
                drawAxisLine: true,
                gridDashedLine: { spaceLength: 10 }
            },
            yline:
            {
                left: { textColor: processColor('#B4DAE5'), textSize: 10, drawAxisLine: false, gridDashedLine: { spaceLength: 10 } },
                right: { drawLabels: false, drawAxisLine: false },


            },


        };
    }
    componentDidMount() {
        //signalr
        const connection = signalr.hubConnection('http://signalrchattestpj.azurewebsites.net');
        connection.logging = true;

        const proxy = connection.createHubProxy('chatHub');

        proxy.on('addNewMessageToPage', (argOne, argTwo, ) => {
            console.log('message-from-server', argOne, argTwo);
            if (argOne == 'openMindwavePage') {

                proxy.invoke('send', 'haveOpened', '');
                this.props.MindWave();
                connection.stop();
            }
        });

        // atempt connection, and handle errors
        connection.start().done(() => {
            console.log('Now connected, connection ID=' + connection.id);
        }).fail(() => {
            console.log('Failed');
        });
    }
    componentWillMount() {
        // BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
    componentWillUnmount() {
        //BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);

    }
    componentWillReceiveProps(nextProps) {

    }


    // onBackAndroid = () => {
    //     
    //          Alert.aler                                                                                                                                                                                                                                                                                                                                                                                                                                      t(
    //         '',
    //         '是否要關閉APP?',
    //         [
    //             { text: '取消', onPress: () => { } },
    //             { text: '確定', onPress: () => { BackAndroid.exitApp(); } },
    //         ],
    //     );
    //     return true;
    //     


    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(WaveavgContainer);
