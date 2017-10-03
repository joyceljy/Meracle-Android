import React, { Component } from 'react';
import SideBarContent from '../containers/SideBarContent';
import {
    ScrollView,
    TextInput,
    View,
    Image,
    StyleSheet,
    Alert, Text,
    TouchableOpacity,
    processColor
} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Drawer from 'react-native-drawer';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Card, CardItem, Body } from 'native-base';
import { MultiPickerMaterialDialog } from 'react-native-material-dialog';
import { LineChart } from 'react-native-charts-wrapper';
// import { MultiLineChart } from 'react-native-d3multiline-chart'
class Memory extends Component {
    constructor(props) {
        super(props);
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
        // this.state = {
        //     select: false,
        //     selectitems: [],
        // }

    }
    state = {
        select: false,
        selectitems: [],
        data: {
            dataSets: [{
                values: [
                    { y: 340 },
                    { y: 290, marker: "290" },
                    { y: 340, marker: "340" },
                    { y: 390, marker: "390" },
                    { y: 350, marker: "350" }],

                label: '黃大明',
                config: {
                    lineWidth: 4,
                    drawValues: false,
                    circleRadius: 5,
                    highlightEnabled: true,
                    drawHighlightIndicators: true,
                    color: processColor('#9ACBD9'),
                    valueTextColor:processColor('#9ACBD9'),
                    circleHoleColor:processColor('#0D3B5C'),
                    drawFilled: true,
                    valueTextSize: 14,
                   
                    fillColor: processColor('#0D3B5C'),
                    fillAlpha: 80,
                    valueFormatter: "###",
                    circleColor: processColor('#9ACBD9'),
                    // lineScatterCandleRadar: {
                    //     highlightLineWidth: 10
                    // }
                }

            },

            {
                values: [
                    { y: 300 },
                    { y: 350, marker: "350" },
                    { y: 310, marker: "310" },
                    { y: 360, marker: "360" },
                    { y: 410, marker: "410" }],

                label: '黃水水',
                config: {
                    lineWidth: 4,
                    drawValues: false,
                    circleRadius: 5,
                    highlightEnabled: true,
                    drawHighlightIndicators: true,
                    color: processColor('#F5808B'),
                    valueTextColor:processColor('#F5808B'),
                    circleHoleColor:processColor('#0D3B5C'),
                    drawFilled: true,
                    valueTextSize: 14,
                   
                    fillColor: processColor('#0D3B5C'),
                    fillAlpha: 80,
                    valueFormatter: "###",
                    circleColor: processColor('#F5808B'),
                }
            }],
        },
        xAxis: {
            valueFormatter: ['第1次', '第2次', '第3次', '第4次', '第5次'],
            granularityEnabled: true,
            granularity: 1,
            position: 'BOTTOM',
            textColor:processColor('#B4DAE5'),//x軸字的顏色
            gridColor:processColor('rgba(255,255,255,0.3)'),//y軸線的顏色
            axisLineWidth:2,
            textSize:10,
            // gridDashedLine:{spaceLength:10}
            drawGridLines:false
        },
        legend: {
            enabled: true,
            textColor: processColor('#FFFFFF'),
            textSize: 8,
            position: 'BELOW_CHART_RIGHT',
            form: 'CIRCLE',
            formSize: 8,
            xEntrySpace: 10,
            yEntrySpace: 5,
            formToTextSpace: 5,
            wordWrapEnabled: true,
            maxSizePercent: 0.5,
            custom: {
                colors: [processColor('#9ACBD9'), processColor('#F5808B')],
                labels: ['黃大明', '黃水水',]
            }
        },
        marker: {
            enabled: true,
            markerColor: processColor('rgba(255,255,255,0)'),
            textColor: processColor('#B4DAE5'),
            markerFontSize: 14,
        },

        selectedEntry: ""

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
        let borderColor = processColor("#000000");
        return (
            //<View style={styles.container}>

            <View style={styles.Back}>

                <Drawer
                    type="displace"
                    ref={(ref) => this._drawer = ref}
                    content={<SideBarContent />}
                    openDrawerOffset={16}
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
                    {
                        //標題
                    }
                    <View style={styles.topbar}>
                        <TouchableOpacity onPress={this.openControlPanel} style={styles.menuIcon}>
                            <Image source={require('../images/Icon_menu.png')} ></Image>
                        </TouchableOpacity>
                        <Text style={styles.title}>遊戲測驗結果</Text>
                        <Image source={require('../images/Icon_reload.png')} style={styles.reloadIcon}></Image>
                    </View>
                    {
                        //選單
                    }
                    <View style={styles.kidbuttonbar}>
                        <TouchableOpacity style={styles.kidbutton} onPress={() => this.setState({ select: true })}>
                            <Image source={require('../images/person.png')} style={styles.personicon}>
                            </Image>
                            <Text numberOfLines={1} style={styles.kidname}>
                                {this.state.selectitems.length === 0
                                    ? '黃小明'
                                    : this
                                        .state
                                        .selectitems
                                        .map(item => item.label)
                                        .join('+')}</Text>
                        </TouchableOpacity>
                    </View>
                    <MultiPickerMaterialDialog
                        title={'選擇要顯示的數據'}
                        titleColor={'#555555'}
                        items={LIST.map((row, index) => {
                            return { value: index, label: row }
                        })}
                        visible={this.state.select}
                        selectedItems={this.state.selectitems}
                        okLabel={'確定'}
                        scrolled={true}
                        cancelLabel={'取消'}
                        onCancel={() => this.setState({ select: false })}
                        onOk={(result) => {
                            this.setState({ select: false });
                            this.setState({ selectitems: result.selectedItems });
                            console.log(this.state.selectitems)
                        }} />

                    {
                        //圖表
                    }
                    <View style={{ top: -10 }}>
                        <LineChart
                            style={styles.chart}
                            data={this.state.data}
                            chartDescription={{ text: '' }}
                            legend={this.state.legend}
                            marker={this.state.marker}
                            animation={{ durationX: 500 }}
                            drawGridBackground={true}
                            // borderWidth={null}
                            drawBorders={false}
                            touchEnabled={true}
                            dragEnabled={true}
                            scaleEnabled={true}
                            scaleXEnabled={true}
                            scaleYEnabled={true}
                            pinchZoom={true}
                            doubleTapToZoomEnabled={false}
                            dragDecelerationEnabled={true}
                            dragDecelerationFrictionCoef={0.99}
                            yAxis={{ left: { textColor:processColor('#B4DAE5'),axisLineWidth:2,gridDashedLine:{lineLength:2},textSize:10 },right:{drawLabels:false,drawAxisLine:false} }}
                            gridBackgroundColor={processColor('#144669')}
                            keepPositionOnRotation={false}
                            xAxis={this.state.xAxis}


                        />
                    </View>
                    {
                        //孩童詳細數據<ScrollView >
                    }
 <ScrollView>
                    <View style={styles.underbar}>
                       

                            <Text style={styles.underbartext}>查看孩童的詳細數據</Text>

                            <View style={styles.cardsize}>
                                <Card style={{
                                    elevation: 0.8,
                                    borderRadius: 4,
                                }}>
                                    <CardItem button>
                                        <Body style={{ flexDirection: 'row', }}>
                                            <View style={styles.kidcardimgstyle}>
                                                <Image source={require('../images/avatar_boy.png')} style={{ top: 7.5, left: 5.5 }}></Image></View>
                                            <Text style={styles.kidcardname}>
                                                黃小明
                                    </Text>
                                            <Image source={require('../images/arrow_right copy 4.png')} style={{ left: 185 }}></Image>
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
                                            <View style={styles.kid2cardimgstyle}>
                                                <Image source={require('../images/avatar_girl.png')} style={{ top: 6, left: 5 }}></Image>
                                            </View>
                                            <Text style={styles.kidcardname}>
                                                黃水水
                                    </Text>
                                            <Image source={require('../images/arrow_right copy 4.png')} style={{ left: 185 }}></Image>
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
                                            <View style={styles.kid3cardimgstyle}>
                                                <Image source={require('../images/avatar_boy.png')} style={{ top: 7.5, left: 5.5 }}></Image></View>
                                            <Text style={styles.kidcardname}>
                                                陳小華
                                 </Text>
                                            <Image source={require('../images/arrow_right copy 4.png')} style={{ left: 185 }}></Image>
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
                                            <View style={styles.kid4cardimgstyle}>
                                                <Image source={require('../images/avatar_girl.png')} style={{ top: 6, left: 5 }}></Image>
                                            </View>
                                            <Text style={styles.kidcardname}>
                                                林水水
                     </Text>
                                            <Image source={require('../images/arrow_right copy 4.png')} style={{ left: 185 }}></Image>
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
                                            <View style={styles.kid5cardimgstyle}>
                                                <Image source={require('../images/avatar_boy.png')} style={{ top: 7.5, left: 5.5 }}></Image></View>
                                            <Text style={styles.kidcardname}>
                                                黃小成
                             </Text>
                                            <Image source={require('../images/arrow_right copy 4.png')} style={{ left: 185 }}></Image>
                                        </Body>
                                    </CardItem>
                                </Card>
                            </View>
                            
                       
                    </View>
 </ScrollView>
                </Drawer>
            </View>
        )
    }
}
const LIST = [
    '黃小明',
    '黃水水',
    '陳小華',
    '林水水',
    '陳小花',
    '大眾孩童'
]


const styles = StyleSheet.create({

    topbar: {
        flexDirection: 'row',
        height: 56,
    },
    menuIcon: {
        top: 16,
        left: 16,
        bottom: 16,
        width: 24,
        height: 24,
    },
    reloadIcon: {
        top: 16,
        bottom: 16,
        right: 16,
        width: 24,
        height: 24
    },
    title: {
        top: 16,
        bottom: 16,
        left: 44,
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#FFFFFF',
        letterSpacing: 0.5,
        lineHeight: 24,
        width: 312,
        height: 24
    },
    Back: {
        backgroundColor: '#144669',
        width: '100%',
        height: '100%'
    },
    kidbutton: {
        // top: 16,
        left: 16,
        // bottom: 16,
        width: 328,
        height: 48,
        backgroundColor: 'rgba(255,255,255,0.20)',
        borderRadius: 4,
    },
    personicon: {
        top: 13,
        left: 16,
        bottom: 13,
        width: 22,
        height: 22
    },
    kidbuttonbar: {
        justifyContent: 'center',
        height: 80,
        // backgroundColor: 'red'
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
        width: 360,
        height: 300,
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
    cardsize: {
        top: 8,
        left: 8,
        width: 344,
        height: 54,
    },
    kidcardname: {
        left: 12,
        color: '#144669',
        fontSize: 16,
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
        bottom: 10,
        // justifyContent: 'center',
        left: -10,
        backgroundColor: '#9ACBD9'

    },
    kid2cardimgstyle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        bottom: 10,
        left: -10,
        backgroundColor: '#F5808B'
    },
    kid3cardimgstyle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        bottom: 10,
        left: -10,
        backgroundColor: '#F2992E'
    },
    kid4cardimgstyle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        bottom: 10,
        left: -10,
        backgroundColor: '#2F9A9E'
    },
    kid5cardimgstyle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        bottom: 10,
        left: -10,
        backgroundColor: '#A77DC2'
    },
    chart: {
        width: 384,
        height: 295,

        // backgroundColor: '#FF8EFF'

    },
})
export default Memory;