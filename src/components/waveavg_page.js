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
                            <TouchableOpacity onPress={this.openControlPanel} style={styles.menuIcon}>
                                <Image source={require('../images/menu.png')} ></Image>
                            </TouchableOpacity>
                            <Text style={styles.title}>腦波測量結果</Text>
                            <TouchableOpacity style={styles.settingIcon}>
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
                                data={this.state.data}
                                drawValueAboveBar={false}
                                drawBarShadow={false}
                                yAxis={this.state.yline}
                                xAxis={this.state.xline}
                                legend={this.state.legend}
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
                    </View>

                    <View style={styles.childView}>
                        <ScrollView>
                            <View>
                                <View style={styles.cardsize}>
                                    <Card style={{
                                        elevation: 0.8,
                                        borderRadius: 4,
                                    }}>
                                        <CardItem button onPress={()=>this.props.kidwavepageClick()}>
                                            <Body style={{ flexDirection: 'row', }}>
                                                <View style={{ flexDirection: 'column', }}>
                                                    <View style={styles.kidcardimgstyle}>
                                                        <Image source={require('../images/avatar_boy.png')} style={{ marginTop: 5, marginLeft: 2 }}></Image>
                                                    </View>
                                                    <Text style={styles.kidcardname}>
                                                        andy
                                                </Text>

                                                </View>
                                                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                    <Svg
                                                        height="50"
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
                                                    <View style={{ flexDirection: 'row', marginTop: -50, marginLeft: 20 }} >
                                                        <Text style={styles.newwave}>最新分數：</Text>
                                                        <Text style={styles.newwavevalue}>75</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                                        <Text style={styles.datetime}>2017/10/30 (一)</Text>
                                                        <Text style={styles.statuesvalue}>運動前</Text>
                                                    </View>
                                                </View>
                                                <Image source={require('../images/arrow_gray.png')} style={{ marginTop: 7, marginLeft: 80 }}></Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>

                                <View style={styles.cardsize}>
                                    <Card style={{
                                        elevation: 0.8,
                                        borderRadius: 4,
                                    }}>
                                        <CardItem button>
                                            <Body style={{ flexDirection: 'row', }}>
                                                <View style={{ flexDirection: 'column', }}>
                                                    <View style={styles.kid2cardimgstyle}>
                                                        <Image source={require('../images/avatar_girl.png')} style={{ marginTop: 4, marginLeft: 1 }}></Image>
                                                    </View>
                                                    <Text style={styles.kidcardname}>joy</Text>
                                                </View>
                                                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                <Svg
                                                    height="50"
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
                                                <View style={{ flexDirection: 'row', marginTop: -50, marginLeft: 20 }} >
                                                        <Text style={styles.newwave}>最新分數：</Text>
                                                        <Text style={styles.newwavevalue}>50</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                                        <Text style={styles.datetime}>2017/10/29 (日)</Text>
                                                        <Text style={styles.statuesvalue}>吃飯前</Text>
                                                    </View>
                                                </View>
                                                <Image source={require('../images/arrow_gray.png')} style={{ marginTop: 7, marginLeft: 80 }}></Image>
                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>

                                <View style={styles.cardsize}>
                                    <Card style={{
                                        elevation: 0.8,
                                        borderRadius: 4,
                                    }}>
                                        <CardItem button>
                                            <Body style={{ flexDirection: 'row', }}>
                                                <View style={{ flexDirection: 'column', }}>
                                                    <View style={styles.kid3cardimgstyle}>
                                                        <Image source={require('../images/avatar_boy.png')} style={{ marginTop: 5, marginLeft: 2 }}></Image></View>
                                                    <Text style={styles.kidcardname}>
                                                        may</Text>
                                                </View>
                                                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                <Svg
                                                    height="50"
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
                                                <View style={{ flexDirection: 'row', marginTop: -50, marginLeft: 20 }} >
                                                        <Text style={styles.newwave}>最新分數：</Text>
                                                        <Text style={styles.newwavevalue}>89</Text>
                                                    </View>
                                                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                                                        <Text style={styles.datetime}>2017/10/27 (五)</Text>
                                                        <Text style={styles.statuesvalue}>睡覺前</Text>
                                                    </View>
                                                </View>
                                                <Image source={require('../images/arrow_gray.png')} style={{ marginTop: 7, marginLeft: 80 }}></Image>
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
        height: 300,
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
        width: 66,
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
        height: 200,
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
