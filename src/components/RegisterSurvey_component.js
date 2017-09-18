import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView

} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-root-toast';
import CustomMultiPicker from "react-native-multiple-select-list";


const Q1List = {
    "正常": "正常",
    "過動": "過動",
    "自閉": "自閉",
    "學習障礙": "學習障礙",
    "智能障礙": "智能障礙",
    "其他特殊疾病": "其他特殊疾病",

}

const Q2List = {
    "6小時以下": "6小時以下",
    "6-7小時": "6-7小時",
    "7-8小時": "7-8小時",
    "8-9小時": "8-9小時",
    "9-10小時": "9-10小時",
    "10小時以上": "10小時以上",

}

const Q3List = {
    "全穀根莖類": "全穀根莖類",
    "蛋豆魚肉類": "蛋豆魚肉類",
    "乳製品": "乳製品",
    "蔬菜類": "蔬菜類",
    "水果類": "水果類",
}




class Memory extends Component {
    constructor(props) {
        super(props);

    }
    setQ3(q3) {
        for (i = 0; i <= 5; i++) {
            if (q3[i] === "全穀根莖類") {
                this.setState({ cereal: true });
            }
            if (q3[i] === "蛋豆魚肉類") {
                this.setState({ meat: true })
            }
            if (q3[i] === "乳製品") {
                this.setState({ milk: true })
            }
            if (q3[i] === "蔬菜類") {
                this.setState({ veg: true })
            }
            if (q3[i] === "水果類") {
                this.setState({ fruit: true })
            }
        }
    }


    render() {
        return (
            //backgroundimage
            <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage} >

                <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>小調查</Text>
                <Text>{'\n'}</Text>

                <ScrollView contentContainerStyle={styles.scrollContainer}>


                    <Text style={styles.question}>Q1: 小孩目前情況(單選)</Text>
                    <CustomMultiPicker
                        options={Q1List}
                        search={false} // should show search bar?
                        multiple={false} //
                        returnValue={"label"} // label or value
                        callback={(res) => { this.setState({ Q1: res }) }} // callback, array of selected items
                        rowBackgroundColor={'rgba(255,255,255,0.5)'}
                        rowHeight={30}
                        rowRadius={5}
                        iconColor={"#00a2dd"}
                        iconSize={20}
                        unselectedIconName={"md-checkmark-circle-outline"}
                        selectedIconName={"md-checkmark-circle"}
                        //selectedIconName={"ios-checkmark-circle-outline"}
                        //unselectedIconName={"ios-radio-button-off-outline"}
                        scrollViewHeight={217}
                        selected={["正常"]} // list of options which are selected by default
                    />

                    <Text>{'\n'}</Text>

                    <Text style={styles.question}>Q2: 小孩平時睡眠時間(單選)</Text>
                    <CustomMultiPicker
                        options={Q2List}
                        search={false} // should show search bar?
                        multiple={false} //
                        returnValue={"label"} // label or value
                        callback={(res) => { this.setState({ Q2: res }) }} // callback, array of selected items
                        rowBackgroundColor={'rgba(255,255,255,0.5)'}
                        rowHeight={30}
                        rowRadius={5}
                        iconColor={"#00a2dd"}
                        iconSize={20}
                        unselectedIconName={"md-checkmark-circle-outline"}
                        selectedIconName={"md-checkmark-circle"}
                        scrollViewHeight={217}
                        selected={["6小時以下"]} // list of options which are selected by default
                    />

                    <Text>{'\n'}</Text>

                    <Text style={styles.question}>Q3: 平時較注重小孩哪些方面的飲食(複選)</Text>
                    <CustomMultiPicker
                        options={Q3List}
                        search={false} // should show search bar?
                        multiple={true} //
                        returnValue={"label"} // label or value
                        callback={(res) => {
                            this.setState({ Q3: res }, function () {
                                this.setQ3(this.state.Q3)
                            })
                        }} // callback, array of selected items
                        rowBackgroundColor={'rgba(255,255,255,0.5)'}
                        rowHeight={30}
                        rowRadius={5}
                        iconColor={"#00a2dd"}
                        iconSize={20}
                        unselectedIconName={"md-checkmark-circle-outline"}
                        selectedIconName={"md-checkmark-circle"}
                        scrollViewHeight={180}
                        selected={["全穀根莖類"]} // list of options which are selected by default
                    />

                    <Text>{'\n'}</Text>
                    <View style={styles.Viewstyle}>

                        <Text>{}</Text>

                        <TouchableOpacity style={styles.Buttonstyle} onPress={() => {
                            if (this.state.Q1 == '' || this.state.Q2 == '' || this.state.Q3 == '') {

                                //顯示錯誤訊息
                                setTimeout(() => this.setState({
                                    err1: true
                                }), 300); // show toast after 0.5s

                                setTimeout(() => this.setState({
                                    err1: false
                                }), 5000); // hide toast after 5s
                            } else {

                                //problem,sleep,fruit,veg,cereal,meat,milk
                                this.props.ButtonClick(this.props.login_account, this.state.Q1[0], this.state.Q2[0], this.state.fruit, this.state.veg,
                                    this.state.cereal, this.state.meat, this.state.milk)
                            }
                        }}>
                            <Text style={style = styles.ButtonText}>完成</Text>
                        </TouchableOpacity>


                    </View>

                    {/*Toast*/}
                    <Toast
                        backgroundColor='rgba(0,0,0,0.8)'
                        visible={this.state.err1}
                        position={600}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >有題目未選擇！</Toast>
                </ScrollView>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
        alignItems: 'center',
        //flex: 1,
        justifyContent: 'center'


    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },
    Buttonstyle: {
        backgroundColor: 'rgb(255,255,255)',
        width: 100,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    ButtonText: {
        textAlign: 'center',
        color: 'black'
    },
    multichoice: {



    },
    multicontainer: {


    },
    question: {
        fontWeight: 'bold',
        fontSize: 15,
        color: 'white'

    },
    scrollContainer: {
    paddingVertical: 10
  }
    

});

export default Memory;
