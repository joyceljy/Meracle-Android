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
//import LinearGradient from 'react-native-linear-gradient';

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
            <Image source={require('../images/Bg_image.png')} style={styles.backgroundImage} resizeMode="cover" >

                <View style={styles.mainView}>

                <View style={styles.Inputtextview}>
                <Image source={require('../images/email.png')} style={styles.InputtextIcon} />
                <TextInput
                    style={styles.InputtextText}
                    onChangeText={(text) => this.setState({ Account: text })}
                    value={this.state.Account}
                    placeholder="輸入信箱"
                    placeholderStyle={styles.InputtextPlaceholder}
                    placeholderTextColor='rgba(255,255,255,0.5)'
                    autoCorrect={false}
                    underlineColorAndroid='transparent'
                />
            </View>

                    {/*Password*/}
                    {this.PasswordInput()}



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
        borderWidth:1,
        borderColor:'#E0E5ED',
    },
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        opacity: 0.75,

    },
    Inputtextview: {
        flexDirection: 'row',
        backgroundColor: 'rgba(180,218,229,0.30)',
        borderRadius: 100,
        width:272,
        height: 48,
        marginTop: 73,
        marginLeft: 16,
    },
    InputtextText: {
        width: 250,
        marginLeft: 16,
        marginTop:12,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF',
    },
    InputtextPlaceholder: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
    },
    InputtextIcon: {
        marginTop: 12,
        marginLeft: 24,

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
 


});

export default Memory;