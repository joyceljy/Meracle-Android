import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import Toast from 'react-native-root-toast';



class Memory extends Component {
    constructor(props) {
        super(props);

    }
    AccountInput() {
        return <Kohana
            style={styles.InputTextStyle}
            label={'信箱'}
            iconClass={MaterialsIcon}
            iconName={'email'}
            iconColor={'white'}
            labelStyle={{ color: 'white' }}
            inputStyle={{}}
            onChangeText={(text) => this.setState({ Account: text })}
            useNativeDriver
        />
    }

    render() {
        return (
            //backgroundimage
            <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage} >

                <View style={styles.Viewstyle}>

                    <Image style={{ width: 125, height: 100 }} source={require('../images/forgotpassword.png')} />
                    <Text style={{ fontSize: 20, color: 'white' }}>{"\n"}忘記密碼{"\n"}</Text>
                    <Text style={{ color: 'white' }}>請輸入以下資訊取得新密碼{"\n"}</Text>
                    {/*loginView*/}
                    <View>
                        <Text>{"\n"}</Text>
                        {/*Account*/}
                        {this.AccountInput()}
                        <Text>{"\n"}</Text>


                        <TouchableOpacity style={styles.Buttonstyle1} onPress={() => {
                            if (this.state.Account == '') {
                                setTimeout(() => this.setState({
                                    err1: true
                                }), 500); // show toast after 0.5s

                                setTimeout(() => this.setState({
                                    err1: false
                                }), 4000); // hide toast after 4s
                            } else {
                                this.props.ForgetButtonClick(this.state.Account)
                            }
                        }}>
                            <Text style={style = styles.ButtonText1}>送出</Text>
                        </TouchableOpacity>
                        <Text>{"\n"}</Text>
                        <TouchableOpacity style={styles.Buttonstyle2} onPress={() => {
                            this.props.BackButtonClick()
                        }}>
                            <Text style={style = styles.ButtonText2}>離開</Text>
                        </TouchableOpacity>

                        <Text style={{ textAlign: 'center', color: 'white' }}>{"\n"}系統將會發送新密碼至電子郵件信箱。</Text>

                    </View>

                    {/*Toast*/}
                    <Toast
                        backgroundColor='rgba(0,0,0,0.8)'
                        visible={this.state.err1}
                        position={600}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >帳號不能為空！</Toast>

                    <Toast
                        backgroundColor='rgba(0,0,0,0.8)'
                        visible={this.state.success1}
                        position={600}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >已發送驗證信，請去信箱查收！</Toast>

                    <Toast
                        backgroundColor='rgba(0,0,0,0.8)'
                        visible={this.state.err2}
                        position={600}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >輸入有誤！</Toast>
                </View>
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
    },

    Buttonstyle1: {
        backgroundColor: 'rgb(255,255,255)',
        width: 350,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 30,

    },
    Buttonstyle2: {
        //backgroundColor: 'rgb(255,255,255)',
        width: 350,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'white'

    },
    ButtonText1: {
        textAlign: 'center',
        color: 'black'
    },
    ButtonText2: {
        textAlign: 'center',
        color: 'white'
    },
    InputTextStyle: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 30,
        width: 350
    }


});

export default Memory;