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
        let wordslength = word.length
        switch (wordslength) {

            case 5:
                return {
                    marginLeft: 150,
                    marginTop: 10,
                    fontSize: 16,
                    color: '#6D7084',
                    fontFamily: "Roboto-Regular"
                };
            case 7:
                return {
                    marginLeft: 130,
                    marginTop: 10,
                    fontSize: 16,
                    color: '#6D7084',
                    fontFamily: "Roboto-Regular"
                };
            default:
                return {
                    marginLeft: 140,
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
        let PublicMemorySortt = []
        this.PublicMemorySortt = this.props.PublicMemery
        console.log(this.PublicMemorySortt)
        let MemoryName = [], Score = [], c = 1
        for (let i = 0; i < 6; i++) {
            MemoryName.push(this.PublicMemorySortt[i].TimeRangeName)
            Score.push(this.PublicMemorySortt[i].Score)
        }
        for (let i = 0; i < 6; i++) {
            if (c != 6) {
                this.state.PublicMemorySort.push(//this.wordlength(Problem[i])
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, opacity: 0.5, color: '#6D7084', fontFamily: "Roboto-Light" }}>{c}</Text>
                            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: "Roboto-Light" }}>{MemoryName[i]}</Text>
                            <Text style={
                                this.wordlength(MemoryName[i])
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
                this.state.PublicMemorySort.push(
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, opacity: 0.5, color: '#6D7084', fontFamily: "Roboto-Light" }}>{c}</Text>
                            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: "Roboto-Light" }}>{MemoryName[i]}</Text>
                            <Text style={
                                this.wordlength(MemoryName[i])
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
                            <Text style={styles.title}>大眾孩童每日記憶力表現</Text>
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

                    <View style={styles.statueView}>

                        <View>
                            <Text style={styles.statuetxtfirst}>0點 ~ </Text>
                        </View>
                        <View>
                            <Text style={styles.statuetxt1}>4點 ~ </Text>
                        </View>
                        <View>
                            <Text style={styles.statuetxt2}>8點 ~ </Text>
                        </View>
                        <View>
                            <Text style={styles.statuetxt3}>12點 ~ </Text>
                        </View>
                        <View>
                            <Text style={styles.statuetxt4}>16點 ~ </Text>
                        </View>
                        <View>
                            <Text style={styles.statuetxt5}>20點 ~ </Text>
                        </View>
                        <View>
                       
                    </View>
                    </View>
                   
                    <ScrollView>
                        <View style={styles.cardsize}>
                            <Card style={{
                                elevation: 0.8,
                                borderRadius: 4,
                            }}>
                                <CardItem>
                                    <Body style={{
                                        flexDirection: 'column', justifyContent: 'flex-start',

                                    }}>
                                    <Text style={styles.subTitle}>各時段平均記憶指數</Text>
                                    {
                                        this.state.PublicMemorySort
                                        }
                                    </Body>
                                </CardItem>
                            </Card>
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
        marginTop:-18,
        marginBottom: 20,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    statuetxtfirst: {
        left: 30,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
   
    
    statuetxt1: {
        left: 70,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    statuetxt2: {
        left: 110,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    statuetxt3: {
        left: 145,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    statuetxt4: {
        left:180,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    statuetxt5: {
        left: 210,
        fontSize: 9,
        color: 'rgba(255,255,255,0.8)'
    },
    chart: {
        width: 350,
        height: 250,
        marginBottom: 10,
        // backgroundColor: 'rgba(221, 221, 255, 0.5)',

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
        marginLeft: 95,
        color: '#636566',
        marginBottom: 5,
    },
    
    cardsize: {
        marginTop: 20,
        marginLeft: 30,
        width: 312,
        height: 330,
    },
});

export default Memory;
