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
    TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import MindWaveMobile from 'react-native-mindwave-mobile';

const mwm = new MindWaveMobile()
var { height, width } = Dimensions.get('window');
var counter = 0
const poorSingalTimerTimeMax = 5
class Memory extends Component {
    constructor(props) {
        super(props);
        this.state = {

            //確認裝置連接
            animating: true,
            deviceFound: false,
            mindwaveConnected: true,
            devices: [],
            mindwaveTimer: 0,
            //確認訊號值歸零
            poorSignalChecked: true,
            poorSingalTimer: poorSingalTimerTimeMax,

            //開始測驗（signalr）
            startTest: false,
            //結束測驗(signalr)
            endTest: false,
            //結束畫面顯示
            endTestView: true,

            //腦波數據
            delta: this.props.delta ? this.props.delta : null, delta_max: 0.00, delta_min: 0.00, delta_avg: 0.00, delta_sd: 0.00, deltaArray: [],
            highAlpha: this.props.highAlpha ? this.props.highAlpha : null, highAlpha_max: 0.00, highAlpha_min: 0.00, highAlpha_avg: 0.00, highAlpha_sd: 0.00, highAlphaArray: [],
            lowAplpha: this.props.lowAplpha ? this.props.lowAplpha : null, lowAplpha_max: 0.00, lowAplpha_min: 0.00, lowAplpha_avg: 0.00, lowAplpha_sd: 0.00, lowAplphaArray: [],
            theta: this.props.theta ? this.props.theta : null, theta_max: 0.00, theta_min: 0.00, theta_avg: 0.00, theta_sd: 0.00, thetaArray: [],
            lowBeta: this.props.lowBeta ? this.props.lowBeta : null, lowBeta_max: 0.00, lowBeta_min: 0.00, lowBeta_avg: 0.00, lowBeta_sd: 0.00, lowBetaArray: [],
            midGamma: this.props.midGamma ? this.props.midGamma : null, midGamma_max: 0.00, midGamma_min: 0.00, midGamma_avg: 0.00, midGamma_sd: 0.00, midGammaArray: [],
            highBeta: this.props.highBeta ? this.props.highBeta : null, highBeta_max: 0.00, highBeta_min: 0.00, highBeta_avg: 0.00, highBeta_sd: 0.00, highBetaArray: [],
            lowGamma: this.props.lowGamma ? this.props.lowGamma : null, lowGamma_max: 0.00, lowGamma_min: 0.00, lowGamma_avg: 0.00, lowGamma_sd: 0.00, lowGammaArray: [],
            poorSignal: this.props.poorSignal ? this.props.poorSignal : 0,
            meditation: 0,
            attention: 0,
        };
        console.log(this.state.imageArray)
    }
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
    _devicescan() {
        mwm.scan()
    }

    //裝置連線
    _deviceconnect() {
        console.log(this.state.devices);
        // console.log("Try To Connect To Device " + this.state.devices[0].id + "_" + this.state.devices[0].name)
        mwm.connect(this.state.devices[0].id)
        console.log("device connect");
        // mwm.connect("F9:52:15:36:8A:38");
    }

    //切斷裝置
    _devicedisconnect() {
        console.log("Stop Connect To Device ")
        mwm.disconnect()
    }

    //保持連線狀態但不接受腦波
    _removeAllListeners() {
        console.log("Remove All Listener")
        mwm.removeAllListeners()
    }

    componentWillUnmount() {
        clearTimeout(this.timerScan)
    }
    componentDidMount() {
        //每隔一秒掃描一次周圍裝置
        // this.timerScan = setInterval(
        //     () => {
        //         mwm.scan()
        //         console.log('scan');
        //     }, 1000)
        console.log('start scan');
        mwm.scan()
        mwm.onFoundDevice(device => {
            console.log('onFoundDevice');
            console.log(device)
            this.state.devices.push(device)
            // this.setState({
            //     deviceFound: true
            // });
            // clearTimeout(this.timerScan)
            // this._deviceconnect()
            console.log('connect ', device.mfgId);
            mwm.connect(this.state.devices[0].mfgId);
        })
        mwm.onConnect(state => {
            console.log('mwm.onConnect');
            console.log(state);
            if (!state.success) {
                console.log('connect fail');
                setTimeout(() => {
                    console.log('reconnect ' + this.state.devices[0].mfgId);
                    mwm.connect(this.state.devices[0].mfgId);
                }, 500);
                return;
            }
            if (!this.state.mindwaveConnected && this.state.deviceFound) {
                console.log(state.success === true ? "Connect Success" : "Connect Failed")
                //讓畫面至少停留在腦波連線中3秒
                var checkMindWaveConnectionDelayTimer = 0
                this.timer = setInterval(
                    () => {
                        checkMindWaveConnectionDelayTimer++
                        console.log('CheckConnectionDelay : ' + checkMindWaveConnectionDelayTimer)
                        //3秒後設定腦波連線狀態為已連線（畫面跳至poorsignal畫面）
                        if (checkMindWaveConnectionDelayTimer == 3) {
                            clearTimeout(this.timer)
                            this.setState({
                                mindwaveConnected: true,
                            });
                        }
                    }, 1000)
                //var quizFunction = this.props.quizFunction
            }
        })
        mwm.onDisconnect(state => {
            console.log('onDisconnect');
            console.log(state);
            if (!this.state.mindwaveConnected) {
                this.setState({
                    mindwaveConnected: false
                });
            }
            console.log(state.success = true ? "Disconnect Success" : "Disconnect Faild")
        })

        //以下三個為接收腦波的function
        mwm.onEEGPowerDelta(data => {
            console.log('onEEGPowerDelta');
            console.log(data);
            this.setState({
                mindwaveTimer: this.state.mindwaveTimer + 1
            })
            this.props.onEEGPowerDelta(data, this.state.mindwaveTimer)
        })
        mwm.onEEGPowerLowBeta(data => {
            console.log('onEEGPowerLowBeta');
            console.log(data);
            this.props.onEEGPowerLowBeta(data)
        })
        mwm.onESense(data => {
            console.log('onESense');
            console.log(data);
            this.props.onESense(data)
        })
    }
    componentWillReceiveProps(nextProps) {
        //耳機訊號傳回時間（為了讓以上三個function稍微同步）
        const { mindwaveTimer: previous_mindwaveTimer } = this.props;
        const { mindwaveTimer } = nextProps;

        //檢查訊號值正常（poorsignal為0）
        const { poorSignal } = nextProps;
        console.log('poorSignal', poorSignal);
        if (poorSignal == 0 && !this.state.poorSignalChecked && mindwaveTimer != previous_mindwaveTimer && this.state.mindwaveConnected) {
            //counter累加
            counter++
            //顯示倒數
            timeCounterMinus = poorSingalTimerTimeMax - counter
            this.setState({
                poorSingalTimer: timeCounterMinus
            })
            //當counter==5（需維持5秒的poorsignal=0 poorsignalchecked才會通過）
            if (counter == poorSingalTimerTimeMax) {
                this.setState({
                    poorSignalChecked: true,
                }, function () {
                    this.setState({
                        poorSingalTimer: poorSingalTimerTimeMax
                    })
                    poorSingalTimer = 0
                    timeCounterMinus = 0
                })
            }
            console.log('Counter ' + counter)
        }

        //訊號不正常（poorsignal不為0）
        if (poorSignal != 0 && !this.state.checkPoorSignal && mindwaveTimer != previous_mindwaveTimer && this.state.mindwaveConnected) {
            counter = 0
            console.log('PoorSignal Is Not 0')
            this.setState({
                poorSingalTimer: poorSingalTimerTimeMax
            })
        }

        //取得signalr傳回訊息開始遊戲
        // if(){
        // this.setState({
        //     startTest: true
        // })
        // }

        //結果回傳並跳頁
        // const { quizResultData: previous_quizResultData } = this.props;
        // const { quizResultData } = nextProps;
        // if (previous_quizResultData != quizResultData) {
        //     if (quizResultData) {
        //         Actions.quizresult({ quizResultData, type: 'replace' })
        //     }
        // }


        //腦波運算與收集
        //const { quizPointArray } = nextProps;
        if (previous_mindwaveTimer != mindwaveTimer && this.state.startTest) {
            if (poorSignal == 0) {
                console.log(nextProps.poorSignal)
                this.setState({
                    poorSignal: nextProps.poorSignal,
                })
                this.setState({
                    timerCounter: this.state.timerCounter + 1,
                })

                //將訊號push進訊號陣列
                this.state.deltaArray.push(nextProps.delta)
                this.state.highAlphaArray.push(nextProps.highAlpha)
                this.state.lowAplphaArray.push(nextProps.lowAplpha)
                this.state.thetaArray.push(nextProps.theta)
                this.state.lowBetaArray.push(nextProps.lowBeta)
                this.state.midGammaArray.push(nextProps.midGamma)
                this.state.highBetaArray.push(nextProps.highBeta)
                this.state.lowGammaArray.push(nextProps.lowGamma)
                // console.log({
                //     delta: nextProps.delta, highAlpha: nextProps.highAlpha, lowAplpha: nextProps.lowAplpha, theta: nextProps.theta,
                //     lowBeta: nextProps.lowBeta, midGamma: nextProps.midGamma, highBeta: nextProps.highBeta, lowGamma: nextProps.lowGamma
                // })
                console.log('訊號正常每秒跳一次，目前數值：' + this.state.timerCounter)
            } else {
                this.setState({
                    poorSignal: nextProps.poorSignal,
                })
                console.log('訊號不正常，請調整腦波耳機穿戴位置')
            }

            //每收集到4秒的腦波則計算一次腦波
            if (this.state.timerCounter % this.state.time == 0 && this.state.timerCounter != 0 && this.props.poorSignal == 0) {
                this.setState({
                    delta_max: this._getMax(this.state.deltaArray[0], this.state.deltaArray[1], this.state.deltaArray[2], this.state.deltaArray[3]),
                    delta_min: this._getMin(this.state.deltaArray[0], this.state.deltaArray[1], this.state.deltaArray[2], this.state.deltaArray[3]),
                    delta_sd: this._getSD(this.state.deltaArray[0], this.state.deltaArray[1], this.state.deltaArray[2], this.state.deltaArray[3]),
                    delta_avg: this._getAvg(this.state.deltaArray[0], this.state.deltaArray[1], this.state.deltaArray[2], this.state.deltaArray[3]),
                    highAlpha_max: this._getMax(this.state.highAlphaArray[0], this.state.highAlphaArray[1], this.state.highAlphaArray[2], this.state.highAlphaArray[3]),
                    highAlpha_min: this._getMin(this.state.highAlphaArray[0], this.state.highAlphaArray[1], this.state.highAlphaArray[2], this.state.highAlphaArray[3]),
                    highAlpha_sd: this._getSD(this.state.highAlphaArray[0], this.state.highAlphaArray[1], this.state.highAlphaArray[2], this.state.highAlphaArray[3]),
                    highAlpha_avg: this._getAvg(this.state.highAlphaArray[0], this.state.highAlphaArray[1], this.state.highAlphaArray[2], this.state.highAlphaArray[3]),
                    lowAplpha_max: this._getMax(this.state.lowAplphaArray[0], this.state.lowAplphaArray[1], this.state.lowAplphaArray[2], this.state.lowAplphaArray[3]),
                    lowAplpha_min: this._getMin(this.state.lowAplphaArray[0], this.state.lowAplphaArray[1], this.state.lowAplphaArray[2], this.state.lowAplphaArray[3]),
                    lowAplpha_sd: this._getSD(this.state.lowAplphaArray[0], this.state.lowAplphaArray[1], this.state.lowAplphaArray[2], this.state.lowAplphaArray[3]),
                    lowAplpha_avg: this._getAvg(this.state.lowAplphaArray[0], this.state.lowAplphaArray[1], this.state.lowAplphaArray[2], this.state.lowAplphaArray[3]),
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
                        "lowAlphaBig": this.state.lowAplpha_max, "lowAlphaSmall": this.state.lowAplpha_min, "lowAlphaAverage": this.state.lowAplpha_avg, "lowAlphaSD": this.state.lowAplpha_sd,
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
                        "lowAlphaBig": this.state.lowAplpha_max, "lowAlphaSmall": this.state.lowAplpha_min, "lowAlphaAverage": this.state.lowAplpha_avg, "lowAlphaSD": this.state.lowAplpha_sd,
                        "highAlphaBig": this.state.highAlpha_max, "highAlphaSmall": this.state.highAlpha_min, "highAlphaAverage": this.state.highAlpha_avg, "highAlphaSD": this.state.highAlpha_sd,
                        "lowBetaBig": this.state.lowBeta_max, "lowBetaSmall": this.state.lowBeta_min, "lowBetaAverage": this.state.lowBeta_avg, "lowBetaSD": this.state.lowBeta_sd,
                        "highBetaBig": this.state.highBeta_max, "highBetaSmall": this.state.highBeta_min, "highBetaAverage": this.state.highBeta_avg, "highBetaSD": this.state.highBeta_sd,
                        "lowGammaBig": this.state.lowGamma_max, "lowGammaSmall": this.state.lowGamma_min, "lowGammaAverage": this.state.lowGamma_avg, "lowGammaSD": this.state.lowGamma_sd,
                        "midGammaBig": this.state.midGamma_max, "midGammaSmall": this.state.midGamma_min, "midGammaAverage": this.state.midGamma_avg, "midGammaSD": this.state.midGamma_sd
                    }
                        , this.props.login_account, this.props.child_account);
                })

                //清空訊號收集陣列
                this.setState({
                    deltaArray: [],
                    highAlphaArray: [],
                    lowAplphaArray: [],
                    thetaArray: [],
                    lowBetaArray: [],
                    midGammaArray: [],
                    highBetaArray: [],
                    lowGammaArray: [],
                })

                //遊戲結束
                if (this.state.endTest) {
                    //移除腦波耳機連線
                    this._devicedisconnect()
                    this._removeAllListeners()
                    //顯示結束畫面
                    this.setState({ startTest: false })
                    this.setState({ endTestView: true })
                }

            }
        }
    }
    render() {
        {
            //腦波耳機連線中畫面
            if (!this.state.mindwaveConnected) {
                return (
                    <View style={styles.Viewstyle}>
                        <View style={styles.topbarView}>
                            <TouchableOpacity onPress={() => { this.props.BackButton(); }}>
                                <Image source={require('../images/menu.png')} style={styles.topbarIcon} />
                            </TouchableOpacity>
                            <Text style={styles.topbarText}>測量腦波</Text>

                        </View>

                        <View style={styles.contentView}>
                            <Text style={styles.mindwaveTitle}>腦波耳機連線中...</Text>
                            <View style={styles.mindwavePicView}>
                                <Image source={require('../images/Img_headset.png')} style={styles.mindwavePic} />
                            </View>
                            <Text style={styles.mindwaveSubtitle}>還沒開始？</Text>
                            <Text style={styles.mindwaveText}>請開啟手機藍牙與腦波耳機連線
                          {'\n             '}並戴妥腦波耳機
                            </Text>
                        </View>
                    </View>
                );
            }
            //等待poorsignal歸0畫面
            else if (!this.state.poorSignalChecked) {
                return (
                    <View style={styles.Viewstyle}>
                        <View style={styles.topbarView}>
                            <TouchableOpacity onPress={() => { this.props.BackButton(); }}>
                                <Image source={require('../images/menu.png')} style={styles.topbarIcon} />
                            </TouchableOpacity>
                            <Text style={styles.topbarText}>測量腦波</Text>

                        </View>

                        <View style={styles.contentView}>
                            <Text style={styles.poorsignalTitle}>腦波偵測中...</Text>
                            <Text style={styles.poorsignalText}>請調整腦波耳機位置  直到訊號值歸零</Text>
                            <Text style={styles.poorsignal}>{this.props.poorSignal}</Text>
                            <View style={styles.poorsignalImageView}>
                                <Image source={require('../images/Shape.png')} style={styles.poorsignalImage1} />
                                <View style={styles.poorsignalBorder}></View>
                                <Image source={require('../images/Shape.png')} style={styles.poorsignalImage2} />
                            </View>
                        </View>
                    </View>
                );
            }

            //測驗進行中畫面
            else if (this.state.startTest) {
                return (
                    <View style={styles.Viewstyle}>
                        <View style={styles.topbarView}>
                            <TouchableOpacity onPress={() => { this.props.BackButton(); }}>
                                <Image source={require('../images/menu.png')} style={styles.topbarIcon} />
                            </TouchableOpacity>
                            <Text style={styles.topbarText}>測量腦波</Text>

                        </View>

                        <View style={styles.contentView}>
                            <Text style={styles.poorsignalTitle}>遊戲進行中...</Text>
                            <Text style={styles.poorsignalText}>請盡量避免頭部晃動  並保持訊號值歸零</Text>
                            <Text style={styles.poorsignal}>{this.props.poorSignal}</Text>
                            <View style={styles.poorsignalImageView}>
                                <Image source={require('../images/Shape.png')} style={styles.poorsignalImage1} />
                                <View style={styles.poorsignalBorder}></View>
                                <Image source={require('../images/Shape.png')} style={styles.poorsignalImage2} />
                            </View>
                        </View>
                    </View>
                );
            }

            //結束畫面
            else if (this.state.endTestView) {
                return (
                    <View style={styles.Viewstyle}>
                        <View style={styles.topbarView}>
                            <TouchableOpacity onPress={() => { this.props.BackButton(); }}>
                                <Image source={require('../images/menu.png')} style={styles.topbarIcon} />
                            </TouchableOpacity>
                            <Text style={styles.topbarText}>測量腦波</Text>
                        </View>
                        <View style={styles.contentView2}>
                            <Text style={styles.endTitle}>選擇測量孩童</Text>
                            <View style={styles.chooseChildView}></View>
                            <Text style={styles.endTitle2}>選擇孩童狀態</Text>
                            <View style={{ flexDirection: 'row', marginLeft: width / 11.25 / 2 ,marginTop:16}}>
                                <View style={styles.statusView}>
                                </View>
                            </View>
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
        marginTop: 14,
        marginLeft: 32,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        letterSpacing: 16,
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
        letterSpacing: 16,
        color: '#FFFFFF',
    },
    mindwavePicView: {
        marginTop: 32,
        width: 168,
        height: 168,
        borderRadius: 100,
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
    mindwaveText: {
        opacity: 0.8,
        marginTop: 8,
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Roboto-Light',
        letterSpacing: 0.5,
        color: '#FFFFFF',
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
        marginTop: 15,
        fontSize: 12,
        lineHeight: 16,
        fontFamily: 'Roboto-Light',
        letterSpacing: 0.6,
        color: '#FFFFFF',
        opacity: 0.8,
    },
    poorsignal: {
        marginTop: 51,
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
        flex: 1,
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
        width:296,
        height:48,
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
        width:88,
        height:88,
        borderRadius:4,
        elevation:3,
    }
});

export default Memory;
