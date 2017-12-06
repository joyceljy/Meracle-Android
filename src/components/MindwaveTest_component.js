import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Dimensions,
    Button,
    Image,
    ActivityIndicator,
    TouchableOpacity,
    BackAndroid,
    ToastAndroid,
    ScrollView,
    Platform,

} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MindWaveMobile from 'react-native-mindwave-mobile';
import { SinglePickerMaterialDialog } from 'react-native-material-dialog';
import signalr from 'react-native-signalr';
import _ from 'lodash';
import Drawer from 'react-native-drawer';
import SideBarContent from '../containers/SideBarContent';

const mwm = new MindWaveMobile()
const isMock = false;
var { height, width } = Dimensions.get('window');
var Settlecounter = 0;
var Toastshow;
const poorSingalTimerTimeMax = 5
class Memory extends Component {
    constructor(props) {
        super(props);
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
        this.state = {

            //確認裝置連接
            defaultPage: true,
            PrestartTest: false,
            deviceFound: false,
            mindwaveConnected: false,
            devices: [],
            mindwaveTimer: 0,
            //確認訊號值歸零
            poorSignalChecked: false,
            poorSingalTimer: poorSingalTimerTimeMax,
            Connected: false,
            isScanning: false,
            willConnect: null,

            //開始測驗（signalr）
            startTest: false,

            //結束畫面顯示
            endTestView: false,

            //腦波數據
            delta: this.props.delta ? this.props.delta : null, delta_max: 0.00, delta_min: 0.00, delta_avg: 0.00, delta_sd: 0.00, deltaArray: [],
            highAlpha: this.props.highAlpha ? this.props.highAlpha : null, highAlpha_max: 0.00, highAlpha_min: 0.00, highAlpha_avg: 0.00, highAlpha_sd: 0.00, highAlphaArray: [],
            lowAlpha: this.props.lowAlpha ? this.props.lowAlpha : null, lowAlpha_max: 0.00, lowAlpha_min: 0.00, lowAlpha_avg: 0.00, lowAlpha_sd: 0.00, lowAlphaArray: [],
            theta: this.props.theta ? this.props.theta : null, theta_max: 0.00, theta_min: 0.00, theta_avg: 0.00, theta_sd: 0.00, thetaArray: [],
            lowBeta: this.props.lowBeta ? this.props.lowBeta : null, lowBeta_max: 0.00, lowBeta_min: 0.00, lowBeta_avg: 0.00, lowBeta_sd: 0.00, lowBetaArray: [],
            midGamma: this.props.midGamma ? this.props.midGamma : null, midGamma_max: 0.00, midGamma_min: 0.00, midGamma_avg: 0.00, midGamma_sd: 0.00, midGammaArray: [],
            highBeta: this.props.highBeta ? this.props.highBeta : null, highBeta_max: 0.00, highBeta_min: 0.00, highBeta_avg: 0.00, highBeta_sd: 0.00, highBetaArray: [],
            lowGamma: this.props.lowGamma ? this.props.lowGamma : null, lowGamma_max: 0.00, lowGamma_min: 0.00, lowGamma_avg: 0.00, lowGamma_sd: 0.00, lowGammaArray: [],
            poorSignal: this.props.poorSignal ? this.props.poorSignal : 0,
            meditation: 0,
            attention: 0,
            timerCounter: 0,
            //狀態選擇
            statusSelected: 1,
            status: '運動前',
            score: '80',

            showBtn: true,
            canShowToast: true,

            //分數陣列
            PointArray: [],

            //
            cdName: '',
            finalScore: '',

        };
        console.log(this.state.imageArray)
    }
    //drawer
    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    //----腦波運算function----
    //取得最大值（傳入四個值,回傳最大值）
    _getMax(data1, data2, data3, data4) {
        var dataMax = data1;
        dataMax < data2 ? dataMax = data2 : dataMax = dataMax
        dataMax < data3 ? dataMax = data3 : dataMax = dataMax
        dataMax < data4 ? dataMax = data4 : dataMax = dataMax
        //console.log(dataMax)
        return dataMax
    }
    //取得最小值（傳入四個值，回傳最小值）
    _getMin(data1, data2, data3, data4) {
        var dataMin = data1;
        dataMin > data2 ? dataMin = data2 : dataMin = dataMin
        dataMin > data3 ? dataMin = data3 : dataMin = dataMin
        dataMin > data4 ? dataMin = data4 : dataMin = dataMin
        //console.log(dataMin)
        return dataMin
    }
    //計算平均（傳入四個值，回傳平均值）
    _getAvg(data1, data2, data3, data4) {
        //console.log(dataAvg)
        return parseFloat(((data1 + data2 + data3 + data4) / 4).toFixed(2))
    }
    //計算標準差（傳入四個值，回傳標準差）
    _getSD(data1, data2, data3, data4) {
        const average = (data1 + data2 + data3 + data4) / 4
        //console.log("average="+average)


        return parseFloat(Math.sqrt((((data1 - average) * (data1 - average)
            + (data2 - average) * (data2 - average)
            + (data3 - average) * (data3 - average)
            + (data4 - average) * (data4 - average)) / 4)).toFixed(2))
    }
    //----腦波操作function----

    //掃描裝置
    handlePressScan = () => {
        //if (!this.state.isScanning) {
        if (isMock) {
            setTimeout(() => {
                this.handleFoundDevice({
                    id: 'test1234',
                });
            }, 1000);
        } else {
            this.setState({ defaultPage: false })
            this.setState({ showBtn: false })
            this.mwm.scan();
        }
        // this.setState({
        //     isScanning: true,
        // });
        //}

    }

    handlePressConnectDevice = (device) => {
        if (!device.id) {
            console.error('can not connect no id device');
            return;
        }
        this.setState({
            willConnect: device.id,

        });
        if (isMock) {
            setTimeout(() => {
                this.handleConnect({ success: true });
            }, 2000);
        } else {
            this.mwm.connect(device.id);
        }
    }

    handlePressDisconnectDevice = () => {
        if (!this.state.mindwaveConnected) {
            console.log('no connecting device');
            return;
        }
        if (isMock) {
            this.handleDisconnect({ success: true });
        } else {
            this.mwm.disconnect();
        }
    }

    handleConnect = ({ success }) => {
        //alert(`連結 ${success ? '成功' : '失敗'}`);
        //ToastAndroid.show(`連結 ${success ? '成功' : '失敗'}`, ToastAndroid.SHORT);
        if (success && this.state.willConnect) {
            this.changeConnectedState(this.state.willConnect, true);
            this.setState({
                Connected: true,
            });
        } else {
            console.log('will connect device is null');
        }
    }

    handleDisconnect = ({ success }) => {
        //alert(`移除連結 ${success ? '成功' : '失敗'}`);
        //ToastAndroid.show(`移除連結 ${success ? '成功' : '失敗'}`, ToastAndroid.SHORT);
        if (success && !this.state.mindwaveConnected) {
            this.setState({
                Connected: false,
            });
            console.log('no connecting device');
            return;
        }
        this.changeConnectedState(this.state.mindwaveConnected, false)
    }

    handleFoundDevice = (device) => {
        console.log('on found deviceId ', device.id);
        console.log(device);

        this.pushDevice(device);
    }

    handleEEGPowerLowBeta = (data) => {
        //console.log('onEEGPowerLowBeta', data);
        this.props.onEEGPowerLowBeta(data);
    }

    handleEEGPowerDelta = (data) => {
        // console.log('onEEGPowerDelta', data);
        this.setState({
            mindwaveTimer: this.state.mindwaveTimer + 1
        })
        this.props.onEEGPowerDelta(data, this.state.mindwaveTimer)
    }

    handleESense = (data) => {
        //console.log('onESense', data);
        if (data.poorSignal != -1) {
            this.props.onESense(data);
        }

    }

    handleEEGBlink = (data) => {
        //console.log('onEEGBlink', data);
    }

    handleMWMBaudRate = (data) => {
        //console.log('onMWMBaudRate', data);
    }

    pushDevice = (device) => {
        if (!device.id) {
            console.log('device id is undefined or null');
            return;
        }
        if (_.find(this.state.devices, ['id', device.id])) {
            console.log(`device (${device.id}) is in list`);
            return;
        }
        this.state.devices.push(device);

        this.setState({
            devices: this.state.devices,
        });
    }

    changeConnectedState = (id, mindwaveConnected) => {
        if (!id) {
            console.log('device id is undefined or null');
            return;
        }
        if (_.findIndex(this.state.devices, ['id', id]) < 0) {
            console.log(`device (${id}) is not in list`);
            return;
        }

        let _state = { mindwaveConnected: id };
        if (mindwaveConnected && this.state.willConnect) {
            _state.willConnect = null;
        } else {
            _state.mindwaveConnected = null;
        }

        this.setState(_state);
    }
    countPoint(array) {
        let points = 0;
        let countTimes = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] > 0) {
                points += array[i];
                countTimes++;
            }

        }
        //alert(points);
        let num = points / countTimes;
        return num;
    }

    componentWillUnmount() {
        //clearTimeout(this.timerScan)
        this.mwm.removeAllListeners();
        const connection = signalr.hubConnection('https://www.meracle.me/signalrpj/');
        connection.stop();

    }
    componentDidMount() {

        //返回控制
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);

        this.mwm = new MindWaveMobile();
        this.mwm.onConnect(this.handleConnect);
        this.mwm.onDisconnect(this.handleDisconnect);
        this.mwm.onFoundDevice(this.handleFoundDevice);
        this.mwm.onEEGPowerLowBeta(this.handleEEGPowerLowBeta);
        this.mwm.onEEGPowerDelta(this.handleEEGPowerDelta);
        this.mwm.onESense(this.handleESense);
        if (Platform.OS === 'ios') {
            this.mwm.onEEGBlink(this.handleEEGBlink);
            this.mwm.onMWMBaudRate(this.handleMWMBaudRate);
        }

        //signalr

        const connection = signalr.hubConnection('https://www.meracle.me/signalrpj/');
        connection.logging = true;
        const proxy = connection.createHubProxy('groupHub');
        proxy.on('addtogroup', (message1) => {


            // if (message1 != "startGame" && message1 != "canStart" && message1 != "startGame2") {

            // }

            if (message1 == "startGame") {
                connection.stop();
                this.setState({ PrestartTest: false });
                this.setState({ startTest: true });
                setTimeout(() => {
                    //結束收集腦波 
                    let countp = 0;
                    countp = this.countPoint(this.state.PointArray);
                    this.setState({ finalScore: countp });
                    console.log('finalscore', countp);

                    this.setState({ endTestView: true });
                }, 210000);
            } else if (message1 == "startGame2") {
                connection.stop();
                this.setState({ PrestartTest: false });
                this.setState({ startTest: true });
                setTimeout(() => {
                    //結束收集腦波 
                    let countp = 0;
                    countp = this.countPoint(this.state.PointArray);
                    this.setState({ finalScore: countp });

                    console.log('finalscore', countp);

                    this.setState({ endTestView: true });
                }, 116000);
            } else if (message1 != 'canStart') {
                this.setState({ cdName: message1 });
               // alert(message1);
            }
        });

        connection.start().done(() => {
            console.log('Now connected, connection ID=' + connection.id);
            proxy.invoke('group', this.props.login_account);
        });




    }
    handleBackButton() {
        ToastAndroid.show('請點選上方結束按鈕取消此次測驗', ToastAndroid.SHORT);
        return true;
    }
    componentWillReceiveProps(nextProps) {
        let account = this.props.login_account;


        //檢查訊號值正常（poorsignal為0）
        const { poorSignal } = nextProps;
        //console.log('poorSignal', poorSignal);
        if (poorSignal == 0 && !this.state.poorSignalChecked && this.state.Connected) {
            this.setState({ canShowToast: true })
            
            //counter累加
            Settlecounter++;

            let DownSettleCounter = 5 - Settlecounter;
            //顯示倒數
            //ToastAndroid.show('訊號穩定！倒數' + DownSettleCounter + '秒', ToastAndroid.SHORT);


            //當Settlecounter==10（需維持10次的poorsignal=0 poorsignalchecked才會通過）
            if (Settlecounter == 10) {
                this.setState({ poorSignalChecked: true });

               

                //訊號穩定 可以開始遊戲
                const connection = signalr.hubConnection('https://www.meracle.me/signalrpj/');
                connection.logging = true;
                const proxy = connection.createHubProxy('groupHub');
                connection.start().done(() => {

                    proxy.invoke('group', this.props.login_account);
                    console.log('Now connected, connection ID=' + connection.id);
                    proxy.invoke('send', account, 'canStart').done((directResponse) => {
                        ToastAndroid.show('訊號穩定！可以開始遊戲了！', ToastAndroid.SHORT);
                        this.setState({ PrestartTest: true });
                    })
                }).fail(() => {
                    console.log('Failed');
                });
            }

        }

        //訊號不正常（poorsignal不為0）
        if (poorSignal != 0 && !this.state.checkPoorSignal && this.state.Connected) {
            Settlecounter = 0;
            if (this.state.canShowToast) {
                ToastAndroid.show('請避免頭部晃動', ToastAndroid.SHORT);
                this.setState({ canShowToast: false })
            }

        }




        //腦波運算與收集

        if (this.state.startTest) {
            if (poorSignal == 0) {
                //console.log(nextProps.poorSignal)
                this.setState({
                    poorSignal: nextProps.poorSignal,
                })


                //將訊號push進訊號陣列
                this.state.deltaArray.push(nextProps.delta)
                this.state.highAlphaArray.push(nextProps.highAlpha)
                this.state.lowAlphaArray.push(nextProps.lowAlpha)
                this.state.thetaArray.push(nextProps.theta)
                this.state.lowBetaArray.push(nextProps.lowBeta)
                this.state.midGammaArray.push(nextProps.midGamma)
                this.state.highBetaArray.push(nextProps.highBeta)
                this.state.lowGammaArray.push(nextProps.lowGamma)

                this.setState({
                    timerCounter: this.state.timerCounter + 1,
                })
                // console.log({
                //     delta: nextProps.delta, highAlpha: nextProps.highAlpha, lowAlpha: nextProps.lowAlpha, theta: nextProps.theta,
                //     lowBeta: nextProps.lowBeta, midGamma: nextProps.midGamma, highBeta: nextProps.highBeta, lowGamma: nextProps.lowGamma
                // })
                //console.log('訊號正常每秒跳一次，目前數值：')
            } else {
                this.setState({
                    poorSignal: nextProps.poorSignal,
                })
                console.log('訊號不正常，請調整腦波耳機穿戴位置')
            }

            //每收集到4秒的腦波則計算一次腦波
            if (this.state.timerCounter == 4 && this.state.timerCounter != 0 && this.props.poorSignal == 0) {

                this.setState({
                    delta_max: this._getMax(this.state.deltaArray[0], this.state.deltaArray[1], this.state.deltaArray[2], this.state.deltaArray[3]),
                    delta_min: this._getMin(this.state.deltaArray[0], this.state.deltaArray[1], this.state.deltaArray[2], this.state.deltaArray[3]),
                    delta_sd: this._getSD(this.state.deltaArray[0], this.state.deltaArray[1], this.state.deltaArray[2], this.state.deltaArray[3]),
                    delta_avg: this._getAvg(this.state.deltaArray[0], this.state.deltaArray[1], this.state.deltaArray[2], this.state.deltaArray[3]),
                    highAlpha_max: this._getMax(this.state.highAlphaArray[0], this.state.highAlphaArray[1], this.state.highAlphaArray[2], this.state.highAlphaArray[3]),
                    highAlpha_min: this._getMin(this.state.highAlphaArray[0], this.state.highAlphaArray[1], this.state.highAlphaArray[2], this.state.highAlphaArray[3]),
                    highAlpha_sd: this._getSD(this.state.highAlphaArray[0], this.state.highAlphaArray[1], this.state.highAlphaArray[2], this.state.highAlphaArray[3]),
                    highAlpha_avg: this._getAvg(this.state.highAlphaArray[0], this.state.highAlphaArray[1], this.state.highAlphaArray[2], this.state.highAlphaArray[3]),
                    lowAlpha_max: this._getMax(this.state.lowAlphaArray[0], this.state.lowAlphaArray[1], this.state.lowAlphaArray[2], this.state.lowAlphaArray[3]),
                    lowAlpha_min: this._getMin(this.state.lowAlphaArray[0], this.state.lowAlphaArray[1], this.state.lowAlphaArray[2], this.state.lowAlphaArray[3]),
                    lowAlpha_sd: this._getSD(this.state.lowAlphaArray[0], this.state.lowAlphaArray[1], this.state.lowAlphaArray[2], this.state.lowAlphaArray[3]),
                    lowAlpha_avg: this._getAvg(this.state.lowAlphaArray[0], this.state.lowAlphaArray[1], this.state.lowAlphaArray[2], this.state.lowAlphaArray[3]),
                    theta_max: this._getMax(this.state.thetaArray[0], this.state.thetaArray[1], this.state.thetaArray[2], this.state.thetaArray[3]),
                    theta_min: this._getMin(this.state.thetaArray[0], this.state.thetaArray[1], this.state.thetaArray[2], this.state.thetaArray[3]),
                    theta_sd: this._getSD(this.state.thetaArray[0], this.state.thetaArray[1], this.state.thetaArray[2], this.state.thetaArray[3]),
                    theta_avg: this._getAvg(this.state.thetaArray[0], this.state.thetaArray[1], this.state.thetaArray[2], this.state.thetaArray[3]),
                    lowBeta_max: this._getMax(this.state.lowBetaArray[0], this.state.lowBetaArray[1], this.state.lowBetaArray[2], this.state.lowBetaArray[3]),
                    lowBeta_min: this._getMin(this.state.lowBetaArray[0], this.state.lowBetaArray[1], this.state.lowBetaArray[2], this.state.lowBetaArray[3]),
                    lowBeta_sd: this._getSD(this.state.lowBetaArray[0], this.state.lowBetaArray[1], this.state.lowBetaArray[2], this.state.lowBetaArray[3]),
                    lowBeta_avg: this._getAvg(this.state.lowBetaArray[0], this.state.lowBetaArray[1], this.state.lowBetaArray[2], this.state.lowBetaArray[3]),
                    midGamma_max: this._getMax(this.state.midGammaArray[0], this.state.midGammaArray[1], this.state.midGammaArray[2], this.state.midGammaArray[3]),
                    midGamma_min: this._getMin(this.state.midGammaArray[0], this.state.midGammaArray[1], this.state.midGammaArray[2], this.state.midGammaArray[3]),
                    midGamma_sd: this._getSD(this.state.midGammaArray[0], this.state.midGammaArray[1], this.state.midGammaArray[2], this.state.midGammaArray[3]),
                    midGamma_avg: this._getAvg(this.state.midGammaArray[0], this.state.midGammaArray[1], this.state.midGammaArray[2], this.state.midGammaArray[3]),
                    highBeta_max: this._getMax(this.state.highBetaArray[0], this.state.highBetaArray[1], this.state.highBetaArray[2], this.state.highBetaArray[3]),
                    highBeta_min: this._getMin(this.state.highBetaArray[0], this.state.highBetaArray[1], this.state.highBetaArray[2], this.state.highBetaArray[3]),
                    highBeta_sd: this._getSD(this.state.highBetaArray[0], this.state.highBetaArray[1], this.state.highBetaArray[2], this.state.highBetaArray[3]),
                    highBeta_avg: this._getAvg(this.state.highBetaArray[0], this.state.highBetaArray[1], this.state.highBetaArray[2], this.state.highBetaArray[3]),
                    lowGamma_max: this._getMax(this.state.lowGammaArray[0], this.state.lowGammaArray[1], this.state.lowGammaArray[2], this.state.lowGammaArray[3]),
                    lowGamma_min: this._getMin(this.state.lowGammaArray[0], this.state.lowGammaArray[1], this.state.lowGammaArray[2], this.state.lowGammaArray[3]),
                    lowGamma_sd: this._getSD(this.state.lowGammaArray[0], this.state.lowGammaArray[1], this.state.lowGammaArray[2], this.state.lowGammaArray[3]),
                    lowGamma_avg: this._getAvg(this.state.lowGammaArray[0], this.state.lowGammaArray[1], this.state.lowGammaArray[2], this.state.lowGammaArray[3]),
                }, function () {
                    console.log({
                        "deltaBig": this.state.delta_max, "deltaSmall": this.state.delta_min, "deltaAverage": this.state.delta_avg, "deltaSD": this.state.delta_sd,
                        "thetaBig": this.state.theta_max, "thetaSmall": this.state.theta_min, "thetaAverage": this.state.theta_avg, "thetaSD": this.state.theta_sd,
                        "lowAlphaBig": this.state.lowAlpha_max, "lowAlphaSmall": this.state.lowAlpha_min, "lowAlphaAverage": this.state.lowAlpha_avg, "lowAlphaSD": this.state.lowAlpha_sd,
                        "highAlphaBig": this.state.highAlpha_max, "highAlphaSmall": this.state.highAlpha_min, "highAlphaAverage": this.state.highAlpha_avg, "highAlphaSD": this.state.highAlpha_sd,
                        "lowBetaBig": this.state.lowBeta_max, "lowBetaSmall": this.state.lowBeta_min, "lowBetaAverage": this.state.lowBeta_avg, "lowBetaSD": this.state.lowBeta_sd,
                        "highBetaBig": this.state.highBeta_max, "highBetaSmall": this.state.highBeta_min, "highBetaAverage": this.state.highBeta_avg, "highBetaSD": this.state.highBeta_sd,
                        "lowGammaBig": this.state.lowGamma_max, "lowGammaSmall": this.state.lowGamma_min, "lowGammaAverage": this.state.lowGamma_avg, "lowGammaSD": this.state.lowGamma_sd,
                        "midGammaBig": this.state.midGamma_max, "midGammaSmall": this.state.midGamma_min, "midGammaAverage": this.state.midGamma_avg, "midGammaSD": this.state.midGamma_sd,
                    })


                    //上面得到的腦波計算用來計算記憶力數值
                    this.props.getMemoryPoint({
                        "deltaBig": this.state.delta_max, "deltaSmall": this.state.delta_min, "deltaAverage": this.state.delta_avg, "deltaSD": this.state.delta_sd,
                        "thetaBig": this.state.theta_max, "thetaSmall": this.state.theta_min, "thetaAverage": this.state.theta_avg, "thetaSD": this.state.theta_sd,
                        "lowAlphaBig": this.state.lowAlpha_max, "lowAlphaSmall": this.state.lowAlpha_min, "lowAlphaAverage": this.state.lowAlpha_avg, "lowAlphaSD": this.state.lowAlpha_sd,
                        "highAlphaBig": this.state.highAlpha_max, "highAlphaSmall": this.state.highAlpha_min, "highAlphaAverage": this.state.highAlpha_avg, "highAlphaSD": this.state.highAlpha_sd,
                        "lowBetaBig": this.state.lowBeta_max, "lowBetaSmall": this.state.lowBeta_min, "lowBetaAverage": this.state.lowBeta_avg, "lowBetaSD": this.state.lowBeta_sd,
                        "highBetaBig": this.state.highBeta_max, "highBetaSmall": this.state.highBeta_min, "highBetaAverage": this.state.highBeta_avg, "highBetaSD": this.state.highBeta_sd,
                        "lowGammaBig": this.state.lowGamma_max, "lowGammaSmall": this.state.lowGamma_min, "lowGammaAverage": this.state.lowGamma_avg, "lowGammaSD": this.state.lowGamma_sd,
                        "midGammaBig": this.state.midGamma_max, "midGammaSmall": this.state.midGamma_min, "midGammaAverage": this.state.midGamma_avg, "midGammaSD": this.state.midGamma_sd
                    }, this.props.login_token, this.props.login_account, this.state.cdName
                    );
                })

                //清空訊號收集陣列
                this.setState({
                    deltaArray: [],
                    highAlphaArray: [],
                    lowAlphaArray: [],
                    thetaArray: [],
                    lowBetaArray: [],
                    midGammaArray: [],
                    highBetaArray: [],
                    lowGammaArray: [],
                })

                this.setState({
                    timerCounter: 0,
                })
                console.log('要推進陣列的記憶值', nextProps.quizPointArray);
                if(nextProps.quizPointArray!=0||nextProps.quizPointArray!="0"){
                    this.state.PointArray.push(nextProps.quizPointArray);
                }
                
            }

        }
    }
    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 0 }
        }
        {
            //default page
            if (this.state.defaultPage == true) {
                return (


                    <View style={styles.Viewstyle}>
                        <Drawer
                            type="displace"
                            ref={(ref) => this._drawer = ref}
                            content={<SideBarContent />}
                            openDrawerOffset={100}
                            panOpenMask={0.80}
                            captureGestures="open"
                            styles={drawerStyles}
                            tweenHandler={ratio => ({
                                main: {
                                    opacity: 1,
                                },
                                mainOverlay: {
                                    opacity: ratio / 2,
                                    backgroundColor: 'black',
                                },
                            })}
                        >
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={this.openControlPanel} style={styles.menuIcon}>
                                    <Image source={require('../images/menu.png')} ></Image>
                                </TouchableOpacity>
                                <Text style={styles.drawerTitle}>測量腦波</Text>
                            </View>


                            <View style={styles.container}>

                                <View style={styles.View1}>
                                    <View style={styles.View2}>
                                        <View style={styles.View3}>
                                            <Image source={require('../images/img_measuring.png')} style={styles.earphonePic} />
                                        </View>
                                    </View>
                                </View>

                                <Text style={styles.defaultText}>按下開始測量後{"\n"} </Text>
                                <Text style={[styles.defaultText, { marginTop: -15 }]}>將會為您進行測量腦波的步驟 </Text>

                                <TouchableOpacity onPress={this.handlePressScan} style={styles.ScanBtn}  >
                                    <Text style={styles.ScanText}>開始測量</Text>
                                </TouchableOpacity>


                            </View>
                        </Drawer>
                    </View>

                );
            }


            //掃描畫面
            if (!this.state.mindwaveConnected) {
                return (

                    <View style={styles.Viewstyle}>
                        <View style={styles.topbarView}>
                            <TouchableOpacity onPress={() => this.props.goBack()}>
                                <Text style={styles.topbarText}>結束</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.mindwaveTitle}>正在掃描附近裝置</Text>

                            <View style={[styles.View1, { width: 120, height: 120, marginTop: 16 }]}>
                                <View style={[styles.View2, { width: 90, height: 90, marginTop: 15 }]}>
                                    <View style={[styles.View3, { width: 60, height: 60, marginTop: 15 }]}>
                                        <Image source={require('../images/step2.png')} style={{ resizeMode: 'stretch', marginTop: 13 }} />
                                    </View>
                                </View>
                            </View>


                            <Text style={styles.deviceTitle} >裝置列表</Text>
                            <ScrollView style={styles.deviceList} >
                                {
                                    this.state.devices.map((device, index) => {
                                        const handlePress = () => this.state.mindwaveConnected ? this.handlePressDisconnectDevice() : this.handlePressConnectDevice(device);
                                        const message = `裝置 ${device.name || device.id} ${this.state.willConnect === device.id ? '[正在連結]' : this.state.mindwaveConnected === device.id ? '[已連結]' : ''}`
                                        return <TouchableOpacity key={index} style={styles.deviceItem} onPress={handlePress} >
                                            <Text style={styles.deviceItemTitle} >{message}</Text>
                                        </TouchableOpacity>
                                    })
                                }
                            </ScrollView>



                        </View>

                        {/*<View style={styles.contentView}>
                            <Text style={styles.mindwaveTitle}>即將為您偵測腦波</Text>
                            <View style={styles.mindwavePicView}>
                                <Image source={require('../images/Img_headset.png')} style={styles.mindwavePic} />
                            </View>
                            <Text style={styles.mindwaveText}>請開啟手機藍芽 與腦波耳機連線
                          {'\n             '}並請孩童帶妥耳機
                            </Text>
                                </View>*/}
                    </View>

                );
            }
            //等待poorsignal歸0畫面




            //結束畫面
            else if (this.state.endTestView) {
                let date = new Date().getFullYear() + '/' + new Date().getMonth() + '/' + new Date().getDay() + '  ' + new Date().getHours() + ':' + new Date().getMinutes()
                let date2 = new Date().toLocaleString('ko-KR')
                return (

                    <View style={styles.Viewstyle}>
                        <View style={styles.topbarView}>
                            <TouchableOpacity onPress={() => this.props.goBack()}>
                                <Text style={styles.topbarText}>結束</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.contentView2}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.endDate}>{date}</Text>
                                <Text style={styles.endScore}>{'     '}測量結果為 {parseInt(this.state.finalScore)} 分</Text>
                            </View>
                            {/*<Text style={[styles.endTitle, { marginTop: 32 }]}>選擇測量孩童</Text>
                            <View style={styles.chooseChildView}>
                                <TouchableOpacity onPress={() => this.props.goBack()}>

                                </TouchableOpacity>
                </View>*/}
                            <Text style={styles.endTitle2}>選擇孩童狀態</Text>
                            <View style={{ flexDirection: 'row', marginLeft: width / 11.25 / 2, marginTop: 16 }}>

                                <TouchableHighlight style={[styles.statusView, this.state.statusSelected === 1 ? { backgroundColor: 'rgba(255,255,255,0.25)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                                    onPress={() => {
                                        this.setState({
                                            statusSelected: 1,
                                            status: '運動前'
                                        })
                                    }} >
                                    <View>
                                        <Image source={require('../images/status1.png')} style={styles.statusImg} />
                                        <Text style={styles.statusText}>運動前</Text>
                                    </View>
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.statusView, this.state.statusSelected === 2 ? { backgroundColor: 'rgba(255,255,255,0.25)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                                    onPress={() => {
                                        this.setState({
                                            statusSelected: 2,
                                            status: '運動後'
                                        })
                                    }} >
                                    <View>
                                        <Image source={require('../images/status2.png')} style={styles.statusImg} />
                                        <Text style={styles.statusText}>運動後</Text>
                                    </View>
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.statusView, this.state.statusSelected === 3 ? { backgroundColor: 'rgba(255,255,255,0.25)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                                    onPress={() => {
                                        this.setState({
                                            statusSelected: 3,
                                            status: '吃飯前'
                                        })
                                    }} >
                                    <View>
                                        <Image source={require('../images/status3.png')} style={styles.statusImg} />
                                        <Text style={styles.statusText}>吃飯前</Text>
                                    </View>
                                </TouchableHighlight>

                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: width / 11.25 / 2, marginTop: 16 }}>

                                <TouchableHighlight style={[styles.statusView, this.state.statusSelected === 4 ? { backgroundColor: 'rgba(255,255,255,0.25)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                                    onPress={() => {
                                        this.setState({
                                            statusSelected: 4,
                                            status: '吃飯後'
                                        })
                                    }} >
                                    <View>
                                        <Image source={require('../images/status4.png')} style={styles.statusImg} />
                                        <Text style={styles.statusText}>吃飯後</Text>
                                    </View>
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.statusView, this.state.statusSelected === 5 ? { backgroundColor: 'rgba(255,255,255,0.25)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                                    onPress={() => {
                                        this.setState({
                                            statusSelected: 5,
                                            status: '睡覺前'
                                        })
                                    }} >
                                    <View>
                                        <Image source={require('../images/status5.png')} style={styles.statusImg} />
                                        <Text style={styles.statusText}>睡覺前</Text>
                                    </View>
                                </TouchableHighlight>

                                <TouchableHighlight style={[styles.statusView, this.state.statusSelected === 6 ? { backgroundColor: 'rgba(255,255,255,0.25)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                                    onPress={() => {
                                        this.setState({
                                            statusSelected: 6,
                                            status: '剛睡醒'
                                        })
                                    }} >
                                    <View>
                                        <Image source={require('../images/status6.png')} style={styles.statusImg} />
                                        <Text style={styles.statusText}>剛睡醒</Text>
                                    </View>
                                </TouchableHighlight>

                            </View>

                            <TouchableOpacity style={styles.finishButton} onPress={() => {
                                this.props.SaveMemoryPoint(this.props.login_account, this.props.login_token, this.state.cdName, this.state.finalScore, this.state.statusSelected);
                            }}>
                                <Text style={styles.finishButtonText}>完成</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                );
            }

            //等待按下開始遊戲畫面
            else if (this.state.PrestartTest) {
                return (

                    <View style={styles.Viewstyle}>
                        <View style={styles.topbarView}>
                            <TouchableOpacity onPress={() => this.props.goBack()}>
                                <Text style={styles.topbarText}>結束</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.contentView}>
                            <Text style={styles.poorsignalTitle}>準備好後 按下開始遊戲</Text>
                            <Image source={require('../images/img-step3.png')} style={{ width: 160, resizeMode: 'stretch', marginTop: 56 }} />

                            <Text style={[styles.poorsignalText, { marginTop: 56.7 }]}>請孩童在遊戲畫面中</Text>
                            <Text style={[styles.poorsignalText, { marginTop: -2 }]}>按下 開始遊戲 將會自動開始測量</Text>

                        </View>
                    </View>

                );
            }

            //測驗進行中畫面
            else if (this.state.startTest) {
                return (

                    <View style={styles.Viewstyle}>
                        <View style={styles.topbarView}>
                            <TouchableOpacity onPress={() => this.props.goBack()}>
                                <Text style={styles.topbarText}>結束</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.contentView}>
                            <Text style={styles.poorsignalTitle}>正在為您偵測腦波</Text>

                            <Image source={require('../images/Img_headset.png')} style={{ width: 120, resizeMode: 'contain', marginTop: 56, alignSelf: 'center' }} />

                            <Text style={[styles.poorsignalText, { marginTop: 80 }]}>請盡量避免頭部晃動以免訊號中斷</Text>

                        </View>
                    </View>

                );
            }

            //poorSignal畫面
            else if (!this.state.poorSignalChecked || !this.state.PrestartTest) {
                return (

                    <View style={styles.Viewstyle}>
                        <View style={styles.topbarView}>
                            <TouchableOpacity onPress={() => this.props.goBack()}>
                                <Text style={styles.topbarText}>結束</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.contentView}>
                            <Text style={styles.poorsignalTitle}>正在連接耳機...</Text>

                            <Text style={styles.poorsignal}>{this.props.poorSignal}</Text>
                            <View style={styles.poorsignalImageView}>
                                <Image source={require('../images/headset.png')} style={styles.poorsignalImage1} />
                                <View style={styles.poorsignalBorder}></View>
                                <Image source={require('../images/Shape.png')} style={styles.poorsignalImage2} />
                            </View>
                            <Text style={styles.poorsignalText}>{'                '}請調整腦波耳機位置{'\n'}
                                直到訊號值歸零 即可請孩童開始遊戲</Text>
                        </View>
                    </View>

                );
            }
        }
    }
}
const styles = StyleSheet.create({
    Viewstyle: {
        flex: 1,
        width: width,
        backgroundColor: '#144669',
    },
    menuIcon: {
        marginLeft: 18,
        width: 24,
        height: 24,
        marginTop: 16,
    },
    drawerTitle: {
        color: '#FFFFFF',
        width: 66,
        height: 24,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        marginTop: 14,
        marginLeft: 32,
    },
    topbarView: {
        flexDirection: 'row',
        width: width,
        backgroundColor: '#144669',
        height: 56,
    },
    topbarIcon: {
        marginLeft: 16,
        marginTop: 16,
    },
    topbarText: {
        marginTop: 16,
        marginLeft: width - 55,
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.5,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF',
    },
    contentView: {
        flex: 1,
        width: width,
        alignItems: 'center',
    },
    mindwaveTitle: {
        marginTop: 80,
        fontSize: 20,
        lineHeight: 28,
        fontFamily: 'Roboto-Regular',
        letterSpacing: 1,
        color: '#FFFFFF',
    },

    mindwavePic: {
        //marginTop: 2,

    },
    mindwaveSubtitle: {
        marginTop: 60,
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto-Light',
        letterSpacing: 0.3,
        color: '#FFFFFF',
    },
    defaultText: {
        opacity: 0.8,
        marginTop: 48,
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Roboto-Light',
        letterSpacing: 0.8,
        color: '#FFFFFF',
        alignSelf: 'center',
    },
    poorsignalTitle: {
        marginTop: 80,
        fontSize: 20,
        lineHeight: 28,
        fontFamily: 'Roboto-Regular',
        letterSpacing: 1,
        color: '#FFFFFF',
    },
    poorsignalText: {
        marginTop: 56,
        fontSize: 14,
        lineHeight: 18,
        fontFamily: 'Roboto-Light',
        letterSpacing: 0.8,
        color: '#FFFFFF',
        opacity: 0.8,
        alignSelf: 'center',
    },
    poorsignal: {
        marginTop: 56,
        fontSize: 48,
        lineHeight: 56,
        fontFamily: 'Roboto-Regular',
        letterSpacing: 3,
        color: '#FFFFFF',
    },
    poorsignalImageView: {
        width: width,
        flexDirection: 'row',
        marginTop: 4,
        height: 40,

    },
    poorsignalImage1: {
        marginLeft: width / 11.25,
        width: 48,
        height: 48,
        resizeMode: 'contain'
    },
    poorsignalImage2: {
        marginLeft: 18.4,
        width: 48,
        height: 48,
        resizeMode: 'contain'
    },
    poorsignalBorder: {
        width: width / 2,
        height: 2,
        borderStyle: 'dotted',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        marginLeft: 18,
        marginTop: 19,
    },
    contentView2: {
        flex: 1,
        width: width,
    },
    endTitle: {
        marginTop: 40,
        marginLeft: width / 11.25,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        letterSpacing: 0.7,
        color: '#FFFFFF',
    },
    chooseChildView: {
        width: 296,
        height: 48,
        marginTop: 16,
        marginLeft: width / 11.25,
        borderRadius: 100,
        backgroundColor: 'rgba(255,255,255,0.25)'
    },
    endTitle2: {
        marginTop: 32,
        marginLeft: width / 11.25,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        letterSpacing: 0.7,
        color: '#FFFFFF',
    },
    statusView: {
        marginLeft: width / 11.25 / 2,
        width: 88,
        height: 88,
        borderRadius: 4,
        elevation: 2,
    },
    statusImg: {
        marginLeft: 24,
        marginTop: 13,
        resizeMode: 'contain',
        width: 40,
        height: 40,
    },
    statusText: {
        marginTop: 8,
        fontSize: 12,
        fontFamily: 'Roboto-Medium',
        letterSpacing: 1,
        color: '#FFFFFF',
        marginLeft: 24,
    },
    finishButton: {
        marginLeft: width / 6,
        width: 240,
        height: 56,
        backgroundColor: '#009688',
        borderRadius: 100,
        elevation: 8,
        marginTop: 32,
        alignSelf:'center'
        
    },
    finishButtonText: {
        alignItems: 'center',
        marginTop: 16,
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        letterSpacing: 1.5,
        color: '#FFFFFF',
        lineHeight: 24,
        alignSelf: 'center',
    },
    View1: {
        marginTop: 62,
        alignItems: 'center',
        //opacity: 0.05,
        backgroundColor: 'rgba(255,255,255,0.05)',
        zIndex: 1,
        width: 216,
        height: 216,
        borderRadius: 100,
    },
    View2: {
        marginTop: 30,
        alignItems: 'center',

        backgroundColor: 'rgba(255,255,255,0.1)',
        zIndex: 2,
        width: 163.3,
        height: 163.3,
        borderRadius: 100,
    },
    View3: {
        marginTop: 25,
        alignItems: 'center',
        //opacity: 1,
        backgroundColor: 'rgba(255,255,255,0.15)',
        zIndex: 555,
        width: 112,
        height: 112,
        borderRadius: 100,
    },
    earphonePic: {
        //marginTop: 16,
        opacity: 1,
        alignItems: 'center',
        zIndex: 4,
        resizeMode: 'stretch',

    },
    endDate: {
        alignItems: 'center',
        marginTop: 8,
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        letterSpacing: 0.3,
        color: '#FFFFFF',
        lineHeight: 20,
        marginLeft: width / 6,
        opacity: 0.5,
    },
    endScore: {
        alignItems: 'center',
        marginTop: 8,
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        letterSpacing: 0.3,
        color: '#FFFFFF',
        lineHeight: 20,
        opacity: 0.9,
    },


    container: {
        flex: 1,
        backgroundColor: '#144669',
        alignItems: 'center',
    },
    block: {
        flex: 1,
        padding: 10,
    },
    ScanBtn: {
        elevation: 2,
        backgroundColor: '#009688',
        width: 272,
        height: 56,
        borderRadius: 100,
        shadowOffset: { width: 0.6, height: 8, },
        shadowColor: 'rgba(0,0,0,0.20)',
        shadowRadius: 8,
        shadowOpacity: 0,
        alignSelf: 'center',
        marginTop: 47,
    },
    ScanText: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 16,
        fontSize: 18,
        fontFamily: 'Roboto-Medium',
        letterSpacing: 1.5,
        color: '#FFFFFF',
        lineHeight: 24,
    },

    deviceList: {
        width: 360,
        height: 247,
        backgroundColor: 'rgba(216,216,216,0.00)',
        alignSelf: 'center',
        //alignItems: 'center',

    },
    deviceList: {
        width: 360,
        height: 247,
        backgroundColor: 'rgba(216,216,216,0.00)',
        alignSelf: 'center',
        //alignItems: 'center',
        marginLeft:width*0.27,

    },
    deviceItem: {
        width:width*0.86,
        //width:312,
        height:48,
        backgroundColor: 'rgba(255,255,255,0.75)',
        borderRadius: 4,
        marginTop: 4,
    },
    deviceItemTitle: {
        marginLeft: 24,
        marginTop: 13,
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
        letterSpacing: 0.5,
        color: '#FFFFFF',
        lineHeight: 22,
    },
    deviceTitle: {
        alignSelf: 'center',
        marginTop: 32,
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        letterSpacing: 0.8,
        color: 'rgba(255,255,255,0.8)',
        lineHeight: 18,
        
    }
});

export default Memory;
