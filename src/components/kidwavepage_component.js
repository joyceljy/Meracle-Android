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
import Drawer from 'react-native-drawer';
import SideBarContent from '../containers/SideBarContent';
import { BarChart } from 'react-native-charts-wrapper';
var { height, width } = Dimensions.get('window');
class Memory extends Component {
    constructor(props) {
        super(props);
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
    }

    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };

    timeercut(str) {
        let strlength = str.length;
        let newstr = "";
        newstr = str.substring(0, 10).replace("-", "/").replace("-", "/");
        return newstr;
    }

    statuspicset(statusname) {
        switch (statusname) {
            case "運動前": {
                return require('../images/status_gray/1.png')
            }
            case "運動後": {
                return require('../images/status_gray/2.png')
            }
            case "吃飯前": {
                return require('../images/status_gray/3.png')
            }
            case "吃飯後": {
                return require('../images/status_gray/4.png')
            }
            case "睡覺前": {
                return require('../images/status_gray/5.png')
            }
            case "剛睡醒": {
                return require('../images/status_gray/6.png')
            }
        }
    }
    colorpicset(color) {
        // let colorarr = ['#9ACBD9', '#F5808B', '#F2992E', '#2F9A9E', '#A77DC2'];
        switch (color) {
            case '#9ACBD9': {
                return require('../images/tags/tag_blue.png')
            }
            case '#F5808B': {
                return require('../images/tags/tag_pink.png')
            }
            case '#F2992E': {
                return require('../images/tags/tag_yellow.png')
            }
            case '#2F9A9E': {
                return require('../images/tags/tag_green.png')
            }
            case '#A77DC2': {
                return require('../images/tags/tag_purple.png')
            }

        }
    }
    Setstatus(num) {
        switch (num) {
            case 1: {
                return "運動前"
            }
            case 2: {
                return "運動後"
            }
            case 3: {
                return "吃飯前"
            }
            case 4: {
                return "吃飯後"
            }
            case 5: {
                return "睡覺前"
            }
            case 6: {
                return "剛睡醒"
            }
        }
    }
    bkcolor(str) {
        return {
            width: 56,
            height: 56,
            borderRadius: 50,
            // bottom: 10,
            marginTop: 8,
            marginLeft: 15,
            backgroundColor: str,
            borderWidth: 5,
            borderColor: 'rgba(255,255,255,0.1)',
            borderRadius: 100,
        }
    }
    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 0 }
        }
        //詳細紀錄和小孩姓名
        ChildNameBGDatapre = this.props.ChildNameBGData;
        let ChildNameBGDataaft = [];
        let Childname = [];

        // this.props.SetChildNameBGColor
        if (ChildNameBGDatapre != null || ChildNameBGDatapre != "") {
            for (let key in ChildNameBGDatapre) {
                for (let i = 0; i < ChildNameBGDatapre[key].length; i++) {
                    if (i === 0) {
                        Childname.push(
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.props.BackButton()} style={styles.menuIcon}>
                                    <Image source={require('../images/back.png')} ></Image>
                                </TouchableOpacity>
                                <Text style={styles.title}>{ChildNameBGDatapre[key][i].CdName} 的詳細資訊</Text>
                            </View>
                        )
                        ChildNameBGDataaft.push(
                            <View>
                                <View style={{ backgroundColor: '#EEEEEE', height: 28, width: '100%', justifyContent: 'center', marginLeft: 5 }}>
                                    <Text style={styles.datetimestyle}>{this.timeercut(ChildNameBGDatapre[key][i].CreateTime)}</Text>
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{ marginLeft: 8, marginTop: 8, fontSize: 12, color: '#6D7084', opacity: 0.8 }}>{ChildNameBGDatapre[key][i].Time}</Text>
                                        <View style={{ marginLeft: 20 }}>

                                            <Svg
                                                height="70"
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

                                        </View>
                                        {
                                            //card旁的顏色條
                                        }
                                        <Image style={{ marginLeft: 21, marginTop: 20, marginRight: -3, zIndex: 2 }} source={this.colorpicset(this.props.SetChildNameBGColor)}></Image>
                                        <View style={styles.cardsize}>

                                            <View style={{ flexDirection: 'row', }}>

                                                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                                    {
                                                        //狀態照片
                                                    }
                                                    <Image style={{ marginTop: 20 }} source={this.statuspicset(ChildNameBGDatapre[key][i].StatusName)}></Image>
                                                    <Text style={styles.statuesvalue}>{ChildNameBGDatapre[key][i].StatusName}</Text>

                                                </View>
                                                <View style={{ marginLeft: 9, marginTop: 15 }}>
                                                    <Svg
                                                        height="30"
                                                        width="50"
                                                    >
                                                        <Line
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="100"
                                                            stroke='rgba(109,112,132,0.1)'
                                                            strokeWidth="2"
                                                        // marginTop="-3"
                                                        />
                                                    </Svg>
                                                </View>
                                                <Text style={{
                                                    fontFamily: 'Roboto-Light',
                                                    fontSize: 30,
                                                    color: '#555555',
                                                    marginLeft: -0.11*width,
                                                    marginTop: 10
                                                }}>{ChildNameBGDatapre[key][i].Score}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    else {
                        if (this.timeercut(ChildNameBGDatapre[key][i - 1].CreateTime) != this.timeercut(ChildNameBGDatapre[key][i].CreateTime))
                            ChildNameBGDataaft.push(
                                <View>
                                    <View style={{ backgroundColor: '#EEEEEE', height: 28, width: '100%', justifyContent: 'center', marginLeft: 5 }}>
                                        <Text style={styles.datetimestyle}>{this.timeercut(ChildNameBGDatapre[key][i].CreateTime)}</Text>

                                    </View>
                                    <View>
                                        <View style={{ flexDirection: 'row', }}>
                                            <Text style={{ marginLeft: 8, marginTop: 8, fontSize: 12, color: '#6D7084', opacity: 0.8 }}>{ChildNameBGDatapre[key][i].Time}</Text>
                                            <View style={{ marginLeft: 20 }}>

                                                <Svg
                                                    height="70"
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

                                            </View>
                                            {
                                                //card旁的顏色條
                                            }
                                            <Image style={{ marginLeft: 21, marginTop: 20, marginRight: -3, zIndex: 2 }} source={this.colorpicset(this.props.SetChildNameBGColor)}></Image>
                                            <View style={styles.cardsize}>

                                                <View style={{ flexDirection: 'row', }}>

                                                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                                        {
                                                            //狀態照片
                                                        }
                                                        <Image style={{ marginTop: 15 }} source={this.statuspicset(ChildNameBGDatapre[key][i].StatusName)}></Image>
                                                        <Text style={styles.statuesvalue2}>{ChildNameBGDatapre[key][i].StatusName}</Text>

                                                    </View>
                                                    <View style={{ marginLeft: 9, marginTop: 15 }}>
                                                        <Svg
                                                            height="30"
                                                            width="50"
                                                        >
                                                            <Line
                                                                x1="0"
                                                                y1="0"
                                                                x2="0"
                                                                y2="100"
                                                                stroke='rgba(109,112,132,0.1)'
                                                                strokeWidth="2"
                                                            // marginTop="-3"
                                                            />
                                                        </Svg>
                                                    </View>
                                                    <Text style={{
                                                        fontFamily: 'Roboto-Light',
                                                        fontSize: 30,
                                                        color: '#555555',
                                                        marginLeft: -0.11*width,
                                                        marginTop: 10
                                                    }}>{ChildNameBGDatapre[key][i].Score}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        else {
                            ChildNameBGDataaft.push(
                                <View>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Text style={{ marginLeft: 8, marginTop: 8, fontSize: 12, color: '#6D7084', opacity: 0.8 }}>{ChildNameBGDatapre[key][i].Time}</Text>
                                        <View style={{ marginLeft: 20 }}>

                                            <Svg
                                                height="70"
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

                                        </View>
                                        {
                                            //card旁的顏色條
                                        }
                                        <Image style={{ marginLeft: 21, marginTop: 20, marginRight: -3, zIndex: 2 }} source={this.colorpicset(this.props.SetChildNameBGColor)}></Image>
                                        <View style={styles.cardsize}>

                                            <View style={{ flexDirection: 'row', }}>

                                                <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                                    {
                                                        //狀態照片
                                                    }
                                                    <Image style={{ marginTop: 15 }} source={this.statuspicset(ChildNameBGDatapre[key][i].StatusName)}></Image>
                                                    <Text style={styles.statuesvalue2}>{ChildNameBGDatapre[key][i].StatusName}</Text>

                                                </View>
                                                <View style={{ marginLeft: 9, marginTop: 15 }}>
                                                    <Svg
                                                        height="30"
                                                        width="50"
                                                    >
                                                        <Line
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="100"
                                                            stroke='rgba(109,112,132,0.1)'
                                                            strokeWidth="2"
                                                        // marginTop="-3"
                                                        />
                                                    </Svg>
                                                </View>
                                                <Text style={{
                                                    fontFamily: 'Roboto-Light',
                                                    fontSize: 30,
                                                    color: '#555555',
                                                    marginLeft: -0.11*width,
                                                    marginTop: 10
                                                }}>{ChildNameBGDatapre[key][i].Score}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        }
                    }
                    // console.log("ChildNameBGDatapre", ChildNameBGDatapre[key][i].CreateTime)
                }

            }
        }
        //最佳狀態
        let ChildBestStatuspre = this.props.ChildBestStatus;
        let ChildBestStatusaft = [];
        if (ChildBestStatuspre != null || ChildBestStatuspre != "") {
            for (let key in ChildBestStatuspre) {

                ChildBestStatusaft.push(
                    <View style={styles.besttimeview}><Text style={styles.besttimevalue}>{this.Setstatus(ChildBestStatuspre[key].Status)}</Text></View>
                )


            }
        }
        //最佳時段
        let CdDayOfBestScoreByTimerpre = this.props.CdDayOfBestScoreByTimer;
        let CdDayOfBestScoreByTimeraft = [];
        if (CdDayOfBestScoreByTimerpre != null || CdDayOfBestScoreByTimerpre != "") {
            if (CdDayOfBestScoreByTimerpre.length === 0)
                CdDayOfBestScoreByTimeraft.push(
                    <View style={styles.besttimeview}><Text style={styles.besttimevalue}>無資料</Text></View>
                )
            else {
                <View style={styles.besttimeview}><Text style={styles.besttimevalue}>{CdDayOfBestScoreByTimerpre[0]}</Text></View>
            }


        }

        return (

            <View style={styles.Viewstyle}>

                <View style={styles.parentView}>
                    {
                        Childname
                    }
                </View>

                <View style={styles.parentInfoView}>

                    <View>
                        <View style={this.bkcolor(this.props.SetChildNameBGColor)}>
                            <Image source={require('../images/avatar_boy.png')} style={{ marginTop: 7, marginLeft: 5 }}></Image>
                            {
                                // <View style={styles.avatarView}>

                                //     </View>
                            }
                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                        <Text style={styles.besttime}>最佳狀態</Text>
                        {
                            ChildBestStatusaft
                        }
                    </View>
                    <View style={{ flexDirection: 'column', marginLeft: 25 }}>
                        <Text style={styles.besttime}>今日最佳時段</Text>
                        {
                            CdDayOfBestScoreByTimeraft
                        }
                    </View>
                    {
                        // <View style={{ marginTop: 8, backgroundColor: '#9ACBD9', width: 8, height: 8, borderRadius: 100, borderColor: '#FFFFFF', borderWidth: 1, zIndex: 1 }}>
                        // </View>     
                        //     <TouchableOpacity>
                        //     <View style={{ marginTop: -10, marginLeft: 2, backgroundColor: '#009688', width: 48, height: 48, borderRadius: 100,elevation:6,zIndex:10 }}>
                        //         <Image source={require('../images/calendar.png')} style={{ marginLeft: 12, marginTop: 12,zIndex:2 }} ></Image>
                        //     </View>
                        // </TouchableOpacity>  
                    }

                </View>
                <ScrollView>
                    <View style={styles.childView}>
                        {
                            ChildNameBGDataaft
                        }
                        <View style={{ marginBottom: 12 }}></View>
                    </View>
                </ScrollView>

            </View>

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
        marginTop: -15,
        backgroundColor: '#144669',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    statueimgfirst: {
        marginLeft: 5,
    },
    statueimgafter: {
        marginLeft: 20,
    },
    statuetxtfirst: {
        marginLeft: 34,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    statuetxt: {
        marginLeft: 24,
        fontSize: 9,
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
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 112,
        zIndex: -5,
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
        marginLeft: 182,
        marginTop: 16,
    },
    childView: {
        width: '100%',
        // height: 200,
        zIndex: -5,
        backgroundColor: '#F2F2F2',
    },
    newwave: {
        marginTop: 5,
        fontFamily: 'Roboto-Light',
        fontSize: 14,
        color: '#555555',
    },
    newwavevalue: {
        marginTop: 3,
        fontFamily: 'Roboto-Light',
        fontSize: 18,
        color: '#555555',
    },
    datetime: {
        marginTop: 3,
        fontFamily: 'Roboto-Light',
        fontSize: 12,
        color: 'rgba(109,112,132,0.8)',
    },
    statuesvalue: {
        marginTop: 20,
        marginLeft: 14,
        marginRight: 80,
        fontFamily: 'Roboto-Light',
        fontSize: 14,
        color: '#6D7084',
    },
    statuesvalue2: {
        marginTop: 20,
        marginLeft: 14,
        marginRight: 80,
        fontFamily: 'Roboto-Light',
        fontSize: 14,
        color: '#6D7084',
    },
    subTitle: {
        fontSize: 10,
        lineHeight: 16,
        fontFamily: 'Roboto-Regular',
        marginTop: 8,
        marginLeft: 149,
        color: '#636566',
        marginBottom: -8,
    },
    avatarView: {
        width: 64,
        height: 64,
        borderWidth: 5,
        borderColor: '#9ACBD9',
        borderRadius: 100,
        //backgroundColor: 'transparent',
        //overflow: 'hidden',
        opacity: 0.1,
        zIndex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 15,
        marginLeft: 48,
    },
    avatar: {
        width: 45.8,
        height: 45.8,
        borderRadius: 100
    },
    helloText: {

        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF',
        marginLeft: 152,
        marginTop: -65,


    },
    editText: {
        fontSize: 14,
        lineHeight: 22,
        fontFamily: 'PingFangTC-Light',
        color: '#FFFFFF',
        marginLeft: 152,
        marginTop: 4,

    },
    kidname: {
        justifyContent: 'center',
        left: 54,
        top: -12,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#FFFFFF',
        letterSpacing: 0.5,
        lineHeight: 24,
        // width: 50,
        height: 24,
        // backgroundColor:'red'
    },
    underbar: {
        // top: 262,
        width: 384,
        // height: 300,
        // marginBottom:10,
        backgroundColor: '#F2F2F2'
    },
    datetimestyle: {
        color: 'rgba(0,0,0,0.6)',
    },
    besttime: {
        fontFamily: 'Roboto-Light',
        fontSize: 12,
        color: 'rgba(255,255,255,0.8)',
        letterSpacing: 0.8,
        lineHeight: 16,
    },
    besttimeview: {
        marginTop: 5,
        width: 96,
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    besttimevalue: {
        opacity: 0.8,
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        color: 'rgb(255,255,255)',
        letterSpacing: 0.91,
        lineHeight: 24,
    },


    cardsize: {
        marginTop: 5,
        width: 0.68 * width,
        height: 60,
        elevation: 0.8,
        borderRadius: 4,
    },
    kid3cardimgstyle: {
        width: 56,
        height: 56,
        borderRadius: 50,
        // bottom: 10,
        marginTop: 8,
        marginLeft: 15,
        backgroundColor: '#9ACBD9',
        borderWidth: 5,
        borderColor: 'rgba(255,255,255,0.1)',
        borderRadius: 100,
    },


});

export default Memory;
