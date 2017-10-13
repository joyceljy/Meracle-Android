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
import Toast from 'react-native-root-toast';


class Memory extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            //backgroundimage
            <Image source={require('../images/Bg.png')} style={styles.backgroundImage} resizeMode="cover" >

                <View style={styles.logoView}>
                    <Image source={require('../images/Logo.png')} style={styles.logoImage} />
                </View>

                <View style={styles.mainView}>
                    {/*Account*/}
                    <View style={[styles.Inputtextview, { marginTop: 73 }]}>
                        <Image source={require('../images/email.png')} style={styles.InputtextIcon} />
                        <TextInput
                            style={styles.InputtextText}
                            onChangeText={(text) => this.setState({ Account: text })}
                            value={this.state.Account}
                            placeholder="輸入信箱"
                            placeholderStyle={styles.InputtextPlaceholder}
                            placeholderTextColor='rgba(20, 70, 105,0.5)'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    {/*Password*/}
                    <View style={[styles.Inputtextview, { marginTop: 8 }]}>
                        <Image source={require('../images/password.png')} style={styles.InputtextIcon} />
                        <TextInput
                            style={styles.InputtextText}
                            onChangeText={(text) => this.setState({ Password: text })}
                            value={this.state.Password}
                            placeholder="輸入密碼"
                            placeholderStyle={styles.InputtextPlaceholder}
                            placeholderTextColor='rgba(20, 70, 105,0.5)'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            secureTextEntry={true}
                        />
                    </View>
                    <Text style={style = styles.forgetText} onPress={() => this.props.Forgetpw()}>忘記密碼？</Text>


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

                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.notmemberText}>還不是會員？</Text>
                    <Text style={style = styles.registerText}
                        onPress={() => this.props.GoRegister()}
                    >
                        前往註冊
                    </Text>
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
    mainView: {
        width: 304,
        height: 285,
        borderRadius: 8,
        backgroundColor: 'rgb(255,255,255)',
        borderWidth: 1,
        borderColor: '#E0E5ED',
        marginLeft: 40,
        marginTop: -57,
        zIndex: 1,
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        zIndex: -1,

    },
    logoView: {
        width: 120,
        height: 120,
        zIndex: 3,
        borderRadius: 100,
        backgroundColor: 'rgb(255,255,255)',
        marginTop: 110,
        marginLeft: 132,
        elevation: 6,
    },
    logoImage: {
        width: 88,
        height: 88,
        marginLeft: 16,
        marginTop: 16,
    },
    Inputtextview: {
        borderColor: 'rgba(204,204,204,10)',
        borderWidth: 0.5,
        flexDirection: 'row',
        backgroundColor: 'rgba(180,218,229,0.30)',
        borderRadius: 100,
        width: 272,
        height: 48,
        marginLeft: 16,
    },
    InputtextText: {
        width: 250,
        height: 48,
        marginLeft: 16,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        color: '#144669',
    },
    InputtextPlaceholder: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
    },
    InputtextIcon: {
        marginTop: 12,
        marginLeft: 24,
        opacity: 0.5,

    },
    Buttonstyle: {
        backgroundColor: 'rgb(20, 70, 105)',
        width: 272,
        height: 48,
        borderRadius: 30,
        shadowColor: 'rgba(0,0,0,0.25)',
        borderRadius: 100,
        marginLeft: 16,
        marginTop: 16,
        elevation: 2,
    },
    ButtonText: {
        marginLeft: 116,
        marginTop: 12,
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'Roboto-Medium',
        color: '#FFFFFF',
    },
    forgetText: {
        marginLeft: 116,
        marginTop: 12,
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'Roboto-Regular',
        color: '#144669',
    },
    notmemberText: {
        marginLeft: 118,
        marginTop: 16,
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        color: '#FFFFFF',
    },
    registerText: {
        marginLeft: 4,
        marginTop: 16,
        fontSize: 14,
        fontFamily: 'Roboto-Medium',
        color: '#FFFFFF',
        textDecorationLine: 'underline'
    },



});

export default Memory;