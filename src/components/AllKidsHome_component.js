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
        if (this.props.login_account != null || this.props.login_account != "" ||this.props.login_account != undefined) {
            if(this.props.TotalPublicBody!= null || this.props.TotalPublicBody != ""){
        //生理狀況
        let api_TotalPublicBody = []
        api_TotalPublicBody = this.props.TotalPublicBody
        let TotalPublicBodyText = [], TotalPublicBodyValue = [], i = 0, j = 0
        for (this.i = 0; this.i < 6; this.i++) {
            TotalPublicBodyText.push(api_TotalPublicBody[this.i].Problem)
            TotalPublicBodyValue.push(api_TotalPublicBody[this.i].percentage)
        }
        console.log('TotalPublicBodyValue', TotalPublicBodyValue)
        let obj = {}
        obj = {
            values: TotalPublicBodyValue,
            label: 'Pie dataset',
            config: {
                colors: [processColor('#9ACBD9'), processColor('#2F9A9E'), processColor('#F2992E'), processColor('#F5808B'), processColor('#A77DC2'), processColor('#092B42')],
                valueTextSize: 12,
                valueTextColor: processColor('white'),
                sliceSpace: 0,
                selectionShift: 13
            }
        }
        console.log('obj', obj)
        this.props.Problemaction(obj)//dataset處直接接obj----dataSets:obj
    }
        // 飲食習慣
        let api_TotalPublicMeal = []
        api_TotalPublicMeal = this.props.TotalPublicMeal
        let TotalPublicMealText = [], TotalPublicMealValue = [], a = 0
        console.log('api_TotalPublicMeal', api_TotalPublicMeal)
        for (this.a = 0; this.a < 5; this.a++) {
            TotalPublicMealValue.push(api_TotalPublicMeal[this.a])
        }
        console.log('TotalPublicMealValue', TotalPublicMealValue)
        let obj2 = {}
        obj2 = {
            values: TotalPublicMealValue,
            label: 'Pie dataset',
            config: {
                colors: [processColor('#9ACBD9'), processColor('#2F9A9E'), processColor('#F2992E'), processColor('#F5808B'), processColor('#A77DC2')],
                valueTextSize: 12,
                valueTextColor: processColor('white'),
                sliceSpace: 0,
                selectionShift: 13
            }
        }
        console.log('obj2', obj2)
        this.props.Mealaction(obj2)//dataset處直接接obj----dataSets:obj

        //睡眠時間
        let api_PublicSleep = []
        api_PublicSleep = this.props.PublicSleep
        let str = {}
        let PublicSleepText = [], PublicSleepValue = [], b = 0

        for (this.b = 0; this.b < 5; this.b++) {
            str = { y: api_PublicSleep[this.b].AvgScore }
            PublicSleepValue.push(str)
        }
        console.log('PublicSleepValue', PublicSleepValue)

        this.props.Sleepaction(PublicSleepValue)
        //每日記憶力
        let api_PublicMemory = []
        api_PublicMemory = this.props.PublicMemory
        let str2 = {}
        let PublicMemoryText = [], PublicMemoryValue = [], d = 0

        for (this.d = 0; this.d < 6; this.d++) {
            str2 = { y: api_PublicMemory[this.d].Score }
            PublicMemoryValue.push(str2)
        }
        console.log('PublicMemoryValue', PublicMemoryValue)

        this.props.Memoryaction(PublicMemoryValue)
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

                        <Image source={require('../images/bg_darkBlue2.png')} style={{
                            // justifyContent: 'center',
                            height: 300,
                            width: '100%',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }} >

                            <Image style={{ marginTop: 100, zIndex: 1 }} source={require('../images/AllKids_logo.png')} >
                            </Image>
                            <Text style={{ fontFamily: "PingFangTC-Regular", fontSize: 14, color: 'white', zIndex: 1 ,backgroundColor:'transparent'}}>我們為您統計出</Text>
                            <Text style={{ fontFamily: "PingFangTC-Regular", fontSize: 14, color: 'white', zIndex: 1 ,backgroundColor:'transparent'}}>最新的大眾孩童數據</Text>

                        </Image>


                    </View>

                    <View style={styles.childView}>
                        <ScrollView>
                            <View>
                                <View style={styles.cardsize}>
                                    <Card style={{
                                        elevation: 0.8,
                                        borderRadius: 4,
                                    }}>
                                        <CardItem button onPress={() => this.props.AllKidsProblemClick()}>
                                            <Body style={{
                                                flexDirection: 'row', justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{ marginTop: 10, fontSize: 16, color: '#555555', fontFamily: "Roboto-Regular" }}>生理狀況</Text>
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
                                        <CardItem button onPress={() => this.props.SleepingavgClick()}>
                                            <Body style={{
                                                flexDirection: 'row', justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{ marginTop: 10, fontSize: 16, color: '#555555', fontFamily: "Roboto-Regular" }}>睡眠時間</Text>
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
                                        <CardItem button onPress={() => this.props.AllKidsMealClick()}>
                                            <Body style={{
                                                flexDirection: 'row', justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{ marginTop: 10, marginLeft: -2, fontSize: 16, color: '#555555', fontFamily: "Roboto-Regular" }}>飲食攝取狀況</Text>
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
                                        <CardItem button onPress={() => this.props.AllKidsAvgScoreClick()}>
                                            <Body style={{
                                                flexDirection: 'row', justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{ marginTop: 10, marginLeft: 5, fontSize: 16, color: '#555555', fontFamily: "Roboto-Regular" }}>每日記憶力表現</Text>
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
        marginTop: -5,
        backgroundColor: '#F2F2F2',
    },
    parentView: {
        width: '100%',
        height: 50,
        zIndex: 0,
        backgroundColor: '#144669',
        marginBottom: -5
    },
    parentInfoView: {
        marginTop: -50,
        flexDirection: 'column',
        width: '100%',
        zIndex: -1,

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
        fontFamily:'Roboto-Regular',
        marginTop: 14,
        marginLeft: 32,
    },
    
    childView: {
        zIndex: 1,
        width: '100%',
        height: 250,
        backgroundColor: '#F2F2F2',
        alignItems: 'center',
    },
    cardsize: {
        zIndex: 1,
        marginTop: 5,
        width: 0.9*width,
        height: 80,
        justifyContent:'center'
    },
    

});

export default Memory;
