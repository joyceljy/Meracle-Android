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
            //onChangeText={(text) => this.setState({ Account: text })}
            onEndEditing={(evt) => this.setState({ Account: evt.nativeEvent.text })}
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
    render() {
        return (
            //backgroundimage
            <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage} >

                <View style={styles.Viewstyle}>


                    {/*logoView*/}
                    <View style={styles.logo}>
                        <Text>LOGO</Text>
                    </View>
                    {/*loginView*/}
                    <View>
                        <Text>{"\n"}</Text>
                        {/*Account*/}
                        {this.AccountInput()}
                        <Text>{"\n"}</Text>
                        {/*Password*/}
                        {this.PasswordInput()}
                        <Text>{"\n"}</Text>


                        <TouchableOpacity style={styles.Buttonstyle} onPress={() => {
                            if (this.state.Account == '' || this.state.Password == '') {
                                setTimeout(() => this.setState({
                                    err1: true
                                }), 500); // show toast after 0.5s

                                setTimeout(() => this.setState({
                                    err1: false
                                }), 4000); // hide toast after 4s

                            } else {
                                this.props.LoginButtonClick(this.state.Account, this.state.Password)
                            }
                        }}>
                            <Text style={style = styles.ButtonText}>登入</Text>
                        </TouchableOpacity>


                        <Text style={style = styles.Info}
                            onPress={() => this.props.GoRegister()}
                        >
                            {"\n"}還不是會員？ 前往註冊{"\n"}</Text>

                        <Text style={style = styles.Info} onPress={() => this.props.Forgetpw()}>忘記密碼？</Text>
                    </View>



                </View>
                <Toast
                    backgroundColor='rgba(0,0,0,0.8)'
                    visible={this.state.apierr}
                    position={600}
                    shadow={false}
                    animation={false}
                    hideOnPress={true}
                >帳號或密碼錯誤！</Toast>

                <Toast
                    backgroundColor='rgba(0,0,0,0.8)'
                    visible={this.state.err1}
                    position={600}
                    shadow={false}
                    animation={false}
                    hideOnPress={true}
                >帳號或密碼不能為空！</Toast>
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
        width: 350,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 30,

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
        width: 350
    }


});

export default Memory;