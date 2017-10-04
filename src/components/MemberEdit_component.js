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
import Icon from 'react-native-vector-icons/Entypo';
import Drawer from 'react-native-drawer';
import SideBarContent from '../containers/SideBarContent';

var radio_props = [
    { label: '男', value: 0 },
    { label: '女', value: 1 }
];

var ImagePicker = require('react-native-image-picker');

class Memory extends Component {
    constructor(props) {
        super(props);
        this.closeControlPanel = this.closeControlPanel.bind(this);
        this.openControlPanel = this.openControlPanel.bind(this);
    }



    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        var newDate = date.getFullYear().toString() + "/" + date.getMonth().toString() + "/" + date.getDate().toString();
        this.setState({ birthdate: newDate })
        this._hideDateTimePicker();
    };


    AddressInput() {
        return <Kohana
            value={this.state.Address}
            style={styles.InputTextStyle}
            label={'地址'}
            iconClass={MaterialsIcon}
            iconName={'home'}
            iconColor={'white'}
            labelStyle={{ color: 'white' }}
            inputStyle={{}}
            onChangeText={(text) => this.setState({ Address: text })}
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
            iconColor={'white'}
            labelStyle={{ color: 'white' }}
            inputStyle={{}}

            useNativeDriver
        />
    }

    NameInput() {
        return <Kohana
            style={styles.InputTextStyle}
            value={this.state.Name}
            label={'姓名'}
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
            initial={this.state.init}
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
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                    imagedata_base64: response.data
                });
                this.props.SaveImage(this.props.login_account, this.state.imagedata_base64)
            }
        });
    }


    closeControlPanel = () => {
        this._drawer.close()
    };
    openControlPanel = () => {
        this._drawer.open()
    };
    render() {
        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
            main: { paddingLeft: 0 }
        }
        const member_imageurl = this.props.member_imageurl;
        return (

            <Drawer
                type="displace"
                ref={(ref) => this._drawer = ref}
                content={<SideBarContent />}
                openDrawerOffset={100}
                panOpenMask={0.80}
                captureGestures="open"
                styles={drawerStyles}
                tweenHandler={ratio => ({
                    main: {
                        opacity: 1,
                    },
                    mainOverlay: {
                        opacity: ratio / 2,
                        backgroundColor: 'black',
                    },
                })}
            >
            <View style={styles.menuIcon}>
                    <Icon.Button name="menu" size={30} backgroundColor={null} color='#FFFFFF' onPress={this.openControlPanel}>
                    </Icon.Button>
                </View>
                <View style={styles.Viewstyle}>

                    <View style={styles.avatarView}>
                        {(this.state.avatarSource === null) ? (
                            <Image style={styles.avatar} source={{ uri: 'http://163.17.135.185/7thWebApi/Filefolder/' + this.props.login_account + '-Member.png' }} />
                        ) : (
                                <Image style={styles.avatar} source={this.state.avatarSource} />
                            )}



                        <TouchableOpacity onPress={this.ImageSelect} style={styles.imageMask}>
                            <Image
                                source={require('../images/camera.png')}
                                style={styles.editAvatarIcon}
                            />
                        </TouchableOpacity>
                    </View>

                    {/*EditView*/}
                    <View>
                        <Text>{"\n"}</Text>
                        {/*Name*/}
                        {this.NameInput()}
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

                        {/*Gender*/}
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 'bold' }}>   性別：</Text>
                        {this.GenderInput()}

                        <TouchableOpacity style={styles.Buttonstyle} onPress={() => {
                            if (this.state.Name == '' || this.state.birthdate == '' || this.state.Address == '') {

                                //顯示錯誤訊息
                                setTimeout(() => this.setState({
                                    err1: true
                                }), 300); // show toast after 0.5s

                                setTimeout(() => this.setState({
                                    err1: false
                                }), 5000); // hide toast after 5s
                            } else {
                                this.props.SaveButtonClick(this.props.login_account, this.state.Name, this.state.Address,
                                    this.state.birthdate, this.state.gender)
                            }
                        }}>
                            <Text style={style = styles.ButtonText}>儲存</Text>
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

                    <Toast
                        backgroundColor='rgba(0,0,0,0.8)'
                        visible={this.state.success1}
                        position={600}
                        shadow={false}
                        animation={false}
                        hideOnPress={true}
                    >修改成功！</Toast>



                </View>
            </Drawer>

        );
    }
}

const styles = StyleSheet.create({
    Viewstyle: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },

    logo: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
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
    Info: {
        textAlign: 'center',
        color: 'white'
    },

    InputTextStyle: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 30,
        width: 350,
        height: 40,
    },
    avatarView: {
        width: 77,
        height: 77,
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.61)',
        borderRadius: 37,
        backgroundColor: 'transparent',
        overflow: 'hidden',
        zIndex: 1
    },
    avatar: {
        width: 37.5 * 2,
        height: 37.5 * 2,
        borderColor: 'rgba(255, 255, 255, 0.61)',
        borderRadius: 37.5
    },

    imageMask: {
        position: 'absolute',
        top: 37.5,
        width: 37.5 * 2,
        height: 37.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(3, 3, 3, 0.7)',
        borderBottomLeftRadius: 37.5,
        borderBottomRightRadius: 37.5
    },
    editAvatarIcon: {
        width: 9.3 * 2,
        height: 7.5 * 2
    },
    menuIcon: {
        width: 48,
        height: 45
    }
    //backgroundimage
    //<Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage} ></Image>
    // backgroundImage: {
    //         flex: 1,
    //         alignSelf: 'stretch',
    //         width: null,
    //     },
});

export default Memory;
