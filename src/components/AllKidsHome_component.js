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
    processColor
} from 'react-native';
import Svg, {
    Line,
} from 'react-native-svg';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import ActionButton from 'react-native-action-button';
import Drawer from 'react-native-drawer';
import SideBarContent from '../containers/SideBarContent';
import { BarChart } from 'react-native-charts-wrapper';
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

    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 0 }
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
                            <Text style={styles.title}>大眾孩童統計數據</Text>
                        </View>
                    </View>

                    <View style={styles.parentInfoView}>
                        <View >
                            <Image source={require('../images/bg_darkBlue2.png')} style={{
                                width: '100%', justifyContent: 'center',
                                alignItems: 'center', flexDirection: 'column',
                            }} >

                                <Image style={{ zIndex: 1 }} source={require('../images/AllKids_logo.png')} >
                                </Image>
                                <Text style={{ fontFamily: "PingFangTC-Regular", fontSize: 14, color: 'white' }}>我們為您統計出</Text>
                                <Text style={{ fontFamily: "PingFangTC-Regular", fontSize: 14, color: 'white' }}>最新的大眾孩童數據</Text>
                            </Image>

                        </View>

                    </View>

                    <View style={styles.childView}>
                        <ScrollView>
                            <View>
                                <View style={styles.cardsize}>
                                    <Card style={{
                                        elevation: 0.8,
                                        borderRadius: 4,
                                    }}>
                                    <CardItem button >
                                            <Body style={{
                                                flexDirection: 'row', justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{ marginTop: 10, fontSize: 16, color: '#555555', fontFamily: " Roboto-Regula" }}>生理狀況</Text>
                                                <Image source={require('../images/arrow_gray.png')} style={{ marginTop: 10, marginLeft: 220 }}></Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                                <View style={styles.cardsize}>
                                    <Card style={{
                                        elevation: 0.8,
                                        borderRadius: 4,
                                    }}>
                                    <CardItem button onPress={()=>this.props.SleepingavgClick()}>
                                            <Body style={{
                                                flexDirection: 'row', justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{ marginTop: 10, fontSize: 16, color: '#555555', fontFamily: " Roboto-Regula" }}>睡眠時間</Text>
                                                <Image source={require('../images/arrow_gray.png')} style={{ marginTop: 10, marginLeft: 220 }}></Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                                <View style={styles.cardsize}>
                                    <Card style={{
                                        elevation: 0.8,
                                        borderRadius: 4,
                                    }}>
                                    <CardItem button >
                                            <Body style={{
                                                flexDirection: 'row', justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{ marginTop: 10,marginLeft: -2, fontSize: 16, color: '#555555', fontFamily: " Roboto-Regula" }}>飲食攝取狀況</Text>
                                                <Image source={require('../images/arrow_gray.png')} style={{ marginTop: 10, marginLeft: 180 }}></Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>
                                <View style={styles.cardsize}>
                                <Card style={{
                                    elevation: 0.8,
                                    borderRadius: 4,
                                }}>
                                    <CardItem button >
                                        <Body style={{ flexDirection: 'row',justifyContent: 'center',
                                        alignItems: 'center', }}>
                                            <Text style={{  marginTop: 10,marginLeft: 5,fontSize: 16, color: '#555555' ,fontFamily:" Roboto-Regula"}}>每週記憶力表現</Text>
                                            <Image source={require('../images/arrow_gray.png')} style={{ marginTop: 10, marginLeft: 170 }}></Image>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </View>
                                <View style={{ marginBottom: 12 }}></View>
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
        marginTop: -15,
        backgroundColor: '#144669',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    statueimgfirst: {
        marginLeft: 28,
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

        flexDirection: 'column',
        width: '100%',
        // height: 300,
        // backgroundColor: '#144669',
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
        // width: 66,
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
        height: 250,
        backgroundColor: '#F2F2F2',
    },
    newwave: {
        marginTop: 5,
        fontFamily: 'Roboto-Light',
        fontSize: 14,
        color: '#555555',
    },
    newwavevalue: {

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
        marginTop: 3,
        marginLeft: 8,
        fontFamily: 'Roboto-Light',
        fontSize: 12,
        color: 'rgba(109,112,132,0.8)',
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
        width: 72,
        height: 72,
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
    besttimeview: {
        marginLeft: 5,
        marginTop: 5,
        width: 48,
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
    underbartext: {
        fontSize: 10,
        letterSpacing: 0.5,
        lineHeight: 16,
        color: '#636566',
        fontFamily: 'PingFangTC-Light',
        top: 8,
        left: 133
    },
    // cardsize: {
    //     marginLeft: 16,
    //     marginRight: 16,
    //     // width: '100%',
    //     height: 60,
    //     marginTop: 8,
    //     borderRadius: 7
    // },
    // kidcardname: {
    //     marginLeft: 20,
    //     color: '#144669',
    //     fontSize: 16,
    //     letterSpacing: 1,
    //     lineHeight: 24,
    //     fontFamily: 'Roboto-Regular',
    // },
    //以下是假的
    cardsize: {
        marginTop: 5,
        marginLeft: 10,
        width: 360,
        height: 80,
    },
    kidcardname: {
        marginTop: -6,
        marginLeft: 4,
        color: '#6D7084',
        fontSize: 9,
        letterSpacing: 1,
        lineHeight: 24,
        bottom: 5,
        fontFamily: 'Roboto-Regular',
    },
    kidcardimgstyle: {
        width: 40,
        height: 40,
        borderRadius: 50,

        // top: 10,
        // bottom: 10,
        // justifyContent: 'center',
        marginLeft: -6,
        backgroundColor: '#9ACBD9'

    },
    kid2cardimgstyle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        // bottom: 10,
        marginLeft: -6,
        backgroundColor: '#F5808B'
    },
    kid3cardimgstyle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        // bottom: 10,
        marginLeft: -6,
        backgroundColor: '#F2992E'
    },
    kid4cardimgstyle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        bottom: 10,
        marginLeft: -10,
        backgroundColor: '#2F9A9E'
    },
    kid5cardimgstyle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        // bottom: 10,
        marginLeft: -10,
        backgroundColor: '#A77DC2'
    },

});

export default Memory;
