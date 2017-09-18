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

var radio_props = [
    { label: '男', value: 0 },
    { label: '女', value: 1 }
];


class Memory extends Component {
    constructor(props) {
        super(props);

    }



    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        var newDate = date.getFullYear().toString() + "/" + date.getMonth().toString() + "/" + date.getDate().toString();
        this.setState({ birthdate: newDate })
        this._hideDateTimePicker();
    };

    
    BirthdayInput() {
        return <Kohana
            onFocus={() => this._showDateTimePicker()}
            onChangeText={() => this._showDateTimePicker()}
            value={this.state.birthdate}
            style={styles.InputTextStyle}
            label={'小孩生日'}
            iconClass={MaterialsIcon}
            iconName={'cake'}
            iconColor={'white'}
            labelStyle={{ color: 'white' }}
            inputStyle={{}}

            useNativeDriver
        />
    }

    NameInput() {
        return <Kohana
            style={styles.InputTextStyle}
            label={'小孩姓名'}
            iconClass={MaterialsIcon}
            iconName={'account-box'}
            iconColor={'white'}
            labelStyle={{ color: 'white' }}
            inputStyle={{}}
            onChangeText={(text) => this.setState({ Name: text })}
            useNativeDriver
        />
    }

    GenderInput() {
        return <RadioForm
            radio_props={radio_props}
            initial={0}
            formHorizontal={true}
            buttonColor={'white'}
            labelColor={'white'}
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

                   
                    {/*registerView*/}
                    <View>
                        <Text>{"\n"}</Text>
                        {/*Name*/}
                        {this.NameInput()}
                        <Text>{"\n"}</Text>
                       
                        {/*Birthday*/}
                        {this.BirthdayInput()}
                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                        <Text>{"\n"}</Text>

                        {/*Gender*/}
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>   小孩性別：</Text>
                        {this.GenderInput()}

                        <TouchableOpacity style={styles.Buttonstyle} onPress={() => {
                            if ( this.state.Name == '' || this.state.birthdate == '') {

                                //顯示錯誤訊息
                                setTimeout(() => this.setState({
                                    err1: true
                                }), 300); // show toast after 0.5s

                                setTimeout(() => this.setState({
                                    err1: false
                                }), 5000); // hide toast after 5s
                            }  else {
                                this.props.ChildRegisterButtonClick(this.props.login_account,this.state.Name,this.state.birthdate,this.state.gender)
                            }
                        }}>
                            <Text style={style = styles.ButtonText}>新增</Text>
                        </TouchableOpacity>

                        
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
    InputTextStyle: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 30,
        width: 350,
        height: 40,
    }

});

export default Memory;
