import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    processColor,
    Dimensions
} from 'react-native';
import Svg, {
    Line,
} from 'react-native-svg';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import ActionButton from 'react-native-action-button';
import Drawer from 'react-native-drawer';
import SideBarContent from '../containers/SideBarContent';
import { BarChart } from 'react-native-charts-wrapper';
var { height, width } = Dimensions.get('window');
class Memory extends Component {
    constructor(props) {
        super(props);
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
        this.state = {
            scene: 'home',
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
                drawGridLines: false,
                // drawAxisLine: false,
                gridDashedLine: { spaceLength: 10 }
            },
            yline:
            {
                left: {
                    textColor: processColor('#B4DAE5'), textSize: 10,
                    drawAxisLine: false,
                    gridDashedLine: {
                        lineLength: 10,
                        spaceLength: 8
                    },
                },
                right: { drawLabels: false, drawAxisLine: false },


            },
        }
    }

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    kidlist(options) {
        if (options === 0) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                // bottom: 10,
                marginLeft: 15,
                marginTop: 10,
                backgroundColor: '#9ACBD9'
            }
        }
        else if (options === 1) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                // bottom: 10,
                marginLeft: 15,
                marginTop: 10,
                backgroundColor: '#F5808B'
            }
        }
        else if (options === 2) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                // bottom: 10,
                marginLeft: 15,
                marginTop: 10,
                backgroundColor: '#F2992E'
            }
        }
        else if (options === 3) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                // bottom: 10,
                marginLeft: 15,
                marginTop: 10,
                backgroundColor: '#2F9A9E'
            }
        }
        else if (options === 4) {
            return {
                width: 40,
                height: 40,
                borderRadius: 50,
                // bottom: 10,
                marginLeft: 15,
                marginTop: 10,
                backgroundColor: '#A77DC2'
            }
        }
    }
    timeercut(str) {
        let strlength = str.length;
        let newstr = "";
        newstr = str.substring(0, 10).replace("-", "/").replace("-", "/");
        return newstr;
    }
    statusnum(str) {
        if (str != null) {
            switch (str) {
                case "運動前":
                    return 0;
                case "運動後":
                    return 1;
                case "吃飯前":
                    return 2;
                case "吃飯後":
                    return 3;
                case "睡覺前":
                    return 4;
                case "剛睡醒":
                    return 5;
            }

        }
    }
    statusname(str, value, array) {

        array[this.statusnum(str)] = value;
        return array

    }
    differcut(num) {
        let newnum = (-num * 2) + num
        return newnum
    }
    mutifunction(){
        this.props.GetCdNewScoreRecord(this.props.login_account,this.props.login_token);
        this.props.GetSetAvgCdEventStatusScore(this.props.login_account,this.props.login_token);
    }
    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 0 }
        }
        let colorarr = ['#9ACBD9', '#F5808B', '#F2992E', '#2F9A9E', '#A77DC2'];
        let array = [0, 0, 0, 0, 0, 0];
        let finalarrdata = [];
        let finalarrname = [];
        let data = [];
        let c = 0;
        let final_data = {}
        if (this.props.login_account != null || this.props.login_account != "" ||this.props.login_account != undefined) {
            let chartpre = this.props.AvgCdEventStatusScore;

            for (let j = 0; j < chartpre.length; j++) {
                if (chartpre.length === 1) {
                    finalarrdata.push(
                        {
                            values: chartpre[0].Status,
                            label: chartpre[0].CdName,
                            config: {
                                drawValues: false,
                                colors: [processColor(colorarr[0])],
                            }
                        }
                    )
                    finalarrdata.push(
                        {
                            values: [0, 0, 0, 0, 0, 0],
                            label: '',
                            config: {
                                drawValues: false,
                                colors: [processColor(colorarr[1])],
                            }
                        }
                    )

                    // this.setState({ chartaft: finalarrdata })
                    console.log("finalarrdata", finalarrdata)
                    c++;
                }
                else {
                    finalarrdata.push(
                        {
                            values: chartpre[j].Status,
                            label: chartpre[j].CdName,
                            config: {
                                drawValues: false,
                                colors: [processColor(colorarr[c])],
                            }
                        }
                    )
                    // this.setState({ chartaft: finalarrdata })
                    console.log("finalarrdata", finalarrdata)
                    c++;
                }
                console.log("final_data", final_data)


            }


            // final_data = {
            //     dataSets: finalarrdata,
            //     config: {
            //         barWidth: 0.2,//5個小孩0.1
            //         group: {
            //             fromX: 0,
            //             groupSpace: 0.4,//5個小孩0.5
            //             barSpace: 0,
            //         }
            //     }
            // }

        }

        let CdNewScoreaft = [];

        if (this.props.login_account != null || this.props.login_account != "") {
            console.log("newrecord", this.props.CdNewScoreRecordData)
            if (this.props.CdNewScoreRecordData != null || this.props.CdNewScoreRecordData != "") {
                CdNewScorepre = this.props.CdNewScoreRecordData;

                let updownarr = [];
                for (let i = 0; i < CdNewScorepre.length; i++) {
                    let imgurl = 'https://www.meracle.me/home/Filefolder/' + CdNewScorepre[i].Imageurl;
                    if (CdNewScorepre[i].DifferScore > 0) {
                        updownarr.push(
                            <View style={styles.besttimeview}>
                                <Image source={require('../images/triangle/up.png')} ></Image>
                                <Text style={styles.besttimevalue}>{CdNewScorepre[i].DifferScore}</Text>
                            </View>

                        )
                    }
                    else if (CdNewScorepre[i].DifferScore < 0) {
                        updownarr.push(
                            <View style={styles.besttimeview}>
                                <Image source={require('../images/triangle/down.png')} ></Image>
                                <Text style={styles.besttimevalue}>{this.differcut(CdNewScorepre[i].DifferScore)}</Text>
                            </View>

                        )
                    }
                    else if (CdNewScorepre[i].DifferScore === 0) {
                        updownarr.push(
                            <View />
                        )
                    }
                    // if (CdNewScorepre[i].Imageurl === "DefaultImg.png" || CdNewScorepre[i].Imageurl == null) {
                    CdNewScoreaft.push(
                        <TouchableOpacity onPress={() => {
                            this.props.GetChildNameBGcolor(this.props.login_account, CdNewScorepre[i].CdName, colorarr[i], this.props.login_token)
                            this.props.GetSetChildBestStatus(this.props.login_account, CdNewScorepre[i].CdName, this.props.login_token)
                            this.props.GetSetCdDayOfBestScoreByTimer(this.props.login_account, CdNewScorepre[i].CdName, this.props.login_token)
                        }}>
                            <View style={styles.cardsize}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={{ flexDirection: 'column', }}>
                                        <View style={this.kidlist(i)}>
                                            <Image source={require('../images/avatar_boy.png')} style={{ marginTop: 4, marginLeft: 2 }}></Image>
                                        </View>
                                        <Text style={styles.kidcardname}>{CdNewScorepre[i].CdName}</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                                        <Svg
                                            height="80"
                                            width="10"
                                        >
                                            <Line
                                                x1="0"
                                                y1="0"
                                                x2="0"
                                                y2="100"
                                                stroke='rgba(109,112,132,0.1)'
                                                strokeWidth="2"
                                            />
                                        </Svg>
                                        <View style={{ flexDirection: 'row', marginTop: -65, marginLeft: 20, width: 190 }} >
                                            <Text style={styles.newwave}>最新分數：</Text>
                                            <Text style={styles.newwavevalue}>{CdNewScorepre[i].Score}</Text>
                                            {
                                                updownarr[i]
                                            }
                                        </View>
                                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                            <Text style={styles.datetime}>{this.timeercut(CdNewScorepre[i].CreateTime)}</Text>
                                            <Text style={styles.statuesvalue}>{CdNewScorepre[i].StatusName}</Text>
                                        </View>
                                    </View>
                                    <Image source={require('../images/arrow_gray.png')} style={{ marginTop: 25 }}></Image>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )

                }
                console.log("CdNewScoreaft", CdNewScoreaft)
            }
        }
        return (
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
                <View style={styles.Viewstyle}>

                    <View style={styles.parentView}>

                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity onPress={this.openControlPanel} style={styles.menuIcon}>
                                <Image source={require('../images/menu.png')} ></Image>
                            </TouchableOpacity>
                            <Text style={styles.title}>腦波測量結果</Text>
                            <TouchableOpacity style={styles.settingIcon} onPress={this.mutifunction.bind(this)}>
                                <Image source={require('../images/reload.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.parentInfoView}>
                        <View style={styles.conView}>
                            <View>
                                <Text style={styles.toptext}>個人平均狀態記憶力</Text>
                            </View>
                            <BarChart
                                style={styles.chart}
                                data={{
                                    dataSets: finalarrdata,
                                    config: {
                                        barWidth: 0.1,//5個小孩0.1
                                        group: {
                                            fromX: 0,
                                            groupSpace: 0.5,//5個小孩0.5
                                            barSpace: 0,
                                        }
                                    }
                                }}
                                drawValueAboveBar={false}
                                drawBarShadow={false}
                                yAxis={this.state.yline}
                                xAxis={this.state.xline}
                                legend={this.state.legend}
                                chartDescription={{
                                    text: '',
                                    textColor: processColor('#999'),
                                    textSize: 12,
                                    fontFamily: '微软雅黑'
                                }}
                            />
                        </View>

                        <View style={styles.statueView}>

                            <View>
                                <Image style={styles.statueimgfirst} source={require('../images/status1.png')} />
                                <Text style={styles.statuetxtfirst}>運動前</Text>
                            </View>
                            <View>
                                <Image style={styles.statueimgafter} source={require('../images/status2.png')} />
                                <Text style={styles.statuetxt}>運動後</Text>
                            </View>
                            <View>
                                <Image style={styles.statueimgafter} source={require('../images/status3.png')} />
                                <Text style={styles.statuetxt}>吃飯前</Text>
                            </View>
                            <View>
                                <Image style={styles.statueimgafter} source={require('../images/status4.png')} />
                                <Text style={styles.statuetxt}>吃飯後</Text>
                            </View>
                            <View>
                                <Image style={styles.statueimgafter} source={require('../images/status5.png')} />
                                <Text style={styles.statuetxt}>睡覺前</Text>
                            </View>
                            <View>
                                <Image style={styles.statueimgafter} source={require('../images/status6.png')} />
                                <Text style={styles.statuetxt}>剛睡醒</Text>
                            </View>
                        </View>
                        {
                            // <View>
                            //  <Image  source={require('../images/arrow.png')} />
                            // </View>
                        }
                    </View>

                    <View style={styles.childView}>
                        <ScrollView>
                            <View>

                                <View style={{ marginTop: 5 }}>
                                    <View style={{ marginTop: 5 }}></View>
                                    {
                                        CdNewScoreaft
                                    }
                                    <View style={{ marginBottom: 12 }}></View>
                                </View>

                            </View>
                        </ScrollView>
                    </View>


                </View>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    parentView: {
        width: '100%',
        height: 50,
        backgroundColor: '#144669',
    },
    statueView: {
        width: 350,
        marginTop: -13,
        backgroundColor: '#144669',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    statueimgfirst: {
        marginLeft: 0.072 * width,
    },
    statueimgafter: {
        marginLeft: 0.03* width,
    },
    statuetxtfirst: {
        marginLeft: 0.089 * width,
        fontSize: 9,
        backgroundColor: "transparent",
        color: 'rgba(255,255,255,0.8)'
    },
    statuetxt: {
        marginLeft: 0.057 * width,
        fontSize: 9,
        backgroundColor: "transparent",
        color: 'rgba(255,255,255,0.8)'
    },
    chart: {
        width: '100%',
        height: 150,
        // backgroundColor: 'rgba(221, 221, 255, 0.5)',

    },
    toptext: {
        color: 'rgb(255,255,255)',
        fontSize: 14,

    },
    parentInfoView: {

        flexDirection: 'column',
        width: '100%',
        height: 0.5 * height,
        backgroundColor: '#144669',
        // marginTop: 16,
        // alignItems: "stretch",
    },
    conView: {
        marginTop: 35,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuIcon: {
        marginLeft: 18,
        width: 24,
        height: 24,
        marginTop: 16,
    },
    title: {
        color: '#FFFFFF',
        width: 99,
        height: 24,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        marginTop: 14,
        marginLeft: 32,
    },
    settingIcon: {
        width: 24,
        height: 24,
        marginLeft: width - 210,
        marginTop: 16,
    },
    childView: {
        width: '100%',
        height: 0.52 * width,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
    },
    newwave: {
        marginTop: 5,
        marginLeft: 10,
        fontFamily: 'Roboto-Light',
        fontSize: 14,
        color: '#555555',
    },
    newwavevalue: {
        marginTop: 1,
        fontFamily: 'Roboto-Light',
        fontSize: 18,
        color: '#555555',
    },
    datetime: {
        marginTop: 2,
        marginLeft: 10,
        fontFamily: 'Roboto-Light',
        fontSize: 12,
        color: 'rgba(109,112,132,0.8)',
    },
    statuesvalue: {
        marginTop: 2,
        marginLeft: 8,
        fontFamily: 'Roboto-Light',
        fontSize: 12,
        color: 'rgba(109,112,132,0.8)',
    },
    besttimeview: {
        marginLeft: 8,
        marginTop: 5,
        width: 45,
        height: 20,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

    },
    besttimevalue: {
        marginLeft: 5,
        marginTop: -5,
        opacity: 0.8,
        fontFamily: 'Roboto-Light',
        fontSize: 14,
        color: '#6D7084',
        letterSpacing: 0.91,
        justifyContent: 'center',
        alignItems: 'center',
        lineHeight: 24,
    },
    cardsize: {
        marginTop: 5,
        marginLeft: 10,
        width: 330,
        height: 75,
        elevation: 0.6,
        borderRadius: 4,
        backgroundColor: "white"
    },
    kidcardname: {
        marginTop: -5,
        marginLeft: 24,
        color: '#6D7084',
        fontSize: 9,
        letterSpacing: 1,
        lineHeight: 24,
        bottom: 5,
        fontFamily: 'Roboto-Regular',
    },


});

export default Memory;
