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
import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Toast from 'react-native-root-toast';


class Memory extends Component {
    constructor(props) {
        super(props);

    }


    AccountInput() {
        return <Kohana
            style={styles.InputTextStyle}
            label={'信箱(帳號)'}
            iconClass={MaterialsIcon}
            iconName={'email'}
            iconColor={'white'}
            labelStyle={{ color: 'white' }}
            inputStyle={{}}
            onChangeText={(text) => this.setState({ Account: text })}
            useNativeDriver
        />
    }
    PasswordInput() {
        return <Kohana secureTextEntry={true}
            style={styles.InputTextStyle}
            label={'密碼'}
            iconClass={MaterialsIcon}
            iconName={'lock'}
            iconColor={'white'}
            labelStyle={{ color: 'white' }}
            inputStyle={{}}
            onChangeText={(text) => this.setState({ Password: text })}
            useNativeDriver
        />
    }
    PasswordVerifyInput() {
        return <Kohana secureTextEntry={true}
            style={styles.InputTextStyle}
            label={'密碼確認'}
            iconClass={MaterialsIcon}
            iconName={'lock'}
            iconColor={'white'}
            labelStyle={{ color: 'white' }}
            inputStyle={{}}
            onChangeText={(text) => this.setState({ VPassword: text })}
            useNativeDriver
        />
    }
    AddressInput() {
        return <Kohana
            style={styles.InputTextStyle}
            label={'地址'}
            iconClass={MaterialsIcon}
            iconName={'home'}
            iconColor={'white'}
            labelStyle={{ color: 'white' }}
            inputStyle={{}}
            onChangeText={(text) => this.setState({ Address: text })}
            useNativeDriver
        />
    }
    
    NameInput() {
        return <Kohana
            style={styles.InputTextStyle}
            label={'家長姓名'}
            iconClass={MaterialsIcon}
            iconName={'account-box'}
            iconColor={'white'}
            labelStyle={{ color: 'white' }}
            inputStyle={{}}
            onChangeText={(text) => this.setState({ Name: text })}
            useNativeDriver
        />
    }

    render() {
        return (
            //backgroundimage
            <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage} >

                <View style={styles.Viewstyle}>

                    {/*logoView*/}
                    <View style={styles.logo}>
                        <Text>LOGO</Text>
                    </View>
                    {/*registerView*/}
                    <View>
                        <Text>{"\n"}</Text>
                        {/*Account*/}
                        {this.AccountInput()}
                        <Text>{"\n"}</Text>
                        {/*Name*/}
                        {this.NameInput()}
                        <Text>{"\n"}</Text>
                        {/*Password*/}
                        {this.PasswordInput()}
                        <Text>{"\n"}</Text>
                        {/*PasswordVierify*/}
                        {this.PasswordVerifyInput()}
                        <Text>{"\n"}</Text>
                        {/*Address*/}
                        {this.AddressInput()}
                        <Text>{"\n"}</Text>
                        
                        <TouchableOpacity style={styles.Buttonstyle} onPress={() => {
                            if (this.state.Account == '' || this.state.Password == '' || this.state.Name == ''
                                || this.state.VPassword == ''  || this.state.Address == '') {

                                //顯示錯誤訊息
                                setTimeout(() => this.setState({
                                    err1: true
                                }), 300); // show toast after 0.5s

                                setTimeout(() => this.setState({
                                    err1: false
                                }), 5000); // hide toast after 5s
                            } else if (this.state.Password != this.state.VPassword) {
                                //顯示錯誤訊息
                                setTimeout(() => this.setState({
                                    err2: true
                                }), 300); // show toast after 0.5s

                                setTimeout(() => this.setState({
                                    err2: false
                                }), 5000); // hide toast after 5s
                            } else {
                                this.props.RegisterButtonClick(this.state.Account, this.state.Password, this.state.Name, this.state.Address,)
                            }
                        }}>
                            <Text style={style = styles.ButtonText}>註冊</Text>
                        </TouchableOpacity>

                        <Text style={styles.Info} onPress={() => this.props.GoLogin()}>已有帳號？ 前往登入</Text>
                    </View>

                    {/*Toast*/}
                    <Toast
                        backgroundColor='rgba(0,0,0,0.8)'
                        visible={this.state.err1}
                        position={600}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >欄位不能為空！</Toast>

                    <Toast
                        backgroundColor='rgba(0,0,0,0.8)'
                        visible={this.state.err2}
                        position={600}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >兩次密碼輸入不一致！</Toast>

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
    logo: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
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
    Info: {
        textAlign: 'center',
        color: 'white'
    },

    InputTextStyle: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 30,
        width: 350,
        height: 40,
    }

});

export default Memory;
