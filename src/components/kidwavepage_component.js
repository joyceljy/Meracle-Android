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
    kidlist = function (options) {
        if (options === 0) {
            return {
                marginTop: -7,
                width: 40,
                height: 40,
                borderRadius: 50,
                backgroundColor: '#9ACBD9'
            }
        }
        else if (options === 1) {
            return {
                marginTop: -7,
                width: 40,
                height: 40,
                borderRadius: 50,
                backgroundColor: '#F5808B'
            }
        }
        else if (options === 2) {
            return {
                marginTop: - 7,
                width: 40,
                height: 40,
                borderRadius: 50,
                backgroundColor: '#F2992E'
            }
        }
        else if (options === 3) {
            return {
                marginTop: - 7,
                width: 40,
                height: 40,
                borderRadius: 50,
                backgroundColor: '#2F9A9E'
            }
        }
        else if (options === 4) {
            return {
                marginTop: - 7,
                width: 40,
                height: 40,
                borderRadius: 50,
                backgroundColor: '#A77DC2'
            }
        }
    }
    underbarstyle() {
        arr = this.props.childList;
        for (let key in arr) {
            return {
                width: 384,
                backgroundColor: '#F2F2F2'
            }
        }
    }
    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 0 }
        }
        kidlistpre = this.props.childList;
        let kidlistaft = [];
        for (let key in kidlistpre) {
            for (let i = 0; i < kidlistpre[key].length; i++) {
                let imgurl = "http://meracal.azurewebsites.net/Filefolder/" + kidlistpre[key][i].Imageurl;
                if (kidlistpre[key][i].Gender === "男" && kidlistpre[key][i].Imageurl === "DefaultImg.png") {
                    kidlistaft.push(
                        <View style={styles.cardsize}>
                            <Card style={{
                                elevation: 0.8,
                                borderRadius: 4,
                            }}>
                                <CardItem button onPress={() => this.props.ChildEdit(this.props.login_account, kidlistpre[key][i].CdName, this.props.login_token)}>
                                    <Body style={{ flexDirection: 'row', }}>
                                        <View style={this.kidlist(i)}>
                                            <Image source={require('../images/avatar_boy.png')} style={{ marginTop: 4, marginLeft: 2, }}></Image>
                                        </View>
                                        <Text style={styles.kidcardname}>
                                            {kidlistpre[key][i].CdName}
                                        </Text>

                                    </Body>
                                    <Image source={require('../images/edit.png')} style={{ marginBottom: 25, marginRight: -5 }}></Image>
                                </CardItem>
                            </Card>
                        </View>
                    )
                }
                else if (kidlistpre[key][i].Gender === "女" && kidlistpre[key][i].Imageurl === "DefaultImg.png") {
                    kidlistaft.push(
                        <View style={styles.cardsize}>
                            <Card style={{
                                elevation: 0.8,
                                borderRadius: 4,
                            }}>
                                <CardItem button onPress={() => this.props.ChildEdit(this.props.login_account, kidlistpre[key][i].CdName, this.props.login_token)}>
                                    <Body style={{ flexDirection: 'row', }}>
                                        <View style={this.kidlist(i)}>
                                            <Image source={require('../images/avatar_boy.png')} style={{ marginTop: 4, marginLeft: 2, }}></Image>
                                        </View>
                                        <Text style={styles.kidcardname}>
                                            {kidlistpre[key][i].CdName}
                                        </Text>

                                    </Body>
                                    <Image source={require('../images/edit.png')} style={{ marginBottom: 25, marginRight: -5 }}></Image>
                                </CardItem>
                            </Card>
                        </View>
                    )
                }
                else if (kidlistpre[key][i].Gender === "男" && kidlistpre[key][i].Imageurl != "DefaultImg.png") {
                    kidlistaft.push(
                        <View style={styles.cardsize}>
                            <Card style={{
                                elevation: 0.8,
                                borderRadius: 4,
                            }}>
                                <CardItem button onPress={() => this.props.ChildEdit(kidlistpre[key][i].CdName)}>
                                    <Body style={{ flexDirection: 'row', }}>
                                        <View style={this.kidlist(i)}>
                                            <Image source={{ url: imgurl }} style={{ marginTop: 4, marginLeft: 2 }}></Image>
                                        </View>
                                        <Text style={styles.kidcardname}>
                                            {kidlistpre[key][i].CdName}
                                        </Text>

                                    </Body>
                                    <Image source={require('../images/edit.png')} style={{ marginBottom: 25, marginRight: -5 }}></Image>
                                </CardItem>
                            </Card>
                        </View>
                    )
                }

                else if (kidlistpre[key][i].Gender === "女" && kidlistpre[key][i].Imageurl != "DefaultImg.png") {
                    kidlistaft.push(
                        <View style={styles.cardsize}>
                            <Card style={{
                                elevation: 0.8,
                                borderRadius: 4,
                            }}>
                                <CardItem button onPress={() => this.props.ChildEdit(kidlistpre[key][i].CdName)}>
                                    <Body style={{ flexDirection: 'row', }}>
                                        <View style={this.kidlist(i)}>
                                            <Image source={{ url: imgurl }} style={{ marginTop: 4, marginLeft: 2 }}></Image>
                                        </View>
                                        <Text style={styles.kidcardname}>
                                            {kidlistpre[key][i].CdName}
                                        </Text>

                                    </Body>
                                    <Image source={require('../images/edit.png')} style={{ marginBottom: 25, marginRight: -5 }}></Image>
                                </CardItem>
                            </Card>
                        </View>
                    )
                }
            };
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
                            <TouchableOpacity onPress={() => this.props.BackButton()} style={styles.menuIcon}>
                                <Image source={require('../images/back.png')} ></Image>
                            </TouchableOpacity>
                            <Text style={styles.title}>andy 的詳細資訊</Text>

                        </View>
                    </View>

                    <View style={styles.parentInfoView}>

                        <View>
                            <View style={styles.kid3cardimgstyle}>
                                <Image source={require('../images/avatar_boy.png')} style={{ marginTop: 7, marginLeft: 5 }}></Image>
                                {
                                    // <View style={styles.avatarView}>

                                    //     </View>
                                }
                            </View>
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 20 }}>
                            <Text style={styles.besttime}>今日最佳狀態</Text>
                            <View style={styles.besttimeview}><Text style={styles.besttimevalue}>吃飯後</Text></View>
                        </View>
                        <View style={{ flexDirection: 'column', marginLeft: 25 }}>
                            <Text style={styles.besttime}>今日最佳時段</Text>
                            <View style={styles.besttimeview}><Text style={styles.besttimevalue}>9點~10點</Text></View>
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





                    <View style={styles.childView}>

                        <ScrollView>
                            <View style={{ backgroundColor: '#EEEEEE', height: 28, weight: '100%', justifyContent: 'center', marginLeft: 5 }}>
                                <Text style={styles.datetimestyle}>2017/10/30 (一)</Text>

                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ marginLeft: 8, marginTop: 8, fontsize: 12, color: '#6D7084', opacity: 0.8 }}>12:05</Text>

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

                                    <Image style={{ marginLeft: 21, marginTop: 20, marginRight: -3, zIndex: 1 }} source={require('../images/tags/tag_blue.png')}></Image>
                                    <View style={styles.cardsize}>
                                        <Card style={{
                                            elevation: 0.8,
                                            borderRadius: 4,
                                        }}>
                                            <CardItem >
                                                <Body style={{ flexDirection: 'row', }}>

                                                    <View style={{ flexDirection: 'row', marginLeft: 18 }}>

                                                        <Image source={require('../images/status_gray/3.png')}></Image>
                                                        <Text style={styles.statuesvalue}>吃飯前</Text>

                                                    </View>
                                                    <View style={{ marginLeft: 9 }}>
                                                        <Svg
                                                            height="30"
                                                            width="10"
                                                        >
                                                            <Line
                                                                x1="0"
                                                                y1="0"
                                                                x2="0"
                                                                y2="100"
                                                                stroke='rgba(109,112,132,0.1)'
                                                                strokeWidth="2"
                                                                marginTop="-3"
                                                            />
                                                        </Svg>
                                                    </View>
                                                    <Text style={{
                                                        fontFamily: 'Roboto-Light',
                                                        fontSize: 30,
                                                        color: '#555555',
                                                        marginLeft: 5,
                                                        marginTop: -6
                                                    }}>75</Text>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ marginLeft: 8, marginTop: 8, fontsize: 12, color: '#6D7084', opacity: 0.8 }}>09:24</Text>
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
                                    <Image style={{ marginLeft: 21, marginTop: 20, marginRight: -3, zIndex: 1 }} source={require('../images/tags/tag_blue.png')}></Image>
                                    <View style={styles.cardsize}>
                                        <Card style={{
                                            elevation: 0.8,
                                            borderRadius: 4,
                                        }}>
                                            <CardItem >
                                                <Body style={{ flexDirection: 'row', }}>

                                                    <View style={{ flexDirection: 'row', marginLeft: 15 }}>

                                                        <Image source={require('../images/status_gray/6.png')}></Image>
                                                        <Text style={styles.statuesvalue}>剛睡醒</Text>

                                                    </View>
                                                    <Svg
                                                        height="30"
                                                        width="10"
                                                    >
                                                        <Line
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="100"
                                                            stroke='rgba(109,112,132,0.1)'
                                                            strokeWidth="2"
                                                            marginTop="-3"
                                                        />
                                                    </Svg>
                                                    <Text style={{
                                                        fontFamily: 'Roboto-Light',
                                                        fontSize: 30,
                                                        color: '#555555',
                                                        marginLeft: 5,
                                                        marginTop: -6
                                                    }}>60</Text>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: '#EEEEEE', height: 28, weight: '100%', justifyContent: 'center', marginLeft: 5 }}>
                                    <Text style={styles.datetimestyle}>2017/10/29 (日)</Text>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ marginLeft: 8, marginTop: 8, fontsize: 12, color: '#6D7084', opacity: 0.8 }}>14:33</Text>
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
                                    <Image style={{ marginLeft: 21, marginTop: 20, marginRight: -3, zIndex: 1 }} source={require('../images/tags/tag_blue.png')}></Image>
                                    <View style={styles.cardsize}>
                                        <Card style={{
                                            elevation: 0.8,
                                            borderRadius: 4,
                                        }}>
                                            <CardItem >
                                                <Body style={{ flexDirection: 'row', }}>

                                                    <View style={{ flexDirection: 'row', marginLeft: 15 }}>

                                                        <Image source={require('../images/status_gray/1.png')}></Image>
                                                        <Text style={styles.statuesvalue}>運動前</Text>

                                                    </View>
                                                    <Svg
                                                        height="30"
                                                        width="10"
                                                    >
                                                        <Line
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="100"
                                                            stroke='rgba(109,112,132,0.1)'
                                                            strokeWidth="2"
                                                            marginTop="-3"
                                                        />
                                                    </Svg>
                                                    <Text style={{
                                                        fontFamily: 'Roboto-Light',
                                                        fontSize: 30,
                                                        color: '#555555',
                                                        marginLeft: 5,
                                                        marginTop: -6
                                                    }}>73</Text>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ marginLeft: 8, marginTop: 8, fontsize: 12, color: '#6D7084', opacity: 0.8 }}>12:05</Text>
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
                                    <Image style={{ marginLeft: 20, marginTop: 20, marginRight: -3, zIndex: 1 }} source={require('../images/tags/tag_blue.png')}></Image>
                                    <View style={styles.cardsize}>
                                        <Card style={{
                                            elevation: 0.8,
                                            borderRadius: 4,
                                        }}>
                                            <CardItem >
                                                <Body style={{ flexDirection: 'row', }}>

                                                    <View style={{ flexDirection: 'row', marginLeft: 15 }}>

                                                        <Image source={require('../images/status_gray/4.png')}></Image>
                                                        <Text style={styles.statuesvalue}>吃飯後</Text>

                                                    </View>
                                                    <Svg
                                                        height="30"
                                                        width="10"
                                                    >
                                                        <Line
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="100"
                                                            stroke='rgba(109,112,132,0.1)'
                                                            strokeWidth="2"
                                                            marginTop="-3"
                                                        />
                                                    </Svg>
                                                    <Text style={{
                                                        fontFamily: 'Roboto-Light',
                                                        fontSize: 30,
                                                        color: '#555555',
                                                        marginLeft: 5,
                                                        marginTop: -6
                                                    }}>68</Text>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ marginLeft: 8, marginTop: 8, fontsize: 12, color: '#6D7084', opacity: 0.8 }}>09:22</Text>
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
                                    <Image style={{ marginLeft: 20, marginTop: 20, marginRight: -3, zIndex: 1 }} source={require('../images/tags/tag_blue.png')}></Image>
                                    <View style={styles.cardsize}>
                                        <Card style={{
                                            elevation: 0.8,
                                            borderRadius: 4,
                                        }}>
                                            <CardItem >
                                                <Body style={{ flexDirection: 'row', }}>

                                                    <View style={{ flexDirection: 'row', marginLeft: 15 }}>

                                                        <Image source={require('../images/status_gray/6.png')}></Image>
                                                        <Text style={styles.statuesvalue}>剛睡醒</Text>

                                                    </View>
                                                    <Svg
                                                        height="30"
                                                        width="10"
                                                    >
                                                        <Line
                                                            x1="0"
                                                            y1="0"
                                                            x2="0"
                                                            y2="100"
                                                            stroke='rgba(109,112,132,0.1)'
                                                            strokeWidth="2"
                                                            marginTop="-3"
                                                        />
                                                    </Svg>
                                                    <Text style={{
                                                        fontFamily: 'Roboto-Light',
                                                        fontSize: 30,
                                                        color: '#555555',
                                                        marginLeft: 5,
                                                        marginTop: -6
                                                    }}>64</Text>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                    </View>
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
        marginTop: 3,
        marginLeft: 13,
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
    underbartext: {
        fontSize: 10,
        letterSpacing: 0.5,
        lineHeight: 16,
        color: '#636566',
        fontFamily: 'PingFangTC-Light',
        top: 8,
        left: 133
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
        // marginLeft:70,
        width: 262,
        height: 64,
        borderRadius: 4,
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
