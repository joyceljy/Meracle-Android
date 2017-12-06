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
import { LineChart } from 'react-native-charts-wrapper';
class Memory extends Component {
    constructor(props) {
        super(props);

    }
    wordlength(word) {
        // let wordslength = word.length
        switch (word) {

            case "6小時以下":
                return {
                    marginLeft: 120,
                    marginTop: 10,
                    fontSize: 16,
                    color: '#6D7084',
                    fontFamily: "Roboto-Regular"
                };
            case "10小時以上":
                return {
                    marginLeft: 111,
                    marginTop: 10,
                    fontSize: 16,
                    color: '#6D7084',
                    fontFamily: "Roboto-Regular"
                };
            default:
                return {
                    marginLeft: 138,
                    marginTop: 10,
                    fontSize: 16,
                    color: '#6D7084',
                    fontFamily: "Roboto-Regular"
                };

        }


    }
    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 0 }
        }
        let PublicSleepSortt = []
        this.PublicSleepSortt = this.props.PublicSleepOrderby
        console.log(this.PublicSleepSortt)
        let Sleep = [], Score = [], c = 1
        for (let i = 0; i < 5; i++) {
            Sleep.push(this.PublicSleepSortt[i].Avg_SleepName)
            Score.push(this.PublicSleepSortt[i].AvgScore)
        }
        for (let i = 0; i < 5; i++) {
            if (c != 5) {
                this.state.PublicSleepSort.push(//this.wordlength(Problem[i])
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, opacity: 0.5, color: '#6D7084', fontFamily: "Roboto-Light" }}>{c}</Text>
                            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: "Roboto-Light" }}>{Sleep[i]}</Text>
                            <Text style={
                                this.wordlength(Sleep[i])
                            }>{Score[i]}</Text>

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
                    </View>
                )
            }
            else {
                this.state.PublicSleepSort.push(
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, opacity: 0.5, color: '#6D7084', fontFamily: "Roboto-Light" }}>{c}</Text>
                            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: "Roboto-Light" }}>{Sleep[i]}</Text>
                            <Text style={
                                this.wordlength(Sleep[i])
                            }>{Score[i]}</Text>

                        </View>
                    </View>
                )
            }
            c++;
        };
        return (

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
                            <LineChart
                                style={styles.chart}
                                data={this.state.data}
                                xAxis={this.state.xline}
                                yAxis={this.state.yline}
                                // animation={{ durationX: 2000 }}
                                legend={this.state.legend}
                                // gridBackgroundColor={processColor('#ffffff')}
                                drawBarShadow={false}
                                drawValueAboveBar={true}
                                drawLabels={false}
                                drawHighlightArrow={false}
                            />
                        </View>
                    </View>
{
                    // <View style={styles.statueView}>

                    //     <View>
                    //         <Text style={styles.statuetxtfirst}>6小時以下</Text>
                    //     </View>
                    //     <View>
                    //         <Text style={styles.statuetxt1}>6-7小時</Text>
                    //     </View>
                    //     <View>
                    //         <Text style={styles.statuetxt2}>7-8小時</Text>
                    //     </View>
                    //     <View>
                    //         <Text style={styles.statuetxt3}>8-9小時</Text>
                    //     </View>
                    //     <View>
                    //         <Text style={styles.statuetxt4}>9-10小時</Text>
                    //     </View>
                    //     <View>
                    //         <Text style={styles.statuetxt5}>10小時以上</Text>
                    //     </View>
                    //     <View>

                    //     </View>
                    // </View>
        }
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
                                            <Text style={styles.subTitle}>各睡眠時間平均記憶指數</Text>
                                            {this.state.PublicSleepSort}
                                        </Body>
                                    </CardItem>
                                </Card>
                            </View>





                        </View>
                    </ScrollView>
                </Image>
            </View>

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
        zIndex: 1,
        marginTop: -18,
        marginBottom: 30,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    statuetxtfirst: {
        left: 28,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },


    statuetxt1: {
        left: 50,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    statuetxt2: {
        left: 76,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    statuetxt3: {
        left: 110,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    statuetxt4: {
        left: 140,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    statuetxt5: {
        left: 160,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    chart: {
        width: 300,
        height: 250,
        marginBottom: 10,
        // backgroundColor: 'rgba(221, 221, 255, 0.5)',

    },
    parentInfoView: {
        marginBottom: 10,
        flexDirection: 'column',
        width: '100%',
        height: 300,
        // backgroundColor: '#144669',
        // marginTop: 16,
        // alignItems: "stretch",
    },
    conView: {
        marginTop: 40,
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
    subTitle: {
        fontSize: 10,
        lineHeight: 16,
        fontFamily: 'Roboto-Regular',
        marginLeft: 88,
        color: '#636566',
        marginBottom: 5,
    },

    cardsize: {
        marginLeft: 30,
        width: 312,
        height: 284,
    },
});

export default Memory;
