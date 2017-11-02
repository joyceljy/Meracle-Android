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
                    <Image source={require('../images/bg_darkBlue1.png')} style={{ width: '100%', height: '100%' }} >
                        <View style={styles.parentView}>

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => this.props.BackButton()} style={styles.menuIcon}>
                                    <Image source={require('../images/back.png')} ></Image>
                                </TouchableOpacity>
                                <Text style={styles.title}>大眾孩童睡眠時間</Text>
                            </View>
                        </View>

                        <View style={styles.parentInfoView}>
                            <View style={styles.conView}>
                                <BarChart
                                    style={styles.chart}
                                    data={this.state.data}
                                    xAxis={this.state.xline}
                                    yAxis={this.state.yline}
                                    animation={{ durationX: 2000 }}
                                    legend={this.state.legend}
                                    // gridBackgroundColor={processColor('#ffffff')}
                                    drawBarShadow={false}
                                    drawValueAboveBar={true}
                                    drawLabels={false}
                                    drawHighlightArrow={false}
                                />
                            </View>
                        </View>
                        <View style={styles.statueView}>

                            <View>
                                <Text style={styles.statuetxtfirst}>8歲以下</Text>
                            </View>
                            <View>

                                <Text style={styles.statuetxt}>9-10歲</Text>
                            </View>
                            <View>

                                <Text style={styles.statuetxt}>11-12歲</Text>
                            </View>
                            <View>

                                <Text style={styles.statuetxt}>13-14歲</Text>
                            </View>
                            <View>

                                <Text style={styles.statuetxt}>14歲以上</Text>
                            </View>

                        </View>

                        <ScrollView>
                            <View>
                                <View style={styles.cardsize}>
                                    <Card style={{
                                        elevation: 0.8,
                                        borderRadius: 4,
                                    }}>
                                        <CardItem>
                                            <Body style={{
                                                flexDirection: 'column', justifyContent: 'flex-start',

                                            }}>
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, opacity: 0.5, color: '#6D7084', fontFamily: "Roboto-Light" }}>1</Text>
                                                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: "Roboto-Light" }}>8歲以下</Text>
                                                    <Text style={{ marginLeft: 130, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: " Roboto-Regular" }}>10</Text>
                                                    <Text style={{ fontSize: 10, marginTop: 15, color: '#6D7084', fontFamily: " Roboto-Regular" }}>小時</Text>
                                                </View>
                                                <View
                                                    style={{
                                                        borderBottomColor: '#D4D4D4',
                                                        borderBottomWidth: 1,
                                                        width: '100%',
                                                        opacity: 0.2,
                                                        marginTop: 16
                                                    }}
                                                />
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, opacity: 0.5, color: '#6D7084', fontFamily: "Roboto-Light" }}>2</Text>
                                                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: "Roboto-Light" }}>11-12歲</Text>
                                                    <Text style={{ marginLeft: 140, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: " Roboto-Regular" }}>9</Text>
                                                    <Text style={{ fontSize: 10, marginTop: 15, color: '#6D7084', fontFamily: " Roboto-Regular" }}>小時</Text>
                                                </View>
                                                <View
                                                    style={{
                                                        borderBottomColor: '#D4D4D4',
                                                        borderBottomWidth: 1,
                                                        width: '100%',
                                                        opacity: 0.2,
                                                        marginTop: 16
                                                    }}
                                                />
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, opacity: 0.5, color: '#6D7084', fontFamily: "Roboto-Light" }}>3</Text>
                                                    <Text style={{ marginLeft: 22, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: "Roboto-Light" }}>9-10歲</Text>
                                                    <Text style={{ marginLeft: 140, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: " Roboto-Regular" }}>8.5 </Text>
                                                    <Text style={{ fontSize: 10, marginTop: 15, color: '#6D7084', fontFamily: " Roboto-Regular" }}>小時</Text>
                                                </View>
                                                <View
                                                    style={{
                                                        borderBottomColor: '#D4D4D4',
                                                        borderBottomWidth: 1,
                                                        width: '100%',
                                                        opacity: 0.2,
                                                        marginTop: 16
                                                    }}
                                                />
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, opacity: 0.5, color: '#6D7084', fontFamily: "Roboto-Light" }}>4</Text>
                                                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: "Roboto-Light" }}>13-14歲</Text>
                                                    <Text style={{ marginLeft: 140, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: " Roboto-Regular" }}>7</Text>
                                                    <Text style={{ fontSize: 10, marginTop: 15, color: '#6D7084', fontFamily: " Roboto-Regular" }}>小時</Text>
                                                </View>
                                                <View
                                                    style={{
                                                        borderBottomColor: '#D4D4D4',
                                                        borderBottomWidth: 1,
                                                        width: '100%',
                                                        opacity: 0.2,
                                                        marginTop: 16
                                                    }}
                                                />
                                                <View style={{ flexDirection: 'row' }}>
                                                    <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, opacity: 0.5, color: '#6D7084', fontFamily: "Roboto-Light" }}>5</Text>
                                                    <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: "Roboto-Light" }}>14歲以上</Text>
                                                    <Text style={{ marginLeft: 130, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: " Roboto-Regular" }}>6</Text>
                                                    <Text style={{ fontSize: 10, marginTop: 15, color: '#6D7084', fontFamily: " Roboto-Regular" }}>小時</Text>
                                                </View>

                                            </Body>
                                        </CardItem>
                                    </Card>
                                </View>





                            </View>
                        </ScrollView>
                    </Image>
                </View>
            </Drawer>
        );
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
        flex: 1,
        // backgroundColor: '#F2F2F2',
    },
    parentView: {
        width: '100%',
        height: 50,
        backgroundColor: '#144669',
    },
    statueView: {
        zIndex:1,
        marginTop: -65,
        marginBottom:20 ,
        marginLeft:50,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    statueimgfirst: {
        marginLeft: 28,
    },
    statueimgafter: {
        marginLeft: 18,
    },
    statuetxtfirst: {
        marginLeft: 34,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    statuetxt: {
        marginLeft:18,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    chart: {
        width: 330,
        height: 220,
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

        marginLeft: 30,
        width: 312,
        height: 284,
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
