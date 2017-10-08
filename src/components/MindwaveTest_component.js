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
            mindwaveConnected: false,
            devices: [],
            mindwaveTimer: 0,
            //確認訊號值歸零
            poorSignalChecked: false,
            poorSingalTimer: poorSingalTimerTimeMax,

            //開始測驗（signalr）
            startTest: false,
            //結束測驗(signalr)
            endTest: false,
            //結束畫面顯示
            endTestView:false,

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
        // console.log("Try To Connect To Device " + this.state.devices[0].id + "_" + this.state.devices[0].name)
        // mwm.connect(this.state.devices[0].id)
        console.log("device connect");
        mwm.connect("A0:E6:F8:F7:B7:3B");
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
        this.timerScan = setInterval(
            () => {
                mwm.scan()
                console.log('scan');
            }, 1000)
        mwm.onFoundDevice(device => {
            console.log('onFoundDevice');
            console.log(device)
            this.state.devices.push(device)
            this.setState({
                deviceFound: true
            });
            clearTimeout(this.timerScan)
            this._deviceconnect()
        })
        mwm.onConnect(state => {
            console.log('mwm.onConnect');
            console.log(state);
            if (!this.state.mindwaveConnected && this.state.deviceFound) {
                console.log(state.success = true ? "Connect Success" : "Connect Failed")
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
        this._deviceconnect();
    }
    componentWillReceiveProps(nextProps) {
        //耳機訊號傳回時間（為了讓以上三個function稍微同步）
        const { mindwaveTimer: previous_mindwaveTimer } = this.props;
        const { mindwaveTimer } = nextProps;

        //檢查訊號值正常（poorsignal為0）
        const { poorSignal } = nextProps;
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
                    this.setState({startTest:false})
                    this.setState({endTestView:true})
                }

            }
        }
    }
    render() {
        {
            //腦波耳機連線中畫面
            if (!this.state.mindwaveConnected) {
                return (
                    <View style={styles.bigView}>
                     
                        <View style={styles.contentView}>
                            <View>
                                <ActivityIndicator
                                    animating={this.state.animating}
                                    style={[styles.centering, { height: 30 }]}
                                    size="large" />
                            </View>
                            <View style={styles.checkMindWaveTextView}>
                                <Text style={styles.checkMindWaveText}>
                                    腦波耳機連線中
                            </Text>
                                <Text style={styles.checkMindWaveText}>
                                    請稍候
                            </Text>
                            </View>
                        </View>
                    </View>
                );
            }
            //等待poorsignal歸0畫面
            else if (!this.state.poorSignalChecked) {
                return (
                    <View style={styles.bigView}>
                       
                        <View style={styles.contentView}>
                            <View>
                                <Text style={styles.poorSignalText}>{this.props.poorSignal}</Text>
                            </View>
                            <View>
                                <ActivityIndicator
                                    animating={this.state.animating}
                                    style={[styles.centering, { height: 80 }]}
                                    size="large"
                                />
                            </View>
                            <View style={styles.poorSignalTextView}>
                                <Text style={styles.checkPoorSignalText}>
                                    請調整腦波耳機位置
                            </Text>
                                <Text style={styles.checkPoorSignalText}>
                                    直到訊號值歸零
                            </Text>
                            
                                <View>
                                    {
                                        this.props.poorSignal == 0 ? <Text style={styles.checkPoorSignalTimerMessage}>倒數{this.state.poorSingalTimer}秒</Text> : null
                                    }
                                </View>
                                <View>
                                {
                                    this.state.poorSingalTimer == 0 ? <Text>請點擊遊戲畫面中的開始遊戲</Text> : null
                                }
                            </View>
                            </View>
                        </View>
                    </View>
                );
            }

            //測驗進行中畫面
            else if (this.state.startTest) {
                return (
                    <View style={styles.bigView}>
                        
                        <View style={styles.contentView}>
                            <View style={styles.startQuizTextView}>
                                <Text style={styles.startQuizTextMessage}>
                                    測驗進行中...
                                    請盡量避免頭部晃動
                            </Text>
                            </View>
                        </View>

                    </View>
                );
            }

            //結束畫面
            else if(this.state.endTestView) {
                return (
                    <View style={styles.quizBigView}>
                       <Text>測驗結束</Text>
                       <Text>本次記憶力指數為</Text>
                    </View>
                );
            }
        }
    }
}
const styles = StyleSheet.create({
    bigView: {
        flex: 1,
        justifyContent: 'center',
        width: width,
    },
    quizBigView: {
        flex: 1,
        alignItems: 'center',
        width: width,
        backgroundColor: 'rgba(52,52,52,0.7)'
    },
    topView: {
        alignItems: 'center',
        width: width,
    },
    contentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
    },
    //檢查腦波裝置連接
    checkMindWaveTextView: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkMindWaveText: {
        fontSize: 25,
        backgroundColor: 'rgba(52, 52, 52, 0)',
        fontFamily: 'Euphemia UCAS',
    },
    //檢查訊號值是否正常
    poorSignalText: {
        fontSize: 80,
        backgroundColor: 'rgba(52, 52, 52, 0)',
        fontFamily: 'Euphemia UCAS',
    },
    poorSignalTextView: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkPoorSignalText: {
        fontSize: 25,
        backgroundColor: 'rgba(52, 52, 52, 0)',
        fontFamily: 'Euphemia UCAS',
    },
    checkPoorSignalTimerMessage: {
        fontSize: 30,
        backgroundColor: 'rgba(52, 52, 52, 0)',
        fontFamily: 'Euphemia UCAS',
    },
    //開始測驗頁面
    startQuizButton: {
        width: width * 0.5,
        height: width * 0.5,
        justifyContent: 'center',
        marginBottom: height * 0.05,
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    startQuizButtonText: {
        fontSize: 30,
        backgroundColor: 'rgba(52, 52, 52, 0)',
        color: 'white',
        fontFamily: 'Euphemia UCAS',
    },
    startQuizTextView: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    startQuizMessage: {
        fontSize: 25,
        backgroundColor: 'rgba(52, 52, 52, 0)',
        color: 'rgba(250, 0, 0, 1)',
        fontFamily: 'Euphemia UCAS',
    },
    //
    titleView: {
        width: width,
        alignItems: 'center',
        marginTop: height * 0.05,
        flex: 1,
    },
    headerView: {
        width: width,
        height: height * 0.06,
        marginTop: height * 0.04,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 0,
    },
    headerLeftView: {
        width: width * 0.65,
        height: height * 0.06,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    headerLeftViewHide: {
        width: width * 0.65,
        height: height * 0.06,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)',
        opacity: 0
    },
    headerRightView: {
        width: width * 0.225,
        height: height * 0.06,
        marginRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.3)',
    },
    imageView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: width * 0.9,
        height: height * 0.65,
        flex: 0,
        // borderColor: 'rgba(255,255,255,0.5)',
        // borderWidth: 5,
    },
    image: {
        resizeMode: Image.resizeMode.contain,
        // width: width * 0.87,
        // height: height * 0.65,
        width: width * 0.95,
        height: height * 0.65,
    },
    footerView: {
        marginTop: 20,
        marginBottom: 20,
        width: width * 0.9,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0,
    },
    imageNumberView: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        width: width * 0.14,
        height: height * 0.07,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0,
    },
    titleText: {
        fontSize: 25,
        color: 'white'
    },
    headerLeftText: {
        fontSize: 18,
        color: 'white'
    },
    headerRightText: {
        fontSize: 25,
        color: 'white'
    },
    imageNumberText: {
        fontSize: 25,
        color: 'white'
    }
});

export default Memory;
