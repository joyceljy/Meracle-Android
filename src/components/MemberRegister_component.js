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

var radio_props = [
    { label: '男', value: 0 },
    { label: '女', value: 1 }
];


class Memory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            birthdate: "",
            isDateTimePickerVisible: false,
            gender: '男',
            value: 0
        }
    }



    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        var newDate = date.getFullYear().toString() + "/" + date.getMonth().toString() + "/" + date.getDate().toString();
        this.setState({ birthdate: newDate })
        this._hideDateTimePicker();
    };

    AccountInput() {
        return <Kohana
            style={styles.InputTextStyle}
            label={'帳號'}
            iconClass={MaterialsIcon}
            iconName={'account-box'}
            iconColor={'#AD5A5A'}
            labelStyle={{ color: '#AD5A5A' }}
            inputStyle={{}}

            useNativeDriver
        />
    }
    PasswordInput() {
        return <Kohana secureTextEntry={true}
            style={styles.InputTextStyle}
            label={'密碼'}
            iconClass={MaterialsIcon}
            iconName={'lock'}
            iconColor={'#AD5A5A'}
            labelStyle={{ color: '#AD5A5A' }}
            inputStyle={{}}

            useNativeDriver
        />
    }
    PasswordVerifyInput() {
        return <Kohana secureTextEntry={true}
            style={styles.InputTextStyle}
            label={'密碼確認'}
            iconClass={MaterialsIcon}
            iconName={'lock'}
            iconColor={'#AD5A5A'}
            labelStyle={{ color: '#AD5A5A' }}
            inputStyle={{}}

            useNativeDriver
        />
    }
    AddressInput() {
        return <Kohana
            style={styles.InputTextStyle}
            label={'地址'}
            iconClass={MaterialsIcon}
            iconName={'home'}
            iconColor={'#AD5A5A'}
            labelStyle={{ color: '#AD5A5A' }}
            inputStyle={{}}

            useNativeDriver
        />
    }
    BirthdayInput() {
        return <Kohana
            onFocus={() => this._showDateTimePicker()}
            onChangeText={() => this._showDateTimePicker()}
            value={this.state.birthdate}
            style={styles.InputTextStyle}
            label={'生日'}
            iconClass={MaterialsIcon}
            iconName={'cake'}
            iconColor={'#AD5A5A'}
            labelStyle={{ color: '#AD5A5A' }}
            inputStyle={{}}

            useNativeDriver
        />
    }

    JobInput() {
        return <Kohana
            style={styles.InputTextStyle}
            label={'職業'}
            iconClass={MaterialsIcon}
            iconName={'work'}
            iconColor={'#AD5A5A'}
            labelStyle={{ color: '#AD5A5A' }}
            inputStyle={{}}

            useNativeDriver
        />
    }

    GenderInput() {
        return <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            buttonColor={'#AD5A5A'}
            onPress={(value) => this.setState({ value: value })}
            onPress={(value) => this.setgender(value)}
        />


    }
    setgender(value) {

        if (value == 0) {
            this.setState({ gender: '男' })
        } else {
            this.setState({ gender: '女' })
        }

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
                        {/*Password*/}
                        {this.PasswordInput()}
                        <Text>{"\n"}</Text>
                        {/*PasswordVierify*/}
                        {this.PasswordVerifyInput()}
                        <Text>{"\n"}</Text>
                        {/*Address*/}
                        {this.AddressInput()}
                        <Text>{"\n"}</Text>
                        {/*Birthday*/}
                        {this.BirthdayInput()}
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                        <Text>{"\n"}</Text>
                        {/*Job*/}
                        {this.JobInput()}
                        <Text>{"\n"}</Text>
                        {/*Gender*/}
                        <Text style={{ fontSize: 15, color: '#AD5A5A', fontWeight: 'bold' }}>   性別：</Text>
                        {this.GenderInput()}
                        
                        <TouchableOpacity style={styles.Buttonstyle} onPress={() => this.props.RegisterPress()}>
                            <Text style={style = styles.ButtonText}>註冊</Text>
                        </TouchableOpacity>

                        <Text style={styles.Info} onPress={() => this.props.GoLogin()}>已有帳號？ 前往登入</Text>
                    </View>



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
        backgroundColor: '#AD5A5A',
        width: 100,
        height: 40,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    ButtonText: {
        textAlign: 'center',
        color: 'white'
    },
    Info: {
        textAlign: 'center',
        alignSelf: 'center',
    },

    InputTextStyle: {
        backgroundColor: '#EBD6D6',
        borderRadius: 5,
        width: 350,
        height: 40,
    }

});

export default Memory;
