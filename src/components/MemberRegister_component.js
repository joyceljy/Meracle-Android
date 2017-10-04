import React, { Component } from 'react';
import {
    Text,
    TextInput,
    View,
    Button,
    StyleSheet,
    Image,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Toast from 'react-native-root-toast';


class Memory extends Component {
    constructor(props) {
        super(props);

    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        var newDate = date.getFullYear().toString() + "/" + date.getMonth().toString() + "/" + date.getDate().toString();
        this.setState({ Birthdate: newDate })
        this._hideDateTimePicker();
    };

    // time() {
    //     var count = 0;
    //     this.timer = setInterval(
    //         () => {
    //             count++
    //             if (count == 4) {
    //                 clearTimeout(this.timer)
    //                 this.setState({
    //                     skipLogin: true,

    //                 });
    //                 clearTimeout(this.timer);
    //             }
    //         }, 1000)

    //     if (this.state.skipLogin == true) {
    //         this.props.GoLogin();
    //     }
    // }


    render() {
        if (this.state.step == '1') {
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
                                //blurOnSubmit={false}
                                onEndEditing={this.props.checkAccountbtn(this.state.Account)}
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
                                placeholderTextColor='rgba(20,70,105,0.5)'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                secureTextEntry={true}
                            />
                        </View>

                        {/*VPassword*/}
                        <View style={[styles.Inputtextview, { marginTop: 8 }]}>
                            <Image source={require('../images/password.png')} style={styles.InputtextIcon} />
                            <TextInput
                                style={styles.InputtextText}
                                onChangeText={(text) => this.setState({ VPassword: text })}
                                value={this.state.VPassword}
                                placeholder="再次輸入密碼"
                                placeholderStyle={styles.InputtextPlaceholder}
                                placeholderTextColor='rgba(20,70,105,0.5)'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                secureTextEntry={true}
                            />
                        </View>



                        <TouchableOpacity style={styles.Buttonstyle} onPress={() => {
                            if (this.state.Account == '' || this.state.Password == '' || this.state.VPassword == '') {

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
                                //確認帳號沒重複
                                //this.props.checkAccountbtn(this.state.Account);
                                if (this.state.accountCheck !="") {
                                    this.setState({ step: 2 })
                                }
                            }

                        }}>
                            <Text style={style = styles.ButtonText}>下一步</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.alreadyText}>已經是會員？</Text>
                        <Text style={styles.loginText}
                            onPress={() => this.props.GoLogin()}>
                            前往登入 
                        </Text>
                    </View>
                    {/*Toast*/}
                    <Toast
                        backgroundColor='rgba(0,0,0,0.4)'
                        visible={this.state.err1}
                        position={500}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >欄位不能為空！</Toast>

                    <Toast
                        backgroundColor='rgba(0,0,0,0.4)'
                        visible={this.state.err2}
                        position={500}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >兩次密碼輸入不一致！</Toast>

                </Image>

            );
        }


        if (this.state.step == '2') {
            return (
                //backgroundimage
                <Image source={require('../images/Bg.png')} style={styles.backgroundImage} resizeMode="cover" >
                    <View style={styles.logoView}>
                        <Image source={require('../images/Logo.png')} style={styles.logoImage} />
                    </View>
                    <View style={styles.mainView}>
                        {/*Name*/}
                        <View style={[styles.Inputtextview, { marginTop: 73 }]}>
                            <Image source={require('../images/person_darkBlue.png')} style={styles.InputtextIcon} />
                            <TextInput
                                style={styles.InputtextText}
                                onChangeText={(text) => this.setState({ Name: text })}
                                value={this.state.Name}
                                placeholder="輸入您的姓名"
                                placeholderStyle={styles.InputtextPlaceholder}
                                placeholderTextColor='rgba(20, 70, 105,0.5)'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        {/*Birthdate*/}
                        <View style={[styles.Inputtextview, { marginTop: 8 }]}>
                            <Image source={require('../images/calendar_darkBlue.png')} style={styles.InputtextIcon} />
                            <TextInput
                                style={styles.InputtextText}
                                onFocus={() => this._showDateTimePicker()}
                                onChangeText={() => this._showDateTimePicker()}
                                value={this.state.Birthdate}
                                placeholder="出生年月日"
                                placeholderStyle={styles.InputtextPlaceholder}
                                placeholderTextColor='rgba(20,70,105,0.5)'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'

                            />
                        </View>
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                        <View style={[styles.Inputtextview, { marginTop: 8, flexDirection: 'row' }]}>
                            <TouchableHighlight style={[styles.genderView, this.state.genderSelected === 0 ? { backgroundColor: 'rgba(255,255,255,0.9)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                                onPress={() => {
                                    this.setState({
                                        genderSelected: 0,
                                        Gender: '男'
                                    })
                                }} >

                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={styles.genderImage}
                                        source={require('../images/img_dad.png')}
                                    />
                                    <Text style={styles.genderText}>男性</Text>
                                </View>

                            </TouchableHighlight>

                            <TouchableHighlight style={[styles.genderView, this.state.genderSelected === 1 ? { backgroundColor: 'rgba(255,255,255,0.9)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                                onPress={() => {
                                    this.setState({
                                        genderSelected: 1,
                                        Gender: '女'
                                    })
                                }} >
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={styles.genderImage}
                                        source={require('../images/img_mom.png')}
                                    />
                                    <Text style={styles.genderText}>女性</Text>
                                </View>

                            </TouchableHighlight>
                        </View>

                        <TouchableOpacity style={[styles.Buttonstyle, { marginTop: 24 }]} onPress={() => {
                            if (this.state.Name == '' || this.state.Birthdate == '') {

                                //顯示錯誤訊息
                                setTimeout(() => this.setState({
                                    err3: true
                                }), 300); // show toast after 0.5s

                                setTimeout(() => this.setState({
                                    err3: false
                                }), 5000); // hide toast after 5s
                            }
                            else {
                               
                                this.props.RegisterButtonClick(this.state.Account, this.state.Password, this.state.Name, this.state.Birthdate, this.state.Gender)

                            }

                        }}>
                            <Text style={[styles.ButtonText, { marginLeft: 114, marginTop: 12 }]}>註冊</Text>
                        </TouchableOpacity>


                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.alreadyText}>已經是會員？</Text>
                        <Text style={styles.loginText}
                            onPress={() => this.props.GoLogin()}>
                            前往登入
                        </Text>
                    </View>
                    {/*Toast*/}
                    <Toast
                        backgroundColor='rgba(0,0,0,0.4)'
                        visible={this.state.err3}
                        position={500}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >欄位不能為空！</Toast>

                </Image>

            );
        }

    }
}

const styles = StyleSheet.create({
    mainView: {
        width: 304,
        height: 321,
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
        zIndex: 2,
        borderRadius: 100,
        backgroundColor: 'rgba(255,255,255,0.9)',
        marginTop: 93,
        marginLeft: 132,
        shadowOffset: { width: 0, height: 1, },
    },
    logoImage: {
        width: 88,
        height: 88,
        marginLeft: 16,
        marginTop: 16,
    },
    Inputtextview: {
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

    },
    ButtonText: {
        marginLeft: 107,
        marginTop: 12,
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'Roboto-Medium',
        color: '#FFFFFF',
    },
    alreadyText: {
        marginLeft: 118,
        marginTop: 16,
        fontSize: 14,
        fontFamily: 'PingFangTC-Light',
        color: '#FFFFFF',
    },
    loginText: {
        marginLeft: 4,
        marginTop: 16,
        fontSize: 14,
        fontFamily: 'PingFangTC-Medium',
        color: '#FFFFFF',
        textDecorationLine: 'underline'
    },
    genderView: {
        marginLeft: 4,
        marginTop: 4,
        width: 130,
        height: 40,
        borderRadius: 100,
        flexDirection: 'row',
    },
    genderImage: {
        marginTop: 8,
        marginLeft: 35,
        borderRadius: 100,
        shadowColor: 'rgba(0,0,0,0.1)',
    },
    genderText: {
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'Roboto-Regular',
        marginTop: 4,
        marginLeft: 8,
        color: '#144669',
    },

});

export default Memory;
