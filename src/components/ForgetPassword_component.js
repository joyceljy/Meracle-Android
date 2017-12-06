import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,Dimensions,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView
} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-root-toast';
var {height, width} = Dimensions.get('window');



class Memory extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="position">
            <View style={styles.Viewstyle}>
            
                <View style={styles.topbarView}>
                    <TouchableOpacity onPress={() => {  this.props.BackButtonClick(); }}>
                        <Image source={require('../images/back.png')} style={styles.topbarIcon} />
                    </TouchableOpacity>
                    <Text style={styles.topbarText}>忘記密碼</Text>
                </View>
               
                <Text style={styles.subTitle}>輸入您的電子信箱{'\n'}</Text>
                <Text style={styles.subTitle}>系統將會自動發送新密碼至您的電子信箱！</Text>

                <View style={styles.Inputtextview}>
                    <Image source={require('../images/email_white.png')} style={styles.InputtextIcon} />
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
                    <Text style={style = styles.ButtonText1}>確定發送</Text>
                </TouchableOpacity>
               

                {/*Toast*/}
                <Toast
                    backgroundColor='rgba(0,0,0,0.4)'
                    visible={this.state.err1}
                    position={500}
                    shadow={false}
                    animation={false}
                    hideOnPress={true}
                >帳號不能為空！</Toast>

                <Toast
                    backgroundColor='rgba(0,0,0,0.4)'
                    visible={this.state.success1}
                    position={500}
                    shadow={false}
                    animation={false}
                    hideOnPress={true}
                >已發送驗證信，請去信箱查收！</Toast>

                <Toast
                    backgroundColor='rgba(0,0,0,0.4)'
                    visible={this.state.err2}
                    position={500}
                    shadow={false}
                    animation={false}
                    hideOnPress={true}
                >輸入有誤！</Toast>
               
            </View>
            </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#144669',
    },
    topbarView: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#144669',
        height: 56,
        marginBottom:64,
    },
    topbarIcon: {
        marginLeft: 16,
        marginTop: 16,
    },
    topbarText: {
        marginTop: 14,
        marginLeft: 32,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF',
    },
    subTitle: {
        fontSize: 14,
        lineHeight: 20,
        fontFamily: 'PingFangTC-Regular',
        color: '#FFFFFF',
    },
    Inputtextview: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderRadius: 100,
       // width: 304,
       width: width*0.8,
        height: 48,
        marginTop: 16,
        //marginLeft: 40,
    },
    InputtextText: {
        marginTop:1,
        width: 250,
        marginLeft: 16,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        color: '#FFFFFF',
    },
    InputtextPlaceholder: {
        marginTop:3,
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
    },
    InputtextIcon: {
        marginTop: 12,
        marginLeft: 24,

    },
    Buttonstyle1: {
        elevation: 2,
        backgroundColor: '#009688',
        width: 272,
        height: 56,
        borderRadius: 100,
        shadowOffset: { width: 0.6, height: 8, },
        shadowColor: 'rgba(0,0,0,0.20)',
        shadowOpacity: 8,
        //marginLeft: 56,
        marginTop: 80,
        alignSelf:'center'

    },
  
    ButtonText1: {
        marginTop: 16,
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'Roboto-Medium',
        color: '#FFFFFF',
        marginLeft: 105,
        backgroundColor:'transparent'
    },
   remindText:{
    //marginLeft: 118,
    marginTop: 32,
    fontSize: 14,
    fontFamily: 'Roboto-Light',
    color: '#FFFFFF',
    opacity:0.8
   },

});

export default Memory;