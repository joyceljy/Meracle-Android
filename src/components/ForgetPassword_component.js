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


            <View style={styles.Viewstyle}>
                <View style={styles.topbarView}>
                    <TouchableOpacity onPress={() => {  this.props.BackButtonClick(); }}>
                        <Image source={require('../images/back.png')} style={styles.topbarIcon} />
                    </TouchableOpacity>
                    <Text style={styles.topbarText}>忘記密碼</Text>
                </View>
                <Image style={{ width: 125, height: 100, marginTop: 40 }} source={require('../images/forgotpassword.png')} />
                <Text style={styles.subTitle}>輸入以下資訊取得新密碼{"\n"}</Text>

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
               
               

                <Text style={styles.remindText}>系統將會發送新密碼至電子郵件信箱。</Text>



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
        fontSize: 16,
        lineHeight: 24,
        fontFamily: 'PingFangTC-Regular',
        marginTop: 24,
       
        color: '#FFFFFF',
    },
    Inputtextview: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderRadius: 100,
        width: 304,
        height: 48,
        marginTop: 16,
        //marginLeft: 40,
    },
    InputtextText: {
        width: 250,
        marginLeft: 16,
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
    Buttonstyle1: {
        elevation: 2,
        backgroundColor: '#009688',
        width: 272,
        height: 56,
        borderRadius: 100,
        shadowOffset: { width: 0.6, height: 8, },
        shadowColor: 'rgba(0,0,0,0.20)',
        shadowRadius: 8,
        shadowOpacity: 0,
        //marginLeft: 56,
        marginTop: 80,

    },
  
    ButtonText1: {
        marginTop: 16,
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'Roboto-Medium',
        color: '#FFFFFF',
        marginLeft: 120,
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