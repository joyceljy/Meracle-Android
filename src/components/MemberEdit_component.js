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
import { Kohana } from 'react-native-textinput-effects';
import DateTimePicker from 'react-native-modal-datetime-picker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';
import SideBarContent from '../containers/SideBarContent';



var ImagePicker = require('react-native-image-picker');

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





    ImageSelect = () => {
        const options = {
            cancelButtonTitle: '取消',
            title: '選擇大頭貼',
            takePhotoButtonTitle: '拍照',
            chooseFromLibraryButtonTitle: '從相簿中選擇',
            customButtons: [],
            allowsEditing: true,

            storageOptions: {
                cameraRoll: true,
                skipBackup: true,
                waitUntilSaved: true,
                path: 'images'
            },
            quality: 0.6
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                //let source = { uri: response.uri };

                // You can also display the image using data:
                 let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                    imagedata_base64: response.data
                });
            }
        });
    }



    render() {

        const member_imageurl = this.props.member_imageurl;
        return (

            <View style={styles.Viewstyle}>
                <View style={styles.topbarView}>
                    <TouchableOpacity onPress={() => { this.props.BackButton();}}>
                        <Image source={require('../images/back.png')} style={styles.topbarIcon} />
                    </TouchableOpacity>
                    <Text style={styles.topbarText}>編輯會員資料</Text>
                </View>
                <View style={[styles.imageView, { marginLeft: 128 }]}>
                    {(this.state.avatarSource === null) ? (
                        <Image style={styles.avatar} source={{ uri: 'http://meracle.azurewebsites.net/Filefolder/' + this.state.imageurl }} />
                    ) : (
                            <Image style={styles.avatar} source={this.state.avatarSource} />
                        )}

                </View>
                <TouchableOpacity style={styles.uploadImageView} onPress={this.ImageSelect}>
                    <Image
                        style={styles.uploadImage}
                        source={require('../images/upload.png')}
                    />
                </TouchableOpacity>
                <View style={styles.Inputtextview}>
                    <Image source={require('../images/person.png')} style={styles.InputtextIcon} />
                    <TextInput
                        style={styles.InputtextText}
                        onChangeText={(text) => this.setState({ Name: text })}
                        value={this.state.Name}
                        placeholder="輸入您的姓名"
                        placeholderStyle={styles.InputtextPlaceholder}
                        placeholderTextColor='rgba(255,255,255,0.5)'
                        autoCorrect={false}
                        underlineColorAndroid='transparent'

                    />
                </View>
                <View style={styles.Inputtextview}>
                    <Image source={require('../images/calendar.png')} style={styles.InputtextIcon} />
                    <TextInput
                        style={styles.InputtextText}
                        onFocus={() => this._showDateTimePicker()}
                        onChangeText={() => this._showDateTimePicker()}
                        value={this.state.birthdate}
                        placeholder="出生年月日"
                        placeholderStyle={styles.InputtextPlaceholder}
                        placeholderTextColor='rgba(255,255,255,0.5)'
                        autoCorrect={false}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
                <View style={styles.Inputtextview}>
                    <Image source={require('../images/address.png')} style={styles.InputtextIcon} />
                    <TextInput
                        style={styles.InputtextText}
                        onChangeText={(text) => this.setState({ Address: text })}
                        value={this.state.Address}
                        placeholder="輸入您的住址"
                        placeholderStyle={styles.InputtextPlaceholder}
                        placeholderTextColor='rgba(255,255,255,0.5)'
                        autoCorrect={false}
                        underlineColorAndroid='transparent'

                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableHighlight style={[styles.genderView, this.state.genderSelected === 0 ? { backgroundColor: 'rgba(255,255,255,0.25)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                        onPress={() => {
                            this.setState({
                                genderSelected: 0,
                                gender: '男'
                            })
                        }} >

                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.genderImage}
                                source={require('../images/img_dadbig.png')}
                            />
                            <Text style={styles.genderText}>男性</Text>
                        </View>

                    </TouchableHighlight>

                    <TouchableHighlight style={[styles.genderView, this.state.genderSelected === 1 ? { backgroundColor: 'rgba(255,255,255,0.25)' } : { backgroundColor: 'rgba(255,255,255,0)' }]}

                        onPress={() => {
                            this.setState({
                                genderSelected: 1,
                                gender: '女'
                            })
                        }} >
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.genderImage}
                                source={require('../images/img_mombig.png')}
                            />
                            <Text style={styles.genderText}>女性</Text>
                        </View>

                    </TouchableHighlight>
                </View>
                <TouchableOpacity style={styles.editButton} onPress={() => {
                   

                    if (this.state.Name == '' || this.state.birthdate == '') {

                        //顯示錯誤訊息
                        setTimeout(() => this.setState({
                            err1: true
                        }), 100); // show toast after 0.5s

                        setTimeout(() => this.setState({
                            err1: false
                        }), 5000); // hide toast after 5s
                    } else {
                        this.props.SaveButtonClick(this.props.login_account, this.state.Name, this.state.Address, this.state.birthdate, this.state.gender,this.props.login_token)
                        this.props.SaveImage(this.props.login_account, this.state.imagedata_base64,this.props.login_token)
                    }
                }}>
                    <Text style={styles.editButtonText}>確定更新</Text>
                </TouchableOpacity>
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
                    visible={this.state.success1}
                    position={600}
                    shadow={false}
                    animation={false}
                    hideOnPress={true}
                >修改成功！</Toast>



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

    InputTextStyle: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 30,
        width: 350,
        height: 40,
    },
    imageView: {
        backgroundColor: 'rgb(255,255,255)',
        width: 128,
        height: 128,
        marginTop: 16,
        borderRadius: 100,
        marginBottom: 16,
        shadowColor:'rgba(255,255,255,0.2)',
        shadowRadius:8,
        
    },
    avatar: {
        marginTop: 24,
        marginLeft: 19,
        width:80,
        height:80,
        borderRadius:100,
    },
    Inputtextview: {
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.25)',
        borderRadius: 100,
        width: 304,
        height: 48,
        marginTop: 8,
        marginLeft: 40,
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
    genderImage: {
        marginTop: 8,
        marginLeft: 16,
    },

    genderView: {
        flexDirection: 'row',
        //backgroundColor: 'rgba(255,255,255,0.25)',
        borderRadius: 100,
        width: 133,
        height: 48,
        marginTop: 8,
        marginLeft: 40,
    },
    genderText: {
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'PingFangTC-Medium',
        marginTop: 12,
        marginLeft: 16,
        color: '#FFFFFF',
    },
    editButton: {
        elevation: 2,
        backgroundColor: '#009688',
        width: 272,
        height: 56,
        borderRadius: 100,
        shadowOffset: { width: 0.6, height: 8, },
        shadowColor: 'rgba(0,0,0,0.20)',
        shadowRadius: 8,
        shadowOpacity: 0,
        marginLeft: 56,
        marginTop: 40,
    },
    editButtonText: {
        marginTop: 16,
        fontSize: 18,
        lineHeight: 24,
        fontFamily: 'Roboto-Medium',
        color: '#FFFFFF',
        marginLeft: 97,
    },
    uploadImageView: {
        backgroundColor: 'rgb(255,255,255)',
        width: 48,
        height: 48,
        borderRadius: 100,
        shadowColor: 'rgba(0,0,0,0.12)',
        shadowRadius: 6,
        marginTop: -48,
        marginLeft: 216,
        zIndex: 2,
    },
    uploadImage: {
        marginLeft: 12.4,
        marginTop: 12.4,
    },
});

export default Memory;
