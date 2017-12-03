import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';
import SideBarContent from '../containers/SideBarContent';


class Memory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password_pre: '',
            password_aft: '',
            password_check: '',
            empty_error: false,
            checknewpsd_error: false
        }
    }


    render() {

        return (
            
            <View style={styles.Viewstyle}>
            <KeyboardAvoidingView behavior="position" >
                <View style={styles.topbarView}>
                    <TouchableOpacity onPress={() => { this.props.BackButton(); }}>
                        <Image source={require('../images/back.png')} style={styles.topbarIcon} />
                    </TouchableOpacity>
                    <Text style={styles.topbarText}>修改密碼 </Text>
                </View>
                <View style={styles.Inputview}>
                    {/*Password*/}
                    <View style={[styles.Inputtextview, { marginTop: 8 }]}>
                        <Image source={require('../images/password-white.png')} style={styles.InputtextIcon} />
                        <TextInput
                            style={styles.InputtextText}
                            onChangeText={(text) => this.setState({ password_pre: text })}
                            value={this.state.Password}
                            placeholder="輸入目前密碼"
                            placeholderStyle={styles.InputtextPlaceholder}
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            secureTextEntry={true}
                        />
                    </View>
                    {/*new Password*/}
                    <View style={[styles.Inputtextview, { marginTop: 8 }]}>
                        <Image source={require('../images/password-white.png')} style={styles.InputtextIcon} />
                        <TextInput
                            style={styles.InputtextText}
                            onChangeText={(text) => this.setState({ password_aft: text })}
                            value={this.state.password_aft}
                            placeholder="輸入新密碼"
                            placeholderStyle={styles.InputtextPlaceholder}
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            secureTextEntry={true}
                        />
                    </View>
                    {/*check new Password*/}
                    <View style={[styles.Inputtextview, { marginTop: 8 }]}>
                        <Image source={require('../images/password-white.png')} style={styles.InputtextIcon} />
                        <TextInput
                            style={styles.InputtextText}
                            onChangeText={(text) => this.setState({ password_check: text })}
                            value={this.state.password_check}
                            placeholder="確認新密碼"
                            placeholderStyle={styles.InputtextPlaceholder}
                            placeholderTextColor='rgba(255,255,255,0.5)'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            secureTextEntry={true}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.editButton} onPress={() => {
                    if (this.state.password_pre == '' || this.state.password_aft == '' || this.state.password_check == '') {
                        //顯示錯誤訊息
                        setTimeout(() => this.setState({
                            empty_error: true
                        }), 300); // show toast after 0.5s

                        setTimeout(() => this.setState({
                            empty_error: false
                        }), 5000); // hide toast after 5s
                    }
                    else if (this.state.password_pre != '' && this.state.password_aft != this.state.password_check) {
                        //顯示錯誤訊息
                        setTimeout(() => this.setState({
                            checknewpsd_error: true
                        }), 300); // show toast after 0.5s

                        setTimeout(() => this.setState({
                            checknewpsd_error: false
                        }), 5000); // hide toast after 5s
                    }
                    else {
                        this.props.EditPasswordClick(this.props.login_account, this.state.password_pre, this.state.password_aft,this.props.login_token)
                    }
                }}>
                    <Text style={styles.editButtonText}>確定更新</Text>
                </TouchableOpacity>
                {/*Toast*/}
                <Toast
                    backgroundColor='rgba(0,0,0,0.4)'
                    visible={this.state.empty_error}
                    position={500}
                    shadow={false}
                    animation={false}
                    hideOnPress={true}
                >欄位不能為空！</Toast>
                <Toast
                    backgroundColor='rgba(0,0,0,0.4)'
                    visible={this.state.checknewpsd_error}
                    position={500}
                    shadow={false}
                    animation={false}
                    hideOnPress={true}
                >新密碼與確認新密碼不一致！</Toast>
                </KeyboardAvoidingView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
        flex: 1,
        width: '100%',
        backgroundColor: '#144669',
    },
    topbarView: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#144669',
        // height: 56,
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
        color: 'rgb(255,255,255)',
    },
    Inputview: {
        marginTop: 24,
        marginLeft: 40,
    },
    Inputtextview: {
        flexDirection: 'row',
        backgroundColor: 'rgba(180,218,229,0.30)',
        borderRadius: 100,
        width: 304,
        height: 48,
        borderColor: 'rgba(180,218,229,0.30)',
        borderWidth: 0.5,
    },
    InputtextText: {
        marginTop:3,
        width: 250,
        height: 48,
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
        opacity: 0.5,

    },
    editButton: {
        backgroundColor: '#009688',
        width: 272,
        height: 56,
        borderRadius: 100,
        shadowOffset: { width: 0.6, height: 8, },
        shadowColor: 'rgba(0,0,0,0.20)',
        shadowRadius: 8,
        shadowOpacity: 0,
        marginLeft: 56,
        marginTop: 32,
        elevation: 2,
        
    },
    editButtonText: {
        marginTop: 16,
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'Roboto-Medium',
        color: 'rgb(255,255,255)',
        marginLeft: 97,
    },

});

export default Memory;