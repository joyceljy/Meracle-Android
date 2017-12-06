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
import { PieChart } from 'react-native-charts-wrapper';
class Memory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MealSort: [],
        }
    }
    wordlength(word) {
        let wordslength = word.length
        switch (wordslength) {

            case 5:
                return {
                    marginLeft: 91,
                    marginTop: 10,
                    fontSize: 16,
                    color: '#6D7084',
                    fontFamily: "Roboto-Regular"
                };
            case 3:
                return {
                    marginLeft: 122,
                    marginTop: 10,
                    fontSize: 16,
                    color: '#6D7084',
                    fontFamily: "Roboto-Regular"
                };


        }


    }
    colorcircle(meal) {
        // let wordslength = word.length
        switch (meal) {

            case "Eat_Cereal":
                return {
                    marginLeft: 20,
                    marginTop: 18,
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                    backgroundColor: '#9ACBD9'
                };
            case "Eat_Meat":
                return {
                    marginLeft: 20,
                    marginTop: 18,
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                    backgroundColor: '#2F9A9E'
                };
            case "Eat_Milk":
                return {
                    marginLeft: 20,
                    marginTop: 18,
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                    backgroundColor: '#F2992E'
                };
            case "Eat_Veg":
                return {
                    marginLeft: 20,
                    marginTop: 18,
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                    backgroundColor: '#F5808B'
                };
            case "Eat_Fruit":
                return {
                    marginLeft: 20,
                    marginTop: 18,
                    width: 10,
                    height: 10,
                    borderRadius: 50,
                    backgroundColor: '#A77DC2'
                };

        }


    }
    namechange(name) {
        switch (name) {

            case "Eat_Cereal":
                return "全穀根莖類";
            case "Eat_Meat":
                return "蛋豆魚肉類";
            case "Eat_Milk":
                return "乳製品";
            case "Eat_Veg":
                return "蔬菜類"
            case "Eat_Fruit":
                return "水果類"

        }
    }
    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 0 }
        }
        let MealSort = []
        this.MealSort = this.props.PublicCerealOrderBy
        let Meal = [], Percentage = [], c = 1
        console.log(this.MealSort)
        for (let i = 0; i < 5; i++) {
            Meal.push(this.MealSort[i].Key)
            Percentage.push(this.MealSort[i].Value)
        }
        for (let i = 0; i < 5; i++) {
            if (c != 5) {
                this.state.MealSort.push(//this.wordlength(Problem[i])
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, opacity: 0.5, color: '#6D7084', fontFamily: "Roboto-Light" }}>{c}</Text>
                            <View style={this.colorcircle(Meal[i])} />
                            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: "Roboto-Light" }}>{this.namechange(Meal[i])}</Text>
                            <Text style={
                                this.wordlength(this.namechange(Meal[i]))
                            }>{Percentage[i]}</Text>

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
                this.state.MealSort.push(
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginLeft: 5, marginTop: 10, fontSize: 14, opacity: 0.5, color: '#6D7084', fontFamily: "Roboto-Light" }}>{c}</Text>
                            <View style={this.colorcircle(Meal[i])} />
                            <Text style={{ marginLeft: 20, marginTop: 10, fontSize: 16, color: '#6D7084', fontFamily: "Roboto-Light" }}>{this.namechange(Meal[i])}</Text>
                            <Text style={
                                this.wordlength(this.namechange(Meal[i]))
                            }>{Percentage[i]}</Text>

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
                            <Text style={styles.title}>大眾孩童飲食攝取</Text>
                        </View>
                    </View>

                    <View style={styles.parentInfoView}>
                        <View style={styles.conView}>
                            {
                                //空心圓
                            }
                            <View style={styles.magnifyingGlass}>
                                <View style={styles.magnifyingGlassCircle} />
                            </View>
                            {
                                //中間Meal
                            }
                            <View >
                                <Image style={{ zIndex: 2, marginLeft: -30, marginTop: 97, position: 'absolute' }} source={require('../images/Meal.png')} />
                            </View>
                            {
                                //piechart
                            }
                            <View style={{ zIndex: 1, }}>
                                <PieChart
                                    style={styles.chart}
                                    logEnabled={true}
                                    data={this.state.data}
                                    legend={this.state.legend}
                                    entryLabelTextSize={20}
                                    rotationEnabled={false}
                                    drawSliceText={true}
                                    centerText={''}
                                    centerTextRadiusPercent={100}
                                    holeRadius={45}
                                    holeColor={processColor('#f0f0f0')}
                                    transparentCircleRadius={45}
                                    transparentCircleColor={processColor('#f0f0f088')}
                                    maxAngle={360}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.statueView}>


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
                                <Text style={styles.subTitle}>各飲食平均記憶指數</Text>
                                    {this.state.MealSort}
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
    magnifyingGlass: {
        zIndex: 0,
        marginLeft: -20,
        marginTop: 110,
        position: 'absolute'
    },
    magnifyingGlassCircle: {
        width: 245,
        height: 245,
        borderRadius: 150,
        borderWidth: 8,
        borderColor: 'white'
    },
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
        // zIndex: 1,
        marginTop: 10,
        marginBottom: 20,
        marginLeft: 50,
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    chart: {
        width: 256,
        height: 256,

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
        marginTop: 38,
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
        marginLeft: 30,
        width: 312,
        height: 290,//284
    },
});

export default Memory;
